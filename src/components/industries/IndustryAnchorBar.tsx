'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface Industry {
  id: string;
  name: string;
}

const industries: Industry[] = [
  { id: 'fmcg', name: 'FMCG' },
  { id: 'media', name: 'Media' },
  { id: 'cosmetics', name: 'Cosmetics' },
  { id: 'automotive', name: 'Automotive' },
  { id: 'real-estate', name: 'Real Estate' },
  { id: 'fashion', name: 'Fashion' },
  { id: 'machine-tools', name: 'Machine Tools' },
  { id: 'aerospace', name: 'Aerospace' },
  { id: 'food-beverage', name: 'Food & Beverage' },
  { id: 'sports-equipment', name: 'Sports Equipment' },
  { id: 'woodcutting-machinery', name: 'Woodcutting' },
  { id: 'furniture', name: 'Furniture' },
  { id: 'oil-gas', name: 'Oil & Gas' },
  { id: 'plastics', name: 'Plastics' },
  { id: 'ceramics-glass', name: 'Ceramics & Glass' },
  { id: 'jewellery', name: 'Jewellery' },
];

/**
 * Industry Anchor Bar Component
 * Sticky sub-navigation with active section detection
 */
export function IndustryAnchorBar() {
  const [activeSection, setActiveSection] = useState<string>('fmcg');

  useEffect(() => {
    const handleScroll = () => {
      const sections = industries.map((industry) => ({
        id: industry.id,
        element: document.getElementById(industry.id),
      }));

      // Find the section that's currently in view
      const currentSection = sections.find((section) => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 200 && rect.bottom >= 200;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 160; // Account for sticky header + anchor bar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className="sticky top-20 z-40 bg-white border-b border-neutral-border shadow-sm"
      aria-label="Industry navigation"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => handleClick(industry.id)}
              className={cn(
                'px-3 py-2 rounded-pill text-xs md:text-sm font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0',
                activeSection === industry.id
                  ? 'bg-brand-red text-white'
                  : 'bg-neutral-light text-neutral-mid hover:bg-neutral-border hover:text-neutral-black',
              )}
              aria-current={activeSection === industry.id ? 'true' : undefined}
            >
              {industry.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
