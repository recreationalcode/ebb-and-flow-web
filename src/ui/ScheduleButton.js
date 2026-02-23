import Button from './Button';

export default function ScheduleButton({ setSchedule, className }) {
  return (
    <Button className={className} onClick={() => setSchedule(true)}>
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
