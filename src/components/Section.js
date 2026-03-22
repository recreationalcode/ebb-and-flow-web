'use client';

import { usePathname } from 'next/navigation';
import classNames from '@/src/utils/classNames';
import { getTheme } from '@/src/config/routeColors';

export default function Section({ children, className, ariaLabel }) {
  const pathname = usePathname();
  const theme = getTheme(pathname);


  return (
    <section
      aria-label={ariaLabel}
      className={classNames(
        'pt-28 sm:pt-40 pb-24 sm:pb-28 px-4 sm:px-8',
        theme.bgClass,
        className,
      )}>
      {children}
    </section>
  );
}
