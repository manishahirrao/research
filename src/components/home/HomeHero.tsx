'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/shared/Button';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { SlideIn } from '@/components/animations/SlideIn';

/**
 * Home Hero Component
 * Full-viewport hero with animated gradient background and staggered entrance
 */
export function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
        alt="Business strategy and market research planning"
        fill
        className="object-cover"
        priority
        quality={90}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-black/85 via-neutral-dark/75 to-neutral-black/85" />

      {/* Animated gradient mesh overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-brand-red/30 via-transparent to-transparent animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-gradient-radial from-brand-red-dark/30 via-transparent to-transparent animate-pulse-slower" />
      </div>

      {/* Grain texture overlay */}
      <div className="absolute inset-0 texture-grain" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <SlideIn direction="up" delay={0}>
            <SectionLabel className="text-brand-red-light">
              Market Research Agency
            </SectionLabel>
          </SlideIn>

          <SlideIn direction="up" delay={0.12}>
            <h1 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Transforming Data Into
              <br />
              <span className="text-brand-red-light">Strategic Advantage</span>
            </h1>
          </SlideIn>

          <SlideIn direction="up" delay={0.24}>
            <p className="mt-8 text-base md:text-lg lg:text-xl text-neutral-light max-w-2xl mx-auto leading-relaxed">
              Full-service market research delivering actionable insights across FMCG, media,
              cosmetics, automotive, and real estate sectors. Data-driven decisions for sustainable
              growth.
            </p>
          </SlideIn>

          <SlideIn direction="up" delay={0.36}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild href="/contact" variant="primary" size="lg">
                Request a Consultation
              </Button>
              <Button asChild href="/services" variant="secondary" size="lg">
                Explore Our Services
              </Button>
            </div>
          </SlideIn>

          {/* Scroll Indicator */}
          <SlideIn direction="up" delay={0.48}>
            <div className="mt-20 flex justify-center">
              <div className="animate-bounce">
                <svg
                  className="w-6 h-6 text-brand-red-light"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
