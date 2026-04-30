'use client';

import React from 'react';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { SlideIn } from '@/components/animations/SlideIn';

interface Sector {
  icon: React.ReactNode;
  name: string;
  capability: string;
}

const sectors: Sector[] = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
    ),
    name: 'FMCG',
    capability:
      'Brand equity, shopper behavior, innovation pipeline, and category management insights.',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
    name: 'Media & Entertainment',
    capability:
      'Audience measurement, content testing, platform analytics, and advertising effectiveness.',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
    name: 'Cosmetics & Personal Care',
    capability:
      'Consumer perception, claims substantiation, trend forecasting, and ingredient research.',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
    ),
    name: 'Automotive',
    capability:
      'Purchase journey mapping, brand positioning, feature prioritization, and dealer experience.',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    name: 'Real Estate',
    capability:
      'Buyer profiling, market sizing, location preference studies, and investment sentiment.',
  },
];

/**
 * Sector Expertise Component
 * 5 industry capability cards
 */
export function SectorExpertise() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-display-md font-bold text-neutral-black">
            Sector Expertise
          </h2>
          <p className="mt-4 text-body-lg text-neutral-mid">
            Deep domain knowledge across five key industries, delivering insights that drive
            strategic advantage.
          </p>
        </div>

        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <SlideIn key={index} direction="up">
                <div className="group p-8 rounded-card bg-white border-2 border-neutral-border hover:border-brand-red transition-all duration-300 hover:shadow-card">
                  <div className="text-brand-red mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {sector.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-black mb-3">{sector.name}</h3>
                  <p className="text-base text-neutral-mid leading-relaxed">
                    {sector.capability}
                  </p>
                </div>
              </SlideIn>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
