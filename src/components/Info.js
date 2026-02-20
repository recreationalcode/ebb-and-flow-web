import NatalieGamble from '../assets/images/ng.jpeg';

export default function Info(props) {
  return (
    <section aria-label="About Ebb & Flow" className="min-h-screen w-screen bg-gray-light text-center">
      <div className="h-28 sm:h-28"></div>
      <span className="font-script text-6xl sm:text-8xl text-purple">
        Ebb & flow
      </span>
      <div className="h-4 sm:h-8"></div>
      <img
        className="h-32 mx-auto mb-4 rounded-full sm:h-64 drop-shadow-lg"
        src={NatalieGamble}
        alt="Natalie Gamble"
      />
      <h1 className="text-4xl font font-extralight text-blue sm:text-6xl">
        Natalie Gamble
      </h1>
      <h2 className="text-xl font font-thin tracking-widest text-blue sm:text-4xl">
        LMT, CMLDT, MMP
      </h2>
      <div className="h-2 sm:h-4" />
      <div className="text-m mx-8 font font-light tracking-widest text-gray sm:text-xl">
        Specialized in{' '}
        <span className="text-m font-medium">Lymphatic Drainage</span>,{' '}
        <span className="text-m font-medium">Oncology Massage</span>, and{' '}
        <span className="text-m font-medium">Craniosacral Therapy</span>
      </div>
      <div className="h-4 sm:h-8" />
      <br />
      <div className="text-l mx-8 font font-light text-gray sm:text-2xl">
        <span className="text-m font-medium">60 minute sessions</span> starting
        at <span className="text-m font-medium">$150</span>
      </div>
      <div className="h-6 sm:h-12 w-24 mx-auto border-b-2 border-blue mb-6 sm:mb-12 " />
      <div className="mx-6 sm:mx-auto sm:max-w-md bg-blue rounded-2xl px-6 py-6 sm:px-8 sm:py-8 shadow-lg">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-light mb-4">
          Located at
        </div>
        <a
          href="https://yaoshancenter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-base sm:text-lg font-medium text-white underline underline-offset-2 decoration-white/40 hover:decoration-white transition-colors"
        >
          Yao Shan Center for Chinese Medicine
        </a>
        <div className="text-base sm:text-lg font-light text-white mt-1">
          910 17th Street NW, Suite 1020
        </div>
        <div className="text-base sm:text-lg font-light text-white">
          Washington, DC 20006
        </div>
        <div className="mt-4 rounded-xl overflow-hidden shadow-md">
          <iframe
            title="Yao Shan Center for Chinese Medicine location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.0!2d-77.0395!3d38.9017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7b8e1234567%3A0x0!2s910+17th+St+NW%2C+Washington%2C+DC+20006!5e0!3m2!1sen!2sus!4v1700000000000"
            width="100%"
            height="180"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <div className="h-12 sm:h-16"></div>
    </section>
  );
}
