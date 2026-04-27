'use client';

import Button from '@/src/ui/Button';
import { DesktopScheduleButton } from '@/src/ui/ScheduleButton';
import { useTransitionNavigate } from './TransitionProvider';
import Section from './Section';

const services = [
  {
    name: 'Manual Lymphatic Drainage (MLD)',
    path: '/services/lymphatic/manual-lymphatic-drainage',
    price: '$150',
    description: 'Gentle, rhythmic bodywork to support lymph flow and reduce swelling. For fluid retention, post-travel swelling, seasonal wellness, and general lymphatic maintenance.',
  },
  {
    name: 'Pre / Post-Op Lymphatic Massage',
    path: '/services/lymphatic/pre-post-op-lymphatic-massage',
    price: '$150',
    description: 'Lymphatic support before and after surgery to reduce swelling, support comfort, scar healing, and recovery. Requires provider approval.',
  },
  {
    name: 'Fertility & IVF Support Massage',
    path: '/services/lymphatic/fertility-ivf-support-massage',
    price: '$150',
    description: 'Gentle lymphatic work to support comfort during fertility treatments, including IVF. Helps with bloating, tenderness, and grounding.',
  },
  {
    name: 'Pregnancy & Postpartum Lymphatic Massage',
    path: '/services/lymphatic/pregnancy-postpartum-lymphatic-massage',
    price: '$150',
    description: 'Lymphatic massage tailored for pregnancy-related swelling and postpartum recovery, including C-section scar tissue work with provider approval.',
  },
  {
    name: 'Lymphedema & Lipedema Management',
    path: '/services/lymphatic/lymphedema-lipedema-management',
    price: '$150',
    description: 'Ongoing massage support for people managing lymphedema or lipedema, focusing on heaviness, swelling, tenderness, and comfort.',
  },
  {
    name: 'Oncology Massage',
    path: '/services/oncology-massage',
    price: '$130',
    description: 'Safe, gentle massage adapted for people at any stage of cancer treatment, recovery, or survivorship. Natalie holds Tracy Walton\u2019s Oncology Massage certification.',
  },
  {
    name: 'Craniosacral Therapy (CST)',
    path: '/services/craniosacral-therapy',
    price: '$150',
    description: 'Light-touch therapy working with the craniosacral system to support relaxation, nervous system regulation, and relief from tension patterns.',
  },
];

export default function ServicesOverview() {
  const navigate = useTransitionNavigate();

  return (
    <Section ariaLabel="All Services" className="flex flex-col items-center">
      <h1 className="font-script text-5xl sm:text-6xl text-purple mb-4 text-center">
        Services
      </h1>
      <p className="max-w-xl text-lg font-light text-gray-600 text-center mb-10">
        Every session at Ebb &amp; Flow is tailored to your body and your goals.
        Explore our clinical massage services below.
      </p>
      <div className="max-w-2xl w-full space-y-6">
        {services.map((service) => (
          <button
            key={service.path}
            type="button"
            onClick={() => navigate(service.path)}
            className="w-full text-left bg-white/60 rounded-2xl px-6 py-6 sm:px-8 sm:py-8 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-100">
            <div className="flex items-baseline justify-between gap-4 mb-2">
              <h2 className="text-lg sm:text-xl font-medium text-blue">
                {service.name}
              </h2>
              <span className="text-sm font-medium text-gray-500 whitespace-nowrap">
                {service.price}
              </span>
            </div>
            <p className="text-sm font-light text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </button>
        ))}
      </div>
      <DesktopScheduleButton className="mt-8" />
    </Section>
  );
}
