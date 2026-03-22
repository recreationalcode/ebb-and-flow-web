'use client';

import { getOverlayColor } from '@/src/config/routeColors';

export default function DropRevealOverlay({
  phase,
  color,
  onTeardropEnd,
}) {
  if (phase !== 'dropping') return null;

  const overlayColor = getOverlayColor(color);

  return (
    <div className="fixed inset-0 z-40 pointer-events-none">
      <svg
        className="absolute left-1/2"
        width="46"
        height="58"
        viewBox="-8 -8 46 58"
        style={{
          marginLeft: -23,
          animation:
            'teardrop-fall 1s forwards cubic-bezier(.87, 0, .79, .14)',
        }}
        onAnimationEnd={onTeardropEnd}>
        <defs>
          <filter
            id="drop-shadow"
            x="-40%"
            y="-40%"
            width="180%"
            height="180%">
            <feDropShadow dx="0" dy="1" stdDeviation="4" floodOpacity="0.2" />
          </filter>
        </defs>
        <path
          d="M15 0C15 0 0 20 0 28C0 36 7 42 15 42C23 42 30 36 30 28C30 20 15 0 15 0Z"
          fill={overlayColor}
          filter="url(#drop-shadow)"
        />
      </svg>
    </div>
  );
}
