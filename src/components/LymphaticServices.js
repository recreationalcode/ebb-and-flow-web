'use client';

import Button from '@/src/ui/Button';
import { DesktopScheduleButton } from '@/src/ui/ScheduleButton';
import { useTransitionNavigate } from './TransitionProvider';
import Section from './Section';

const services = [
  {
    name: 'Manual Lymphatic Drainage (MLD)',
    path: '/services/lymphatic/manual-lymphatic-drainage',
    description: 'The foundation of lymphatic bodywork. Gentle, rhythmic technique to support fluid movement, reduce swelling, and promote recovery. A fit for fluid retention, post-travel swelling, seasonal wellness, and general lymphatic maintenance.',
  },
  {
    name: 'Pre / Post-Op Lymphatic Massage',
    path: '/services/lymphatic/pre-post-op-lymphatic-massage',
    description: 'Prepare your body before surgery and support recovery after. Helps reduce swelling, support scar healing, and improve comfort during the post-op window. Provider approval required.',
  },
  {
    name: 'Fertility & IVF Support Massage',
    path: '/services/lymphatic/fertility-ivf-support-massage',
    description: 'Gentle lymphatic support during fertility treatments, including IVF and egg retrieval. Addresses bloating, tenderness, and provides grounding during a high-stress season.',
  },
  {
    name: 'Pregnancy & Postpartum Lymphatic Massage',
    path: '/services/lymphatic/pregnancy-postpartum-lymphatic-massage',
    description: 'Lymphatic massage tailored for pregnancy-related swelling, postpartum recovery, engorgement, and C-section scar tissue work with provider approval.',
  },
  {
    name: 'Lymphedema & Lipedema Management',
    path: '/services/lymphatic/lymphedema-lipedema-management',
    description: 'Ongoing supportive care for people managing lymphedema or lipedema. Focused on reducing heaviness, swelling, and tenderness while improving comfort and mobility.',
  },
];

export default function LymphaticServices() {
  const navigate = useTransitionNavigate();

  return (
    <Section ariaLabel="Lymphatic Drainage Services" className="flex flex-col items-center">
      <h1 className="font-script text-5xl sm:text-6xl text-blue mb-4 text-center">
        Lymphatic Drainage Services
      </h1>
      <p className="max-w-xl text-lg font-light text-gray-600 text-center mb-4">
        All lymphatic services at Ebb &amp; Flow are rooted in Manual Lymphatic
        Drainage (MLD), a gentle and precise technique that supports the
        body&rsquo;s natural fluid movement. Each service below is adapted to a
        specific context&mdash;from surgical recovery to pregnancy to chronic
        condition management.
      </p>
      <p className="max-w-xl text-sm font-light text-gray-500 text-center mb-10">
        All lymphatic sessions are 60 minutes for $150.
      </p>
      <div className="max-w-2xl w-full space-y-6">
        {services.map((service) => (
          <button
            key={service.path}
            type="button"
            onClick={() => navigate(service.path)}
            className="w-full text-left bg-white/60 rounded-2xl px-6 py-6 sm:px-8 sm:py-8 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-100">
            <h2 className="text-lg sm:text-xl font-medium text-blue mb-2">
              {service.name}
            </h2>
            <p className="text-sm font-light text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </button>
        ))}
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm font-light text-gray-500 mb-4">
          Looking for oncology massage or craniosacral therapy?
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button variant="ghost" ghostOn="gray" onClick={() => navigate('/services/oncology-massage')}>
            Oncology Massage
          </Button>
          <Button variant="ghost" ghostOn="gray" onClick={() => navigate('/services/craniosacral-therapy')}>
            Craniosacral Therapy
          </Button>
        </div>
      </div>
      <DesktopScheduleButton className="mt-6" />
    </Section>
  );
}
