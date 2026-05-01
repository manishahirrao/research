'use client';

import React, { useState } from 'react';

interface ShareButtonsProps {
  title: string;
  url: string;
}

/**
 * Share Buttons Component
 * Copy-link sharing for articles
 */
export function ShareButtons({ title: _title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy link:', error);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-medium text-neutral-mid">Share:</span>

      {/* Copy Link */}
      <button
        onClick={handleCopyLink}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-light hover:bg-brand-red hover:text-white transition-colors duration-200 text-sm font-medium"
        aria-label="Copy link to clipboard"
      >
        {copied ? (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Copied!
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            Copy Link
          </>
        )}
      </button>

      {copied && (
        <span className="text-sm text-brand-red font-medium" role="status" aria-live="polite">
          Link copied to clipboard
        </span>
      )}
    </div>
  );
}
