'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface CountUpProps {
  target: number;
  suffix?: string;
  duration?: number;
  label: string;
  className?: string;
}

/**
 * Count Up Animation Component
 * Animates numbers from 0 to target on scroll entry
 */
export function CountUp({
  target,
  suffix = '',
  duration = 2,
  label,
  className = '',
}: CountUpProps) {
  const prefersReducedMotion = useReducedMotion();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, target, {
        duration: prefersReducedMotion ? 0 : duration,
        ease: 'easeOut',
      });

      return controls.stop;
    }
  }, [inView, target, duration, count, prefersReducedMotion]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      setDisplayValue(latest);
    });

    return unsubscribe;
  }, [rounded]);

  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={className}>
        <div className="font-display text-display-lg font-bold text-brand-red">
          {inView ? target : 0}
          {suffix}
        </div>
        <div className="mt-2 text-base text-neutral-mid font-medium">{label}</div>
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      <div className="font-display text-display-lg font-bold text-brand-red">
        {displayValue}
        {suffix}
      </div>
      <div className="mt-2 text-base text-neutral-mid font-medium">{label}</div>
    </motion.div>
  );
}
