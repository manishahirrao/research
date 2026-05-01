import type { Metadata } from 'next';
import { HomeHero } from '@/components/home/HomeHero';
import { ValueProposition } from '@/components/home/ValueProposition';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { IndustriesBand } from '@/components/home/IndustriesBand';
import { StatCounters } from '@/components/home/StatCounters';
import { LatestInsights } from '@/components/home/LatestInsights';
import { CtaBanner } from '@/components/home/CtaBanner';

export const metadata: Metadata = {
  title: 'Sugoi Insights | Market Research Agency — Data-Driven Growth',
  description:
    'Transform your business with data-driven insights. Sugoi Insights delivers world-class market research across 16 industries including FMCG, media, cosmetics, automotive, real estate, fashion, machine tools, aerospace, food & beverage, sports equipment, furniture, oil & gas, plastics, ceramics & glass, jewellery, and woodcutting machinery.',
  openGraph: {
    title: 'Sugoi Insights | Market Research Agency — Data-Driven Growth',
    description:
      'Transform your business with data-driven insights. Full-service market research across 16 key industries.',
    type: 'website',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sugoi Insights | Market Research Agency — Data-Driven Growth',
    description:
      'Transform your business with data-driven insights. Full-service market research across 16 key industries.',
  },
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <ValueProposition />
      <ServicesOverview />
      <IndustriesBand />
      <StatCounters />
      <LatestInsights />
      <CtaBanner />
    </>
  );
}
