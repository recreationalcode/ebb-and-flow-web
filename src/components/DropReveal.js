import { useState, useEffect, useCallback } from 'react';

// Phases: closed → dropping → expanding → open
// No reverse animation. When open goes false, unmount immediately.

export default function DropReveal({ open, onOpen, colorClass, children }) {
  const [phase, setPhase] = useState(open ? 'open' : 'closed');

  useEffect(() => {
    if (open && phase === 'closed') {
      setPhase('dropping');
    } else if (!open && phase !== 'closed') {
      setPhase('closed');
    }
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  const onTeardropEnd = useCallback(() => {
    setPhase((p) => (p === 'dropping' ? 'expanding' : p));
  }, []);

  const onRevealEnd = useCallback(() => {
    setPhase((p) => {
      if (p === 'expanding') {
        if (onOpen) onOpen();
        return 'open';
      }
      return p;
    });
  }, [onOpen]);

  if (phase === 'closed') return null;

  // Teardrop falls from header to center
  if (phase === 'dropping') {
    return (
      <div className="fixed inset-0 z-40 pointer-events-none">
        <svg
          className={`absolute left-1/2 ${colorClass || 'text-blue'}`}
          width="30"
          height="42"
          viewBox="0 0 30 42"
          style={{
            marginLeft: -15,
            animation:
              'teardrop-fall 1s forwards cubic-bezier(.87, 0, .79, .14)',
          }}
          onAnimationEnd={onTeardropEnd}
        >
          <path
            d="M15 0C15 0 0 20 0 28C0 36 7 42 15 42C23 42 30 36 30 28C30 20 15 0 15 0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    );
  }

  // Circle expands from center, then stays open
  const style = {};
  if (phase === 'expanding') {
    style.animation = 'circle-expand 1s forwards linear';
  } else {
    style.clipPath = 'circle(150% at 50% 50%)';
  }

  return (
    <div
      className="fixed inset-0 z-40 overflow-y-auto"
      style={style}
      onAnimationEnd={onRevealEnd}
    >
      {children}
    </div>
  );
}
