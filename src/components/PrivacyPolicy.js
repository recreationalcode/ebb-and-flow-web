'use client';

import Section from './Section';

export default function PrivacyPolicy() {
  return (
      <Section ariaLabel="Privacy Policy" className="flex flex-col items-center">
        <h1 className="font-script text-5xl sm:text-6xl text-purple mb-10">
          Privacy Policy
        </h1>
        <div className="max-w-xl space-y-6 text-sm font-light text-gray-700 leading-relaxed text-left">
          <p className="text-xs text-gray-500">
            Effective date: March 18, 2026
          </p>

          <div>
            <h2 className="text-base font-semibold text-gray-800 mb-2">
              Information We Collect
            </h2>
            <p>
              When you contact us by phone, text, or email, we may collect your
              name, phone number, and email address. We use this information
              solely to respond to your inquiry and schedule appointments.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-gray-800 mb-2">
              How We Use Your Information
            </h2>
            <p>
              Your information is used to communicate with you about
              appointments, provide massage therapy services, and respond to your
              questions. We do not sell, rent, or share your personal information
              with third parties for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-gray-800 mb-2">
              Third-Party Services
            </h2>
            <p>
              We use Jane App for online booking and gift cards. When you use
              these services, your information is subject to Jane App's privacy
              policy. We also use Google Analytics and Vercel Analytics to
              understand how visitors use our website. These services collect
              anonymous usage data.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-gray-800 mb-2">
              Cookies and Tracking
            </h2>
            <p>
              Our website uses cookies and similar technologies for analytics
              purposes. You can disable cookies through your browser settings,
              though this may affect your experience on the site.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-gray-800 mb-2">
              Data Security
            </h2>
            <p>
              We take reasonable measures to protect your personal information.
              However, no method of transmission over the internet is completely
              secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-gray-800 mb-2">
              Contact Us
            </h2>
            <p>
              If you have questions about this privacy policy, please contact us
              at{' '}
              <a
                href="mailto:nat@ebbandflowmassagestudio.com"
                className="text-blue underline underline-offset-2">
                nat@ebbandflowmassagestudio.com
              </a>{' '}
              or call{' '}
              <a
                href="tel:+18505293740"
                className="text-blue underline underline-offset-2">
                (850) 529-3740
              </a>
              .
            </p>
          </div>
        </div>
      </Section>
  );
}
