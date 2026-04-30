import React from 'react';
import { cn } from '@/lib/utils';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Section Label Component
 * Small uppercase red label for section headers
 */
export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return <span className={cn('section-label', className)}>{children}</span>;
}
