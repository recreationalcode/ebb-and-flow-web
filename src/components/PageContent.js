'use client';

import { usePathname } from 'next/navigation';
import { useTransitionState } from './TransitionProvider';
import { routeBackgrounds } from '@/src/config/routeColors';
import Footer from './Footer';

const DEFAULT_BG = '#E6E6E6';

export default function PageContent({ children }) {
  const { phase, previousPath, completeReveal } = useTransitionState();
  const pathname = usePathname();
  const isFading = phase === 'dropping' || phase === 'navigating';
  const isRevealing = phase === 'revealing';
  // Pre-apply mask during navigating so it's already composed before the reveal starts
  const shouldMask = phase === 'navigating' || isRevealing;

  const bgColor = previousPath
    ? (routeBackgrounds[previousPath] || DEFAULT_BG)
    : (routeBackgrounds[pathname] || DEFAULT_BG);

  const revealDuration = typeof window !== 'undefined' && window.innerWidth < 640 ? '1.2s' : '0.8s';

  return (
    <main
      style={{ backgroundColor: bgColor }}>
      <div
        className={shouldMask ? 'reveal-mask' : undefined}
        style={{
          ...(isRevealing && {
            animation: `circle-expand ${revealDuration} both linear`,
            opacity: 0, // fallback until animation takes over
          }),
          ...(!isRevealing && {
            transition: isFading ? 'opacity 1s ease-out' : 'none',
            opacity: isFading ? 0 : 1,
          }),
        }}
        onAnimationEnd={isRevealing ? completeReveal : undefined}>
        {children}
        <Footer />
      </div>
    </main>
  );
}
