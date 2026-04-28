'use client';

import { DesktopScheduleButton } from '@/src/ui/ScheduleButton';
import Section from './Section';

export default function AboutMe() {
  return (
    <Section
      ariaLabel="About Natalie Gamble"
      className="flex flex-col items-center text-center">
      <h1 className="font-script text-6xl text-purple mb-6">
        Who I Am and What I Do
      </h1>
      <div className="max-w-xl space-y-4 text-sm font-light text-gray-700 leading-relaxed text-left">
        <p>
          A 2019 graduate of the Lauterstein-Conway Massage School in Austin,
          TX, I&rsquo;ve spent my career focusing on the people who often need
          touch the most but receive it the least. I began my journey by diving
          straight into Tracy Walton&rsquo;s Oncology Massage certification,
          driven by a passion for supporting clients through their most
          vulnerable chapters.
        </p>
        <p>
          I hold four professional credentials that shape my clinical practice:
        </p>
        <ul className="list-disc list-outside pl-5 space-y-2">
          <li>
            <strong>Licensed Massage Therapist (LMT)</strong> - licensed to
            practice therapeutic massage in Washington, DC.
          </li>
          <li>
            <strong>
              Certified Manual Lymphatic Drainage Therapist (CMLDT)
            </strong>{' '}
            - advanced training in the Vodder technique for gentle, rhythmic
            lymphatic work. This certification is the foundation for all of my
            lymphatic services, from post-surgical recovery to lymphedema and
            lipedema management.
          </li>
          <li>
            <strong>Certified Oncology Massage</strong> - certified through
            Tracy Walton &amp; Associates in oncology massage, which prepares
            therapists to work safely with people in active cancer treatment,
            recovery, and survivorship.
          </li>
          <li>
            <strong>Craniosacral Therapist (CST)</strong> - trained in gentle,
            hands-on therapy working with the craniosacral system to support
            nervous system regulation, relaxation, and relief from tension
            patterns.
          </li>
        </ul>
        <p>
          I love being the person who sees a client through the whole loop: the
          &ldquo;rebuilding&rdquo; phase, the &ldquo;recovery&rdquo; phase, and
          finally, the &ldquo;flourishing&rdquo; phase. I&rsquo;m a firm
          believer that everyone deserves to feel at home in their own skin, and
          I use a mix of clinical precision and intuitive touch to help you get
          there.
        </p>
        <p>
          My clients include people recovering from cosmetic and reconstructive
          surgery, cancer patients and survivors, individuals managing
          lymphedema or lipedema, people going through fertility treatment or
          pregnancy, and anyone whose nervous system just needs a reset. I work
          closely with surgical teams, oncologists, and other providers when
          coordination is needed.
        </p>
        <p>
          Why the heavy focus on lymph and oncology? Because I love a good
          comeback story. I&rsquo;m here to support your body&rsquo;s natural
          rhythm, whether you&rsquo;re navigating a new diagnosis or just ready
          to start flourishing again.
        </p>
        <p>
          On a personal note: I&rsquo;m a total junkie for trying out all the
          latest devices and products regarding MLD. If it claims to support
          lymphatic flow, I&rsquo;ve probably already tested it or it&rsquo;s on
          my list to try!
        </p>
      </div>
      <DesktopScheduleButton className="mt-6" />
    </Section>
  );
}
