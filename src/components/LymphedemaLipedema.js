import Footer from './Footer';
import { DesktopScheduleButton } from '../ui/ScheduleButton';

export default function LymphedemaLipedema({ setSchedule }) {
  return (
    <>
      <section
        aria-label="Lymphedema or Lipedema Management"
        className="sm:min-h-screen flex flex-col items-center sm:justify-center pt-28 pb-16 px-8 text-center bg-blue">
        <h1 className="font-script text-5xl text-white mb-6">
          Lymphedema or Lipedema Management
        </h1>
        <p className="max-w-xl text-lg font-light text-gray-light leading-relaxed">
          Specialized lymphatic drainage for the management of lymphedema and
          lipedema provides targeted relief for chronic swelling and discomfort.
          Using certified manual lymphatic drainage techniques, this therapy
          helps reduce fluid buildup, improve tissue health, and enhance
          mobility. As a certified lymphedema therapist, Natalie works with each
          client to develop a personalized treatment plan that supports
          long-term management and improved quality of life.
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
