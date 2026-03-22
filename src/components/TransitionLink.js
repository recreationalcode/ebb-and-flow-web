'use client';

import { useCallback } from 'react';
import { useTransitionNavigate } from './TransitionProvider';
import { routeColors } from '@/src/config/routeColors';

export default function TransitionLink({
  href,
  color,
  children,
  className,
  onClick,
  ...rest
}) {
  const triggerTransition = useTransitionNavigate();

  const handleClick = useCallback(
    (e) => {
      e.preventDefault();
      if (onClick) onClick(e);
      const transitionColor = color || routeColors[href] || 'gray';
      triggerTransition(href, transitionColor);
    },
    [href, color, triggerTransition, onClick],
  );

  return (
    <a href={href} onClick={handleClick} className={className} {...rest}>
      {children}
    </a>
  );
}
