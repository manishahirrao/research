import type { Metadata } from 'next';
import { SectionHero } from '@/components/shared/SectionHero';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';

export const metadata: Metadata = {
  title: 'Contact Our Research Team | Sugoi Insights',
  description:
    "Get in touch with our market research team. We're here to discuss your research needs and explore how we can help transform your data into strategic advantage.",
  keywords: [
    'contact market research',
    'research consultation',
    'market research inquiry',
    'get in touch',
  ],
  openGraph: {
    title: 'Contact Us | Sugoi Insights',
    description:
      'Get in touch with our market research team. Initial consultation is always complimentary.',
    type: 'website',
    url: '/contact',
  },
  twitter: {
    card: 'summary',
    title: 'Contact Us | Sugoi Insights',
    description: 'Get in touch with our market research team.',
  },
};

// ContactPage JSON-LD
const contactPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Sugoi Insights',
  description: 'Get in touch with our market research team',
  url: `${process.env.SITE_URL || 'https://sugoi-insights.com'}/contact`,
  mainEntity: {
    '@type': 'Organization',
    name: 'Sugoi Insights',
    email: 'apresearchbusiness@gmail.com',
    telephone: '+91 7304275983',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'London',
      addressCountry: 'GB',
    },
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
      name: 'Contact',
      item: `${process.env.SITE_URL || 'https://sugoiinsights.com'}/contact`,
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <SectionHero
        label="Let's Talk"
        title="Contact Us"
        subtitle="Ready to transform your data into strategic advantage? We'd love to hear about your research needs."
        gradient={true}
        centered={false}
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop"
        backgroundAlt="Professional business communication and collaboration"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info - 40% width on desktop */}
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>

            {/* Contact Form - 60% width on desktop */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
