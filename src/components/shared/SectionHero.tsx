import React from 'react';
import Image from 'next/image';
import { SectionLabel } from './SectionLabel';
import { cn } from '@/lib/utils';

interface SectionHeroProps {
  label?: string;
  title: string;
  subtitle?: string;
  gradient?: boolean;
  centered?: boolean;
  className?: string;
  backgroundImage?: string;
  backgroundAlt?: string;
}

/**
 * Section Hero Component
 * Reusable hero section for inner pages
 */
export function SectionHero({
  label,
  title,
  subtitle,
  gradient = true,
  centered = false,
  className = '',
  backgroundImage,
  backgroundAlt = '',
}: SectionHeroProps) {
  return (
    <section
      className={cn(
        'relative py-24 md:py-32 overflow-hidden',
        !backgroundImage && gradient && 'bg-gradient-to-br from-neutral-dark via-neutral-black to-neutral-dark',
        !backgroundImage && gradient && 'texture-grain',
        className,
      )}
    >
      {/* Background Image */}
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt={backgroundAlt}
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-black/80 via-neutral-dark/70 to-neutral-black/80" />
          {/* Grain texture overlay */}
          <div className="absolute inset-0 texture-grain" />
        </>
      )}

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className={cn('max-w-4xl', centered && 'mx-auto text-center')}>
          {label && (
            <SectionLabel className={gradient || backgroundImage ? 'text-brand-red-light' : ''}>
              {label}
            </SectionLabel>
          )}
          <h1
            className={cn(
              'mt-4 font-display text-display-lg font-bold',
              gradient || backgroundImage ? 'text-white' : 'text-neutral-black',
            )}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={cn(
                'mt-6 text-body-lg',
                gradient || backgroundImage ? 'text-neutral-light' : 'text-neutral-mid',
              )}
            >
              {subtitle}
            </p>
          )}
          {(gradient || backgroundImage) && (
            <div className="mt-8 h-1 w-24 bg-brand-red" aria-hidden="true" />
          )}
        </div>
      </div>
    </section>
  );
}
