import OncologyMassage from '@/src/components/OncologyMassage';
import { seoData } from '@/src/config/seo';
import { generateBreadcrumbs } from '@/src/utils/breadcrumbSchema';

const PATH = '/services/oncology-massage';

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
  { name: 'Oncology Massage', path: PATH },
]);

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <OncologyMassage />
    </>
  );
}
