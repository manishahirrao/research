'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { slideUpVariants, slideInLeftVariants, slideInRightVariants } from '@/lib/motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface SlideInProps {
  children: React.ReactNode;
  direction?: 'up' | 'left' | 'right';
  delay?: number;
  className?: string;
}

/**
 * Slide In Animation Component
 * Triggers directional slide animation when element enters viewport
 */
export function SlideIn({ children, direction = 'up', delay = 0, className = '' }: SlideInProps) {
  const prefersReducedMotion = useReducedMotion();
  const [ref, inView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const variants = {
    up: slideUpVariants,
    left: slideInLeftVariants,
    right: slideInRightVariants,
  }[direction];

  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
