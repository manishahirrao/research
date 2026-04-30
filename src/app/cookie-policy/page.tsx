import type { Metadata } from 'next';
import { SectionHero } from '@/components/shared/SectionHero';

export const metadata: Metadata = {
  title: 'Cookie Policy | Sugoi Insights',
  description:
    'Learn about how Sugoi Insights uses cookies and similar technologies to enhance your browsing experience and analyze website usage.',
  openGraph: {
    title: 'Cookie Policy | Sugoi Insights',
    description:
      'Learn about how Sugoi Insights uses cookies and similar technologies to enhance your browsing experience.',
    type: 'website',
    url: '/cookie-policy',
  },
};

export default function CookiePolicyPage() {
  return (
    <>
      <SectionHero
        label="Legal"
        title="Cookie Policy"
        subtitle="This policy explains how we use cookies and similar technologies on our website."
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
              1. What Are Cookies?
            </h2>
            <p className="text-neutral-mid text-body-md leading-relaxed mb-6">
              Cookies are small text files that are placed on your device (computer, smartphone, or
              tablet) when you visit a website. They are widely used to make websites work more
              efficiently and provide information to website owners.
            </p>
            <p className="text-neutral-mid text-body-md leading-relaxed mb-6">
              Cookies help us understand how visitors interact with our website, remember your
              preferences, and improve your overall experience.
            </p>

            <h2 className="font-display text-display-sm text-neutral-black mt-12 mb-4">
              2. Types of Cookies We Use
            </h2>

            <h3 className="font-display text-display-xs text-neutral-black mt-8 mb-3">
              2.1 Essential Cookies
            </h3>
            <p className="text-neutral-mid text-body-md leading-relaxed mb-6">
              These cookies are necessary for the website to function properly. They enable basic
              functions like page navigation, access to secure areas, and form submissions. The
              website cannot function properly without these cookies.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-mid text-body-md mb-6">
              <li>Session management</li>
              <li>Security and authentication</li>
              <li>Load balancing</li>
            </ul>

            <h3 className="font-display text-display-xs text-neutral-black mt-8 mb-3">
              2.2 Analytics Cookies
            </h3>
            <p className="text-neutral-mid text-body-md leading-relaxed mb-6">
              These cookies help us understand how visitors interact with our website by collecting
              and reporting information anonymously. This helps us improve our website's
              performance and user experience.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-mid text-body-md mb-6">
              <li>Page views and navigation patterns</li>
              <li>Time spent on pages</li>
              <li>Traffic sources</li>
              <li>Device and browser information</li>
            </ul>

            <h3 className="font-display text-display-xs text-neutral-black mt-8 mb-3">
              2.3 Functional Cookies
            </h3>
            <p className="text-neutral-mid text-body-md leading-relaxed mb-6">
              These cookies enable enhanced functionality and personalization, such as remembering
              your preferences and choices.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-mid text-body-md mb-6">
              <li>Language preferences</li>
              <li>Region selection</li>
              <li>Accessibility settings</li>
              <li>Reduced motion preferences</li>
            </ul>

            <h3 className="font-display text-display-xs text-neutral-black mt-8 mb-3">
              2.4 Marketing Cookies
            </h3>
            <p className="text-neutral-mid text-body-md leading-relaxed mb-6">
              These cookies track your online activity to help us deliver more relevant advertising
              or to limit how many times you see an advertisement. We may share this information
              with other organizations, such as advertisers.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-mid text-body-md mb-6">
              <li>Advertising campaign effectiveness</li>
              <li>Retargeting and remarketing</li>
              <li>Social media integration</li>
            </ul>

            <h2 className="font-display text-display-sm text-neutral-black mt-12 mb-4">
              3. Third-Party Cookies
            </h2>
            <p className="text-neutral-mid text-body-md leading-relaxed mb-6">
              In addition to our own cookies, we may use various third-party cookies to report usage
              statistics and deliver advertisements. These include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-mid text-body-md mb-6">
              <li>
                <strong>Google Analytics:</strong> To analyze website traffic and user behavior
              </li>
              <li>
                <strong>Social Media Platforms:</strong> LinkedIn, Twitter, Facebook, Instagram for
                social sharing functionality
              </li>
              <li>
                <strong>Vercel Analytics:</strong> For performance monitoring and optimization
              </li>
            </ul>

            <h2 className="font-display text-display-sm text-neutral-black mt-12 mb-4">
              4. Cookie Duration
            </h2>
            <p className="text-neutral-mid text-body-md leading-relaxed mb-6">
              Cookies can be either session cookies or persistent cookies:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-mid text-body-md mb-6">
              <li>
                <strong>Session Cookies:</strong> Temporary cookies that are deleted when you close
                your browser
              </li>
              <li>
                <strong>Persistent Cookies:</strong> Remain on your device for a set period or until
                you delete them. Duration varies from a few days to several years depending on the
                cookie's purpose
              </li>
            </ul>

            <h2 className="font-display text-display-sm text-neutral-black mt-12 mb-4">
              5. How to Manage Cookies
            </h2>
            <p className="text-neutral-mid text-body-md leading-relaxed mb-6">
              You have the right to decide whether to accept or reject cookies. You can exercise
              your cookie preferences by:
            </p>

            <h3 className="font-display text-display-xs text-neutral-black mt-8 mb-3">
              Browser Settings
            </h3>
            <p className="text-neutral-mid text-body-md leading-relaxed mb-6">
              Most web browsers allow you to control cookies through their settings. You can set
              your browser to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-mid text-body-md mb-6">
              <li>Block all cookies</li>
              <li>Block third-party cookies only</li>
              <li>Delete cookies when you close your browser</li>
              <li>Notify you when a website tries to set a cookie</li>
            </ul>
            <p className="text-neutral-mid text-body-md leading-relaxed mb-6">
              Please note that blocking all cookies may impact your experience on our website and
              limit the functionality available to you.
            </p>

            <h3 className="font-display text-display-xs text-neutral-black mt-8 mb-3">
              Browser-Specific Instructions
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-neutral-mid text-body-md mb-6">
              <li>
                <strong>Chrome:</strong>{' '}
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-red hover:text-brand-red-dark underline"
                >
                  Cookie settings in Chrome
                </a>
              </li>
              <li>
                <strong>Firefox:</strong>{' '}
                <a
                  href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-red hover:text-brand-red-dark underline"
                >
                  Cookie settings in Firefox
                </a>
              </li>
              <li>
                <strong>Safari:</strong>{' '}
                <a
                  href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-red hover:text-brand-red-dark underline"
                >
                  Cookie settings in Safari
                </a>
              </li>
              <li>
                <strong>Edge:</strong>{' '}
                <a
                  href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-red hover:text-brand-red-dark underline"
                >
                  Cookie settings in Edge
                </a>
              </li>
            </ul>

            <h2 className="font-display text-display-sm text-neutral-black mt-12 mb-4">
              6. Do Not Track Signals
            </h2>
            <p className="text-neutral-mid text-body-md leading-relaxed mb-6">
              Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you
              do not want to have your online activity tracked. We respect DNT signals and will not
              track, plant cookies, or use advertising when a DNT browser mechanism is in place.
            </p>

            <h2 className="font-display text-display-sm text-neutral-black mt-12 mb-4">
              7. Changes to This Cookie Policy
            </h2>
            <p className="text-neutral-mid text-body-md leading-relaxed mb-6">
              We may update this Cookie Policy from time to time to reflect changes in our practices
              or for other operational, legal, or regulatory reasons. We will notify you of any
              material changes by posting the new policy on this page and updating the "Last
              Updated" date.
            </p>

            <h2 className="font-display text-display-sm text-neutral-black mt-12 mb-4">
              8. More Information
            </h2>
            <p className="text-neutral-mid text-body-md leading-relaxed mb-6">
              For more information about how we handle your personal data, please see our{' '}
              <a
                href="/privacy-policy"
                className="text-brand-red hover:text-brand-red-dark underline"
              >
                Privacy Policy
              </a>
              .
            </p>

            <h2 className="font-display text-display-sm text-neutral-black mt-12 mb-4">
              9. Contact Us
            </h2>
            <p className="text-neutral-mid text-body-md leading-relaxed mb-6">
              If you have any questions about our use of cookies, please contact us:
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
              <p className="text-neutral-mid text-body-sm mb-1">
                Email:{' '}
                <a
                  href="mailto:apresearchbusiness@gmail.com"
                  className="text-brand-red hover:text-brand-red-dark underline"
                >
                  apresearchbusiness@gmail.com
                </a>
              </p>
              <p className="text-neutral-mid text-body-sm">Phone: +91 7304275983</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
