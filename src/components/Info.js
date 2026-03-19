import NatalieGamble from '../assets/images/ng.jpeg';
import Footer from './Footer';
import Button from '../ui/Button';
import { DesktopScheduleButton } from '../ui/ScheduleButton';

export default function Info({ navigate, setSchedule }) {
  return (
    <>
      <section
        aria-label="About Ebb & Flow"
        className="bg-gray-200 text-center">
        <div className="h-28 sm:h-40"></div>
        <span className="font-script text-7xl sm:text-8xl text-purple">
          Ebb & flow
        </span>
        <div className="h-4 sm:h-8"></div>
        <h1 className="text-lg sm:text-3xl font-extralight text-blue px-4">
          Clinical Care for a Focused, Fluid, and Functional Body
        </h1>
        <div className="h-6 sm:h-10"></div>
        <div className="flex flex-col sm:flex-row items-center sm:items-center sm:justify-center gap-6 sm:gap-10 mx-6 sm:mx-auto sm:max-w-3xl">
          <div className="flex flex-col items-center">
            <img
              className="h-32 mb-4 rounded-full sm:h-48 drop-shadow-lg"
              src={NatalieGamble}
              alt="Natalie Gamble"
            />
            <h1 className="text-4xl font-extralight text-blue sm:text-5xl">
              Natalie Gamble
            </h1>
            <h2 className="text-lg font-thin tracking-widest text-blue sm:text-2xl">
              LMT, CMLDT, MMP, CST
            </h2>
          </div>
          <div className="bg-blue rounded-2xl px-8 py-8 shadow-lg sm:flex-1 sm:max-w-md flex flex-col justify-center text-center sm:text-left">
            <div className="text-sm sm:text-base font-semibold uppercase tracking-[0.2em] text-blue-200 mb-4">
              Mission
            </div>
            <p className="text-sm font-light text-white leading-relaxed">
              At Ebb and Flow, I specialize in helping you feel at home in your
              body through clinical recovery and nervous system regulation. I
              believe recovery is a comprehensive process, not just a physical
              one. By bridging clinical lymphatic expertise with fascia-informed
              care, I help your body feel focused, fluid, and functional. I
              provide the hands-on expertise and educational self-care support
              needed for your healing journey.
            </p>
          </div>
        </div>
        <div className="h-8 sm:h-12" />
        <div className="text-sm sm:text-base font-semibold uppercase tracking-[0.2em] text-purple mb-4">
          Specialized in
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mx-6 sm:mx-auto sm:max-w-3xl">
          <Button variant="card" onClick={() => navigate('lymph-mld')}>
            Manual Lymphatic Drainage (MLD)
          </Button>
          <Button variant="card" onClick={() => navigate('lymph-operative')}>
            Pre / Post Operative Lymphatic
          </Button>
          <Button variant="card" onClick={() => navigate('lymph-fertility')}>
            Fertility / Pregnancy / Postpartum Lymphatic
          </Button>
          <Button variant="card" onClick={() => navigate('lymph-edema')}>
            Lymphedema and Lipedema Management
          </Button>
          <Button variant="card" onClick={() => navigate('oncology')}>
            Oncology Massage
          </Button>
          <Button variant="card" onClick={() => navigate('craniosacral')}>
            Craniosacral Therapy (CST)
          </Button>
        </div>
        <div className="h-4 sm:h-8" />
        <DesktopScheduleButton setSchedule={setSchedule} />
        <div className="h-10 sm:h-16" />
      </section>
      <Footer navigate={navigate} />
    </>
  );
}
