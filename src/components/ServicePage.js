import classNames from '../utils/classNames';
import Button from '../ui/Button';
import { DesktopScheduleButton } from '../ui/ScheduleButton';
import Footer from './Footer';
import Cautions from './Cautions';
import { QuestionMarkCircleIcon } from '@heroicons/react/outline';

export default function ServicePage({
  title,
  intro,
  whatItIs,
  whoItIsFor,
  cautions,
  sessionTime = '60 minute sessions',
  price = '$150',
  theme,
  setSchedule,
  faqSection,
  navigate,
}) {
  return (
    <>
      <section
        aria-label={title}
        className={classNames(
          'flex flex-col items-center pt-28 sm:pt-40 pb-24 sm:pb-28 px-8',
          theme.bg,
        )}>
        <h1 className={classNames('font-script text-5xl mb-6 text-center', theme.h1Color)}>
          {title}
        </h1>

        {/* Intro — larger, untitled */}
        <p
          className={classNames(
            'max-w-xl text-xl font-light leading-relaxed text-center',
            theme.bodyText,
          )}>
          {intro}
        </p>

        <div className="h-10" />

        {/* What It Is */}
        <div className="max-w-2xl w-full text-left">
          <h2
            className={classNames(
              'text-sm font-semibold uppercase tracking-widest mb-4',
              theme.sectionHeading,
            )}>
            What It Is
          </h2>
          <div
            className={classNames(
              'text-base font-light leading-relaxed space-y-4',
              theme.bodyText,
            )}>
            {whatItIs}
          </div>
        </div>

        <div className="h-10" />

        {/* Who It Is For */}
        <div className="max-w-2xl w-full text-left">
          <h2
            className={classNames(
              'text-sm font-semibold uppercase tracking-widest mb-4',
              theme.sectionHeading,
            )}>
            Who It Is For
          </h2>
          <p
            className={classNames(
              'text-base font-light mb-3',
              theme.bodyText,
            )}>
            This may be a good fit if&hellip;
          </p>
          <ul
            className={classNames(
              'list-disc list-outside pl-5 space-y-2 text-base font-light leading-relaxed',
              theme.bodyText,
            )}>
            {whoItIsFor.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="h-10" />

        {faqSection && navigate && (
          <Button
            variant="ghost"
            ghostOn={theme.ghost}
            ghostText={theme.ghostText}
            onClick={() => navigate('faq', '#' + faqSection)}>
              <QuestionMarkCircleIcon
                      className="h-4 w-4 mr-1.5"
                      aria-hidden="true"
                    />{' '}
            Have questions? &rarr;
          </Button>
        )}

        <div className="h-10" />

        {/* Cautions */}
        <Cautions>{cautions}</Cautions>

        <div className="h-10" />

        {/* Session & Price */}
        <p className={classNames('text-lg font-light', theme.bodyText)}>
          <span className="font-medium">{sessionTime}</span> for{' '}
          <span className="font-medium">{price}</span>
        </p>

        <DesktopScheduleButton setSchedule={setSchedule} className="mt-6" />
      </section>
      <Footer />
    </>
  );
}
