import { CalendarIcon } from '@heroicons/react/outline';
import Button from './Button';

export default function ScheduleButton({ setSchedule, variant, className }) {
  return (
    <Button variant={variant} className={className} onClick={() => setSchedule(true)}>
      <CalendarIcon className="h-4 w-4 mr-1.5" aria-hidden="true" />
      Schedule
    </Button>
  );
}

export function DesktopScheduleButton({ setSchedule, className }) {
  return (
    <div className={`hidden sm:block ${className || ''}`}>
      <ScheduleButton setSchedule={setSchedule} />
    </div>
  );
}

export function MobileScheduleButton({ setSchedule, className }) {
  return (
    <div className={`fixed bottom-6 inset-x-0 z-50 sm:hidden flex justify-center ${className || ''}`}>
      <div className="rounded-md shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
        <ScheduleButton setSchedule={setSchedule} variant="fab" />
      </div>
    </div>
  );
}
