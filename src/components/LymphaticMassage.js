import Footer from './Footer';
import ScheduleButton from '../ui/ScheduleButton';

export default function LymphaticMassage({ setSchedule }) {
  return (
    <>
      <section
        aria-label="Lymphatic Massage"
        className="sm:min-h-screen flex flex-col items-center sm:justify-center pt-28 pb-16 px-8 text-center bg-blue">
        <h1 className="font-script text-5xl text-white mb-6">
          Lymphatic Massage
        </h1>
        <p className="max-w-xl text-lg font-light text-gray-light leading-relaxed">
          Manual lymphatic drainage is a gentle, rhythmic massage technique
          designed to stimulate the natural flow of lymph fluid throughout the
          body. This specialized therapy can help reduce swelling, support
          immune function, and promote overall wellness. Whether you are
          recovering from surgery, managing lymphedema, or seeking to support
          your body's natural detoxification processes, lymphatic drainage
          massage offers a deeply therapeutic experience.
        </p>
        <div className="h-6" />
        <p className="text-lg font-light text-gray-light">
          <span className="font-medium">60 minute sessions</span> for{' '}
          <span className="font-medium">$150</span>
        </p>
        <ScheduleButton setSchedule={setSchedule} className="mt-6" />
      </section>
      <Footer />
    </>
  );
}
