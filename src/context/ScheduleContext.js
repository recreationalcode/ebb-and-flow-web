'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { bookingUrls } from '@/src/config/booking';

const ScheduleContext = createContext();

export function ScheduleProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const open = useCallback((url) => {
    setIsOpen(url || true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Listen for custom event from FAQ inline buttons
  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener('open-schedule', handler);
    return () => window.removeEventListener('open-schedule', handler);
  }, []);

  const bookingUrl = bookingUrls[pathname] || 'https://ebbnflow.janeapp.com';

  return (
    <ScheduleContext.Provider value={{ isOpen, open, close, bookingUrl }}>
      {children}
    </ScheduleContext.Provider>
  );
}

export function useSchedule() {
  return useContext(ScheduleContext);
}
