'use client';

import React from 'react';
import { FadeIn } from '@/components/animations/FadeIn';

/**
 * Mission Statement Component
 * Large pull-quote style statement with brand-red accent
 */
export function MissionStatement() {
  return (
    <section className="py-24 md:py-32 bg-neutral-light">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative">
              {/* Large opening quotation mark */}
              <span
                className="absolute -top-8 -left-4 md:-left-8 text-8xl md:text-9xl font-display text-brand-red opacity-20"
                aria-hidden="true"
              >
                "
              </span>

              <blockquote className="relative">
                <p className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-black italic leading-tight">
                  We believe every business decision deserves to be informed by real human insight
                  — not assumptions.
                </p>
              </blockquote>

              {/* Closing quotation mark */}
              <span
                className="absolute -bottom-8 -right-4 md:-right-8 text-8xl md:text-9xl font-display text-brand-red opacity-20"
                aria-hidden="true"
              >
                "
              </span>
            </div>

            <p className="mt-12 text-body-lg text-neutral-mid">
              This principle guides everything we do—from research design to strategic
              recommendations.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
