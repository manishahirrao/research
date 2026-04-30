'use client';

import { useEffect } from 'react';
import { Button } from '@/components/shared/Button';

/**
 * Custom Error Page
 * Displayed when an error occurs during rendering
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console in development
    console.error('Error boundary caught:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        {/* Error Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 rounded-full bg-red-50 flex items-center justify-center">
            <svg
              className="w-12 h-12 text-brand-red"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        </div>

        {/* Message */}
        <h1 className="font-display text-display-md font-bold text-neutral-black mb-4">
          Something Went Wrong
        </h1>
        <p className="text-body-lg text-neutral-mid mb-8 max-w-lg mx-auto">
          We encountered an unexpected error. This has been logged and we'll look into it. Please
          try again or return to the home page.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="btn-primary"
          >
            Try Again
          </button>
          <Button asChild href="/" variant="secondary" size="md">
            Go Home
          </Button>
        </div>

        {/* Error Details (Development Only) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-12 p-6 bg-neutral-light rounded-card text-left">
            <h3 className="text-sm font-semibold text-neutral-black mb-2">
              Error Details (Development Only)
            </h3>
            <pre className="text-xs text-neutral-mid overflow-x-auto">
              {error.message}
              {error.digest && `\nDigest: ${error.digest}`}
            </pre>
          </div>
        )}

        {/* Support Info */}
        <div className="mt-12 pt-8 border-t border-neutral-border">
          <p className="text-sm text-neutral-mid">
            If this problem persists, please{' '}
            <a href="/contact" className="text-brand-red hover:text-brand-red-dark underline">
              contact our support team
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
