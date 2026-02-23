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
          <div className="mb-3">Specialized in</div>
          <div className="flex flex-col items-center gap-3">
            <div className="flex flex-col items-center gap-1">
              <span className="font-medium text-blue text-base sm:text-lg tracking-wider">Lymphatic Therapy</span>
              <button onClick={() => navigate('lymph-mld')} className="text-sm sm:text-base font-medium text-purple underline decoration-1 underline-offset-2 hover:text-blue transition-colors">Manual Lymphatic Drainage</button>
              <button onClick={() => navigate('lymph-operative')} className="text-sm sm:text-base font-medium text-purple underline decoration-1 underline-offset-2 hover:text-blue transition-colors">Pre/Post Operative</button>
              <button onClick={() => navigate('lymph-fertility')} className="text-sm sm:text-base font-medium text-purple underline decoration-1 underline-offset-2 hover:text-blue transition-colors">Fertility/Pregnancy/Postpartum</button>
              <button onClick={() => navigate('lymph-edema')} className="text-sm sm:text-base font-medium text-purple underline decoration-1 underline-offset-2 hover:text-blue transition-colors">Lymphedema or Lipedema Management</button>
            </div>
            <button onClick={() => navigate('oncology')} className="font-medium text-purple underline decoration-1 underline-offset-2 hover:text-blue transition-colors">Oncology Massage</button>
            <button onClick={() => navigate('craniosacral')} className="font-medium text-purple underline decoration-1 underline-offset-2 hover:text-blue transition-colors">Craniosacral Therapy</button>
          </div>
        </div>
        <div className="h-4 sm:h-8" />
        <ScheduleButton setSchedule={setSchedule} />
        <div className="h-4 sm:h-8" />
      </section>
      <Footer />
    </>
  );
}
