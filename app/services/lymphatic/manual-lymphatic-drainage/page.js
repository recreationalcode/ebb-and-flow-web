import ManualLymphaticDrainage from '@/src/components/ManualLymphaticDrainage';
import { seoData } from '@/src/config/seo';
import { generateBreadcrumbs } from '@/src/utils/breadcrumbSchema';

const PATH = '/services/lymphatic/manual-lymphatic-drainage';

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
  { name: 'Manual Lymphatic Drainage', path: PATH },
]);

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <ManualLymphaticDrainage />
    </>
  );
}
