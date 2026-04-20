'use client';

import {
  ChatBubbleLeftIcon,
  PhoneIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';

import Button from '@/src/ui/Button';
import CopyableInfo from '@/src/ui/CopyableInfo';
import TrackedLink from '@/src/ui/TrackedLink';
import Section from './Section';

export default function Contact() {
  return (
    <Section ariaLabel="Contact" className="flex flex-col items-center">
      <h1 className="font-script text-5xl mb-4 text-center text-purple">
        Contact
      </h1>

      <p className="max-w-xl text-xl font-light leading-relaxed text-center text-gray-600">
        Have a question, need help choosing a service, or want to purchase a
        package? Reach out to Natalie directly.
      </p>

      <div className="h-10" />

      <div className="bg-blue rounded-2xl px-8 py-8 shadow-lg w-full max-w-md text-center">
        <h2 className="text-sm sm:text-base font-semibold uppercase tracking-[0.2em] text-blue-200 mb-6">
          Reach Out
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <TrackedLink href="sms:+18505293740" event="text_click">
            <Button className="w-full sm:w-auto sm:text-sm">
              <ChatBubbleLeftIcon
                className="h-4 w-4 mr-1.5"
                aria-hidden="true"
              />
              Text
            </Button>
          </TrackedLink>
          <TrackedLink href="tel:+18505293740" event="call_click">
            <Button className="w-full sm:w-auto sm:text-sm">
              <PhoneIcon className="h-4 w-4 mr-1.5" aria-hidden="true" />
              Call
            </Button>
          </TrackedLink>
          <TrackedLink
            href="mailto:nat@ebbandflowmassagestudio.com"
            event="email_click">
            <Button className="w-full sm:w-auto sm:text-sm">
              <EnvelopeIcon className="h-4 w-4 mr-1.5" aria-hidden="true" />
              Email
            </Button>
          </TrackedLink>
        </div>

        <div className="border-t border-white/20 my-6" />

        <div className="flex flex-col gap-3">
          <CopyableInfo label="Phone" copyText="(850) 529-3740">
            (850) 529-3740
          </CopyableInfo>
          <CopyableInfo label="Email" copyText="nat@ebbandflowmassagestudio.com" breakAll>
            nat@ebbandflowmassagestudio.com
          </CopyableInfo>
        </div>
      </div>
    </Section>
  );
}
