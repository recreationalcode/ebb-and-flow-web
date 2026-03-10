import Footer from './Footer';
import { DesktopScheduleButton } from '../ui/ScheduleButton';

export default function ManualLymphaticDrainage({ setSchedule }) {
  return (
    <>
      <section
        aria-label="Manual Lymphatic Drainage"
        className="flex flex-col items-center pt-28 sm:pt-40 pb-24 sm:pb-28 px-8 text-center bg-blue-600">
        <h1 className="font-script text-5xl text-white mb-6">
          Manual Lymphatic Drainage
        </h1>
        <p className="max-w-xl text-lg font-light text-gray-100 leading-relaxed">
          Manual lymphatic drainage is a gentle, rhythmic massage technique
          designed to stimulate the natural flow of lymph fluid throughout the
          body. This specialized therapy can help reduce swelling, support
          immune function, and promote overall wellness. Whether you are
          recovering from surgery, managing lymphedema, or seeking to support
          your body's natural detoxification processes, lymphatic drainage
          massage offers a deeply therapeutic experience.
        </p>
        <div className="h-6" />
        <p className="text-lg font-light text-gray-100">
          <span className="font-medium">60 minute sessions</span> for{' '}
          <span className="font-medium">$150</span>
        </p>
        <DesktopScheduleButton setSchedule={setSchedule} className="mt-6" />
      </section>
      <Footer />
    </>
  );
}
