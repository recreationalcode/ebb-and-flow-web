'use client';

import { useSchedule } from '@/src/context/ScheduleContext';
import Schedule from './Schedule';

export default function ScheduleModal() {
  const { isOpen, close, bookingUrl } = useSchedule();
  return <Schedule open={!!isOpen} setOpen={close} bookingUrl={bookingUrl} />;
}
