'use client';

import classNames from '@/src/utils/classNames';
import Button from '@/src/ui/Button';
import { DesktopScheduleButton } from '@/src/ui/ScheduleButton';
import Cautions from './Cautions';
import Section from './Section';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import { useTransitionNavigate } from './TransitionProvider';

export default function ServicePage({
  title,
  intro,
  whatItIs,
  whoItIsFor,
  cautions,
  sessionTime = '60 minute sessions',
  price = '$150',
  theme,
  faqSection,
}) {
  const navigate = useTransitionNavigate();

  return (
      <Section
        ariaLabel={typeof title === 'string' ? title : 'Service'}
        className="flex flex-col items-center">
        <h1 className={classNames('font-script text-5xl mb-6 text-center', theme.h1Color)}>
          {title}
        </h1>

        <p
          className={classNames(
            'max-w-xl text-xl font-light leading-relaxed text-center',
            theme.bodyText,
          )}>
          {intro}
        </p>

        <div className="h-10" />

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

        {faqSection && (
          <Button
            variant="ghost"
            ghostOn={theme.ghost}
            ghostText={theme.ghostText}
            onClick={() => navigate('/faq#' + faqSection)}>
              <QuestionMarkCircleIcon
                      className="h-4 w-4 mr-1.5"
                      aria-hidden="true"
                    />{' '}
            Questions? &rarr;
          </Button>
        )}

        <div className="h-10" />

        <Cautions>{cautions}</Cautions>

        <div className="h-10" />

        <p className={classNames('text-lg font-light', theme.bodyText)}>
          <span className="font-medium">{sessionTime}</span> for{' '}
          <span className="font-medium">{price}</span>
        </p>

        <DesktopScheduleButton className="mt-6" />
      </Section>
  );
}
