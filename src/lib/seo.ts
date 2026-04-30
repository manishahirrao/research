import type { Metadata } from 'next';
import type { BlogArticle } from './content';

const SITE_URL = process.env.SITE_URL || 'https://sugoi-insights.com';
const SITE_NAME = 'Sugoi Insights';

/**
 * Page SEO Data Interface
 */
export interface PageSeoData {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  authors?: string[];
  tags?: string[];
}

/**
 * Build Next.js Metadata object with SEO best practices
 */
export function buildMetadata(data: PageSeoData): Metadata {
  const {
    title,
    description,
    path,
    keywords = [],
    image = `${SITE_URL}/og-image.png`,
    type = 'website',
    publishedTime,
    authors,
    tags,
  } = data;

  const url = `${SITE_URL}${path}`;
  const fullTitle = path === '/' ? title : `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    keywords,
    authors: authors?.map((name) => ({ name })),
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type,
      ...(type === 'article' && publishedTime
        ? {
            publishedTime,
            authors,
            tags,
          }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
}

/**
 * Build Organization JSON-LD structured data
 */
export function buildOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      'Market research agency delivering data-driven insights across FMCG, Media, Cosmetics, Automotive, and Real Estate sectors.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'London',
      addressCountry: 'GB',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91 7304275983',
      contactType: 'customer service',
      email: 'apresearchbusiness@gmail.com',
      availableLanguage: 'English',
    },
    sameAs: ['https://linkedin.com/company/sugoi-insights'],
  };
}

/**
 * Build Article JSON-LD structured data
 */
export function buildArticleJsonLd(article: BlogArticle) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      '@type': 'Person',
      name: article.author,
      jobTitle: article.authorTitle,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/insights/${article.slug}`,
    },
    keywords: article.tags.join(', '),
  };
}

/**
 * Build BreadcrumbList JSON-LD structured data
 */
export function buildBreadcrumbJsonLd(crumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url.startsWith('http') ? crumb.url : `${SITE_URL}${crumb.url}`,
    })),
  };
}

/**
 * Build ContactPage JSON-LD structured data
 */
export function buildContactPageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Sugoi Insights',
    description: 'Get in touch with our market research team',
    url: `${SITE_URL}/contact`,
    mainEntity: {
      '@type': 'Organization',
      name: SITE_NAME,
      email: 'apresearchbusiness@gmail.com',
      telephone: '+91 7304275983',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'London',
        addressCountry: 'GB',
      },
    },
  };
}

/**
 * Build Service JSON-LD structured data
 */
export function buildServiceJsonLd(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    url: service.url,
  };
}

/**
 * Build FAQPage JSON-LD structured data
 */
export function buildFaqPageJsonLd(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Validate metadata for SEO best practices
 */
export function validateMetadata(metadata: {
  title?: string;
  description?: string;
}): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Title validation
  if (!metadata.title) {
    errors.push('Title is required');
  } else if (metadata.title.length > 60) {
    errors.push(`Title is too long (${metadata.title.length} chars, max 60)`);
  } else if (metadata.title.length < 30) {
    errors.push(`Title is too short (${metadata.title.length} chars, min 30)`);
  }

  // Description validation
  if (!metadata.description) {
    errors.push('Description is required');
  } else if (metadata.description.length > 160) {
    errors.push(`Description is too long (${metadata.description.length} chars, max 160)`);
  } else if (metadata.description.length < 120) {
    errors.push(`Description is too short (${metadata.description.length} chars, min 120)`);
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
