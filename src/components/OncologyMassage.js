import Footer from './Footer';

export default function OncologyMassage() {
  return (
    <>
      <section aria-label="Oncology Massage" className="min-h-screen flex flex-col items-center justify-center pt-28 pb-16 px-8 text-center bg-purple">
        <h1 className="font-script text-5xl sm:text-7xl text-white mb-6">
          Oncology Massage
        </h1>
        <p className="max-w-xl text-lg sm:text-xl font-light text-gray-light leading-relaxed">
          Oncology massage is a carefully adapted approach to massage therapy
          designed specifically for those affected by cancer&mdash;whether
          currently in treatment, in recovery, or in survivorship. Using gentle,
          modified techniques, this therapy addresses the unique needs and
          sensitivities of cancer patients, helping to ease anxiety, reduce pain,
          and improve quality of life throughout every stage of the cancer
          journey.
        </p>
      </section>
      <Footer />
    </>
  );
}
