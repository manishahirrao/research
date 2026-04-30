'use client';

import React from 'react';
import { SlideIn } from '@/components/animations/SlideIn';

interface Method {
  name: string;
  description: string;
}

const qualitativeMethods: Method[] = [
  { name: 'Focus Groups', description: 'Moderated group discussions for deep exploration' },
  { name: 'In-Depth Interviews', description: 'One-on-one conversations for detailed insights' },
  { name: 'Ethnographic Research', description: 'Observational studies in natural contexts' },
  { name: 'Online Communities', description: 'Digital platforms for ongoing engagement' },
  { name: 'Diary Studies', description: 'Longitudinal self-reporting for behavior tracking' },
];

const quantitativeMethods: Method[] = [
  { name: 'Surveys & Questionnaires', description: 'Structured data collection at scale' },
  { name: 'Tracking Studies', description: 'Continuous measurement over time' },
  { name: 'Conjoint Analysis', description: 'Trade-off analysis for feature optimization' },
  { name: 'MaxDiff Analysis', description: 'Preference ranking and prioritization' },
  { name: 'Statistical Modeling', description: 'Predictive analytics and segmentation' },
];

/**
 * Methodology Grid Component
 * Two-column layout: Qualitative vs Quantitative
 */
export function MethodologyGrid() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-display-md font-bold text-neutral-black">
            Our Methodology
          </h2>
          <p className="mt-4 text-body-lg text-neutral-mid">
            We blend qualitative depth with quantitative rigor to deliver comprehensive insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">
          {/* Qualitative Column */}
          <SlideIn direction="left">
            <div className="lg:pr-8 lg:border-r lg:border-brand-red">
              <div className="flex items-center mb-6">
                <svg
                  className="w-8 h-8 text-brand-red mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <h3 className="text-2xl font-bold text-neutral-black">Qualitative</h3>
              </div>

              <p className="text-base text-neutral-mid mb-6">
                Deep exploration of motivations, attitudes, and behaviors through rich, contextual
                understanding.
              </p>

              <ul className="space-y-4">
                {qualitativeMethods.map((method, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-brand-red mr-3" />
                    <div>
                      <span className="font-semibold text-neutral-black">{method.name}</span>
                      <p className="text-sm text-neutral-mid mt-1">{method.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </SlideIn>

          {/* Quantitative Column */}
          <SlideIn direction="right">
            <div className="lg:pl-8 mt-12 lg:mt-0">
              <div className="flex items-center mb-6">
                <svg
                  className="w-8 h-8 text-brand-red mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <h3 className="text-2xl font-bold text-neutral-black">Quantitative</h3>
              </div>

              <p className="text-base text-neutral-mid mb-6">
                Statistical rigor and scalable measurement to quantify patterns, validate
                hypotheses, and predict outcomes.
              </p>

              <ul className="space-y-4">
                {quantitativeMethods.map((method, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-brand-red mr-3" />
                    <div>
                      <span className="font-semibold text-neutral-black">{method.name}</span>
                      <p className="text-sm text-neutral-mid mt-1">{method.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </SlideIn>
        </div>

        {/* Mobile Divider */}
        <div className="lg:hidden mt-12 border-t border-brand-red" />
      </div>
    </section>
  );
}
