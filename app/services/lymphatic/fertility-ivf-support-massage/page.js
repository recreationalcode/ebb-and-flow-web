import FertilityIVFSupport from '@/src/components/FertilityIVFSupport';
import { seoData } from '@/src/config/seo';

const PATH = '/services/lymphatic/fertility-ivf-support-massage';

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
  return <FertilityIVFSupport />;
}
