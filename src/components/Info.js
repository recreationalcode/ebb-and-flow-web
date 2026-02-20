import NatalieGamble from '../assets/images/ng.jpeg';
import Footer from './Footer';

export default function Info(props) {
  return (
    <>
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
      </section>
      <Footer />
    </>
  );
}
