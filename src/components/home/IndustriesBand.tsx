'use client';

import React from 'react';
import { SectionLabel } from '@/components/shared/SectionLabel';

interface Industry {
  name: string;
  icon: React.ReactNode;
}

const industries: Industry[] = [
  {
    name: 'FMCG',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
    ),
  },
  {
    name: 'Media & Entertainment',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    name: 'Cosmetics & Personal Care',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
  {
    name: 'Automotive',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
    ),
  },
  {
    name: 'Real Estate',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
];

/**
 * Industries Band Component
 * Horizontally scrolling sector strip
 */
export function IndustriesBand() {
  return (
    <section className="py-24 md:py-32 bg-neutral-dark text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <SectionLabel className="text-brand-red-light">Sector Expertise</SectionLabel>
          <h2 className="mt-4 font-display text-display-md font-bold">
            Industries We Serve
          </h2>
          <p className="mt-4 text-body-lg text-neutral-light">
            Deep domain expertise across five key sectors, delivering insights that drive strategic
            advantage.
          </p>
        </div>
      </div>

      {/* Desktop: Static Grid */}
      <div className="hidden md:block">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 rounded-card bg-neutral-mid/20 hover:bg-brand-red/10 border border-neutral-mid/30 hover:border-brand-red/50 transition-all duration-300"
              >
                <div className="text-brand-red mb-3">{industry.icon}</div>
                <span className="text-sm font-medium text-center">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: Horizontal Scroll */}
      <div className="md:hidden">
        <div className="flex gap-4 px-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-48 snap-center flex flex-col items-center justify-center p-6 rounded-card bg-neutral-mid/20 border border-neutral-mid/30"
            >
              <div className="text-brand-red mb-3">{industry.icon}</div>
              <span className="text-sm font-medium text-center">{industry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
