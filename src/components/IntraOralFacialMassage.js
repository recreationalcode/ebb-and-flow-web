'use client';

import ServicePage from './ServicePage';
import { getTheme } from '@/src/config/routeColors';

export default function IntraOralFacialMassage() {
  return (
    <ServicePage
      title="Intra-Oral & Facial Massage"
      intro="A quiet invitation to unburden the hidden stress held above your shoulders."
      whatItIs={
        <>
          <p>
            Have you ever been sitting in a yoga class or lying in bed when the
            instructor says, &ldquo;Release your jaw,&rdquo; and your initial
            thought is, <em>I&rsquo;m not clenching</em>, only to notice a
            second later that your teeth were pressed together and your cheek
            muscles were held tight?
          </p>
          <p>
            That sudden realization is far more common than you think. The
            face, jaw, and head carry a constant load of physical stress that
            easily slips under our radar until it is finally given permission
            to let go. Between nighttime teeth grinding, daytime
            concentration-clenching, sinus congestion, and posture-related neck
            strain, these smaller muscle groups work constantly without much
            opportunity to rest.
          </p>
          <p>
            This session combines gentle external lymphatic tissue work across
            your neck, scalp, and face with dedicated intra-oral technique. By
            working thoughtfully inside the mouth using sterile, latex-free
            gloved hands and supporting these deep internal muscles directly,
            stubborn tension patterns that have been locked in place for months
            or even years can be released.
          </p>
          <p>
            The work is slow, precise, and entirely guided by your comfort
            level. Rather than forcing overworked muscles to yield, your system
            is supported, gradually relaxing so your face, head, and neck can
            settle into ease.
          </p>
        </>
      }
      whoItIsFor={[
        'you clench or grind your teeth during the day or while sleeping',
        'you experience TMJ discomfort, jaw fatigue, or soreness when chewing',
        'you live with persistent tension headaches, temple tightness, or sinus pressure',
        'you carry stress and tightness through your neck, shoulders, and posture muscles',
        'you are curious to feel how much lighter your entire head feels once that tightness lets go',
      ]}
      extraSections={[
        {
          heading: 'What to Expect',
          content: (
            <p>
              Your session begins on the table with a lymphatic external
              massage across your shoulders, neck, scalp, and face to relax the
              surrounding tissues and help your nervous system settle. I then
              use latex-free gloves to work carefully inside the mouth along
              the muscles of the cheeks and jawline, moving slowly and staying
              in light communication throughout the session. You are always in
              complete control of the pace, depth, and pressure.
            </p>
          ),
        },
      ]}
      cautions="Because this session involves direct internal mouth work, please hold off or seek medical guidance first if you have active oral infections, cold sores, open mouth wounds, recent dental extractions or oral surgeries, or acute facial nerve flare-ups. Additionally, if you have recently received Botox or facial fillers, please wait at least 7 days post-treatment before your session."
      price="$150"
      theme={getTheme('/services/intra-oral-facial-massage')}
      faqSection="intra-oral-facial-massage"
    />
  );
}
