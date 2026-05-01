import React from 'react';
import { contactInfo } from '@/lib/constants';

/**
 * Contact Info Component
 * Displays contact information and details
 */
export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-display-md font-bold text-neutral-black mb-4">
          Get in Touch
        </h2>
        <p className="text-body-lg text-neutral-mid leading-relaxed">
          Ready to transform your data into strategic advantage? We'd love to hear about your
          research needs and explore how we can help.
        </p>
      </div>

      {/* Contact Details */}
      <div className="space-y-6">
        {/* Phone */}
        <div className="flex items-start">
          <div className="flex-shrink-0 w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center">
            <svg
              className="w-6 h-6 text-brand-red"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <div className="ml-4">
            <h3 className="text-sm font-semibold text-neutral-black mb-1">Phone</h3>
            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
              className="text-body-md text-brand-red hover:text-brand-red-dark transition-colors"
            >
              {contactInfo.phone}
            </a>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start">
          <div className="flex-shrink-0 w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center">
            <svg
              className="w-6 h-6 text-brand-red"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div className="ml-4">
            <h3 className="text-sm font-semibold text-neutral-black mb-1">Address</h3>
            <p className="text-body-md text-neutral-mid">{contactInfo.address}</p>
          </div>
        </div>

        {/* Website */}
        <div className="flex items-start">
          <div className="flex-shrink-0 w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center">
            <svg
              className="w-6 h-6 text-brand-red"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
          </div>
          <div className="ml-4">
            <h3 className="text-sm font-semibold text-neutral-black mb-1">Website</h3>
            <p className="text-body-md text-neutral-mid">{contactInfo.website}</p>
          </div>
        </div>
      </div>

      {/* Additional Info Card */}
      <div className="mt-8 p-6 bg-neutral-light rounded-card">
        <h3 className="font-semibold text-neutral-black mb-2">What to Expect</h3>
        <ul className="space-y-2 text-sm text-neutral-mid">
          <li className="flex items-start">
            <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-brand-red mr-3" />
            <span>We'll respond within 24 hours</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-brand-red mr-3" />
            <span>Initial consultation is always complimentary</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-brand-red mr-3" />
            <span>We'll discuss your needs and recommend the right approach</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-brand-red mr-3" />
            <span>All conversations are confidential</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
