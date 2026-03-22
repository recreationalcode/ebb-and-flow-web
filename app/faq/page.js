import FAQ from '@/src/components/FAQ';
import { seoData } from '@/src/config/seo';

const PATH = '/faq';

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
  return <FAQ />;
}
