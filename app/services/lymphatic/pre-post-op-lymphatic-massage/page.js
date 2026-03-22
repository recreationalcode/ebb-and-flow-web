import PrePostOperativeLymphatic from '@/src/components/PrePostOperativeLymphatic';
import { seoData } from '@/src/config/seo';

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

export default function Page() {
  return <PrePostOperativeLymphatic />;
}
