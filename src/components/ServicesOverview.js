'use client';

import ServiceCard from '@/src/ui/ServiceCard';
import { DesktopScheduleButton } from '@/src/ui/ScheduleButton';
import Section from './Section';

const services = [
  {
    name: 'Manual Lymphatic Drainage (MLD)',
    path: '/services/lymphatic/manual-lymphatic-drainage',
    price: '$150',
    description:
      'Gentle, rhythmic bodywork to support lymph flow and reduce swelling. For fluid retention, post-travel swelling, seasonal wellness, and general lymphatic maintenance.',
  },
  {
    name: 'Pre / Post-Op Lymphatic Massage',
    path: '/services/lymphatic/pre-post-op-lymphatic-massage',
    price: '$150',
    description:
      'Lymphatic support before and after surgery to reduce swelling, support comfort, scar healing, and recovery.',
  },
  {
    name: 'Fertility & IVF Support Massage',
    path: '/services/lymphatic/fertility-ivf-support-massage',
    price: '$150',
    description:
      'Gentle lymphatic work to support comfort during fertility treatments, including IVF. Helps with bloating, tenderness, and grounding.',
  },
  {
    name: 'Pregnancy & Postpartum Lymphatic Massage',
    path: '/services/lymphatic/pregnancy-postpartum-lymphatic-massage',
    price: '$150',
    description:
      'Lymphatic massage tailored for pregnancy-related swelling and postpartum recovery, including C-section scar tissue work.',
  },
  {
    name: 'Lymphedema & Lipedema Management',
    path: '/services/lymphatic/lymphedema-lipedema-management',
    price: '$150',
    description:
      'Ongoing massage support for people managing lymphedema or lipedema, focusing on heaviness, swelling, tenderness, and comfort.',
  },
  {
    name: 'Oncology Massage',
    path: '/services/oncology-massage',
    price: '$130',
    description:
      'Safe, gentle massage adapted for people at any stage of cancer treatment, recovery, or survivorship.',
  },
  {
    name: 'Craniosacral Therapy (CST)',
    path: '/services/craniosacral-therapy',
    price: '$150',
    description:
      'Light-touch therapy working with the craniosacral system to support relaxation, nervous system regulation, and relief from tension patterns.',
  },
];

export default function ServicesOverview() {
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
          <ServiceCard key={service.path} {...service} />
        ))}
      </div>
      <DesktopScheduleButton className="mt-8" />
    </Section>
  );
}
