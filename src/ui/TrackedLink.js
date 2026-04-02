'use client';

import { sendGAEvent } from '@next/third-parties/google';

export default function TrackedLink({ event, eventParams, children, ...props }) {
  return (
    <a
      {...props}
      onClick={() => sendGAEvent('event', event, eventParams)}
    >
      {children}
    </a>
  );
}
