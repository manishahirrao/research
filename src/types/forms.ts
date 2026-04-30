/**
 * Contact Form Data Interface
 * Matches the Zod schema in validation.ts
 */
export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone?: string;
  industry: 'FMCG' | 'Media' | 'Cosmetics' | 'Automotive' | 'Real Estate' | 'Other';
  message: string;
}

/**
 * Contact Form State Interface
 */
export interface ContactFormState {
  status: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
}

/**
 * Contact Submission Interface
 * Server-side representation with metadata
 */
export interface ContactSubmission extends ContactFormData {
  timestamp: string; // ISO 8601
  userAgent?: string;
  ip?: string;
}

/**
 * API Response Interfaces
 */
export interface ContactResponse {
  success: boolean;
  message: string;
  error?: string;
  fieldErrors?: Record<string, string[]>;
}
