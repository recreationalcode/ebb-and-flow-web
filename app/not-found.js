import Link from 'next/link';
import Section from '@/src/components/Section';

export default function NotFound() {
  return (
    <Section ariaLabel="Page Not Found" className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="font-script text-6xl text-purple mb-6">Page Not Found</h1>
      <p className="text-gray-600 font-light mb-8">
        The page you&rsquo;re looking for doesn&rsquo;t exist.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-md shadow-sm px-4 py-2 bg-purple-500 text-base font-medium text-white hover:bg-purple-400">
        Go Home
      </Link>
    </Section>
  );
}
