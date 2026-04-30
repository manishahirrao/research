'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/shared/Logo';
import { Navigation } from './Navigation';
import { Button } from '@/components/shared/Button';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { cn } from '@/lib/utils';

interface HeaderProps {
  transparent?: boolean;
}

/**
 * Header Component
 * Sticky header with scroll-based styling and mobile drawer
 */
export function Header({ transparent = false }: HeaderProps) {
  const scrolled = useScrollPosition(80);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Determine header styling based on scroll and transparent prop
  const isTransparent = transparent && !scrolled;
  const logoVariant = isTransparent ? 'white' : 'default';
  const navVariant = isTransparent ? 'light' : 'dark';

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        isTransparent
          ? 'bg-transparent text-white'
          : 'bg-white text-neutral-dark shadow-sm',
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Logo variant={logoVariant} height={24} />
          </Link>

          {/* Desktop Navigation */}
          <Navigation variant={navVariant} />

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button asChild href="/contact" variant="primary" size="sm">
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg hover:bg-neutral-light transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Simple version for now, will be enhanced with MobileDrawer in task 2.4 */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-border bg-white">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-2 text-base font-medium text-neutral-dark hover:text-brand-red transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <Button asChild href="/contact" variant="primary" className="w-full">
                  Get in Touch
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

// Import navItems for mobile menu
import { navItems } from '@/lib/constants';
