import type { Metadata } from 'next';
import { SectionHero } from '@/components/shared/SectionHero';

export const metadata: Metadata = {
  title: 'Terms of Service | Sugoi Insights',
  description:
    'Read the terms and conditions governing the use of Sugoi Insights services and website. Our commitment to transparent business practices.',
  openGraph: {
    title: 'Terms of Service | Sugoi Insights',
    description:
      'Read the terms and conditions governing the use of Sugoi Insights services and website.',
    type: 'website',
    url: '/terms-of-service',
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      <SectionHero
        label="Legal"
        title="Terms of Service"
        subtitle="These terms govern your use of our services and website. Please read them carefully."
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
              1. Acceptance of Terms
            </h2>
            <p className="text-neutral-mid text-body-md leading-relaxed mb-6">
              By accessing or using the Sugoi Insights website and services, you agree to be bound
              by these Terms of Service and all applicable laws and regulations. If you do not agree
              with any of these terms, you are prohibited from using or accessing our services.
            </p>

            <h2 className="font-display text-display-sm text-neutral-black mt-12 mb-4">
              2. Description of Services
            </h2>
            <p className="text-neutral-mid text-body-md leading-relaxed mb-6">
              Sugoi Insights provides market research services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-mid text-body-md mb-6">
              <li>Research design and methodology development</li>
              <li>Data collection through qualitative and quantitative methods</li>
              <li>Advanced analytics and data interpretation</li>
              <li>Strategic recommendations and insights reporting</li>
              <li>Industry-specific research across 16 industries including FMCG, media, cosmetics, automotive, real estate, fashion, machine tools, aerospace, food & beverage, sports equipment, woodcutting machinery, furniture, oil & gas, plastics, ceramics & glass, and jewellery</li>
            </ul>

            <h2 className="font-display text-display-sm text-neutral-black mt-12 mb-4">
              3. User Obligations
            </h2>
            <p className="text-neutral-mid text-body-md leading-relaxed mb-6">
              When using our services, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-mid text-body-md mb-6">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain the confidentiality of any account credentials</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not interfere with or disrupt our services or servers</li>
              <li>Not attempt to gain unauthorized access to any part of our services</li>
              <li>Respect intellectual property rights of Sugoi Insights and third parties</li>
            </ul>

            <h2 className="font-display text-display-sm text-neutral-black mt-12 mb-4">
              4. Intellectual Property Rights
            </h2>
            <p className="text-neutral-mid text-body-md leading-relaxed mb-6">
              All content, materials, and intellectual property on this website, including but not
              limited to text, graphics, logos, images, and software, are the property of Sugoi
              Insights or its licensors and are protected by copyright, trademark, and other
              intellectual property laws.
            </p>
            <p className="text-neutral-mid text-body-md leading-relaxed mb-6">
              Research deliverables and insights provided to clients remain the intellectual
              property of Sugoi Insights unless otherwise specified in a separate written agreement.
              Clients receive a license to use the research findings for their internal business
              purposes.
            </p>

            <h2 className="font-display text-display-sm text-neutral-black mt-12 mb-4">
              5. Confidentiality
            </h2>
            <p className="text-neutral-mid text-body-md leading-relaxed mb-6">
              We maintain strict confidentiality regarding all client information and research data.
              Both parties agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-mid text-body-md mb-6">
              <li>Keep confidential information secure and not disclose it to third parties</li>
              <li>Use confidential information only for the purposes of the engagement</li>
              <li>Return or destroy confidential information upon request or completion of services</li>
            </ul>

            <h2 className="font-display text-display-sm text-neutral-black mt-12 mb-4">
              6. Payment Terms
            </h2>
            <p className="text-neutral-mid text-body-md leading-relaxed mb-6">
              Payment terms for research services will be specified in individual project proposals
              or contracts. Generally:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-mid text-body-md mb-6">
              <li>Fees are based on project scope, methodology, and timeline</li>
              <li>Payment schedules may include upfront deposits and milestone payments</li>
              <li>Invoices are due within 30 days unless otherwise agreed</li>
              <li>Late payments may incur interest charges</li>
              <li>All fees are exclusive of applicable taxes</li>
            </ul>

            <h2 className="font-display text-display-sm text-neutral-black mt-12 mb-4">
              7. Limitation of Liability
            </h2>
            <p className="text-neutral-mid text-body-md leading-relaxed mb-6">
              To the fullest extent permitted by law, Sugoi Insights shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages, or any loss of
              profits or revenues, whether incurred directly or indirectly, or any loss of data,
              use, goodwill, or other intangible losses resulting from:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-mid text-body-md mb-6">
              <li>Your use or inability to use our services</li>
              <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
              <li>Any interruption or cessation of transmission to or from our services</li>
              <li>Any bugs, viruses, or other harmful code that may be transmitted through our services</li>
            </ul>

            <h2 className="font-display text-display-sm text-neutral-black mt-12 mb-4">
              8. Warranties and Disclaimers
            </h2>
            <p className="text-neutral-mid text-body-md leading-relaxed mb-6">
              While we strive to provide accurate and reliable research insights, our services are
              provided "as is" without warranties of any kind, either express or implied. We do not
              guarantee that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-mid text-body-md mb-6">
              <li>Our services will meet your specific requirements</li>
              <li>Our services will be uninterrupted, timely, secure, or error-free</li>
              <li>The results obtained from our services will be accurate or reliable</li>
              <li>Any errors in our services will be corrected</li>
            </ul>

            <h2 className="font-display text-display-sm text-neutral-black mt-12 mb-4">
              9. Indemnification
            </h2>
            <p className="text-neutral-mid text-body-md leading-relaxed mb-6">
              You agree to indemnify, defend, and hold harmless Sugoi Insights, its officers,
              directors, employees, and agents from and against any claims, liabilities, damages,
              losses, and expenses arising out of or in any way connected with your access to or use
              of our services, or your violation of these Terms of Service.
            </p>

            <h2 className="font-display text-display-sm text-neutral-black mt-12 mb-4">
              10. Termination
            </h2>
            <p className="text-neutral-mid text-body-md leading-relaxed mb-6">
              We reserve the right to terminate or suspend your access to our services immediately,
              without prior notice or liability, for any reason, including but not limited to breach
              of these Terms of Service. Upon termination, your right to use our services will
              immediately cease.
            </p>

            <h2 className="font-display text-display-sm text-neutral-black mt-12 mb-4">
              11. Governing Law and Dispute Resolution
            </h2>
            <p className="text-neutral-mid text-body-md leading-relaxed mb-6">
              These Terms of Service shall be governed by and construed in accordance with the laws
              of India, without regard to its conflict of law provisions. Any disputes arising from
              these terms shall be subject to the exclusive jurisdiction of the courts in Mumbai,
              India.
            </p>

            <h2 className="font-display text-display-sm text-neutral-black mt-12 mb-4">
              12. Changes to Terms
            </h2>
            <p className="text-neutral-mid text-body-md leading-relaxed mb-6">
              We reserve the right to modify or replace these Terms of Service at any time. Material
              changes will be notified through our website or via email. Your continued use of our
              services after such modifications constitutes acceptance of the updated terms.
            </p>

            <h2 className="font-display text-display-sm text-neutral-black mt-12 mb-4">
              13. Severability
            </h2>
            <p className="text-neutral-mid text-body-md leading-relaxed mb-6">
              If any provision of these Terms of Service is found to be unenforceable or invalid,
              that provision will be limited or eliminated to the minimum extent necessary so that
              these terms will otherwise remain in full force and effect.
            </p>

            <h2 className="font-display text-display-sm text-neutral-black mt-12 mb-4">
              14. Contact Information
            </h2>
            <p className="text-neutral-mid text-body-md leading-relaxed mb-6">
              If you have any questions about these Terms of Service, please contact us:
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
