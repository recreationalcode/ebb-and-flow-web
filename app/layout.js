import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/next';
import { GoogleAnalytics } from '@next/third-parties/google';

import { ScheduleProvider } from '@/src/context/ScheduleContext';
import { TransitionProvider } from '@/src/components/TransitionProvider';
import Header from '@/src/components/Header';
import PageContent from '@/src/components/PageContent';
import { MobileScheduleButton } from '@/src/ui/ScheduleButton';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const saturdayScript = localFont({
  src: '../src/assets/fonts/SaturdayScriptOblique.woff2',
  variable: '--font-script',
  display: 'swap',
});

export async function generateMetadata() {
  return {
    metadataBase: new URL('https://www.ebbandflowmassagestudio.com'),
    title: {
      default: 'Ebb & Flow | Lymphatic & Oncology Massage in DC',
      template: '%s',
    },
    description: 'Ebb & Flow Massage Studio in Downtown DC and Georgetown specializing in Lymphatic Drainage, Oncology Massage, and Craniosacral Therapy. Book with Natalie Gamble, LMT, CMLDT, MMP, CST.',
    openGraph: {
      type: 'website',
      siteName: 'Ebb & Flow Massage Studio',
      locale: 'en_US',
      images: [{
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ebb & Flow Massage Studio logo — Clinical Care for a Focused, Fluid, and Functional Body',
      }],
    },
    twitter: {
      card: 'summary_large_image',
      images: ['/og-image.png'],
    },
    icons: {
      icon: '/favicon.ico',
      apple: '/logo192.png',
    },
    manifest: '/manifest.json',
    other: {
      'theme-color': '#5D739C',
    },
  };
}

const BASE = 'https://www.ebbandflowmassagestudio.com';

