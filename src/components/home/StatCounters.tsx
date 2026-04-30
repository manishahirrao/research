'use client';

import React from 'react';
import { CountUp } from '@/components/animations/CountUp';

interface Stat {
  target: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  {
    target: 200,
    suffix: '+',
    label: 'Projects Delivered',
  },
  {
    target: 10,
    suffix: '+',
    label: 'Years of Research Excellence',
  },
  {
    target: 5,
    suffix: '',
    label: 'Industry Sectors',
  },
  {
    target: 100,
    suffix: '%',
    label: 'Client Retention Rate',
  },
];

/**
 * Stat Counters Component
 * Animated number counters showcasing key metrics
 */
export function StatCounters() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-display-md font-bold text-neutral-black">
            By the Numbers
          </h2>
          <p className="mt-4 text-body-lg text-neutral-mid">
            A track record of excellence in delivering market research insights that drive business
            growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <CountUp
                target={stat.target}
                suffix={stat.suffix}
                label={stat.label}
                duration={2.5}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
