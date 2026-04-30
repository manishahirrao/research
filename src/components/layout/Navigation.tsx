'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { navItems } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface NavigationProps {
  variant?: 'light' | 'dark';
  className?: string;
}

/**
 * Desktop Navigation Component
 * Displays navigation links with animated active indicator
 */
export function Navigation({ variant = 'dark', className = '' }: NavigationProps) {
  const pathname = usePathname();

  const linkColor = variant === 'light' ? 'text-white' : 'text-neutral-dark';
  const hoverColor = 'hover:text-brand-red';

  return (
    <nav aria-label="Main navigation" className={cn('hidden md:block', className)}>
      <ul className="flex items-center space-x-8">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  'relative py-2 text-sm font-medium transition-colors duration-200',
                  linkColor,
                  hoverColor,
                  isActive && 'text-brand-red',
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-red"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
