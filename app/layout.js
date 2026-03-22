import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/next';
import { GoogleAnalytics } from '@next/third-parties/google';

import { ScheduleProvider } from '@/src/context/ScheduleContext';
import { TransitionProvider } from '@/src/components/TransitionProvider';
import Header from '@/src/components/Header';
import PageContent from '@/src/components/PageContent';
import { MobileScheduleButton } from '@/src/ui/ScheduleButton';
import ScheduleModal from '@/src/components/ScheduleModal';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const saturdayScript = localFont({
  src: '../src/assets/fonts/SaturdayScriptOblique.otf',
  variable: '--font-script',
  display: 'swap',
});

export async function generateMetadata() {
  return {
    metadataBase: new URL('https://ebbandflowmassagestudio.com'),
    title: {
      default: 'Ebb & Flow Massage Studio | Lymphatic Drainage, Oncology Massage & Craniosacral Therapy in Washington, DC',
      template: '%s',
    },
    description: 'Ebb & Flow Massage Studio in Washington, DC specializing in Lymphatic Drainage, Oncology Massage, and Craniosacral Therapy. Book with Natalie Gamble, LMT, CMLDT, MMP, CST.',
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HealthAndBeautyBusiness'],
  name: 'Ebb & Flow Massage Studio',
  description: 'Massage studio in Washington, DC specializing in Lymphatic Drainage, Oncology Massage, and Craniosacral Therapy.',
  url: 'https://ebbandflowmassagestudio.com',
  telephone: '+18505293740',
  email: 'nat@ebbandflowmassagestudio.com',
  image: 'https://ebbandflowmassagestudio.com/logo512.png',
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
    latitude: 38.9017,
    longitude: -77.0395,
  },
  areaServed: {
    '@type': 'City',
    name: 'Washington, D.C.',
    sameAs: 'https://en.wikipedia.org/wiki/Washington,_D.C.',
  },
  founder: {
    '@type': 'Person',
    name: 'Natalie Gamble',
    jobTitle: 'Licensed Massage Therapist (LMT, CMLDT, MMP, CST)',
    url: 'https://ebbandflowmassagestudio.com/about',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Massage Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Manual Lymphatic Drainage', url: 'https://ebbandflowmassagestudio.com/services/lymphatic/manual-lymphatic-drainage', description: 'Gentle, rhythmic bodywork to support lymph flow and reduce swelling.' },
        price: '150.00', priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Pre/Post-Op Lymphatic Massage', url: 'https://ebbandflowmassagestudio.com/services/lymphatic/pre-post-op-lymphatic-massage', description: 'Gentle lymphatic support before and after surgery for comfort and recovery.' },
        price: '150.00', priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Lymphedema and Lipedema Management', url: 'https://ebbandflowmassagestudio.com/services/lymphatic/lymphedema-lipedema-management', description: 'Supportive lymphatic care for swelling, heaviness, and discomfort from lymphedema or lipedema.' },
        price: '150.00', priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Fertility and IVF Support Massage', url: 'https://ebbandflowmassagestudio.com/services/lymphatic/fertility-ivf-support-massage', description: 'Gentle, lymphatic-focused bodywork for comfort and grounding during fertility treatment.' },
        price: '150.00', priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Pregnancy and Postpartum Lymphatic Massage', url: 'https://ebbandflowmassagestudio.com/services/lymphatic/pregnancy-postpartum-lymphatic-massage', description: 'Gentle bodywork for swelling, comfort, and recovery during pregnancy and postpartum.' },
        price: '150.00', priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Oncology Massage', url: 'https://ebbandflowmassagestudio.com/services/oncology-massage', description: 'Thoughtfully adapted massage for people in treatment, recovery, or survivorship.' },
        price: '130.00', priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Craniosacral Therapy', url: 'https://ebbandflowmassagestudio.com/services/craniosacral-therapy', description: 'Gentle hands-on therapy to help the body settle and release tension patterns.' },
        price: '150.00', priceCurrency: 'USD',
      },
    ],
  },
  sameAs: [
    'https://www.linkedin.com/company/ebb-and-flow-massage/',
    'https://www.facebook.com/ebbandflowmassagestudio',
    'https://www.instagram.com/ebbandflowmassagestudio/',
  ],
  priceRange: '$130+',
  openingHours: ['We 08:00-17:00', 'Sa 08:00-17:00'],
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '08:00', closes: '17:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '17:00' },
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
          <ScheduleModal />
        </ScheduleProvider>
        <Analytics />
        <GoogleAnalytics gaId="G-08T80CNSW3" />
      </body>
    </html>
  );
}
