import type { Metadata } from 'next';
import { SectionHero } from '@/components/shared/SectionHero';
import { IndustryAnchorBar } from '@/components/industries/IndustryAnchorBar';
import { IndustrySection } from '@/components/industries/IndustrySection';
import { CtaBanner } from '@/components/home/CtaBanner';

export const metadata: Metadata = {
  title: 'Industry Expertise — Five Key Sectors | Sugoi Insights',
  description:
    'Deep sector expertise across FMCG, Media & Entertainment, Cosmetics & Personal Care, Automotive, and Real Estate. Industry-specific market research insights.',
  keywords: [
    'FMCG research',
    'media research',
    'cosmetics research',
    'automotive research',
    'real estate research',
    'sector expertise',
    'industry insights',
  ],
  openGraph: {
    title: 'Industries | Sugoi Insights',
    description:
      'Deep sector expertise across five key industries. FMCG, Media, Cosmetics, Automotive, and Real Estate market research.',
    type: 'website',
    url: '/industries',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industries | Sugoi Insights',
    description: 'Deep sector expertise across five key industries.',
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
      name: 'Industries',
      item: `${process.env.SITE_URL || 'https://sugoi-insights.com'}/industries`,
    },
  ],
};

export default function IndustriesPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <SectionHero
        label="Sector Expertise"
        title="Industries We Serve"
        subtitle="Deep domain knowledge across five key sectors, delivering insights that drive strategic advantage in your industry."
        gradient={true}
        centered={false}
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
        backgroundAlt="Modern business district and industry landscape"
      />

      <IndustryAnchorBar />

      {/* FMCG */}
      <IndustrySection
        id="fmcg"
        name="FMCG"
        icon={
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        }
        description="The FMCG sector moves fast, and so do consumer preferences. Our research helps brands stay ahead of shifting behaviors, optimize product portfolios, and win at the shelf. From brand equity tracking to shopper journey mapping, we deliver insights that drive category growth and competitive advantage in this dynamic market."
        applications={[
          'Brand equity and health tracking',
          'Shopper behavior and path-to-purchase studies',
          'Innovation pipeline and concept testing',
          'Category management and assortment optimization',
          'Pricing and promotion effectiveness',
          'Packaging and claims testing',
        ]}
        image="https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=1200&q=80"
        imageAlt="FMCG products and consumer shopping experience"
        imageLeft={false}
      />

      {/* Media & Entertainment */}
      <IndustrySection
        id="media"
        name="Media & Entertainment"
        icon={
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        }
        description="In an era of fragmented audiences and evolving platforms, understanding content performance and viewer behavior is critical. We help media companies, broadcasters, and streaming platforms measure audience engagement, test content concepts, optimize programming strategies, and demonstrate advertising effectiveness across traditional and digital channels."
        applications={[
          'Audience measurement and segmentation',
          'Content testing and performance analysis',
          'Platform usage and cross-media consumption',
          'Advertising effectiveness and attribution',
          'Subscription and churn analysis',
          'Competitive benchmarking and share of voice',
        ]}
        image="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=1200&q=80"
        imageAlt="Media production and entertainment content creation"
        imageLeft={true}
      />

      {/* Cosmetics & Personal Care */}
      <IndustrySection
        id="cosmetics"
        name="Cosmetics & Personal Care"
        icon={
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
        }
        description="Beauty and personal care consumers are informed, discerning, and trend-conscious. Our research helps brands understand evolving beauty standards, validate product claims, identify emerging ingredient preferences, and navigate the complex interplay of efficacy, sustainability, and self-expression that defines this category."
        applications={[
          'Consumer perception and brand positioning',
          'Product claims substantiation and validation',
          'Ingredient preference and transparency research',
          'Trend forecasting and innovation scouting',
          'Usage and attitude studies',
          'Retail and e-commerce experience optimization',
        ]}
        image="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&q=80"
        imageAlt="Cosmetics and personal care products"
        imageLeft={false}
      />

      {/* Automotive */}
      <IndustrySection
        id="automotive"
        name="Automotive"
        icon={
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
            />
          </svg>
        }
        description="The automotive purchase journey is complex, high-involvement, and increasingly digital. We help manufacturers, dealers, and mobility providers understand buyer motivations, optimize the consideration and purchase experience, prioritize feature development, and build brands that resonate in an era of electrification and connected vehicles."
        applications={[
          'Purchase journey mapping and touchpoint analysis',
          'Brand positioning and competitive perception',
          'Feature prioritization and willingness-to-pay',
          'Dealer experience and satisfaction studies',
          'Electric vehicle adoption and barriers research',
          'Connected services and mobility preferences',
        ]}
        image="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80"
        imageAlt="Automotive industry and vehicle design"
        imageLeft={true}
      />

      {/* Real Estate */}
      <IndustrySection
        id="real-estate"
        name="Real Estate"
        icon={
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        }
        description="Real estate decisions are driven by lifestyle aspirations, investment considerations, and location dynamics. Our research helps developers, investors, and brokers understand buyer profiles, validate project concepts, optimize pricing strategies, and identify emerging market opportunities in residential, commercial, and mixed-use developments."
        applications={[
          'Buyer profiling and segmentation',
          'Market sizing and demand forecasting',
          'Location preference and amenity research',
          'Project concept testing and positioning',
          'Pricing strategy and willingness-to-pay',
          'Investment sentiment and market trends',
        ]}
        image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80"
        imageAlt="Real estate development and property market"
        imageLeft={false}
      />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-neutral-light">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="font-display text-display-md font-bold text-neutral-black">
            Don't See Your Sector?
          </h2>
          <p className="mt-4 text-body-lg text-neutral-mid max-w-2xl mx-auto">
            We bring our research expertise to new industries and emerging categories. Let's discuss
            how we can support your specific sector needs.
          </p>
          <div className="mt-8">
            <a href="/contact" className="btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
