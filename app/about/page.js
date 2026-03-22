import AboutMe from '@/src/components/AboutMe';
import { seoData } from '@/src/config/seo';

const PATH = '/about';

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
  return <AboutMe />;
}
