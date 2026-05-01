/**
 * SEO Audit Script
 * Validates metadata and structured data across all pages
 * Run with: npx tsx scripts/seo-audit.ts
 */

import { validateMetadata } from '../src/lib/seo';

interface PageMetadata {
  path: string;
  title: string;
  description: string;
  hasJsonLd: boolean;
  jsonLdTypes: string[];
}

const pages: PageMetadata[] = [
  {
    path: '/',
    title: 'Sugoi Insights | Market Research Agency — Data-Driven Growth',
    description:
      'Transform your data into strategic advantage. Expert market research across 16 industries including FMCG, Media, Cosmetics, Automotive, Real Estate, Fashion, Machine Tools, Aerospace, Food & Beverage, and more.',
    hasJsonLd: true,
    jsonLdTypes: ['Organization'],
  },
  {
    path: '/about',
    title: 'About Us — Market Research Experts | Sugoi Insights',
    description:
      'Meet the team behind data-driven insights. 10+ years of market research expertise across 16 key industries, delivering strategic advantage.',
    hasJsonLd: true,
    jsonLdTypes: ['BreadcrumbList'],
  },
  {
    path: '/services',
    title: 'Research Services — End-to-End Solutions | Sugoi Insights',
    description:
      'Comprehensive market research services: Research Design, Data Collection, Advanced Analytics, and Strategic Recommendations. End-to-end research solutions.',
    hasJsonLd: true,
    jsonLdTypes: ['Service', 'BreadcrumbList'],
  },
  {
    path: '/industries',
    title: 'Industry Expertise — 16 Key Sectors | Sugoi Insights',
    description:
      'Deep sector expertise across 16 industries including FMCG, Media, Cosmetics, Automotive, Real Estate, Fashion, Machine Tools, Aerospace, Food & Beverage, Sports Equipment, Furniture, Oil & Gas, Plastics, Ceramics & Glass, Jewellery, and Woodcutting Machinery.',
    hasJsonLd: true,
    jsonLdTypes: ['BreadcrumbList'],
  },
  {
    path: '/insights',
    title: 'Market Research Insights & Trends | Sugoi Insights',
    description:
      'Expert perspectives on market research, consumer behavior, and industry trends. Data-driven insights to inform your strategic decisions.',
    hasJsonLd: true,
    jsonLdTypes: ['BreadcrumbList'],
  },
  {
    path: '/contact',
    title: 'Contact Our Research Team | Sugoi Insights',
    description:
      "Get in touch with our market research team. We're here to discuss your research needs and explore how we can help transform your data into strategic advantage.",
    hasJsonLd: true,
    jsonLdTypes: ['ContactPage', 'BreadcrumbList'],
  },
];

console.log('='.repeat(80));
console.log('SEO AUDIT REPORT');
console.log('='.repeat(80));
console.log();

let totalErrors = 0;
let totalWarnings = 0;

pages.forEach((page) => {
  console.log(`\n📄 ${page.path}`);
  console.log('-'.repeat(80));

  // Validate metadata
  const validation = validateMetadata({
    title: page.title,
    description: page.description,
  });

  if (!validation.valid) {
    console.log('❌ METADATA ERRORS:');
    validation.errors.forEach((error) => {
      console.log(`   - ${error}`);
      totalErrors++;
    });
  } else {
    console.log('✅ Metadata: Valid');
  }

  // Check title length
  console.log(`   Title: "${page.title}" (${page.title.length} chars)`);
  if (page.title.length > 60) {
    console.log('   ⚠️  Warning: Title exceeds 60 characters');
    totalWarnings++;
  }

  // Check description length
  console.log(`   Description: "${page.description}" (${page.description.length} chars)`);
  if (page.description.length > 160) {
    console.log('   ⚠️  Warning: Description exceeds 160 characters');
    totalWarnings++;
  }

  // Check JSON-LD
  if (page.hasJsonLd) {
    console.log(`✅ JSON-LD: ${page.jsonLdTypes.join(', ')}`);
  } else {
    console.log('❌ JSON-LD: Missing');
    totalErrors++;
  }
});

console.log('\n' + '='.repeat(80));
console.log('SUMMARY');
console.log('='.repeat(80));
console.log(`Total Pages Audited: ${pages.length}`);
console.log(`Total Errors: ${totalErrors}`);
console.log(`Total Warnings: ${totalWarnings}`);

if (totalErrors === 0 && totalWarnings === 0) {
  console.log('\n✅ All pages pass SEO audit!');
} else if (totalErrors === 0) {
  console.log('\n⚠️  All pages pass with warnings. Consider addressing warnings for optimal SEO.');
} else {
  console.log('\n❌ Some pages have errors. Please fix before deployment.');
  process.exit(1);
}

console.log();
