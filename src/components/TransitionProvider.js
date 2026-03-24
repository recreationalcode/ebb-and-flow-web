'use client';

import { createContext, useContext, useState, useCallback, useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import DropRevealOverlay from './DropRevealOverlay';
import { routeColors } from '@/src/config/routeColors';

const TransitionContext = createContext();

// Module-level store for the hash fragment that router.push strips during
// RSC navigation. Readable synchronously by destination components.
let _pendingHash = null;
export function consumePendingHash() {
  const hash = _pendingHash;
  _pendingHash = null;
  return hash;
}

// State machine:
// idle ──(click)──→ dropping ──(teardrop animationEnd)──→ navigating
//   ↑                                                         │
//   │                                                    (route changed)
//   │                                                         │
//   └────────(circle-expand animationEnd)──── revealing ←─────┘

export function TransitionProvider({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState('idle');
  const [color, setColor] = useState('gray');
  const [destinationPath, setDestinationPath] = useState(null);
  const [previousPath, setPreviousPath] = useState(null);
  const pendingHref = useRef(null);
  const isTransitioning = useRef(false);
  const prevPathname = useRef(pathname);

  const triggerTransition = useCallback(
    (href, transitionColor) => {
      const targetPath = href.split('#')[0] || '/';

      if (targetPath === pathname) {
        if (href.includes('#')) {
          router.push(href);
        }
        return;
      }
      if (isTransitioning.current) return;

      isTransitioning.current = true;
      pendingHref.current = href;
      const hashIndex = href.indexOf('#');
      _pendingHash = hashIndex !== -1 ? href.slice(hashIndex + 1) : null;
      setPreviousPath(pathname);
      setColor(transitionColor || routeColors[targetPath] || 'gray');
      setDestinationPath(targetPath);
      setPhase('dropping');
    },
    [pathname, router],
  );

  // Teardrop finished falling → navigate
  const onTeardropEnd = useCallback(() => {
    setPhase('navigating');
    if (pendingHref.current) {
      router.push(pendingHref.current);
    }
  }, [router]);

  // Detect when Next.js finishes the route swap
  useEffect(() => {
    if (phase === 'navigating' && pathname !== prevPathname.current) {
      prevPathname.current = pathname;
      window.scrollTo(0, 0);
      requestAnimationFrame(() => {
        setPhase('revealing');
      });
    } else {
      prevPathname.current = pathname;
    }
  }, [pathname, phase]);

  // Circle-expand finished → clean up
  const completeReveal = useCallback(() => {
    setPhase('idle');
    setDestinationPath(null);
    isTransitioning.current = false;
    pendingHref.current = null;
  }, []);

  return (
    <TransitionContext.Provider value={{ triggerTransition, phase, color, destinationPath, previousPath, completeReveal }}>
      {children}
      <DropRevealOverlay
        phase={phase}
        color={color}
        onTeardropEnd={onTeardropEnd}
      />
    </TransitionContext.Provider>
  );
}

export function useTransitionNavigate() {
  const { triggerTransition } = useContext(TransitionContext);
  return triggerTransition;
}

export function useTransitionState() {
  const { phase, color, destinationPath, previousPath, completeReveal } = useContext(TransitionContext);
  return { phase, color, destinationPath, previousPath, completeReveal };
}
