import Footer from './Footer';
import { DesktopScheduleButton } from '../ui/ScheduleButton';

export default function PrePostOperativeLymphatic({ setSchedule }) {
  return (
    <>
      <section
        aria-label="Pre/Post Operative Lymphatic Massage"
        className="sm:min-h-screen flex flex-col items-center sm:justify-center pt-28 pb-16 px-8 text-center bg-purple">
        <h1 className="font-script text-5xl text-white mb-6">
          Pre/Post Operative
        </h1>
        <p className="max-w-xl text-lg font-light text-gray-light leading-relaxed">
          Pre and post operative lymphatic massage supports your body before and
          after surgery. Before a procedure, lymphatic drainage helps prepare the
          tissue by reducing fluid retention and boosting immune response. After
          surgery, gentle techniques help minimize swelling, reduce bruising, and
          accelerate healing. This specialized approach is especially beneficial
          for cosmetic surgery recovery, orthopedic procedures, and any surgery
          where reducing inflammation is key to optimal outcomes.
        </p>
        <div className="h-6" />
        <p className="text-lg font-light text-gray-light">
          <span className="font-medium">60 minute sessions</span> for{' '}
          <span className="font-medium">$150</span>
        </p>
        <DesktopScheduleButton setSchedule={setSchedule} className="mt-6" />
      </section>
      <Footer />
    </>
  );
}
