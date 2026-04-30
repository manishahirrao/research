'use client';

import React from 'react';
import Link from 'next/link';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { SlideIn } from '@/components/animations/SlideIn';

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: ServiceCard[] = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    ),
    title: 'Research Design',
    description:
      'Strategic problem framing, methodology selection, and sample design tailored to your business objectives.',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: 'Data Collection',
    description:
      'Primary fieldwork, online and offline panels, qualitative recruitment, and multi-channel data gathering.',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: 'Advanced Analytics',
    description:
      'Statistical modeling, segmentation, conjoint analysis, NLP text analytics, and predictive insights.',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    title: 'Strategic Recommendations',
    description:
      'Synthesis, narrative development, executive reporting, and actionable strategic roadmaps.',
  },
];

/**
 * Services Overview Component
 * 4 service pillar cards with hover effects
 */
export function ServicesOverview() {
  return (
    <section className="py-24 md:py-32 bg-neutral-light">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="mt-4 font-display text-display-md font-bold text-neutral-black">
            Our Services
          </h2>
          <p className="mt-4 text-body-lg text-neutral-mid">
            End-to-end market research solutions designed to deliver actionable insights at every
            stage of your business journey.
          </p>
        </div>

        <StaggerContainer staggerDelay={0.12}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <SlideIn key={index} direction="up">
                <div className="card-hover p-8 rounded-card bg-white shadow-card">
                  <div className="text-brand-red mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-neutral-black mb-3">
                    {service.title}
                  </h3>
                  <p className="text-base text-neutral-mid leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </SlideIn>
            ))}
          </div>
        </StaggerContainer>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center text-brand-red font-medium hover:text-brand-red-dark transition-colors group"
          >
            View All Services
            <svg
              className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
