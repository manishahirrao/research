/**
 * Accessibility Audit Script
 * Checks for common accessibility issues in the codebase
 * Run with: npx tsx scripts/accessibility-audit.ts
 */

import fs from 'fs';
import path from 'path';

interface A11yIssue {
  file: string;
  line: number;
  severity: 'error' | 'warning';
  issue: string;
}

const issues: A11yIssue[] = [];
const srcDir = path.join(process.cwd(), 'src');

function scanFile(filePath: string) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const relativePath = path.relative(process.cwd(), filePath);

  lines.forEach((line, index) => {
    const lineNumber = index + 1;

    // Check for buttons without aria-label when they only contain icons
    if (line.includes('<button') && !line.includes('aria-label') && !line.includes('>')) {
      const nextLine = lines[index + 1] || '';
      if (nextLine.includes('<svg') || nextLine.includes('<Icon')) {
        issues.push({
          file: relativePath,
          line: lineNumber,
          severity: 'warning',
          issue: 'Button may need aria-label if it only contains an icon',
        });
      }
    }

    // Check for onClick on non-interactive elements
    if (
      (line.includes('onClick') || line.includes('onKeyDown')) &&
      (line.includes('<div') || line.includes('<span'))
    ) {
      if (!line.includes('role=') && !line.includes('tabIndex')) {
        issues.push({
          file: relativePath,
          line: lineNumber,
          severity: 'error',
          issue: 'Interactive div/span needs role and tabIndex for keyboard accessibility',
        });
      }
    }

    // Check for form inputs without labels
    if (line.includes('<input') && !line.includes('aria-label')) {
      const prevLines = lines.slice(Math.max(0, index - 3), index).join(' ');
      if (!prevLines.includes('<label') && !prevLines.includes('aria-labelledby')) {
        issues.push({
          file: relativePath,
          line: lineNumber,
          severity: 'error',
          issue: 'Input needs associated label or aria-label',
        });
      }
    }

    // Check for missing focus-visible styles
    if (line.includes(':focus') && !line.includes(':focus-visible')) {
      issues.push({
        file: relativePath,
        line: lineNumber,
        severity: 'warning',
        issue: 'Consider using :focus-visible instead of :focus for better UX',
      });
    }

    // Check for color-only information
    if (line.match(/color:\s*['"]?(red|green|#[0-9a-f]{3,6})/i) && line.includes('error')) {
      issues.push({
        file: relativePath,
        line: lineNumber,
        severity: 'warning',
        issue: 'Ensure error states are not conveyed by color alone',
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
    } else if (entry.isFile() && /\.(tsx|jsx|css)$/.test(entry.name)) {
      scanFile(fullPath);
    }
  }
}

console.log('='.repeat(80));
console.log('ACCESSIBILITY AUDIT');
console.log('='.repeat(80));
console.log();

scanDirectory(srcDir);

const errors = issues.filter((i) => i.severity === 'error');
const warnings = issues.filter((i) => i.severity === 'warning');

if (issues.length === 0) {
  console.log('✅ No accessibility issues found!');
  console.log();
} else {
  if (errors.length > 0) {
    console.log(`❌ Found ${errors.length} accessibility errors:\n`);
    errors.forEach((issue) => {
      console.log(`📄 ${issue.file}:${issue.line}`);
      console.log(`   ${issue.issue}`);
      console.log();
    });
  }

  if (warnings.length > 0) {
    console.log(`⚠️  Found ${warnings.length} accessibility warnings:\n`);
    warnings.forEach((issue) => {
      console.log(`📄 ${issue.file}:${issue.line}`);
      console.log(`   ${issue.issue}`);
      console.log();
    });
  }

  console.log('='.repeat(80));
  console.log(`Total Errors: ${errors.length}`);
  console.log(`Total Warnings: ${warnings.length}`);
  console.log('='.repeat(80));
  console.log();

  if (errors.length > 0) {
    console.log('Please fix errors before deployment.');
    process.exit(1);
  } else {
    console.log('Consider addressing warnings for optimal accessibility.');
  }
}
