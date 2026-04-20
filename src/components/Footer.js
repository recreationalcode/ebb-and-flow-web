'use client';

import { usePathname } from 'next/navigation';
import rcLogo from '@/src/assets/logos/rc-logo-mono.png';
import Button from '@/src/ui/Button';
import CopyableInfo from '@/src/ui/CopyableInfo';
import TrackedLink from '@/src/ui/TrackedLink';
import { HeartIcon } from '@heroicons/react/24/solid';
import {
  CalendarIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';
import { useTransitionNavigate } from './TransitionProvider';

function LocationCard({
  name,
  days,
  addressLines,
  addressFull,
  insideOf,
  insideUrl,
  mapSrc,
  mapTitle,
  bookingUrl,
}) {
  return (
    <div className="flex flex-col gap-4 bg-blue rounded-2xl px-6 py-6 sm:px-8 sm:py-8 shadow-lg flex-1">
      <div className="text-sm sm:text-base font-semibold uppercase tracking-[0.2em] text-blue-100">
        {name}
      </div>
      <div className="text-base sm:text-lg font-medium text-white">
        {days}
      </div>
      <CopyableInfo copyText={addressFull} label="Address">
        {addressLines.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </CopyableInfo>
      <div className="text-sm font-light text-blue-200">
        <span>Inside </span>
        <a
          href={insideUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 decoration-white/40 hover:decoration-white transition-colors text-white">
          {insideOf}
        </a>
      </div>
      <div className="rounded-xl overflow-hidden shadow-md">
        <iframe
          title={mapTitle}
          src={mapSrc}
          width="100%"
          height="180"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <TrackedLink
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        event="book_online_click"
        eventParams={{ booking_url: bookingUrl }}>
        <Button className="w-full truncate">
          <CalendarIcon className="h-4 w-4 mr-1.5 flex-shrink-0" aria-hidden="true" />
          <span className="truncate">Schedule at {name}</span>
        </Button>
      </TrackedLink>
    </div>
  );
}

export default function Footer() {
  const pathname = usePathname();
  const navigate = useTransitionNavigate();

  return (
    <footer
      aria-label="Availability, locations, and contact"
      className="relative bg-gray-50">
      <svg
        className="absolute -top-8 sm:-top-12 left-0 w-full h-8 sm:h-12"
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        aria-hidden="true">
        <path
          d="M0,16 C360,-8 360,56 720,32 C1080,8 1080,56 1440,32 L1440,48 L0,48 Z"
          fill="currentColor"
          className="text-gray-50"
        />
      </svg>
      <div className="text-center px-6 pt-8 sm:pt-12 pb-24 sm:pb-16">
        <div className="mb-8 sm:mb-10">
          <div className="text-sm sm:text-base font-semibold uppercase tracking-[0.2em] text-gray-600 mb-3">
            Availability
          </div>
          <div className="text-lg sm:text-xl font-medium text-blue">
            Monday &ndash; Saturday
          </div>
          <div className="text-base sm:text-lg font-light text-gray-600">
            9:00 AM &ndash; 5:00 PM
          </div>
          <p className="text-sm font-light text-gray-500 mt-2">
            I see clients at two locations depending on the day of the week! See
            below for more information.
          </p>
        </div>

        <div className="text-sm sm:text-base font-semibold uppercase tracking-[0.2em] text-gray-600 mb-6 sm:mb-8">
          Locations
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:mx-auto lg:max-w-4xl">
          <LocationCard
            name="Downtown DC"
            days="Wednesdays &amp; Saturdays"
            addressLines={['910 17th Street NW, Suite 1020', 'Washington, DC 20006']}
            addressFull="910 17th Street NW, Suite 1020, Washington, DC 20006"
            insideOf="Yao Shan Center for Chinese Medicine"
            insideUrl="https://yaoshancenter.com/"
            mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.9667265936364!2d-77.0398039!3d38.9018762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b702b2f89c25%3A0x3053ccabaca800cf!2sEbb%20%26%20Flow!5e0!3m2!1sen!2sus!4v1773886460882!5m2!1sen!2sus"
            mapTitle="Ebb & Flow Downtown DC location"
            bookingUrl="https://ebbnflow.janeapp.com/locations/ebb-and-flow-downtown-dc/book"
          />
          <LocationCard
            name="Georgetown / Glover Park"
            days="Mondays, Tuesdays &amp; Thursdays"
            addressLines={['2300 Wisconsin Ave NW, #400b', 'Washington, DC 20007']}
            addressFull="2300 Wisconsin Ave NW, #400b, Washington, DC 20007"
            insideOf="DC Acupuncture"
            insideUrl="https://www.dcacupuncture.net/"
            mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.1683122157688!2d-77.0718575!3d38.9201303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b637523c0c2b%3A0x431e038cb36a68f1!2sDC%20Acupuncture%2C%20LLC!5e0!3m2!1sen!2sus!4v1776517368168!5m2!1sen!2sus"
            mapTitle="Ebb & Flow Georgetown / Glover Park location"
            bookingUrl="https://ebbnflow.janeapp.com/locations/ebb-and-flow-georgetown-glover-park/book"
          />
        </div>

        {pathname !== '/contact' && (
          <div className="mt-10 sm:mt-12 sm:mx-auto sm:max-w-lg text-center">
            <p className="text-sm text-gray-600 font-medium mb-4">
              Questions? Reach out to Natalie directly.
            </p>
            <Button
              className="sm:text-sm"
              onClick={() => navigate('/contact')}>
              <EnvelopeIcon className="h-4 w-4 mr-1.5" aria-hidden="true" />
              Contact
            </Button>
          </div>
        )}

        <div className="flex justify-center gap-2 mt-12">
          <Button
            variant="ghost"
            ghostOn="gray"
            onClick={() => navigate('/privacy-policy')}>
            Privacy Policy
          </Button>
          <Button
            variant="ghost"
            ghostOn="gray"
            onClick={() => navigate('/terms-and-conditions')}>
            Terms &amp; Conditions
          </Button>
        </div>
        <div className="flex justify-center items-center gap-1.5 mt-2 pb-8 sm:pb-6">
          <span className="text-sm text-gray-500 py-3">
            site made with{' '}
            <HeartIcon className="inline-block h-4 w-4 brightness-0 opacity-30 -translate-y-px" />{' '}
            by
          </span>
          <Button
            variant="ghost"
            ghostOn="gray"
            href="https://www.recreationalcoder.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-1.5 !px-1.5">
            <img
              src={rcLogo.src}
              alt="Recreational Coder logo"
              className="h-5 w-5 brightness-0 opacity-30 group-hover:opacity-60 transition-opacity translate-y-px"
            />
            recreationalcoder
          </Button>
        </div>
      </div>
    </footer>
  );
}
