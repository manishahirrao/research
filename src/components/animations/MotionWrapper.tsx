'use client';

import React from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface MotionWrapperProps {
  children: React.ReactNode;
}

/**
 * Motion Wrapper HOC
 * Wraps children and respects user's reduced motion preference
 * If reduced motion is preferred, renders children without animation wrapper
 */
export function MotionWrapper({ children }: MotionWrapperProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return <>{children}</>;
}
