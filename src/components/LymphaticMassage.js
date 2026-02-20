import Footer from './Footer';

export default function LymphaticMassage() {
  return (
    <>
      <section aria-label="Lymphatic Massage" className="min-h-screen flex flex-col items-center justify-center pt-28 pb-16 px-8 text-center bg-blue">
        <h1 className="font-script text-5xl sm:text-7xl text-white mb-6">
          Lymphatic Massage
        </h1>
        <p className="max-w-xl text-lg sm:text-xl font-light text-gray-light leading-relaxed">
          Manual lymphatic drainage is a gentle, rhythmic massage technique
          designed to stimulate the natural flow of lymph fluid throughout the
          body. This specialized therapy can help reduce swelling, support immune
          function, and promote overall wellness. Whether you are recovering from
          surgery, managing lymphedema, or seeking to support your body's natural
          detoxification processes, lymphatic drainage massage offers a deeply
          therapeutic experience.
        </p>
      </section>
      <Footer />
    </>
  );
}
