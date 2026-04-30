/**
 * Image Alt Text Audit Script
 * Checks all Image components for proper alt text
 * Run with: npx tsx scripts/image-alt-audit.ts
 */

import fs from 'fs';
import path from 'path';

interface ImageIssue {
  file: string;
  line: number;
  issue: string;
}

const issues: ImageIssue[] = [];
const srcDir = path.join(process.cwd(), 'src');

function scanFile(filePath: string) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const relativePath = path.relative(process.cwd(), filePath);

  lines.forEach((line, index) => {
    const lineNumber = index + 1;

    // Check for <Image> components
    if (line.includes('<Image') || line.includes('<img')) {
      // Check if alt attribute exists
      if (!line.includes('alt=')) {
        // Check if it's a multi-line Image component
        const nextLines = lines.slice(index, index + 10).join(' ');
        if (!nextLines.includes('alt=')) {
          issues.push({
            file: relativePath,
            line: lineNumber,
            issue: 'Missing alt attribute',
          });
        }
      }
      // Check for empty alt
      else if (line.includes('alt=""') && !line.includes('role="presentation"')) {
        issues.push({
          file: relativePath,
          line: lineNumber,
          issue: 'Empty alt without role="presentation" (decorative images should have role)',
        });
      }
      // Check for generic alt text
      else if (
        line.match(/alt="(image|photo|picture|img)"/i) ||
        line.match(/alt="\s*"/i)
      ) {
        issues.push({
          file: relativePath,
          line: lineNumber,
          issue: 'Generic or empty alt text',
        });
      }
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
console.log('IMAGE ALT TEXT AUDIT');
console.log('='.repeat(80));
console.log();

scanDirectory(srcDir);

if (issues.length === 0) {
  console.log('✅ All images have proper alt text!');
  console.log();
} else {
  console.log(`❌ Found ${issues.length} image accessibility issues:\n`);

  issues.forEach((issue) => {
    console.log(`📄 ${issue.file}:${issue.line}`);
    console.log(`   ${issue.issue}`);
    console.log();
  });

  console.log('='.repeat(80));
  console.log(`Total Issues: ${issues.length}`);
  console.log('='.repeat(80));
  console.log();
  console.log('Please fix these issues before deployment.');
  process.exit(1);
}
