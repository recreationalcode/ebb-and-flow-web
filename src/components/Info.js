import NatalieGamble from '../assets/images/ng.jpeg';
import Footer from './Footer';
import ScheduleButton from '../ui/ScheduleButton';

export default function Info({ navigate, setSchedule }) {
  return (
    <>
      <section aria-label="About Ebb & Flow" className="sm:min-h-screen bg-gray-light text-center">
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
          <button onClick={() => navigate('lymphatic')} className="font-medium text-purple underline decoration-1 underline-offset-2 hover:text-blue transition-colors">Lymphatic Drainage</button>,{' '}
          <button onClick={() => navigate('oncology')} className="font-medium text-purple underline decoration-1 underline-offset-2 hover:text-blue transition-colors">Oncology Massage</button>, and{' '}
          <button onClick={() => navigate('craniosacral')} className="font-medium text-purple underline decoration-1 underline-offset-2 hover:text-blue transition-colors">Craniosacral Therapy</button>
        </div>
        <div className="h-4 sm:h-8" />
        <ScheduleButton setSchedule={setSchedule} />
        <div className="h-4 sm:h-8" />
      </section>
      <Footer />
    </>
  );
}
