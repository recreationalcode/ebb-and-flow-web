import Button from './Button';

export default function ScheduleButton({ setSchedule, className }) {
  return (
    <div className={`hidden sm:block ${className || ''}`}>
      <Button onClick={() => setSchedule(true)}>Schedule</Button>
    </div>
  );
}
