'use client';

import { createContext, useContext, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { bookingUrls } from '@/src/config/booking';

const ScheduleContext = createContext();

export function ScheduleProvider({ children }) {
  const pathname = usePathname();
  const bookingUrl = bookingUrls[pathname] || 'https://ebbnflow.janeapp.com';

  const open = useCallback(() => {
    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
  }, [bookingUrl]);

  return (
    <ScheduleContext.Provider value={{ open, bookingUrl }}>
      {children}
    </ScheduleContext.Provider>
  );
}

export function useSchedule() {
  return useContext(ScheduleContext);
}
