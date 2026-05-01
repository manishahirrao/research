import type { Metadata } from 'next';
import { SectionHero } from '@/components/shared/SectionHero';
import { IndustryAnchorBar } from '@/components/industries/IndustryAnchorBar';
import { IndustrySection } from '@/components/industries/IndustrySection';
import { CtaBanner } from '@/components/home/CtaBanner';

export const metadata: Metadata = {
  title: 'Industry Expertise — 16 Key Sectors | Sugoi Insights',
  description:
    'Deep sector expertise across FMCG, Media, Cosmetics, Automotive, Real Estate, Fashion, Machine Tools, Aerospace, Food & Beverage, Sports Equipment, Woodcutting Machinery, Furniture, Oil & Gas, Plastics, Ceramics & Glass, and Jewellery industries.',
  keywords: [
    'FMCG research',
    'media research',
    'cosmetics research',
    'automotive research',
    'real estate research',
    'fashion research',
    'machine tools research',
    'aerospace research',
    'food beverage research',
    'sports equipment research',
    'woodcutting machinery research',
    'furniture research',
    'oil gas research',
    'plastics research',
    'ceramics glass research',
    'jewellery research',
    'sector expertise',
    'industry insights',
  ],
  openGraph: {
    title: 'Industries | Sugoi Insights',
    description:
      'Deep sector expertise across 16 key industries. Comprehensive market research insights for diverse sectors.',
    type: 'website',
    url: '/industries',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industries | Sugoi Insights',
    description: 'Deep sector expertise across 16 key industries.',
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
        subtitle="Deep domain knowledge across 16 key sectors, delivering insights that drive strategic advantage in your industry."
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

      {/* Fashion */}
      <IndustrySection
        id="fashion"
        name="Fashion & Apparel"
        icon={
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            />
          </svg>
        }
        description="Fashion is where culture, identity, and commerce intersect. Our research helps brands understand evolving style preferences, validate collections, optimize pricing and assortment, and navigate the shift toward sustainable and inclusive fashion. From fast fashion to luxury, we deliver insights that keep brands relevant and desirable."
        applications={[
          'Trend forecasting and style preference research',
          'Brand perception and positioning studies',
          'Collection testing and product optimization',
          'Sustainability and ethical fashion attitudes',
          'Omnichannel shopping behavior analysis',
          'Influencer and social media impact assessment',
        ]}
        image="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&q=80"
        imageAlt="Fashion industry and apparel design"
        imageLeft={true}
      />

      {/* Machine Tools */}
      <IndustrySection
        id="machine-tools"
        name="Machine Tools & Manufacturing"
        icon={
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        }
        description="The machine tools and manufacturing sector is evolving with Industry 4.0, automation, and smart manufacturing. Our research helps equipment manufacturers, distributors, and end-users understand technology adoption patterns, evaluate purchase criteria, optimize product development, and identify market opportunities in this technically complex B2B landscape."
        applications={[
          'Technology adoption and barriers research',
          'Purchase decision-making and influencer mapping',
          'Product feature prioritization and development',
          'Competitive positioning and market share analysis',
          'Customer satisfaction and loyalty studies',
          'Market sizing and growth opportunity assessment',
        ]}
        image="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1200&q=80"
        imageAlt="Machine tools and manufacturing equipment"
        imageLeft={false}
      />

      {/* Aerospace */}
      <IndustrySection
        id="aerospace"
        name="Aerospace"
        icon={
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        }
        description="The aerospace industry demands precision, reliability, and innovation. Our research helps aerospace manufacturers, suppliers, and service providers understand technology adoption trends, evaluate market opportunities, optimize supply chain decisions, and navigate the complex regulatory and certification landscape in both commercial and defense sectors."
        applications={[
          'Technology adoption and innovation research',
          'Supplier evaluation and selection criteria',
          'Market opportunity and demand forecasting',
          'Customer satisfaction and service quality studies',
          'Competitive intelligence and benchmarking',
          'Regulatory compliance and certification research',
        ]}
        image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80"
        imageAlt="Aerospace industry and aircraft manufacturing"
        imageLeft={true}
      />

      {/* Food & Beverage */}
      <IndustrySection
        id="food-beverage"
        name="Food & Beverage"
        icon={
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        }
        description="Food and beverage consumers are increasingly health-conscious, sustainability-minded, and adventurous. Our research helps brands understand taste preferences, validate new product concepts, optimize packaging and positioning, and navigate the complex interplay of nutrition, indulgence, convenience, and ethical sourcing that defines modern food choices."
        applications={[
          'Taste testing and sensory research',
          'Product concept development and validation',
          'Health and nutrition perception studies',
          'Sustainability and sourcing preferences',
          'Packaging design and claims testing',
          'Restaurant and foodservice experience research',
        ]}
        image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80"
        imageAlt="Food and beverage industry products"
        imageLeft={false}
      />

      {/* Sports Equipment */}
      <IndustrySection
        id="sports-equipment"
        name="Sports Equipment"
        icon={
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        }
        description="Sports equipment consumers seek performance, durability, and innovation. Our research helps manufacturers and retailers understand athlete and recreational user needs, validate product innovations, optimize pricing strategies, and build brands that resonate with diverse sports communities from professional athletes to weekend enthusiasts."
        applications={[
          'Product performance and feature testing',
          'Athlete and user segmentation research',
          'Brand positioning and sponsorship effectiveness',
          'Innovation pipeline and concept validation',
          'Retail and e-commerce experience optimization',
          'Sustainability and material preference studies',
        ]}
        image="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&q=80"
        imageAlt="Sports equipment and athletic gear"
        imageLeft={true}
      />

      {/* Woodcutting Machinery */}
      <IndustrySection
        id="woodcutting-machinery"
        name="Woodcutting Machinery"
        icon={
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            />
          </svg>
        }
        description="The woodcutting machinery sector serves forestry, sawmills, and woodworking industries with specialized equipment. Our research helps manufacturers understand buyer priorities, evaluate technology adoption patterns, optimize product development, and identify market opportunities in this specialized B2B segment focused on efficiency, safety, and precision."
        applications={[
          'Purchase decision criteria and influencer mapping',
          'Technology and automation adoption research',
          'Safety and regulatory compliance studies',
          'Customer satisfaction and service needs',
          'Market sizing and opportunity assessment',
          'Competitive positioning and feature analysis',
        ]}
        image="https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=1200&q=80"
        imageAlt="Woodcutting machinery and forestry equipment"
        imageLeft={false}
      />

      {/* Furniture */}
      <IndustrySection
        id="furniture"
        name="Furniture"
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
        description="Furniture purchases blend functionality, aesthetics, and lifestyle aspirations. Our research helps manufacturers and retailers understand design preferences, validate product concepts, optimize pricing and assortment, and navigate the shift toward sustainable materials, modular designs, and omnichannel shopping experiences in residential and commercial segments."
        applications={[
          'Design preference and trend research',
          'Product concept testing and validation',
          'Material and sustainability preferences',
          'Pricing strategy and value perception',
          'Showroom and online experience optimization',
          'B2B contract furniture decision-making',
        ]}
        image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80"
        imageAlt="Furniture design and home furnishings"
        imageLeft={true}
      />

      {/* Oil & Gas */}
      <IndustrySection
        id="oil-gas"
        name="Oil & Gas"
        icon={
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        }
        description="The oil and gas industry operates in a complex landscape of technology, regulation, and energy transition. Our research helps operators, service providers, and equipment manufacturers understand market dynamics, evaluate technology adoption, assess stakeholder perceptions, and navigate the shift toward cleaner energy while maintaining operational excellence."
        applications={[
          'Technology adoption and digital transformation',
          'Supplier evaluation and procurement research',
          'Stakeholder perception and reputation studies',
          'Market opportunity and demand forecasting',
          'Safety culture and operational excellence',
          'Energy transition and sustainability research',
        ]}
        image="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=80"
        imageAlt="Oil and gas industry operations"
        imageLeft={false}
      />

      {/* Plastics */}
      <IndustrySection
        id="plastics"
        name="Plastics Industry"
        icon={
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
            />
          </svg>
        }
        description="The plastics industry is evolving with sustainability pressures, circular economy initiatives, and material innovation. Our research helps manufacturers, converters, and brand owners understand material preferences, evaluate recycling and bio-based alternatives, optimize product development, and navigate the complex regulatory and consumer sentiment landscape."
        applications={[
          'Material selection and preference research',
          'Sustainability and circular economy attitudes',
          'Recycling and bio-based plastic adoption',
          'Regulatory compliance and policy impact',
          'Customer satisfaction and quality perception',
          'Market opportunity and application development',
        ]}
        image="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&q=80"
        imageAlt="Plastics manufacturing and materials"
        imageLeft={true}
      />

      {/* Ceramics & Glass */}
      <IndustrySection
        id="ceramics-glass"
        name="Ceramics & Glass"
        icon={
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>
        }
        description="Ceramics and glass industries serve diverse markets from construction to tableware, automotive to electronics. Our research helps manufacturers understand application-specific requirements, validate product innovations, optimize market positioning, and identify growth opportunities across industrial, commercial, and consumer segments in these traditional yet evolving materials."
        applications={[
          'Application and end-use market research',
          'Product innovation and concept testing',
          'Technical performance and quality studies',
          'Design preference and aesthetic research',
          'Sustainability and energy efficiency priorities',
          'Market sizing and competitive analysis',
        ]}
        image="https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=1200&q=80"
        imageAlt="Ceramics and glass manufacturing"
        imageLeft={false}
      />

      {/* Jewellery */}
      <IndustrySection
        id="jewellery"
        name="Jewellery"
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
        description="Jewellery purchases are deeply emotional, combining personal expression, cultural significance, and investment value. Our research helps jewellers, designers, and brands understand purchase motivations, validate design concepts, optimize pricing strategies, and navigate the shift toward ethical sourcing, lab-grown diamonds, and personalized experiences."
        applications={[
          'Purchase motivation and occasion research',
          'Design preference and trend forecasting',
          'Ethical sourcing and sustainability attitudes',
          'Lab-grown vs natural diamond perceptions',
          'Pricing strategy and value perception',
          'Retail experience and personalization research',
        ]}
        image="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80"
        imageAlt="Jewellery design and precious stones"
        imageLeft={true}
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
