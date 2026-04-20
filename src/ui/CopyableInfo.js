'use client';

import { useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';
import { Square2StackIcon } from '@heroicons/react/24/outline';

export default function CopyableInfo({ label, children, copyText, breakAll = false }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(copyText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="flex items-stretch gap-0 bg-blue-600/50 rounded-xl w-fit max-w-full mx-auto">
      <div className={`min-w-0 text-sm font-light text-white not-italic leading-relaxed text-left px-4 py-3${breakAll ? ' break-all' : ''}`}>
        {label && (
          <div className="text-xs uppercase tracking-widest text-blue-200 font-medium mb-1">
            {label}
          </div>
        )}
        {children}
      </div>
      <button
        onClick={handleCopy}
        className="flex-shrink-0 flex flex-col items-center justify-center gap-1 px-3 rounded-r-xl bg-blue-500/40 text-blue-100 hover:text-white hover:bg-blue-500/60 transition-colors text-xs font-medium"
        aria-label={`Copy ${label || 'info'}`}>
        {copied ? (
          <>
            <CheckIcon className="h-5 w-5" />
            <span className="hidden sm:inline">Copied</span>
          </>
        ) : (
          <>
            <Square2StackIcon className="h-5 w-5" />
            <span className="hidden sm:inline">Copy</span>
          </>
        )}
      </button>
    </div>
  );
}
