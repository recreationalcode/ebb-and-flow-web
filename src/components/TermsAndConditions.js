'use client';

import Section from './Section';

export default function TermsAndConditions() {
  return (
      <Section ariaLabel="Terms and Conditions" className="flex flex-col items-center">
        <h1 className="font-script text-5xl sm:text-6xl text-purple mb-10">
          Terms &amp; Conditions
        </h1>
        <div className="max-w-xl space-y-6 text-sm font-light text-gray-700 leading-relaxed text-left">
          <p className="text-xs text-gray-500">
            Effective date: March 18, 2026
          </p>

          <div>
            <h2 className="text-base font-semibold text-gray-800 mb-2">
              Services
            </h2>
            <p>
              Ebb & Flow Massage Studio provides massage therapy services by
              Natalie Gamble, a Licensed Massage Therapist (LMT, CMLDT, MMP,
              CST). All services are provided at Yao Shan Center for Chinese
              Medicine in Washington, DC.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-gray-800 mb-2">
              Appointments and Cancellations
            </h2>
            <p>
              Appointments can be scheduled via phone, text, email, or online
              booking. We ask that you provide at least 24 hours' notice for
              cancellations or rescheduling. Late cancellations or no-shows may
              be subject to a fee.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-gray-800 mb-2">
              Health and Safety
            </h2>
            <p>
              Massage therapy is not a substitute for medical care. Please
              inform your therapist of any medical conditions, allergies, or
              concerns before your session. Certain conditions may require
              clearance from your healthcare provider prior to receiving
              massage.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-gray-800 mb-2">
              Pricing
            </h2>
            <p>
              Session prices are listed on our website and are subject to change.
              Payment is due at the time of service unless otherwise arranged.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-gray-800 mb-2">
              Gift Cards
            </h2>
            <p>
              Gift cards are non-refundable and have no expiration date. They may
              be applied toward any service offered by Ebb & Flow Massage Studio.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-gray-800 mb-2">
              Limitation of Liability
            </h2>
            <p>
              Ebb & Flow Massage Studio and Natalie Gamble are not liable for any
              injury or adverse reaction resulting from massage therapy services.
              By booking an appointment, you acknowledge and accept the inherent
              risks associated with massage therapy.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-gray-800 mb-2">
              Changes to These Terms
            </h2>
            <p>
              We may update these terms from time to time. Continued use of our
              services constitutes acceptance of any changes.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-gray-800 mb-2">
              Contact Us
            </h2>
            <p>
              If you have questions about these terms, please contact us at{' '}
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
