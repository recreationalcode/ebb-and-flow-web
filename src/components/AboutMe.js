import Footer from './Footer';
import { DesktopScheduleButton } from '../ui/ScheduleButton';

export default function AboutMe({ setSchedule }) {
  return (
    <>
      <section
        aria-label="About Natalie Gamble"
        className="flex flex-col items-center pt-28 sm:pt-40 pb-24 sm:pb-32 px-8 text-center bg-gray-200">
        <h1 className="font-script text-6xl text-purple mb-6">
          Who I Am and What I Do
        </h1>
        <div className="max-w-xl space-y-4 text-sm font-light text-gray-700 leading-relaxed text-left">
          <p>
            A 2019 graduate of the Lauterstein-Conway Massage School in Austin,
            TX, I've spent my career focusing on the people who often need touch
            the most but receive it the least. I began my journey by diving
            straight into Tracy Walton's Oncology Massage certification, driven
            by a passion for supporting clients through their most vulnerable
            chapters.
          </p>
          <p>
            I love being the person who sees a client through the whole loop:
            the "rebuilding" phase, the "recovery" phase, and finally, the
            "flourishing" phase. I'm a firm believer that everyone deserves to
            feel at home in their own skin, and I use a mix of clinical
            precision and intuitive touch to help you get there.
          </p>
          <p>
            Why the heavy focus on lymph and oncology? Because I love a good
            comeback story. I'm here to support your body's natural rhythm,
            whether you're navigating a new diagnosis or just ready to start
            flourishing again.
          </p>
          <p>
            On a personal note: I'm a total junkie for trying out all the latest
            devices and products regarding MLD—if there's things along more
            effectively, I've probably already tested it or it's something that
            I may need to know about and try!
          </p>
        </div>
        <DesktopScheduleButton setSchedule={setSchedule} className="mt-6" />
      </section>
      <Footer />
    </>
  );
}
