import PrePostOperativeLymphatic from '@/src/components/PrePostOperativeLymphatic';
import { seoData } from '@/src/config/seo';
import { generateBreadcrumbs } from '@/src/utils/breadcrumbSchema';

const PATH = '/services/lymphatic/pre-post-op-lymphatic-massage';

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
  { name: 'Pre/Post-Op Lymphatic Massage', path: PATH },
]);

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <PrePostOperativeLymphatic />
    </>
  );
}
