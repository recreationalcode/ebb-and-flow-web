import LymphedemaLipedema from '@/src/components/LymphedemaLipedema';
import { seoData } from '@/src/config/seo';
import { generateBreadcrumbs } from '@/src/utils/breadcrumbSchema';

const PATH = '/services/lymphatic/lymphedema-lipedema-management';

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
  { name: 'Lymphedema & Lipedema Management', path: PATH },
]);

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <LymphedemaLipedema />
    </>
  );
}
