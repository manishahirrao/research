/**
 * Responsive Design Audit Script
 * Validates responsive breakpoints and layout patterns
 * Run with: npx tsx scripts/responsive-audit.ts
 */

import fs from 'fs';
import path from 'path';

interface ResponsiveIssue {
  file: string;
  line: number;
  issue: string;
}

const issues: ResponsiveIssue[] = [];
const srcDir = path.join(process.cwd(), 'src');

// Standard breakpoints from Tailwind CSS v4
const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

function scanFile(filePath: string) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const relativePath = path.relative(process.cwd(), filePath);

  lines.forEach((line, index) => {
    const lineNumber = index + 1;

    // Check for fixed widths without responsive variants
    if (line.match(/className.*w-\[\d+px\]/) && !line.includes('md:') && !line.includes('lg:')) {
      issues.push({
        file: relativePath,
        line: lineNumber,
        issue: 'Fixed width without responsive variants may cause overflow on mobile',
      });
    }

    // Check for overflow-x issues
    if (line.includes('overflow-x-auto') && !line.includes('scrollbar-hide')) {
      issues.push({
        file: relativePath,
        line: lineNumber,
        issue: 'Consider adding scrollbar-hide class for better mobile UX',
      });
    }

    // Check for touch targets
    if (
      (line.includes('<button') || line.includes('<a')) &&
      line.match(/className.*p-[01]/)
    ) {
      issues.push({
        file: relativePath,
        line: lineNumber,
        issue: 'Touch target may be too small (< 44x44px) on mobile',
      });
    }
  });
}

function scanDirectory(dir: string) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      scanDirectory(fullPath);
    } else if (entry.isFile() && /\.(tsx|jsx)$/.test(entry.name)) {
      scanFile(fullPath);
    }
  }
}

console.log('='.repeat(80));
console.log('RESPONSIVE DESIGN AUDIT');
console.log('='.repeat(80));
console.log();
console.log('Testing breakpoints:');
Object.entries(breakpoints).forEach(([name, value]) => {
  console.log(`  • ${name}: ${value}`);
});
console.log();
console.log('='.repeat(80));
console.log();

scanDirectory(srcDir);

if (issues.length === 0) {
  console.log('✅ No responsive design issues found!');
  console.log();
  console.log('Manual testing checklist:');
  console.log('  ☐ Test at 375px (iPhone SE)');
  console.log('  ☐ Test at 430px (iPhone 14 Pro Max)');
  console.log('  ☐ Test at 768px (iPad)');
  console.log('  ☐ Test at 1024px (iPad Pro)');
  console.log('  ☐ Test at 1280px (Desktop)');
  console.log('  ☐ Test at 1440px (Large Desktop)');
  console.log('  ☐ Verify no horizontal overflow at any breakpoint');
  console.log('  ☐ Verify touch targets ≥ 44x44px on mobile');
  console.log('  ☐ Verify text is readable at all sizes');
  console.log();
} else {
  console.log(`⚠️  Found ${issues.length} responsive design warnings:\n`);
  issues.forEach((issue) => {
    console.log(`📄 ${issue.file}:${issue.line}`);
    console.log(`   ${issue.issue}`);
    console.log();
  });

  console.log('='.repeat(80));
  console.log(`Total Warnings: ${issues.length}`);
  console.log('='.repeat(80));
  console.log();
  console.log('Please review and test these areas on mobile devices.');
}
