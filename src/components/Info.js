import NatalieGamble from '../assets/images/ng.jpeg';
import Footer from './Footer';
import Button from '../ui/Button';
import { DesktopScheduleButton } from '../ui/ScheduleButton';

export default function Info({ navigate, setSchedule }) {
  return (
    <>
      <section
        aria-label="About Ebb & Flow"
        className="sm:min-h-screen bg-gray-light text-center">
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
        <div className="h-4 sm:h-8" />
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-purple mb-4">
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
        <div className="h-4 sm:h-8" />
      </section>
      <Footer />
    </>
  );
}
