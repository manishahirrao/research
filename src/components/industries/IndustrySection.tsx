'use client';

import React from 'react';
import Image from 'next/image';
import { SlideIn } from '@/components/animations/SlideIn';

interface IndustrySectionProps {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  applications: string[];
  image: string;
  imageAlt: string;
  imageLeft?: boolean;
}

/**
 * Industry Section Component
 * Alternating image-left/right layout for sector expertise
 */
export function IndustrySection({
  id,
  name,
  icon,
  description,
  applications,
  image,
  imageAlt,
  imageLeft = false,
}: IndustrySectionProps) {
  return (
    <section id={id} className="py-16 md:py-24 scroll-mt-40">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
            imageLeft ? 'lg:grid-flow-dense' : ''
          }`}
        >
          {/* Image Column */}
          <SlideIn direction={imageLeft ? 'left' : 'right'}>
            <div className={`relative ${imageLeft ? 'lg:col-start-1' : 'lg:col-start-2'}`}>
              <div className="relative h-[400px] md:h-[500px] rounded-card overflow-hidden shadow-card">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                />
              </div>
            </div>
          </SlideIn>

          {/* Text Column */}
          <SlideIn direction={imageLeft ? 'right' : 'left'}>
            <div className={imageLeft ? 'lg:col-start-2' : 'lg:col-start-1'}>
              {/* Icon & Title */}
              <div className="flex items-center mb-4">
                <div className="text-brand-red mr-4">{icon}</div>
                <h2 className="font-display text-display-md font-bold text-neutral-black">
                  {name}
                </h2>
              </div>

              {/* Description */}
              <p className="text-body-lg text-neutral-mid leading-relaxed">{description}</p>

              {/* Key Research Applications */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-neutral-black mb-4">
                  Key Research Applications
                </h3>
                <ul className="space-y-3">
                  {applications.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-brand-red mr-3" />
                      <span className="text-base text-neutral-mid">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
