import TermsAndConditions from '@/src/components/TermsAndConditions';
import { seoData } from '@/src/config/seo';

const PATH = '/terms-and-conditions';

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
  return <TermsAndConditions />;
}
