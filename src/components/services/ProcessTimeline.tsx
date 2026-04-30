'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { SlideIn } from '@/components/animations/SlideIn';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface Step {
  number: number;
  name: string;
  description: string;
}

const steps: Step[] = [
  {
    number: 1,
    name: 'Brief',
    description: 'Understanding your business objectives and research needs',
  },
  {
    number: 2,
    name: 'Design',
    description: 'Crafting methodology and research instruments',
  },
  {
    number: 3,
    name: 'Field',
    description: 'Executing data collection with precision',
  },
  {
    number: 4,
    name: 'Analysis',
    description: 'Transforming data into actionable insights',
  },
  {
    number: 5,
    name: 'Delivery',
    description: 'Presenting strategic recommendations',
  },
];

/**
 * Process Timeline Component
 * Horizontal 5-step timeline with animated connectors
 */
export function ProcessTimeline() {
  const prefersReducedMotion = useReducedMotion();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className="py-24 md:py-32 bg-neutral-light">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-display-md font-bold text-neutral-black">
            How We Work
          </h2>
          <p className="mt-4 text-body-lg text-neutral-mid">
            A proven process that delivers insights with precision and impact.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div ref={ref} className="hidden md:block">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-12 left-0 right-0 h-1 bg-neutral-border">
              {!prefersReducedMotion && inView && (
                <motion.div
                  className="h-full bg-brand-red"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2, ease: 'easeInOut', delay: 0.3 }}
                />
              )}
              {(prefersReducedMotion || !inView) && (
                <div className="h-full bg-brand-red" style={{ width: inView ? '100%' : '0%' }} />
              )}
            </div>

            {/* Steps */}
            <StaggerContainer staggerDelay={0.15}>
              <div className="relative grid grid-cols-5 gap-4">
                {steps.map((step, index) => (
                  <SlideIn key={index} direction="up">
                    <div className="flex flex-col items-center text-center">
                      {/* Circle */}
                      <div className="relative z-10 w-24 h-24 rounded-full bg-brand-red flex items-center justify-center shadow-card mb-4">
                        <span className="text-3xl font-bold text-white">{step.number}</span>
                      </div>

                      {/* Name */}
                      <h3 className="text-xl font-bold text-neutral-black mb-2">{step.name}</h3>

                      {/* Description */}
                      <p className="text-sm text-neutral-mid">{step.description}</p>
                    </div>
                  </SlideIn>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => (
            <SlideIn key={index} direction="up">
              <div className="flex items-start">
                {/* Circle */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-brand-red flex items-center justify-center shadow-card mr-4">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-bold text-neutral-black mb-2">{step.name}</h3>
                  <p className="text-base text-neutral-mid">{step.description}</p>
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="ml-8 h-8 w-1 bg-brand-red opacity-30" />
              )}
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}
