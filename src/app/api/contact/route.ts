import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validation';

/**
 * Contact Form API Route
 * Handles form submissions with validation and email sending
 */
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate with Zod schema
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      // Return validation errors
      return NextResponse.json(
        {
          success: false,
          fieldErrors: result.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    // Extract validated data
    const { name, email, company, phone, industry, message } = result.data;

    // Add metadata
    const timestamp = new Date().toISOString();
    const userAgent = request.headers.get('user-agent') || 'Unknown';

    // Log submission (in production, this would send an email via Resend or similar)
    console.log('=== Contact Form Submission ===');
    console.log('Timestamp:', timestamp);
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Company:', company);
    console.log('Phone:', phone || 'Not provided');
    console.log('Industry:', industry);
    console.log('Message:', message);
    console.log('User Agent:', userAgent);
    console.log('==============================');

    // TODO: In production, send email via Resend
    // Example:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'contact@sugoiinsights.com',
    //   to: process.env.CONTACT_EMAIL || 'hello@sugoiinsights.com',
    //   subject: `New Contact Form Submission from ${name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Company:</strong> ${company}</p>
    //     <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
    //     <p><strong>Industry:</strong> ${industry}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message.replace(/\n/g, '<br>')}</p>
    //     <hr>
    //     <p><small>Submitted: ${timestamp}</small></p>
    //   `,
    // });

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message. We will get back to you within 24 hours.',
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('Contact form error:', error);

    // Return generic error
    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected error occurred. Please try again later.',
      },
      { status: 500 },
    );
  }
}

// Handle non-POST requests
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}

export async function PUT() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}

export async function DELETE() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}

export async function PATCH() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
