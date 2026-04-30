/**
 * Color Contrast Audit Script
 * Validates WCAG AA color contrast ratios for the design system
 * Run with: npx tsx scripts/color-contrast-audit.ts
 */

// Color contrast calculation based on WCAG 2.1
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
}

function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function getContrastRatio(color1: string, color2: string): number {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);

  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);

  return (lighter + 0.05) / (darker + 0.05);
}

interface ColorPair {
  name: string;
  foreground: string;
  background: string;
  usage: string;
  minRatio: number; // 4.5 for normal text, 3.0 for large text, 7.0 for AAA
}

const colorPairs: ColorPair[] = [
  {
    name: 'Brand Red on White',
    foreground: '#C8102E',
    background: '#FFFFFF',
    usage: 'Primary buttons, links, accents',
    minRatio: 4.5,
  },
  {
    name: 'White on Brand Red',
    foreground: '#FFFFFF',
    background: '#C8102E',
    usage: 'Button text, hero text',
    minRatio: 4.5,
  },
  {
    name: 'Neutral Black on White',
    foreground: '#0A0A0A',
    background: '#FFFFFF',
    usage: 'Body text, headings',
    minRatio: 7.0, // AAA for body text
  },
  {
    name: 'Neutral Mid on White',
    foreground: '#4A4A4A',
    background: '#FFFFFF',
    usage: 'Secondary text',
    minRatio: 4.5,
  },
  {
    name: 'Neutral Muted on White',
    foreground: '#767676',
    background: '#FFFFFF',
    usage: 'Tertiary text, metadata',
    minRatio: 4.5,
  },
  {
    name: 'White on Neutral Dark',
    foreground: '#FFFFFF',
    background: '#1A1A1A',
    usage: 'Footer text, dark sections',
    minRatio: 7.0,
  },
  {
    name: 'Brand Red on Neutral Light',
    foreground: '#C8102E',
    background: '#F5F5F5',
    usage: 'Accents on light backgrounds',
    minRatio: 4.5,
  },
  {
    name: 'Neutral Black on Neutral Light',
    foreground: '#0A0A0A',
    background: '#F5F5F5',
    usage: 'Text on light gray backgrounds',
    minRatio: 7.0,
  },
];

console.log('='.repeat(80));
console.log('COLOR CONTRAST AUDIT (WCAG 2.1)');
console.log('='.repeat(80));
console.log();
console.log('Standards:');
console.log('  • WCAG AA Normal Text: 4.5:1 minimum');
console.log('  • WCAG AA Large Text: 3.0:1 minimum');
console.log('  • WCAG AAA Normal Text: 7.0:1 minimum');
console.log();
console.log('='.repeat(80));
console.log();

let allPass = true;

colorPairs.forEach((pair) => {
  const ratio = getContrastRatio(pair.foreground, pair.background);
  const passes = ratio >= pair.minRatio;
  const status = passes ? '✅' : '❌';

  console.log(`${status} ${pair.name}`);
  console.log(`   Foreground: ${pair.foreground}`);
  console.log(`   Background: ${pair.background}`);
  console.log(`   Contrast Ratio: ${ratio.toFixed(2)}:1`);
  console.log(`   Required: ${pair.minRatio}:1 (${passes ? 'PASS' : 'FAIL'})`);
  console.log(`   Usage: ${pair.usage}`);
  console.log();

  if (!passes) {
    allPass = false;
  }
});

console.log('='.repeat(80));

if (allPass) {
  console.log('✅ All color combinations pass WCAG contrast requirements!');
  console.log();
} else {
  console.log('❌ Some color combinations fail WCAG contrast requirements.');
  console.log('Please adjust colors to meet accessibility standards.');
  console.log();
  process.exit(1);
}
