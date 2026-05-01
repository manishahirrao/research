import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactSchema } from '@/lib/validation';

/**
 * Contact Form API Route
 * Validates form data and sends email notification via Resend
 */
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate with Zod schema
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          fieldErrors: result.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const { name, email, company, phone, industry, message } = result.data;
    const timestamp = new Date().toISOString();
    const userAgent = request.headers.get('user-agent') || 'Unknown';

    // Check for Resend API key
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL || 'arun.pandey@sugoi-insights.com';

    if (!resendApiKey || resendApiKey === 'your_resend_api_key_here') {
      // Dev fallback — log to console if no API key configured
      console.log('=== Contact Form Submission (No Resend key configured) ===');
      console.log('Timestamp:', timestamp);
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Company:', company);
      console.log('Phone:', phone || 'Not provided');
      console.log('Industry:', industry);
      console.log('Message:', message);
      console.log('=========================================================');

      return NextResponse.json(
        {
          success: true,
          message: 'Thank you for your message. We will get back to you within 24 hours.',
        },
        { status: 200 },
      );
    }

    const resend = new Resend(resendApiKey);

    // Send notification email to Sugoi Insights
    await resend.emails.send({
      from: 'Sugoi Insights Website <contact@sugoi-insights.com>',
      to: [contactEmail],
      replyTo: email,
      subject: `New Enquiry from ${name} — ${company} (${industry})`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>New Contact Form Submission</title>
          </head>
          <body style="margin:0;padding:0;background:#f5f5f5;font-family:'DM Sans',Arial,sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:40px 0;">
              <tr>
                <td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 4px 16px rgba(0,0,0,0.08);">
                    
                    <!-- Header -->
                    <tr>
                      <td style="background:#C8102E;padding:32px 40px;">
                        <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.5px;">
                          New Contact Form Enquiry
                        </h1>
                        <p style="margin:8px 0 0;color:rgba(255,255,255,0.85);font-size:14px;">
                          Received: ${new Date(timestamp).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
                        </p>
                      </td>
                    </tr>

                    <!-- Body -->
                    <tr>
                      <td style="padding:40px;">
                        
                        <!-- Contact Details -->
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding-bottom:24px;">
                              <p style="margin:0 0 4px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#767676;">Name</p>
                              <p style="margin:0;font-size:16px;color:#0A0A0A;font-weight:500;">${name}</p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding-bottom:24px;">
                              <p style="margin:0 0 4px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#767676;">Email</p>
                              <p style="margin:0;font-size:16px;color:#C8102E;">
                                <a href="mailto:${email}" style="color:#C8102E;text-decoration:none;">${email}</a>
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding-bottom:24px;">
                              <p style="margin:0 0 4px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#767676;">Company</p>
                              <p style="margin:0;font-size:16px;color:#0A0A0A;font-weight:500;">${company}</p>
                            </td>
                          </tr>
                          ${
                            phone
                              ? `
                          <tr>
                            <td style="padding-bottom:24px;">
                              <p style="margin:0 0 4px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#767676;">Phone</p>
                              <p style="margin:0;font-size:16px;color:#0A0A0A;font-weight:500;">
                                <a href="tel:${phone}" style="color:#C8102E;text-decoration:none;">${phone}</a>
                              </p>
                            </td>
                          </tr>`
                              : ''
                          }
                          <tr>
                            <td style="padding-bottom:24px;">
                              <p style="margin:0 0 4px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#767676;">Industry</p>
                              <p style="margin:0;">
                                <span style="display:inline-block;background:#C8102E;color:#ffffff;font-size:13px;font-weight:600;padding:4px 12px;border-radius:9999px;">${industry}</span>
                              </p>
                            </td>
                          </tr>
                        </table>

                        <!-- Divider -->
                        <hr style="border:none;border-top:1px solid #E2E2E2;margin:8px 0 24px;" />

                        <!-- Message -->
                        <p style="margin:0 0 8px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#767676;">Message</p>
                        <div style="background:#F5F5F5;border-left:3px solid #C8102E;border-radius:4px;padding:16px 20px;">
                          <p style="margin:0;font-size:15px;color:#1A1A1A;line-height:1.7;white-space:pre-wrap;">${message}</p>
                        </div>

                        <!-- Reply CTA -->
                        <div style="margin-top:32px;text-align:center;">
                          <a href="mailto:${email}?subject=Re: Your enquiry to Sugoi Insights"
                             style="display:inline-block;background:#C8102E;color:#ffffff;font-size:15px;font-weight:600;padding:14px 32px;border-radius:8px;text-decoration:none;">
                            Reply to ${name}
                          </a>
                        </div>

                      </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                      <td style="background:#F5F5F5;padding:20px 40px;border-top:1px solid #E2E2E2;">
                        <p style="margin:0;font-size:12px;color:#767676;text-align:center;">
                          This message was submitted via the contact form on sugoi-insights.com
                          &nbsp;·&nbsp; User Agent: ${userAgent.substring(0, 80)}
                        </p>
                      </td>
                    </tr>

                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    // Send auto-reply to the person who submitted
    await resend.emails.send({
      from: 'Sugoi Insights <arun.pandey@sugoi-insights.com>',
      to: [email],
      subject: 'We received your message — Sugoi Insights',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </head>
          <body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:40px 0;">
              <tr>
                <td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 4px 16px rgba(0,0,0,0.08);">
                    
                    <!-- Header -->
                    <tr>
                      <td style="background:#C8102E;padding:32px 40px;text-align:center;">
                        <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;">Sugoi Insights</h1>
                        <p style="margin:6px 0 0;color:rgba(255,255,255,0.85);font-size:13px;">Market Research Agency</p>
                      </td>
                    </tr>

                    <!-- Body -->
                    <tr>
                      <td style="padding:40px;">
                        <h2 style="margin:0 0 16px;font-size:20px;color:#0A0A0A;">Hi ${name},</h2>
                        <p style="margin:0 0 16px;font-size:15px;color:#4A4A4A;line-height:1.7;">
                          Thank you for reaching out to us. We've received your message and our team will review it shortly.
                        </p>
                        <p style="margin:0 0 24px;font-size:15px;color:#4A4A4A;line-height:1.7;">
                          We typically respond within <strong>24 hours</strong> on business days. In the meantime, feel free to explore our latest insights and research.
                        </p>

                        <!-- Summary box -->
                        <div style="background:#F5F5F5;border-radius:8px;padding:20px 24px;margin-bottom:32px;">
                          <p style="margin:0 0 12px;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#767676;">Your Submission Summary</p>
                          <p style="margin:0 0 6px;font-size:14px;color:#1A1A1A;"><strong>Company:</strong> ${company}</p>
                          <p style="margin:0 0 6px;font-size:14px;color:#1A1A1A;"><strong>Industry:</strong> ${industry}</p>
                          <p style="margin:0;font-size:14px;color:#1A1A1A;"><strong>Submitted:</strong> ${new Date(timestamp).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
                        </div>

                        <div style="text-align:center;">
                          <a href="https://sugoi-insights.com/insights"
                             style="display:inline-block;background:#C8102E;color:#ffffff;font-size:15px;font-weight:600;padding:14px 32px;border-radius:8px;text-decoration:none;">
                            Explore Our Insights
                          </a>
                        </div>
                      </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                      <td style="background:#1A1A1A;padding:24px 40px;text-align:center;">
                        <p style="margin:0 0 4px;font-size:13px;color:rgba(255,255,255,0.7);">Sugoi Insights</p>
                        <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.4);">
                          Office no:118, 1st Floor, Sonal Shopping Mall, Station Road, Nallasopara(W), Mumbai - 401203
                        </p>
                      </td>
                    </tr>

                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message. We will get back to you within 24 hours.',
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('Contact form error:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected error occurred. Please try again later.',
      },
      { status: 500 },
    );
  }
}

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
