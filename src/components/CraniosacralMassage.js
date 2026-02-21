import Footer from './Footer';

export default function CraniosacralMassage() {
  return (
    <>
      <section
        aria-label="Craniosacral Therapy"
        className="sm:min-h-screen flex flex-col items-center sm:justify-center pt-28 pb-16 px-8 text-center bg-gray-light">
        <h1 className="font-script text-5xl text-purple mb-6">
          Craniosacral Therapy
        </h1>
        <p className="max-w-xl text-lg font-light text-gray leading-relaxed">
          Craniosacral therapy is a gentle, hands-on approach that uses light
          touch to release tension deep within the body. By working with the
          craniosacral system&mdash;the membranes and fluid that surround the
          brain and spinal cord&mdash;this therapy helps relieve pain, reduce
          stress, and support the body's natural ability to heal. It can benefit
          a wide range of conditions, from chronic pain and migraines to
          stress-related disorders.
        </p>
      </section>
      <Footer />
    </>
  );
}
