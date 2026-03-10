import Footer from './Footer';
import { DesktopScheduleButton } from '../ui/ScheduleButton';

export default function FertilityPregnancyLymphatic({ setSchedule }) {
  return (
    <>
      <section
        aria-label="Fertility/Pregnancy/Postpartum Lymphatic Massage"
        className="flex flex-col items-center pt-28 sm:pt-40 pb-24 sm:pb-28 px-8 text-center bg-gray-200">
        <h1 className="font-script text-5xl text-purple mb-6">
          Fertility / Pregnancy / Postpartum
        </h1>
        <p className="max-w-xl text-lg font-light text-gray-600 leading-relaxed">
          Lymphatic drainage during fertility treatments, pregnancy, and the
          postpartum period offers gentle yet effective support for your
          changing body. This specialized therapy can help reduce swelling, ease
          discomfort, and support hormonal balance. Whether you are navigating
          fertility treatments, managing pregnancy-related edema, or recovering
          after birth, lymphatic massage provides nurturing care tailored to
          each stage of your journey.
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
