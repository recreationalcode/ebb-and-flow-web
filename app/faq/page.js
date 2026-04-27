import FAQ from '@/src/components/FAQ';
import { seoData } from '@/src/config/seo';
import faqData from '@/src/config/faqData';
import { generateFaqSchema } from '@/src/utils/faqSchemaHelper';

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

const faqSchema = generateFaqSchema(faqData);

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQ />
    </>
  );
}
