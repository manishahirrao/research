'use client';

import { useEffect, useState } from 'react';

/**
 * Hook to track scroll position
 * Returns true when scrolled past threshold
 */
export function useScrollPosition(threshold: number = 80): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > threshold;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled, threshold]);

  return scrolled;
}
