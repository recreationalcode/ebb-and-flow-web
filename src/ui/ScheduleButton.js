'use client';

import { CalendarIcon } from '@heroicons/react/24/outline';
import Button from './Button';
import { useSchedule } from '@/src/context/ScheduleContext';

export default function ScheduleButton({ setSchedule, variant, className }) {
  const schedule = useSchedule();
  const handler = setSchedule || (schedule ? () => schedule.open() : () => {});
  return (
    <Button variant={variant} className={className} onClick={handler}>
      <CalendarIcon className="h-4 w-4 mr-1.5" aria-hidden="true" />
      Schedule
    </Button>
  );
}

export function DesktopScheduleButton({ className }) {
  return (
    <div className={`hidden sm:block ${className || ''}`}>
      <ScheduleButton />
    </div>
  );
}

export function MobileScheduleButton({ className }) {
  return (
    <div className={`fixed bottom-6 inset-x-0 z-50 sm:hidden flex justify-center ${className || ''}`}>
      <div className="rounded-md shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
        <ScheduleButton variant="fab" />
      </div>
    </div>
  );
}
