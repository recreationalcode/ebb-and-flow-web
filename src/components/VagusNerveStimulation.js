'use client';

import Image from 'next/image';
import ServicePage from './ServicePage';
import TransitionLink from './TransitionLink';
import { getTheme } from '@/src/config/routeColors';
import VagusNerveRelaxation from '@/src/assets/images/vagus-nerve-relaxation.jpg';
import VagusNerveEarClip from '@/src/assets/images/vagus-nerve-ear-clip.jpg';

const linkClass = 'underline underline-offset-2 hover:opacity-80';

export default function VagusNerveStimulation() {
  return (
    <ServicePage
      title="Vagus Nerve Stimulation"
      intro="Gentle, non-invasive vagus nerve stimulation to help your nervous system shift out of stress mode and into rest, recovery, and repair."
      whatItIs={
        <>
          <p>
            The vagus nerve is the longest cranial nerve in the body, sometimes
            called the &ldquo;wandering nerve&rdquo; because it travels from
            the brainstem down through the chest and abdomen, connecting with
            the heart, lungs, and digestive organs along the way. It is the
            main driver of the parasympathetic nervous system, the &ldquo;rest
            and digest&rdquo; state where the body slows the heart rate, calms
            inflammation, supports digestion, and does its deepest healing.
          </p>
          <p>
            When life keeps you in fight-or-flight, stress hormones like
            cortisol stay elevated and the body never quite gets to rest. Vagal
            tone describes how readily your system can apply the brakes and
            return to calm. People with stronger vagal tone tend to rest,
            recover, and restore more quickly, while low vagal tone is
            associated with prolonged stress, tension, and poor recovery.
          </p>
          <Image
            src={VagusNerveRelaxation}
            alt="Client relaxing on a couch while receiving non-invasive vagus nerve stimulation through gentle ear clips"
            className="rounded-2xl shadow-lg w-full h-auto"
          />
          <p>
            At my Washington, DC studio, I offer non-invasive{' '}
            <a
              className={linkClass}
              href="https://www.dolphinmps.com/what-is-vagus-nerve/"
              target="_blank"
              rel="noopener noreferrer">
              vagus nerve stimulation
            </a>{' '}
            (VNS) using the Dolphin Neurostim. Soft clips deliver a very gentle
            microcurrent to the auricular branch of the vagus nerve at the ear.
            Research on this kind of vagal stimulation is encouraging, with
            studies reporting parasympathetic activation, improved heart rate
            variability, and reduced inflammation. What I see in the studio is
            simpler: people settle. Breathing slows, muscles let go, and the
            body drops into a quieter state.
          </p>
          <p>
            Vagal stimulation pairs beautifully with{' '}
            <TransitionLink
              className={linkClass}
              href="/services/lymphatic/manual-lymphatic-drainage">
              Manual Lymphatic Drainage
            </TransitionLink>
            . Because the lymphatic system works best when the body is in a
            parasympathetic state, beginning a session with Dolphin VNS helps
            relax muscle tone, improve circulation and lymph flow, and make the
            hands-on work that follows even more effective.
          </p>
        </>
      }
      whoItIsFor={[
        'you feel stuck in fight-or-flight mode, wired, tense, or on edge',
        'you carry stress as muscle tension, jaw clenching, or shallow breathing',
        'you want to deepen the relaxation of your lymphatic or massage sessions',
        'you are working on stress, sleep, or burnout and want gentle nervous system support',
        'you are curious about vagal tone and non-invasive ways to support it',
      ]}
      extraSections={[
        {
          heading: 'What a Session Looks Like',
          content: (
            <>
              <p>
                Vagus nerve stimulation is quiet and passive. There is nothing
                you need to do. It is not booked as a separate service: the
                soft ear clips are placed at the start of a{' '}
                <TransitionLink
                  className={linkClass}
                  href="/services/lymphatic/manual-lymphatic-drainage">
                  Manual Lymphatic Drainage
                </TransitionLink>{' '}
                or other bodywork session and stay on for roughly 10 to 15
                minutes while you rest, easing your system into the hands-on
                work that follows.
              </p>
              <Image
                src={VagusNerveEarClip}
                alt="Woman holding a Dolphin Neurostim device while wearing a vagus nerve stimulation ear clip"
                className="rounded-2xl shadow-lg w-full sm:max-w-sm sm:mx-auto h-auto"
              />
              <p>
                If you are curious whether vagal nerve stimulation would be a
                good addition to your sessions,{' '}
                <TransitionLink className={linkClass} href="/contact">
                  reach out to Natalie
                </TransitionLink>{' '}
                and we can talk about what fits.
              </p>
            </>
          ),
        },
      ]}
      cautions="Dolphin VNS is gentle and non-invasive, but because it uses microcurrent it is not appropriate if you have a pacemaker or another implanted electrical device, if you are pregnant, or if you have a seizure disorder. Vagus nerve stimulation at Ebb & Flow is offered as relaxation and wellness support, not as a treatment for medical conditions, and it is not a substitute for care from your doctor."
      price={null}
      theme={getTheme('/services/vagus-nerve-stimulation')}
    />
  );
}
