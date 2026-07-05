'use client';

import Image from 'next/image';
import ServicePage from './ServicePage';
import TransitionLink from './TransitionLink';
import { getTheme } from '@/src/config/routeColors';
import ScarReleaseTreatment from '@/src/assets/images/scar-release-treatment.jpg';
import ScarReleaseBeforeAfter from '@/src/assets/images/scar-release-before-after.jpg';

const linkClass = 'underline underline-offset-2 hover:opacity-80';

export default function ScarReleaseTherapy() {
  return (
    <ServicePage
      title="Scar Release Therapy"
      intro="Gentle microcurrent therapy to soften scar tissue, release adhesions, and ease the tightness, pulling, and discomfort that scars can leave behind."
      whatItIs={
        <>
          <p>
            Scar release therapy is a gentle, non-invasive way of working with
            scar tissue after surgery or injury. Scars are a natural part of
            how the body heals, but the scar tissue and adhesions they leave
            behind can compress nerves, restrict fascia and muscle, and slow
            blood and lymph flow through the area. Over time, that can show up
            as tightness, pulling, numbness, or pain, sometimes in places far
            from the scar itself.
          </p>
          <p>
            At my studio in Georgetown, Washington, DC, I offer{' '}
            <a
              className={linkClass}
              href="https://www.dolphinmps.com/mps-scar-release-therapy/"
              target="_blank"
              rel="noopener noreferrer">
              MPS Scar Release Therapy
            </a>{' '}
            using the Dolphin Neurostim, a small handheld device that applies
            microcurrent point stimulation (MPS) to each side of a scar. The
            current is very low and gentle. It supports the skin&rsquo;s own
            healing response, helping scar tissue relax, soften, and fade while
            easing the adhesions and fascial restriction underneath. Most
            people feel little more than a light tingle, and{' '}
            <a
              className={linkClass}
              href="https://www.mpscourses.com/research-publications/"
              target="_blank"
              rel="noopener noreferrer">
              published research
            </a>{' '}
            on the use of microcurrent therapy to release scar tissue has found
            meaningful pain relief after even a single application.
          </p>
          <Image
            src={ScarReleaseTreatment}
            alt="Dolphin Neurostim microcurrent devices applied to each side of a chest scar during a scar release therapy session"
            className="rounded-2xl shadow-lg w-full h-auto"
          />
          <p>
            I often work with C-section scars, scars from breast surgery such
            as augmentation, reduction, or mastectomy, and scars from joint
            surgeries, injuries, and other procedures. Releasing a scar also
            restores circulation and lymphatic drainage through the area, which
            is why this work pairs so naturally with{' '}
            <TransitionLink
              className={linkClass}
              href="/services/lymphatic/pre-post-op-lymphatic-massage">
              Pre/Post-Op Lymphatic Massage
            </TransitionLink>{' '}
            sessions.
          </p>
        </>
      }
      whoItIsFor={[
        'you have a C-section, mastectomy, or other surgical scar that feels tight, raised, or restricted',
        'you notice pulling, numbness, or discomfort around a healed incision',
        'you have an older scar from surgery or injury that limits how you move',
        'you want to improve the appearance and mobility of a scar without anything invasive',
        'you are receiving pre/post-op lymphatic massage and want to support scar healing',
      ]}
      extraSections={[
        {
          heading: 'How It Works',
          content: (
            <>
              <p>
                During treatment, the Dolphin Neurostim probes rest along each
                side of the scar. The microcurrent invites a gentle healing
                response in the tissue: adhesions and restrictions begin to
                release, circulation increases, and the lymphatic system
                carries away what the body breaks down. Paired with careful
                manual scar tissue work, this helps ease the restriction a scar
                places on the surrounding muscles and fascia.
              </p>
              <p>
                Scar work within a session usually takes 15 to 30 minutes
                depending on the size of the area. Many people notice changes
                in the appearance, color, and mobility of a scar within 1 to 3
                sessions, though deeper or older scars may take longer. And
                there is no expiration date on this work. Even scars that are
                decades old can still respond.
              </p>
              <Image
                src={ScarReleaseBeforeAfter}
                alt="Before and after comparison of a forearm scar treated with MPS scar release therapy, showing the scar visibly softened and faded"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </>
          ),
        },
        {
          heading: 'Scheduling Scar Release',
          content: (
            <p>
              Scar release therapy is not booked as a separate service. It is
              incorporated into{' '}
              <TransitionLink
                className={linkClass}
                href="/services/lymphatic/pre-post-op-lymphatic-massage">
                Pre/Post-Op Lymphatic Massage
              </TransitionLink>{' '}
              sessions once your scar is healed and ready for this work, and
              into{' '}
              <TransitionLink
                className={linkClass}
                href="/services/lymphatic/pregnancy-postpartum-lymphatic-massage">
                Pregnancy and Postpartum
              </TransitionLink>{' '}
              sessions for C-section scars later in recovery. If you are not
              sure what makes sense for your scar and your timeline,{' '}
              <TransitionLink className={linkClass} href="/contact">
                reach out to Natalie
              </TransitionLink>{' '}
              and we can talk it through.
            </p>
          ),
        },
      ]}
      cautions="Scar release therapy is only appropriate once your incision is fully closed and healed, and, for recent surgeries, once your provider has cleared you for scar work. Because the Dolphin Neurostim uses microcurrent, this treatment is not appropriate if you have a pacemaker or another implanted electrical device, or if you are pregnant. I also avoid working over areas with active infection, open wounds, or irritated skin. If you are in active cancer treatment, I may ask for medical clearance first."
      price={null}
      theme={getTheme('/services/scar-release-therapy')}
      faqSection="pre-post-surgical"
    />
  );
}
