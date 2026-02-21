import { useState, useEffect, useCallback, useRef } from 'react';

// Phases: closed → dropping → expanding → open → background
// When open goes false, 'open' becomes 'background' (stays rendered at z-30,
// preserving scroll position). Re-entering from 'background' animates normally
// unless the outgoing animation was cancelled (wasObscured=false), in which case
// it promotes straight to 'open'. Mid-animation cancellation goes to 'closed'.

export default function DropReveal({ open, onOpen, wasObscured, colorClass, dismissed, children }) {
  const [phase, setPhase] = useState(open ? 'open' : 'closed');
  const containerRef = useRef(null);

  useEffect(() => {
    if (open && phase === 'closed') {
      setPhase('dropping');
    } else if (open && phase === 'background') {
      setPhase(wasObscured ? 'dropping' : 'open');
    } else if (!open && phase === 'open') {
      setPhase('background');
    } else if (!open && (phase === 'dropping' || phase === 'expanding')) {
      setPhase('closed');
    }
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  // Close stale background pages so only the most recent one stays rendered
  useEffect(() => {
    if (dismissed) {
      setPhase((p) => (p === 'background' ? 'closed' : p));
    }
  }, [dismissed]);

  // Scroll to top when revealing a new page
  useEffect(() => {
    if (phase === 'expanding' && containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [phase]);

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
            <filter id="drop-shadow" x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="0" dy="1" stdDeviation="4" floodOpacity="0.2" />
            </filter>
          </defs>
          <path
            d="M15 0C15 0 0 20 0 28C0 36 7 42 15 42C23 42 30 36 30 28C30 20 15 0 15 0Z"
            fill="currentColor"
            filter="url(#drop-shadow)"
          />
        </svg>
      </div>
    );
  }

  const isBackground = phase === 'background';
  const style = { '--reveal-r': '2000px' };
  if (phase === 'expanding') {
    const isMobile = window.innerWidth < 640;
    style.animation = `circle-expand ${isMobile ? '1.2s' : '0.8s'} forwards linear`;
  }

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 ${isBackground ? 'z-30' : 'z-40'} overflow-y-auto ${phase === 'expanding' ? 'reveal-mask' : ''}`}
      style={style}
      onAnimationEnd={onRevealEnd}>
      {children}
    </div>
  );
}
