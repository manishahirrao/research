import React from 'react';
import { cn } from '@/lib/utils';

interface TagProps {
  label: string;
  variant?: 'default' | 'red';
  className?: string;
}

/**
 * Tag Component
 * Pill-shaped tag chip for categories and labels
 */
export function Tag({ label, variant = 'default', className = '' }: TagProps) {
  const baseStyles = 'inline-flex items-center px-3 py-1 text-xs font-medium rounded-pill';

  const variantStyles = {
    default: 'bg-neutral-light text-neutral-mid',
    red: 'bg-brand-red text-white',
  };

  return <span className={cn(baseStyles, variantStyles[variant], className)}>{label}</span>;
}
