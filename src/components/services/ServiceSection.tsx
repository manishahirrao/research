'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { SlideIn } from '@/components/animations/SlideIn';

interface ServiceSectionProps {
  title: string;
  description: string;
  deliverables: string[];
  image: string;
  imageAlt: string;
  imageLeft?: boolean;
  ctaText?: string;
  ctaHref?: string;
}

/**
 * Service Section Component
 * Alternating image-left/right layout for service categories
 */
export function ServiceSection({
  title,
  description,
  deliverables,
  image,
  imageAlt,
  imageLeft = false,
  ctaText = 'Learn More',
  ctaHref = '/contact',
}: ServiceSectionProps) {
  return (
    <section className="py-16 md:py-24">
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
              <SectionLabel>Service</SectionLabel>
              <h2 className="mt-4 font-display text-display-md font-bold text-neutral-black">
                {title}
              </h2>

              <p className="mt-6 text-body-lg text-neutral-mid leading-relaxed">{description}</p>

              {/* Deliverables */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-neutral-black mb-4">
                  Key Deliverables
                </h3>
                <ul className="space-y-3">
                  {deliverables.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-brand-red mr-3" />
                      <span className="text-base text-neutral-mid">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Link */}
              {ctaText && ctaHref && (
                <div className="mt-8">
                  <Link
                    href={ctaHref}
                    className="inline-flex items-center text-brand-red font-medium hover:text-brand-red-dark transition-colors group"
                  >
                    {ctaText}
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
              )}
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
