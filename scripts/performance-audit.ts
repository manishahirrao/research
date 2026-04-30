/**
 * Performance Audit Script
 * Checks for common performance issues
 * Run with: npx tsx scripts/performance-audit.ts
 */

import fs from 'fs';
import path from 'path';

interface PerformanceIssue {
  file: string;
  line: number;
  severity: 'error' | 'warning';
  issue: string;
}

const issues: PerformanceIssue[] = [];
const srcDir = path.join(process.cwd(), 'src');

function scanFile(filePath: string) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const relativePath = path.relative(process.cwd(), filePath);

  lines.forEach((line, index) => {
    const lineNumber = index + 1;

    // Check for Image components without width/height
    if (line.includes('<Image') && !line.includes('fill')) {
      const nextLines = lines.slice(index, index + 10).join(' ');
      if (!nextLines.includes('width=') || !nextLines.includes('height=')) {
        if (!nextLines.includes('fill')) {
          issues.push({
            file: relativePath,
            line: lineNumber,
            severity: 'warning',
            issue: 'Image should have explicit width and height (or use fill) to prevent CLS',
          });
        }
      }
    }

    // Check for priority on above-fold images
    if (line.includes('<Image') && line.includes('hero')) {
      const nextLines = lines.slice(index, index + 10).join(' ');
      if (!nextLines.includes('priority')) {
        issues.push({
          file: relativePath,
          line: lineNumber,
          severity: 'warning',
          issue: 'Hero images should use priority prop for preloading',
        });
      }
    }

    // Check for inline styles (except Framer Motion)
    if (line.includes('style={{') && !line.includes('motion.')) {
      issues.push({
        file: relativePath,
        line: lineNumber,
        severity: 'warning',
        issue: 'Avoid inline styles; use Tailwind classes for better performance',
      });
    }

    // Check for large dependencies
    if (line.includes("import") && line.includes("'lodash'")) {
      issues.push({
        file: relativePath,
        line: lineNumber,
        severity: 'error',
        issue: 'Import specific lodash functions instead of entire library',
      });
    }

    // Check for console.log in production code
    if (line.includes('console.log') && !relativePath.includes('scripts/')) {
      issues.push({
        file: relativePath,
        line: lineNumber,
        severity: 'warning',
        issue: 'Remove console.log statements in production code',
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
    } else if (entry.isFile() && /\.(tsx|jsx|ts|js)$/.test(entry.name)) {
      scanFile(fullPath);
    }
  }
}

console.log('='.repeat(80));
console.log('PERFORMANCE AUDIT');
console.log('='.repeat(80));
console.log();

scanDirectory(srcDir);

const errors = issues.filter((i) => i.severity === 'error');
const warnings = issues.filter((i) => i.severity === 'warning');

if (issues.length === 0) {
  console.log('✅ No performance issues found!');
  console.log();
} else {
  if (errors.length > 0) {
    console.log(`❌ Found ${errors.length} performance errors:\n`);
    errors.forEach((issue) => {
      console.log(`📄 ${issue.file}:${issue.line}`);
      console.log(`   ${issue.issue}`);
      console.log();
    });
  }

  if (warnings.length > 0) {
    console.log(`⚠️  Found ${warnings.length} performance warnings:\n`);
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
    console.log('Consider addressing warnings for optimal performance.');
  }
}
