import Footer from './Footer';
import { DesktopScheduleButton } from '../ui/ScheduleButton';

export default function OncologyMassage({ setSchedule }) {
  return (
    <>
      <section
        aria-label="Oncology Massage"
        className="flex flex-col items-center pt-28 sm:pt-40 pb-24 sm:pb-28 px-8 text-center bg-purple-600">
        <h1 className="font-script text-5xl text-white mb-6">
          Oncology Massage
        </h1>
        <p className="max-w-xl text-lg font-light text-gray-100 leading-relaxed">
          Oncology massage is a carefully adapted approach to massage therapy
          designed specifically for those affected by cancer&mdash;whether
          currently in treatment, in recovery, or in survivorship. Using gentle,
          modified techniques, this therapy addresses the unique needs and
          sensitivities of cancer patients, helping to ease anxiety, reduce
          pain, and improve quality of life throughout every stage of the cancer
          journey.
        </p>
        <div className="h-6" />
        <p className="text-lg font-light text-gray-100">
          <span className="font-medium">60 minute sessions</span> for{' '}
          <span className="font-medium">$130</span>
        </p>
        <DesktopScheduleButton setSchedule={setSchedule} className="mt-6" />
      </section>
      <Footer />
    </>
  );
}
