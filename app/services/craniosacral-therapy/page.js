import CraniosacralMassage from '@/src/components/CraniosacralMassage';
import { seoData } from '@/src/config/seo';

const PATH = '/services/craniosacral-therapy';

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
  return <CraniosacralMassage />;
}
