import Footer from './Footer';
import { DesktopScheduleButton } from '../ui/ScheduleButton';

export default function CraniosacralMassage({ setSchedule }) {
  return (
    <>
      <section
        aria-label="Craniosacral Therapy"
        className="flex flex-col items-center pt-28 sm:pt-40 pb-24 sm:pb-28 px-8 text-center bg-gray-200">
        <h1 className="font-script text-5xl text-purple mb-6">
          Craniosacral Therapy
        </h1>
        <p className="max-w-xl text-lg font-light text-gray-600 leading-relaxed">
          Craniosacral therapy is a gentle, hands-on approach that uses light
          touch to release tension deep within the body. By working with the
          craniosacral system&mdash;the membranes and fluid that surround the
          brain and spinal cord&mdash;this therapy helps relieve pain, reduce
          stress, and support the body's natural ability to heal. It can benefit
          a wide range of conditions, from chronic pain and migraines to
          stress-related disorders.
        </p>
        <div className="h-6" />
        <p className="text-lg font-light text-gray-600">
          <span className="font-medium">60 minute sessions</span> for{' '}
          <span className="font-medium">$150</span>
        </p>
        <DesktopScheduleButton setSchedule={setSchedule} className="mt-6" />
      </section>
      <Footer />
    </>
  );
}
