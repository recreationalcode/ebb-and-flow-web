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
        <h1 className="text-4xl font-extralight text-blue sm:text-6xl">
          Natalie Gamble
        </h1>
        <h2 className="text-xl font-thin tracking-widest text-blue sm:text-4xl">
          LMT, CMLDT, MMP
        </h2>
        <div className="h-2 sm:h-4" />
        <div className="text-lg mx-8 font-light tracking-widest text-gray sm:text-xl">
          Specialized in{' '}
          <span className="font-medium">Lymphatic Drainage</span>,{' '}
          <span className="font-medium">Oncology Massage</span>, and{' '}
          <span className="font-medium">Craniosacral Therapy</span>
        </div>
        <div className="h-4 sm:h-8" />
        <br />
        <div className="text-lg mx-8 font-light text-gray sm:text-2xl">
          <span className="font-medium">60 minute sessions</span> starting
          at <span className="font-medium">$150</span>
        </div>
      </section>
      <Footer />
    </>
  );
}
