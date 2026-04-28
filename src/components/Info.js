'use client';

import Image from 'next/image';
import NatalieGamble from '@/src/assets/images/ng.jpeg';
import Button from '@/src/ui/Button';
import { DesktopScheduleButton } from '@/src/ui/ScheduleButton';
import { useTransitionNavigate } from './TransitionProvider';
import Section from './Section';

export default function Info() {
  const navigate = useTransitionNavigate();

  return (
    <Section ariaLabel="About Ebb & Flow" className="text-center">
      <h1 className="sr-only">
        Lymphatic Drainage, Oncology Massage &amp; Craniosacral Therapy in
        Washington, DC
      </h1>
      <span
        aria-hidden="true"
        className="block font-script text-7xl sm:text-8xl text-purple">
        Ebb & flow
      </span>
      <span className="block mt-4 sm:mt-6 text-sm sm:text-lg font-light tracking-widest text-blue">
        MASSAGE STUDIO
      </span>
      <div className="h-4 sm:h-8"></div>
      <span className="text-lg sm:text-3xl font-extralight text-blue px-4">
        Clinical Care for a Focused, Fluid, and Functional Body
      </span>
      <div className="h-6 sm:h-10"></div>
      <div className="flex flex-col sm:flex-row items-center sm:items-center sm:justify-center gap-6 sm:gap-10 mx-6 sm:mx-auto sm:max-w-3xl">
        <div className="flex flex-col items-center">
          <Image
            src={NatalieGamble}
            alt="Natalie Gamble, Licensed Massage Therapist and founder of Ebb & Flow Massage Studio"
            width={192}
            height={192}
            priority
            className="h-40 w-40 mb-4 rounded-full sm:h-48 sm:w-48 drop-shadow-lg"
          />
          <h2 className="text-4xl font-extralight text-blue sm:text-5xl">
            Natalie Gamble
          </h2>
          <p className="text-lg font-thin tracking-widest text-blue sm:text-2xl">
            LMT, CMLDT, MMP, CST
          </p>
        </div>
        <div className="bg-blue rounded-2xl px-8 py-8 shadow-lg sm:flex-1 sm:max-w-md flex flex-col justify-center text-center sm:text-left">
          <h3 className="text-sm sm:text-base font-semibold uppercase tracking-[0.2em] text-blue-200 mb-4">
            Mission
          </h3>
          <p className="text-sm font-light text-white leading-relaxed">
            At Ebb and Flow Massage Studio, I specialize in helping you feel at
            home in your body through clinical recovery and nervous system
            regulation. I believe recovery is a comprehensive process, not just
            a physical one. By bridging clinical lymphatic expertise with
            fascia-informed care, I help your body feel focused, fluid, and
            functional. I provide the hands-on expertise and educational
            self-care support needed for your healing journey.
          </p>
        </div>
      </div>
      <div className="h-8 sm:h-12" />
      <h2 className="text-sm sm:text-base font-semibold uppercase tracking-[0.2em] text-purple mb-4">
        Specialized in
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mx-6 sm:mx-auto sm:max-w-4xl">
        <Button
          variant="card"
          onClick={() =>
            navigate('/services/lymphatic/manual-lymphatic-drainage')
          }>
          Manual Lymphatic Drainage (MLD)
        </Button>
        <Button
          variant="card"
          onClick={() =>
            navigate('/services/lymphatic/pre-post-op-lymphatic-massage')
          }>
          Pre / Post Operative Lymphatic
        </Button>
        <Button
          variant="card"
          onClick={() =>
            navigate('/services/lymphatic/fertility-ivf-support-massage')
          }>
          Fertility / Pregnancy / Postpartum Lymphatic
        </Button>
        <Button
          variant="card"
          onClick={() =>
            navigate('/services/lymphatic/lymphedema-lipedema-management')
          }>
          Lymphedema and Lipedema Management
        </Button>
        <Button
          variant="card"
          onClick={() => navigate('/services/oncology-massage')}>
          Oncology Massage
        </Button>
        <Button
          variant="card"
          onClick={() => navigate('/services/craniosacral-therapy')}>
          Craniosacral Therapy (CST)
        </Button>
      </div>
      <div className="h-3 sm:h-4" />
      <Button
        variant="ghost"
        ghostOn="gray"
        ghostText="text-gray-500"
        onClick={() => navigate('/services')}>
        View all services &rarr;
      </Button>
      <div className="h-4 sm:h-8" />
      <DesktopScheduleButton />
      <div className="h-10 sm:h-14" />
      <div className="max-w-2xl mx-auto text-left space-y-4 px-6 sm:px-0">
        <h2 className="text-sm sm:text-base font-semibold uppercase tracking-[0.2em] text-blue mb-4 text-center">
          A Clinical Approach to Massage in Washington, DC
        </h2>
        <p className="text-sm font-light text-gray-700 leading-relaxed">
          Ebb &amp; Flow is a clinical massage studio in Washington, DC offering
          specialized bodywork for people navigating recovery, managing chronic
          conditions, or simply looking for targeted, expert care. Natalie
          Gamble (that's me!) brings advanced certifications in Manual Lymphatic
          Drainage (CMLDT), Oncology Massage (Tracy Walton&rsquo;s), and
          Craniosacral Therapy (CST) to every session, tailoring each treatment
          to your body and your goals.
        </p>
        <p className="text-sm font-light text-gray-700 leading-relaxed">
          Whether you are preparing for surgery, recovering from a procedure,
          managing lymphedema or lipedema, going through cancer treatment, or
          seeking support during fertility care or pregnancy, every session is
          grounded in clinical expertise and adapted to what your body needs
          right now. This is not a spa experience. It is focused, intentional,
          therapeutic bodywork.
        </p>
        <p className="text-sm font-light text-gray-700 leading-relaxed">
          Ebb &amp; Flow operates from two locations in Washington, DC: Downtown
          DC on Wednesdays and Saturdays inside the Yao Shan Center for Chinese
          Medicine, and Georgetown / Glover Park on Mondays, Tuesdays,
          Thursdays, and Fridays inside DC Acupuncture. Sessions are available
          by appointment only, and you can book online through Jane App up to 60
          days in advance.
        </p>
      </div>
    </Section>
  );
}
