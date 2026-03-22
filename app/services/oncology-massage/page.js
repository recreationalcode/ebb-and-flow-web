import OncologyMassage from '@/src/components/OncologyMassage';
import { seoData } from '@/src/config/seo';

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

export default function Page() {
  return <OncologyMassage />;
}
