import type { Metadata } from 'next';
import { SectionHero } from '@/components/shared/SectionHero';
import { ServiceSection } from '@/components/services/ServiceSection';
import { ProcessTimeline } from '@/components/services/ProcessTimeline';
import { CtaBanner } from '@/components/home/CtaBanner';

export const metadata: Metadata = {
  title: 'Research Services — End-to-End Solutions | Sugoi Insights',
  description:
    'Comprehensive market research services: Research Design, Data Collection, Advanced Analytics, and Strategic Recommendations. Data-driven insights for sustainable growth.',
  keywords: [
    'market research services',
    'data analytics',
    'consumer insights',
    'research design',
    'data collection',
    'statistical analysis',
    'strategic recommendations',
  ],
  openGraph: {
    title: 'Services | Sugoi Insights',
    description:
      'Comprehensive market research services from design to delivery. Research Design, Data Collection, Advanced Analytics, and Strategic Recommendations.',
    type: 'website',
    url: '/services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | Sugoi Insights',
    description:
      'Comprehensive market research services from design to delivery. Data-driven insights for growth.',
  },
};

// Service JSON-LD structured data
const servicesJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Research Design',
    description:
      'Strategic problem framing, methodology selection, and sample design tailored to business objectives.',
    provider: {
      '@type': 'Organization',
      name: 'Sugoi Insights',
    },
    areaServed: 'IN',
    serviceType: 'Market Research',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Data Collection',
    description:
      'Primary fieldwork, online and offline panels, qualitative recruitment, and multi-channel data gathering.',
    provider: {
      '@type': 'Organization',
      name: 'Sugoi Insights',
    },
    areaServed: 'IN',
    serviceType: 'Market Research',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Advanced Analytics',
    description:
      'Statistical modeling, segmentation, conjoint analysis, NLP text analytics, and predictive insights.',
    provider: {
      '@type': 'Organization',
      name: 'Sugoi Insights',
    },
    areaServed: 'IN',
    serviceType: 'Market Research',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Strategic Recommendations',
    description:
      'Synthesis, narrative development, executive reporting, and actionable strategic roadmaps.',
    provider: {
      '@type': 'Organization',
      name: 'Sugoi Insights',
    },
    areaServed: 'IN',
    serviceType: 'Market Research',
  },
];

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
      name: 'Services',
      item: `${process.env.SITE_URL || 'https://sugoi-insights.com'}/services`,
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <SectionHero
        label="What We Do"
        title="Our Services"
        subtitle="End-to-end market research solutions designed to deliver actionable insights at every stage of your business journey."
        gradient={true}
        centered={false}
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
        backgroundAlt="Data analytics and business strategy visualization"
      />

      {/* Service 1: Research Design */}
      <ServiceSection
        title="Research Design"
        description="Every successful research project begins with a clear understanding of the business problem and a methodologically sound approach. Our research design service combines strategic thinking with technical expertise to frame your questions, select the optimal methodology, and design sampling strategies that deliver reliable, actionable insights. We don't just execute research—we architect solutions that address your specific business challenges with precision and rigor."
        deliverables={[
          'Problem framing and research objectives definition',
          'Methodology selection and justification',
          'Questionnaire and discussion guide development',
          'Sample design and recruitment specifications',
          'Project timeline and resource planning',
          'Pilot testing and instrument refinement',
        ]}
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80"
        imageAlt="Research design and strategic planning session"
        imageLeft={false}
        ctaText="Discuss Your Research Needs"
        ctaHref="/contact"
      />

      {/* Service 2: Data Collection */}
      <ServiceSection
        title="Data Collection"
        description="Quality insights begin with quality data. Our data collection capabilities span the full spectrum of research methodologies—from in-depth qualitative interviews and focus groups to large-scale quantitative surveys and tracking studies. We manage fieldwork with meticulous attention to detail, ensuring data integrity, respondent quality, and ethical research practices. Whether online, offline, or hybrid, we deliver clean, reliable data that forms the foundation for meaningful analysis."
        deliverables={[
          'Qualitative fieldwork: focus groups, IDIs, ethnography',
          'Quantitative surveys: online, CATI, face-to-face',
          'Panel recruitment and management',
          'Multi-market coordination and execution',
          'Real-time quality monitoring and validation',
          'Data cleaning and preparation',
        ]}
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
        imageAlt="Data collection and fieldwork execution"
        imageLeft={true}
        ctaText="Explore Data Collection Options"
        ctaHref="/contact"
      />

      {/* Service 3: Advanced Analytics */}
      <ServiceSection
        title="Advanced Analytics"
        description="Raw data becomes strategic intelligence through rigorous analysis. Our analytics team combines statistical expertise with business acumen to uncover patterns, test hypotheses, and generate predictive insights. From segmentation and conjoint analysis to advanced modeling and text analytics, we apply the right analytical techniques to answer your most complex business questions. We don't just report findings—we reveal the 'why' behind the numbers and the 'what next' for your strategy."
        deliverables={[
          'Statistical modeling and hypothesis testing',
          'Segmentation and cluster analysis',
          'Conjoint and MaxDiff analysis',
          'Predictive analytics and forecasting',
          'NLP and text analytics',
          'Data visualization and dashboards',
        ]}
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
        imageAlt="Advanced analytics and data visualization"
        imageLeft={false}
        ctaText="Unlock Your Data's Potential"
        ctaHref="/contact"
      />

      {/* Service 4: Strategic Recommendations */}
      <ServiceSection
        title="Strategic Recommendations"
        description="Insights without action are just interesting facts. Our strategic recommendations service transforms research findings into clear, prioritized, implementable strategies. We synthesize complex data into compelling narratives, develop executive-ready presentations, and provide strategic roadmaps that guide decision-making. Our recommendations are grounded in data, informed by market context, and designed to drive measurable business outcomes. We partner with you from insight to impact."
        deliverables={[
          'Executive summary and key findings synthesis',
          'Strategic implications and recommendations',
          'Actionable roadmaps and implementation plans',
          'Stakeholder presentations and workshops',
          'Scenario planning and decision frameworks',
          'Ongoing strategic consultation',
        ]}
        image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80"
        imageAlt="Strategic recommendations and executive presentation"
        imageLeft={true}
        ctaText="Transform Insights Into Strategy"
        ctaHref="/contact"
      />

      <ProcessTimeline />

      <CtaBanner />
    </>
  );
}
