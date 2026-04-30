import Link from 'next/link';
import { Button } from '@/components/shared/Button';

/**
 * Custom 404 Not Found Page
 * Displayed when a page cannot be found
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Number */}
        <h1 className="font-display text-[120px] md:text-[180px] font-bold text-brand-red leading-none mb-4">
          404
        </h1>

        {/* Message */}
        <h2 className="font-display text-display-md font-bold text-neutral-black mb-4">
          Page Not Found
        </h2>
        <p className="text-body-lg text-neutral-mid mb-8 max-w-lg mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get you back on
          track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild href="/" variant="primary" size="md">
            Go Home
          </Button>
          <Button asChild href="/insights" variant="secondary" size="md">
            View Our Insights
          </Button>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-neutral-border">
          <p className="text-sm text-neutral-mid mb-4">You might be looking for:</p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link href="/about" className="text-brand-red hover:text-brand-red-dark">
              About Us
            </Link>
            <span className="text-neutral-border">•</span>
            <Link href="/services" className="text-brand-red hover:text-brand-red-dark">
              Services
            </Link>
            <span className="text-neutral-border">•</span>
            <Link href="/industries" className="text-brand-red hover:text-brand-red-dark">
              Industries
            </Link>
            <span className="text-neutral-border">•</span>
            <Link href="/contact" className="text-brand-red hover:text-brand-red-dark">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
