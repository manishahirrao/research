'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, type ContactFormData, type FormStatus } from '@/lib/validation';

/**
 * Contact Form Component
 * Full-featured contact form with validation, error handling, and success states
 */
export function ContactForm() {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
    setFocus,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: ContactFormData) => {
    setFormStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        if (response.status === 400 && result.fieldErrors) {
          // Map field errors back to form
          Object.entries(result.fieldErrors).forEach(([field, messages]) => {
            if (Array.isArray(messages) && messages.length > 0) {
              setError(field as keyof ContactFormData, {
                type: 'server',
                message: messages[0],
              });
            }
          });
          setFormStatus('error');
          // Focus first error field
          const firstErrorField = Object.keys(result.fieldErrors)[0] as keyof ContactFormData;
          setFocus(firstErrorField);
        } else {
          setFormStatus('error');
        }
        return;
      }

      // Success
      setFormStatus('success');
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
    }
  };

  return (
    <div className="bg-white rounded-card shadow-card p-8">
      <h2 className="font-display text-display-md font-bold text-neutral-black mb-6">
        Send Us a Message
      </h2>

      {/* Success Message */}
      {formStatus === 'success' && (
        <div
          className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
          role="status"
          aria-live="polite"
        >
          <div className="flex items-start">
            {/* Success Checkmark */}
            <svg
              className="w-6 h-6 text-green-600 mr-3 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <h3 className="font-semibold text-green-900 mb-1">Message Sent Successfully!</h3>
              <p className="text-sm text-green-800">
                Thank you for reaching out. We'll get back to you within 24 hours.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Error Message */}
      {formStatus === 'error' && (
        <div
          className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
          role="alert"
          aria-live="assertive"
        >
          <div className="flex items-start">
            <svg
              className="w-6 h-6 text-red-600 mr-3 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <h3 className="font-semibold text-red-900 mb-1">Something Went Wrong</h3>
              <p className="text-sm text-red-800">
                Please check your information and try again. If the problem persists, email us
                directly at{' '}
                <a href="mailto:hello@sugoiinsights.com" className="underline">
                  hello@sugoiinsights.com
                </a>
              </p>
            </div>
          </div>
          <button
            onClick={() => setFormStatus('idle')}
            className="mt-3 text-sm font-medium text-red-700 hover:text-red-900 underline"
          >
            Try Again
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Name Field */}
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-medium text-neutral-black mb-2">
            Name <span className="text-brand-red">*</span>
          </label>
          <input
            type="text"
            id="name"
            {...register('name')}
            className={`w-full px-4 py-3 border rounded-lg transition-colors ${
              errors.name
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                : 'border-neutral-border focus:border-brand-red focus:ring-brand-red'
            } focus:outline-none focus:ring-2`}
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-2 text-sm text-red-600" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-neutral-black mb-2">
            Email <span className="text-brand-red">*</span>
          </label>
          <input
            type="email"
            id="email"
            {...register('email')}
            className={`w-full px-4 py-3 border rounded-lg transition-colors ${
              errors.email
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                : 'border-neutral-border focus:border-brand-red focus:ring-brand-red'
            } focus:outline-none focus:ring-2`}
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-2 text-sm text-red-600" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Company Field */}
        <div className="mb-6">
          <label htmlFor="company" className="block text-sm font-medium text-neutral-black mb-2">
            Company <span className="text-brand-red">*</span>
          </label>
          <input
            type="text"
            id="company"
            {...register('company')}
            className={`w-full px-4 py-3 border rounded-lg transition-colors ${
              errors.company
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                : 'border-neutral-border focus:border-brand-red focus:ring-brand-red'
            } focus:outline-none focus:ring-2`}
            aria-invalid={errors.company ? 'true' : 'false'}
            aria-describedby={errors.company ? 'company-error' : undefined}
          />
          {errors.company && (
            <p id="company-error" className="mt-2 text-sm text-red-600" role="alert">
              {errors.company.message}
            </p>
          )}
        </div>

        {/* Phone Field (Optional) */}
        <div className="mb-6">
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-black mb-2">
            Phone <span className="text-neutral-muted text-xs">(Optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone')}
            className={`w-full px-4 py-3 border rounded-lg transition-colors ${
              errors.phone
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                : 'border-neutral-border focus:border-brand-red focus:ring-brand-red'
            } focus:outline-none focus:ring-2`}
            aria-invalid={errors.phone ? 'true' : 'false'}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-2 text-sm text-red-600" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Industry Field */}
        <div className="mb-6">
          <label htmlFor="industry" className="block text-sm font-medium text-neutral-black mb-2">
            Industry <span className="text-brand-red">*</span>
          </label>
          <select
            id="industry"
            {...register('industry')}
            className={`w-full px-4 py-3 border rounded-lg transition-colors ${
              errors.industry
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                : 'border-neutral-border focus:border-brand-red focus:ring-brand-red'
            } focus:outline-none focus:ring-2`}
            aria-invalid={errors.industry ? 'true' : 'false'}
            aria-describedby={errors.industry ? 'industry-error' : undefined}
          >
            <option value="">Select an industry</option>
            <option value="FMCG">FMCG</option>
            <option value="Media & Entertainment">Media & Entertainment</option>
            <option value="Cosmetics & Personal Care">Cosmetics & Personal Care</option>
            <option value="Automotive">Automotive</option>
            <option value="Real Estate">Real Estate</option>
            <option value="Other">Other</option>
          </select>
          {errors.industry && (
            <p id="industry-error" className="mt-2 text-sm text-red-600" role="alert">
              {errors.industry.message}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-neutral-black mb-2">
            Message <span className="text-brand-red">*</span>
          </label>
          <textarea
            id="message"
            rows={6}
            {...register('message')}
            className={`w-full px-4 py-3 border rounded-lg transition-colors resize-none ${
              errors.message
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                : 'border-neutral-border focus:border-brand-red focus:ring-brand-red'
            } focus:outline-none focus:ring-2`}
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-2 text-sm text-red-600" role="alert">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting || formStatus === 'loading'}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {formStatus === 'loading' ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
  );
}
