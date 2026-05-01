import type { Metadata } from 'next';
import { SectionHero } from '@/components/shared/SectionHero';

export const metadata: Metadata = {
  title: 'Privacy Policy | Sugoi Insights',
  description:
    'Learn how Sugoi Insights collects, uses, and protects your personal information. Our commitment to data privacy and security.',
  openGraph: {
    title: 'Privacy Policy | Sugoi Insights',
    description:
      'Learn how Sugoi Insights collects, uses, and protects your personal information.',
    type: 'website',
    url: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <SectionHero
        label="Legal"
        title="Privacy Policy"
        subtitle="Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information."
        gradient={true}
        centered={false}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-sugoi">
            <p className="text-neutral-mid text-body-md mb-8">
              <strong>Last Updated:</strong> May 1, 2026
            </p>

            <h2 className="font-display text-display-sm text-neutral-black mt-12 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-neutral-mid text-body-md leading-relaxed mb-6">
              We collect information that you provide directly to us when you use our services,
              including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-mid text-body-md mb-6">
              <li>
                <strong>Contact Information:</strong> Name, email address, phone number, company
                name, and job title
              </li>
              <li>
                <strong>Communication Data:</strong> Messages, inquiries, and feedback you send to
                us
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you interact with our website,
                including IP address, browser type, and pages visited
              </li>
              <li>
                <strong>Cookies and Tracking:</strong> Data collected through cookies and similar
                technologies (see our Cookie Policy)
              </li>
            </ul>

            <h2 className="font-display text-display-sm text-neutral-black mt-12 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-neutral-mid text-body-md leading-relaxed mb-6">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-mid text-body-md mb-6">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Deliver our market research services and communicate about projects</li>
              <li>Send you relevant insights, updates, and marketing communications</li>
              <li>Improve our website, services, and user experience</li>
              <li>Comply with legal obligations and protect our rights</li>
              <li>Analyze usage patterns and optimize our digital presence</li>
            </ul>

            <h2 className="font-display text-display-sm text-neutral-black mt-12 mb-4">
              3. Information Sharing and Disclosure
            </h2>
            <p className="text-neutral-mid text-body-md leading-relaxed mb-6">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-mid text-body-md mb-6">
              <li>
                <strong>Service Providers:</strong> Third-party vendors who assist us in operating
                our website and delivering services
              </li>
              <li>
                <strong>Business Partners:</strong> With your consent, for collaborative research
                projects
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to protect our rights
                and safety
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with a merger, acquisition, or
                sale of assets
              </li>
            </ul>

            <h2 className="font-display text-display-sm text-neutral-black mt-12 mb-4">
              4. Data Security
            </h2>
            <p className="text-neutral-mid text-body-md leading-relaxed mb-6">
              We implement appropriate technical and organizational measures to protect your
              personal information against unauthorized access, alteration, disclosure, or
              destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-mid text-body-md mb-6">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication procedures</li>
              <li>Employee training on data protection practices</li>
            </ul>

            <h2 className="font-display text-display-sm text-neutral-black mt-12 mb-4">
              5. Your Rights and Choices
            </h2>
            <p className="text-neutral-mid text-body-md leading-relaxed mb-6">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-mid text-body-md mb-6">
              <li>
                <strong>Access:</strong> Request a copy of the personal information we hold about
                you
              </li>
              <li>
                <strong>Correction:</strong> Request correction of inaccurate or incomplete
                information
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your personal information, subject to
                legal obligations
              </li>
              <li>
                <strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time
              </li>
              <li>
                <strong>Data Portability:</strong> Request transfer of your data to another service
                provider
              </li>
            </ul>
            <p className="text-neutral-mid text-body-md leading-relaxed mb-6">
              To exercise these rights, please contact us by phone at{' '}
              <a
                href="tel:+917304275983"
                className="text-brand-red hover:text-brand-red-dark underline"
              >
                +91 7304275983
              </a>
              .
            </p>

            <h2 className="font-display text-display-sm text-neutral-black mt-12 mb-4">
              6. Cookies and Tracking Technologies
            </h2>
            <p className="text-neutral-mid text-body-md leading-relaxed mb-6">
              We use cookies and similar tracking technologies to enhance your experience on our
              website. For detailed information about our use of cookies, please see our{' '}
              <a href="/cookie-policy" className="text-brand-red hover:text-brand-red-dark underline">
                Cookie Policy
              </a>
              .
            </p>

            <h2 className="font-display text-display-sm text-neutral-black mt-12 mb-4">
              7. International Data Transfers
            </h2>
            <p className="text-neutral-mid text-body-md leading-relaxed mb-6">
              Your information may be transferred to and processed in countries other than your
              country of residence. We ensure appropriate safeguards are in place to protect your
              information in accordance with this Privacy Policy and applicable data protection
              laws.
            </p>

            <h2 className="font-display text-display-sm text-neutral-black mt-12 mb-4">
              8. Children's Privacy
            </h2>
            <p className="text-neutral-mid text-body-md leading-relaxed mb-6">
              Our services are not directed to individuals under the age of 18. We do not knowingly
              collect personal information from children. If you believe we have collected
              information from a child, please contact us immediately.
            </p>

            <h2 className="font-display text-display-sm text-neutral-black mt-12 mb-4">
              9. Changes to This Policy
            </h2>
            <p className="text-neutral-mid text-body-md leading-relaxed mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any
              material changes by posting the new policy on this page and updating the "Last
              Updated" date. Your continued use of our services after such changes constitutes
              acceptance of the updated policy.
            </p>

            <h2 className="font-display text-display-sm text-neutral-black mt-12 mb-4">
              10. Contact Us
            </h2>
            <p className="text-neutral-mid text-body-md leading-relaxed mb-6">
              If you have any questions about this Privacy Policy or our data practices, please
              contact us:
            </p>
            <div className="bg-neutral-light p-6 rounded-card mb-6">
              <p className="text-neutral-black text-body-md mb-2">
                <strong>Sugoi Insights</strong>
              </p>
              <p className="text-neutral-mid text-body-sm mb-1">
                Office no:118, 1st Floor, Sonal Shopping Mall
              </p>
              <p className="text-neutral-mid text-body-sm mb-1">
                Station Road, Nallasopara(W), Mumbai - 401203
              </p>
              <p className="text-neutral-mid text-body-sm">Phone: +91 7304275983</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
