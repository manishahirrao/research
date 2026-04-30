import { z } from 'zod';

/**
 * Contact Form Validation Schema
 * Zod schema for validating contact form submissions
 */
export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be under 100 characters'),
  email: z.string().email('Please enter a valid business email address'),
  company: z
    .string()
    .min(2, 'Company name is required')
    .max(100, 'Company name must be under 100 characters'),
  phone: z.string().optional(),
  industry: z.enum(
    [
      'FMCG',
      'Media & Entertainment',
      'Cosmetics & Personal Care',
      'Automotive',
      'Real Estate',
      'Other',
    ],
    {
      message: 'Please select your industry',
    },
  ),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be under 2000 characters'),
});

/**
 * Type inference from Zod schema
 */
export type ContactFormData = z.infer<typeof contactSchema>;

/**
 * Contact Form State Types
 */
export type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export interface ContactFormState {
  status: FormStatus;
  message?: string;
}
