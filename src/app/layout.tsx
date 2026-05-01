import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css';
import { SkipLink } from '@/components/shared/SkipLink';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

// Load Playfair Display for headings
const playfairDisplay = Playfair_Display({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['700', '900'],
  display: 'swap',
  preload: true,
});

// Load DM Sans for body text
const dmSans = DM_Sans({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || 'https://sugoi-insights.com'),
  title: {
    default: 'Sugoi Insights | Market Research Agency',
    template: '%s | Sugoi Insights',
  },
  description:
    'Full-service market research agency specializing in 16 industries: FMCG, media, cosmetics, automotive, real estate, fashion, machine tools, aerospace, food & beverage, sports equipment, woodcutting machinery, furniture, oil & gas, plastics, ceramics & glass, and jewellery. Data-driven insights for strategic growth.',
  keywords: [
    'market research',
    'consumer insights',
    'data analytics',
    'FMCG research',
    'media research',
    'automotive research',
    'real estate research',
    'cosmetics research',
    'fashion research',
    'machine tools research',
    'aerospace research',
    'food beverage research',
    'sports equipment research',
    'furniture research',
    'oil gas research',
    'plastics research',
    'jewellery research',
  ],
  authors: [{ name: 'Sugoi Insights' }],
  creator: 'Sugoi Insights',
  publisher: 'Sugoi Insights',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Sugoi Insights',
    title: 'Sugoi Insights | Market Research Agency',
    description:
      'Full-service market research agency specializing in 16 industries including FMCG, media, cosmetics, automotive, real estate, fashion, machine tools, aerospace, food & beverage, and more.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Sugoi Insights - Market Research Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sugoi Insights | Market Research Agency',
    description:
      'Full-service market research agency specializing in 16 industries including FMCG, media, cosmetics, automotive, real estate, fashion, machine tools, aerospace, food & beverage, and more.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Organization JSON-LD structured data
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Sugoi Insights',
  url: process.env.SITE_URL || 'https://sugoi-insights.com',
  logo: `${process.env.SITE_URL || 'https://sugoi-insights.com'}/images/logo.svg`,
  description:
    'Full-service market research agency specializing in 16 industries including FMCG, media, cosmetics, automotive, real estate, fashion, machine tools, aerospace, food & beverage, and more.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-XXXXXXXXXX',
    contactType: 'Customer Service',
    availableLanguage: 'English',
  },
  sameAs: ['https://www.linkedin.com/company/sugoi-insights'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${dmSans.variable}`}>
      <head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <SkipLink />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
