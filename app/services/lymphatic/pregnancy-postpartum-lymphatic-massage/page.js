import PregnancyPostpartumLymphatic from '@/src/components/PregnancyPostpartumLymphatic';
import { seoData } from '@/src/config/seo';
import { generateBreadcrumbs } from '@/src/utils/breadcrumbSchema';

const PATH = '/services/lymphatic/pregnancy-postpartum-lymphatic-massage';

export async function generateMetadata() {
  const { title, description } = seoData[PATH];
  return {
    title,
    description,
    alternates: { canonical: PATH },
    openGraph: { title, description, url: PATH },
    twitter: { title, description },
  };
}

const breadcrumbs = generateBreadcrumbs([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Lymphatic', path: '/services/lymphatic' },
  { name: 'Pregnancy & Postpartum Massage', path: PATH },
]);

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <PregnancyPostpartumLymphatic />
    </>
  );
}
