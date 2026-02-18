import NatalieGamble from '../assets/images/ng.jpeg';
import AustinTexas from '../assets/images/Austin Texas.png';

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
        <span className="text-m font-medium">Lymphatic Drainage</span> and{' '}
        <span className="text-m font-medium">Oncology Massage</span>
      </div>
      <div className="h-4 sm:h-8" />
      <br />
      <div className="text-l mx-8 font font-light text-gray sm:text-2xl">
        <span className="text-m font-medium">60 minute sessions</span> starting
        at <span className="text-m font-medium">$150</span>
      </div>
      <div className="h-6 sm:h-12 w-24 mx-auto border-b-2 border-blue mb-6 sm:mb-12 " />
      <span className="text-xl font font-normal tracking-wide text-blue sm:text-2xl">
        I come to you!
      </span>
      <br />
      <span className="text-xs font font-light tracking-wide text-gray sm:text-sm">
        Note: Prices may change based on location.
      </span>
      <br />
      <div className="h-6 sm:h-12" />
      <img
        className="h-24 mx-auto mb-4 sm:h-48 sm:mb-10"
        src={AustinTexas}
        alt="Austin, Texas"
      />
      <div className="text-s font font-bold tracking-widest text-blue sm:text-l">
        AUSTIN, TX
      </div>
      <span className="text-xs font font-light tracking-wide text-gray sm:text-sm">
        (and surrounding areas)
      </span>
      <div className="h-12 sm:h-16"></div>
    </section>
  );
}
