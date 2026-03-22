import PrivacyPolicy from '@/src/components/PrivacyPolicy';
import { seoData } from '@/src/config/seo';

const PATH = '/privacy-policy';

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
  return <PrivacyPolicy />;
}
