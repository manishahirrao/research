'use client';

import React from 'react';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { SlideIn } from '@/components/animations/SlideIn';

interface ValueCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const values: ValueCard[] = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: 'Data-Driven Decisions',
    description:
      'Transform raw data into actionable insights that drive strategic business decisions and measurable outcomes.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    title: 'Growth Acceleration',
    description:
      'Identify untapped opportunities and optimize market positioning to accelerate sustainable business growth.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    title: 'Innovation Catalyst',
    description:
      'Uncover emerging trends and consumer needs to fuel product innovation and market differentiation.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
        />
      </svg>
    ),
    title: 'Competitive Intelligence',
    description:
      'Gain deep understanding of competitive dynamics and market forces to maintain strategic advantage.',
  },
];

/**
 * Value Proposition Component
 * 4-card grid showcasing key benefits
 */
export function ValueProposition() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-display-md font-bold text-neutral-black">
            Why Choose Sugoi Insights
          </h2>
          <p className="mt-4 text-body-lg text-neutral-mid">
            We transform complex market data into clear, actionable strategies that drive business
            success.
          </p>
        </div>

        <StaggerContainer staggerDelay={0.12}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <SlideIn key={index} direction="up">
                <div className="group p-6 rounded-card border-l-4 border-brand-red bg-white hover:shadow-card transition-shadow duration-300">
                  <div className="text-brand-red mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-neutral-black mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-neutral-mid leading-relaxed">{value.description}</p>
                </div>
              </SlideIn>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
