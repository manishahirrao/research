import type { Metadata } from 'next';
import { SectionHero } from '@/components/shared/SectionHero';
import { StorySection } from '@/components/about/StorySection';
import { MissionStatement } from '@/components/about/MissionStatement';
import { MethodologyGrid } from '@/components/about/MethodologyGrid';
import { ValuesGrid } from '@/components/about/ValuesGrid';
import { SectorExpertise } from '@/components/about/SectorExpertise';
import { FaqSection } from '@/components/about/FaqSection';
import { CtaBanner } from '@/components/home/CtaBanner';

export const metadata: Metadata = {
  title: 'About Us — Market Research Experts | Sugoi Insights',
  description:
    'Learn about Sugoi Insights - a full-service market research agency with over 10 years of experience delivering data-driven insights across 16 industries including FMCG, media, cosmetics, automotive, real estate, fashion, machine tools, aerospace, food & beverage, sports equipment, furniture, oil & gas, plastics, ceramics & glass, jewellery, and woodcutting machinery.',
  openGraph: {
    title: 'About Us | Sugoi Insights',
    description:
      'Learn about our story, values, and methodology. Over 10 years of research excellence across 16 key industries.',
    type: 'website',
    url: '/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Sugoi Insights',
    description:
      'Learn about our story, values, and methodology. Over 10 years of research excellence across 16 key industries.',
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
      name: 'About Us',
      item: `${process.env.SITE_URL || 'https://sugoi-insights.com'}/about`,
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <SectionHero
        label="Who We Are"
        title="About Sugoi Insights"
        subtitle="Over a decade of research excellence, delivering insights that drive strategic advantage across 16 key industries."
        gradient={true}
        centered={false}
        backgroundImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
        backgroundAlt="Professional business team collaboration and strategy"
      />

      <StorySection />
      <MissionStatement />
      <MethodologyGrid />
      <ValuesGrid />
      <SectorExpertise />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
