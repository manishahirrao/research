'use client';

import React from 'react';
import Image from 'next/image';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { SlideIn } from '@/components/animations/SlideIn';

/**
 * Story Section Component
 * Offset-overlap two-column layout with image and narrative text
 */
export function StorySection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <SlideIn direction="left">
            <div className="relative">
              {/* Offset overflow effect on desktop */}
              <div className="relative lg:-mr-8 xl:-mr-12">
                <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-card overflow-hidden shadow-card">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
                    alt="Sugoi Insights team collaborating on market research strategy"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  />
                </div>
              </div>
            </div>
          </SlideIn>

          {/* Text Column */}
          <SlideIn direction="right">
            <div className="lg:pl-8">
              <SectionLabel>Our Story</SectionLabel>
              <h2 className="mt-4 font-display text-display-md font-bold text-neutral-black">
                Transforming Insights Into Impact
              </h2>

              <div className="mt-6 space-y-4 text-body-lg text-neutral-mid leading-relaxed">
                <p>
                  Founded over a decade ago, Sugoi Insights emerged from a simple belief: every
                  business decision deserves to be informed by real human insight, not assumptions.
                  What began as a boutique research consultancy has evolved into a full-service
                  agency trusted by leading brands across 16 key industries.
                </p>

                <p>
                  Our journey has been defined by an unwavering commitment to methodological rigor,
                  strategic thinking, and actionable recommendations. We don't just deliver data—we
                  deliver clarity, confidence, and competitive advantage.
                </p>

                <p>
                  Today, we combine traditional research excellence with cutting-edge analytics,
                  helping organizations navigate complex markets, understand evolving consumer
                  behavior, and make decisions that drive sustainable growth. Our success is
                  measured not in reports delivered, but in strategies implemented and results
                  achieved.
                </p>
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
