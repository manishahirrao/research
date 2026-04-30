import type { Metadata } from 'next';
import { SectionHero } from '@/components/shared/SectionHero';
import { BlogGrid } from '@/components/shared/BlogGrid';
import { getAllArticles, getAllTags } from '@/lib/content';

export const revalidate = 3600; // Revalidate every hour

export const metadata: Metadata = {
  title: 'Market Research Insights & Trends | Sugoi Insights',
  description:
    'Expert perspectives on market research, consumer behavior, and industry trends. Data-driven insights to inform your strategic decisions.',
  keywords: [
    'market research insights',
    'consumer trends',
    'industry analysis',
    'research methodology',
    'data analytics',
  ],
  openGraph: {
    title: 'Insights | Sugoi Insights',
    description:
      'Expert perspectives on market research, consumer behavior, and industry trends.',
    type: 'website',
    url: '/insights',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insights | Sugoi Insights',
    description: 'Expert perspectives on market research and consumer behavior.',
  },
};

// BreadcrumbList JSON-LD
const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${process.env.SITE_URL || 'https://sugoi-insights.com'}`,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Insights',
      item: `${process.env.SITE_URL || 'https://sugoi-insights.com'}/insights`,
    },
  ],
};

export default function InsightsPage() {
  const articles = getAllArticles();
  const tags = getAllTags();

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <SectionHero
        label="Insights & Perspectives"
        title="Market Research Insights"
        subtitle="Expert analysis, industry trends, and actionable insights to help you make informed strategic decisions."
        gradient={true}
        centered={false}
        backgroundImage="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop"
        backgroundAlt="Research and analysis workspace with data visualization"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <BlogGrid articles={articles} tags={tags} />
        </div>
      </section>
    </>
  );
}