const serviceOffers = [
  {
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name: 'Manual Lymphatic Drainage', url: `${BASE}/services/lymphatic/manual-lymphatic-drainage`, description: 'Gentle, rhythmic bodywork to support lymph flow and reduce swelling.' },
    price: '150.00', priceCurrency: 'USD', availability: 'https://schema.org/InStock',
    seller: { '@id': `${BASE}/#organization` },
  },
  {
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name: 'Pre/Post-Op Lymphatic Massage', url: `${BASE}/services/lymphatic/pre-post-op-lymphatic-massage`, description: 'Gentle lymphatic support before and after surgery for comfort and recovery.' },
    price: '150.00', priceCurrency: 'USD', availability: 'https://schema.org/InStock',
    seller: { '@id': `${BASE}/#organization` },
  },
  {
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name: 'Lymphedema and Lipedema Management', url: `${BASE}/services/lymphatic/lymphedema-lipedema-management`, description: 'Supportive lymphatic care for swelling, heaviness, and discomfort from lymphedema or lipedema.' },
    price: '150.00', priceCurrency: 'USD', availability: 'https://schema.org/InStock',
    seller: { '@id': `${BASE}/#organization` },
  },
  {
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name: 'Fertility and IVF Support Massage', url: `${BASE}/services/lymphatic/fertility-ivf-support-massage`, description: 'Gentle, lymphatic-focused bodywork for comfort and grounding during fertility treatment.' },
    price: '150.00', priceCurrency: 'USD', availability: 'https://schema.org/InStock',
    seller: { '@id': `${BASE}/#organization` },
  },
  {
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name: 'Pregnancy and Postpartum Lymphatic Massage', url: `${BASE}/services/lymphatic/pregnancy-postpartum-lymphatic-massage`, description: 'Gentle bodywork for swelling, comfort, and recovery during pregnancy and postpartum.' },
    price: '150.00', priceCurrency: 'USD', availability: 'https://schema.org/InStock',
    seller: { '@id': `${BASE}/#organization` },
  },
  {
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name: 'Oncology Massage', url: `${BASE}/services/oncology-massage`, description: 'Thoughtfully adapted massage for people in treatment, recovery, or survivorship. Natalie holds Tracy Walton\'s Oncology Massage certification.' },
    price: '130.00', priceCurrency: 'USD', availability: 'https://schema.org/InStock',
    seller: { '@id': `${BASE}/#organization` },
  },
  {
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name: 'Craniosacral Therapy', url: `${BASE}/services/craniosacral-therapy`, description: 'Gentle hands-on therapy to help the body settle and release tension patterns.' },
    price: '150.00', priceCurrency: 'USD', availability: 'https://schema.org/InStock',
    seller: { '@id': `${BASE}/#organization` },
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${BASE}/#organization`,
      name: 'Ebb and Flow Massage Studio',
      url: BASE,
      logo: `${BASE}/logo512.png`,
      sameAs: [
        'https://www.linkedin.com/company/ebb-and-flow-massage/',
        'https://www.facebook.com/ebbandflowmassagestudio',
        'https://www.instagram.com/ebbandflowmassagestudio/',
      ],
      founder: { '@id': `${BASE}/#natalie-gamble` },
    },
    {
      '@type': ['LocalBusiness', 'HealthAndBeautyBusiness'],
      '@id': `${BASE}/#location-downtown`,
      name: 'Ebb and Flow Massage Studio — Downtown DC',
      description: 'Massage studio in Washington, DC specializing in Lymphatic Drainage, Oncology Massage, and Craniosacral Therapy.',
      url: BASE,
      telephone: '+18505293740',
      email: 'nat@ebbandflowmassagestudio.com',
      image: `${BASE}/logo512.png`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '910 17th Street NW, Suite 1020',
        addressLocality: 'Washington',
        addressRegion: 'DC',
        postalCode: '20006',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 38.90188,
        longitude: -77.03950,
      },
      parentOrganization: { '@id': `${BASE}/#organization` },
      priceRange: '$130+',
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '09:00', closes: '17:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '17:00' },
      ],
      areaServed: {
        '@type': 'City',
        name: 'Washington, D.C.',
        sameAs: 'https://en.wikipedia.org/wiki/Washington,_D.C.',
      },
      employee: { '@id': `${BASE}/#natalie-gamble` },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Massage Services',
        itemListElement: serviceOffers,
      },
    },
    {
      '@type': ['LocalBusiness', 'HealthAndBeautyBusiness'],
      '@id': `${BASE}/#location-georgetown`,
      name: 'Ebb and Flow Massage Studio — Georgetown / Glover Park',
      description: 'Massage studio in Washington, DC specializing in Lymphatic Drainage, Oncology Massage, and Craniosacral Therapy.',
      url: BASE,
      telephone: '+18505293740',
      email: 'nat@ebbandflowmassagestudio.com',
      image: `${BASE}/logo512.png`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '2300 Wisconsin Ave NW, #400b',
        addressLocality: 'Washington',
        addressRegion: 'DC',
        postalCode: '20007',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 38.92013,
        longitude: -77.07190,
      },
      parentOrganization: { '@id': `${BASE}/#organization` },
      priceRange: '$130+',
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday', opens: '09:00', closes: '17:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Tuesday', opens: '09:00', closes: '17:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday', opens: '09:00', closes: '17:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '09:00', closes: '17:00' },
      ],
      areaServed: {
        '@type': 'City',
        name: 'Washington, D.C.',
        sameAs: 'https://en.wikipedia.org/wiki/Washington,_D.C.',
      },
      employee: { '@id': `${BASE}/#natalie-gamble` },
    },
    {
      '@type': 'Person',
      '@id': `${BASE}/#natalie-gamble`,
      name: 'Natalie Gamble',
      jobTitle: 'Licensed Massage Therapist',
      url: `${BASE}/about`,
      image: `${BASE}/ng.jpeg`,
      worksFor: { '@id': `${BASE}/#organization` },
      knowsAbout: [
        'Manual Lymphatic Drainage',
        'Oncology Massage',
        'Craniosacral Therapy',
        'Lymphedema Management',
        'Lipedema Management',
        'Pre/Post-Operative Massage',
        'Pregnancy Massage',
        'Fertility Massage',
      ],
      hasCredential: [
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'license', name: 'Licensed Massage Therapist (LMT)' },
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'Certified Manual Lymphatic Drainage Therapist (CMLDT)' },
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'Medical Massage Practitioner (MMP)' },
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'Craniosacral Therapist (CST)' },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE}/#website`,
      url: BASE,
      name: 'Ebb and Flow Massage Studio',
      publisher: { '@id': `${BASE}/#organization` },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${saturdayScript.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ScheduleProvider>
          <TransitionProvider>
            <Header bgColor="bg-blue" />
            <PageContent>{children}</PageContent>
            <MobileScheduleButton />
          </TransitionProvider>
        </ScheduleProvider>
        <Analytics />
        <GoogleAnalytics gaId="G-08T80CNSW3" />
      </body>
    </html>
  );
}
