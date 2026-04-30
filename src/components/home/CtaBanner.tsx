'use client';

import React from 'react';
import { Button } from '@/components/shared/Button';
import { FadeIn } from '@/components/animations/FadeIn';

/**
 * CTA Banner Component
 * Full-width call-to-action section with brand-red background
 */
export function CtaBanner() {
  return (
    <section className="relative py-16 md:py-20 bg-brand-red overflow-hidden">
      {/* Grain texture overlay */}
      <div className="absolute inset-0 texture-grain" />

      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-display-sm font-bold text-white">
              Ready to Uncover What Your Market Is Telling You?
            </h2>
            <p className="mt-4 text-body-md text-white/90 max-w-2xl mx-auto">
              Let's transform your business challenges into strategic opportunities with data-driven
              insights.
            </p>
            <div className="mt-8">
              <Button
                asChild
                href="/contact"
                variant="secondary"
                size="md"
                className="bg-white text-brand-red hover:bg-neutral-light border-white"
              >
                Contact Us Today
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
