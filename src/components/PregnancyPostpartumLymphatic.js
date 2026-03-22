'use client';

import ServicePage from './ServicePage';
import { getTheme } from '@/src/config/routeColors';

export default function PregnancyPostpartumLymphatic() {
  return (
    <ServicePage
      title="Pregnancy and Postpartum Lymphatic Massage"
      intro="Gentle support for pregnancy and postpartum recovery when your body feels swollen, heavy, tender, or like it is moving through a lot."
      whatItIs={
        <>
          <p>
            Pregnancy and postpartum lymphatic massage is gentle bodywork
            designed to support comfort during a time of major physical change.
            During pregnancy, fluid shifts and hormonal changes can leave you
            feeling swollen, heavy, tight, or uncomfortable, especially in the
            legs, feet, hands, face, or breasts. After birth, the body is still
            healing, adjusting, and processing a lot.
          </p>
          <p>
            In pregnancy sessions, I focus on safe, gentle work that supports
            relaxation and can help ease that swollen or heavy feeling. In
            postpartum sessions, I adapt the work based on your birth experience,
            how far out you are, and what kind of support feels best in your
            body.
          </p>
          <p>
            Once you are in a later stage of postpartum healing, usually around 6
            weeks out and with provider approval, I incorporate scar tissue work
            when appropriate, especially after a C-section. This can help with
            that tight, numb, stuck, or pulling feeling that sometimes lingers
            around a healed scar. Like the rest of my work, this is always done
            gradually and based on what feels appropriate for your body.
          </p>
          <p>
            This is a time when a lot is being asked of your body. My goal is to
            offer care that feels calming, thoughtful, and supportive, so you can
            feel a little more comfortable and a little more at home in yourself.
          </p>
        </>
      }
      whoItIsFor={[
        'you are pregnant and feeling swollen, heavy, tight, or uncomfortable',
        'you are postpartum and want gentle support as your body recovers',
        'you had a C-section and are looking for scar tissue support later in healing',
        'you want bodywork that feels calming and nurturing',
        'you are looking for a gentler alternative to traditional massage',
        'you want care that is adapted to where you are in pregnancy or postpartum recovery',
      ]}
      cautions="If you are in your first trimester, have a high-risk pregnancy, are being monitored for blood pressure concerns, have sudden swelling, fever, infection, or any complication your provider is watching closely, I may need medical clearance before booking. After birth, if you had a cesarean, significant tearing, complications, infection, or are very early in recovery, please check with your provider first. Scar tissue work is only appropriate once healing is well underway and your provider has cleared you."
      price="$150"
      theme={getTheme('/services/lymphatic/pregnancy-postpartum-lymphatic-massage')}
      faqSection="fertility-pregnancy-postpartum"
    />
  );
}
