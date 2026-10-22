'use client';

import { useEffect, useId, useRef, useState } from 'react';
import {
  ArrowTopRightOnSquareIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PauseIcon,
  PlayIcon,
} from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import classNames from '@/src/utils/classNames';
import Button from '@/src/ui/Button';
import TrackedLink from '@/src/ui/TrackedLink';
import { GOOGLE_PROFILE_URL } from '@/src/config/reviews';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

// '2026-10-09' -> 'October 2026', identical on server and client.
function formatMonth(isoDate) {
  const [year, month] = isoDate.split('-');
  return `${MONTHS[Number(month) - 1]} ${year}`;
}

// Longer reviews stay up longer: about 50ms per character, 8 to 20 seconds.
function displayTime(text) {
  return Math.min(20000, Math.max(8000, text.length * 50));
}

// The countdown runs once the whole carousel is on screen (START_SHARE allows
// for rounding) with its middle in the top START_MIDDLE of the screen. On
// phones and laptops that is as soon as the card is fully visible; on tall
// screens it waits for the card to leave the very bottom. It pauses, keeping
// its progress, once less than STOP_SHARE of the carousel is on screen.
const START_SHARE = 0.98;
const START_MIDDLE = 0.75;
const STOP_SHARE = 0.25;

// In a carousel, long reviews are cut to --clamp-lines with a "Read more"
// toggle so the cards stay close in height. A review that would only lose
// CLAMP_SLACK_LINES or fewer is shown in full instead.
const CLAMP_LINES = '[--clamp-lines:8] sm:[--clamp-lines:6]';
const CLAMP_SLACK_LINES = 1.5;
const FADE = 'linear-gradient(to bottom, #000 calc(100% - var(--review-fade)), transparent)';

// Cards slide past each other this far apart, and soften over the strip at
// each edge of the stage where they leave and arrive.
const CARD_GAP = 24;
const EDGE_FADE = 'linear-gradient(to right, transparent, #000 1rem, #000 calc(100% - 1rem), transparent)';
const SLIDE_MS = 450;
const SLIDE_EASING = 'cubic-bezier(0.22, 1, 0.36, 1)';

// A swipe starts once a finger moves SWIPE_START_PX mostly sideways; moving
// that far mostly up or down is left to page scrolling. The next card takes
// over past SWIPE_COMMIT_SHARE of the card, or on a flick of at least
// SWIPE_FLICK_PX at SWIPE_FLICK_PX_PER_MS.
const SWIPE_START_PX = 10;
const SWIPE_COMMIT_SHARE = 0.25;
const SWIPE_FLICK_PX = 30;
const SWIPE_FLICK_PX_PER_MS = 0.4;

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function Stars({ rating, className }) {
  return (
    <div
      role="img"
      aria-label={`${rating} out of 5 stars`}
      className={classNames('flex gap-0.5', className)}>
      {[1, 2, 3, 4, 5].map((star) => (
        <StarIcon
          key={star}
          aria-hidden="true"
          className={classNames('h-4 w-4', star > rating && 'opacity-25')}
        />
      ))}
    </div>
  );
}

export default function ReviewCarousel({ reviews, theme }) {
  const headingId = useId();
  const stageRef = useRef(null);
  const slideRefs = useRef([]);
  const quoteRefs = useRef([]);
  // The slide animation and the swipe currently in progress, if any.
  const motion = useRef(null);
  const swipe = useRef(null);
  const lastSwipeEnd = useRef(-Infinity);
  const [index, setIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [expanded, setExpanded] = useState(false);
  // Per review: whether it is long enough to cut, and its full height for the
  // expand animation. Null until measured in the browser.
  const [quoteSizes, setQuoteSizes] = useState(null);

  const count = reviews.length;
  const hasMany = count > 1;
  const onScreen = inView && pageVisible;
  const rotating = hasMany && autoplay && !hovered && !dragging && onScreen;

  useEffect(() => {
    if (prefersReducedMotion()) setAutoplay(false);
  }, []);

  useEffect(() => {
    if (!hasMany) return;
    let frame = 0;
    const check = () => {
      frame = 0;
      const rect = stageRef.current.getBoundingClientRect();
      const screen = window.innerHeight;
      const visible = Math.max(0, Math.min(rect.bottom, screen) - Math.max(rect.top, 0));
      // A carousel taller than the screen counts by how much of the screen it fills.
      const share = Math.max(visible / rect.height, visible / screen);
      const middle = (rect.top + rect.bottom) / 2;
      setInView((was) =>
        was ? share > STOP_SHARE : share >= START_SHARE && middle <= screen * START_MIDDLE,
      );
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };
    // First check on the next frame, after any scroll reset from a page transition.
    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [hasMany]);

  // A background tab counts as off screen too.
  useEffect(() => {
    const update = () => setPageVisible(document.visibilityState === 'visible');
    update();
    document.addEventListener('visibilitychange', update);
    return () => document.removeEventListener('visibilitychange', update);
  }, []);

  // Line counts depend on the card width and font, so measure in the browser
  // and again whenever the cards resize.
  useEffect(() => {
    if (!hasMany) return;
    const measure = () => {
      const next = quoteRefs.current.map((quote) => {
        if (!quote) return { expandable: false, fullHeight: 0 };
        const style = getComputedStyle(quote);
        const lines = parseFloat(style.getPropertyValue('--clamp-lines'));
        const lineHeight = parseFloat(style.lineHeight);
        const fullHeight = quote.scrollHeight;
        return {
          expandable: fullHeight > lineHeight * (lines + CLAMP_SLACK_LINES),
          fullHeight,
        };
      });
      setQuoteSizes((prev) =>
        prev &&
        prev.every(
          (size, i) =>
            size.expandable === next[i].expandable &&
            size.fullHeight === next[i].fullHeight,
        )
          ? prev
          : next,
      );
    };
    const observer = new ResizeObserver(measure);
    observer.observe(stageRef.current);
    document.fonts?.ready.then(measure);
    return () => observer.disconnect();
  }, [hasMany]);

  // Jumps any slide animation to its end and clears the inline styles it used.
  const settle = () => {
    const current = motion.current;
    if (!current) return;
    motion.current = null;
    current.animations.forEach((animation) => animation.cancel());
    current.slides.forEach((slide) => {
      slide.style.transform = '';
      slide.style.visibility = '';
    });
  };

  // Each move is [slide, fromX, toX] in pixels.
  const animate = (moves, duration) => {
    const animations = moves.map(([slide, from, to]) => {
      slide.style.visibility = 'visible';
      return slide.animate(
        [{ transform: `translateX(${from}px)` }, { transform: `translateX(${to}px)` }],
        { duration, easing: SLIDE_EASING, fill: 'forwards' },
      );
    });
    const current = { slides: moves.map(([slide]) => slide), animations };
    motion.current = current;
    animations[0].finished.then(
      () => motion.current === current && settle(),
      () => {},
    );
  };

  // Slides the current card out and card `next` in from the right (direction
  // 1) or the left (-1). `offset` is how far a swipe has already moved it.
  const slideTo = (next, direction, offset = 0) => {
    settle();
    const outgoing = slideRefs.current[index];
    const incoming = slideRefs.current[next];
    const distance = outgoing.offsetWidth + CARD_GAP;
    const remaining = 1 - Math.min(Math.abs(offset) / distance, 1);
    setExpanded(false);
    setIndex(next);
    animate(
      [
        [outgoing, offset, -direction * distance],
        [incoming, offset + direction * distance, 0],
      ],
      prefersReducedMotion() ? 0 : Math.max(200, SLIDE_MS * remaining),
    );
  };

  const advance = () => slideTo((index + 1) % count, 1);

  // Picking a review by hand stops the rotation so it can be read at leisure.
  const go = (next, direction) => {
    setAutoplay(false);
    slideTo(next, direction);
  };

  const toggleExpanded = () => {
    setAutoplay(false);
    setExpanded((open) => !open);
    // After reading a long review the top of the card may be scrolled away;
    // glide back to it while the card shrinks.
    const stage = stageRef.current;
    if (expanded && stage.getBoundingClientRect().top < parseFloat(getComputedStyle(stage).scrollMarginTop)) {
      stage.scrollIntoView({ block: 'start', behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    }
  };

  const handlePointerDown = (e) => {
    if (!hasMany || e.pointerType === 'mouse' || !e.isPrimary) return;
    swipe.current = { id: e.pointerId, x: e.clientX, y: e.clientY, dx: 0, moving: false, samples: [] };
  };

  const handlePointerMove = (e) => {
    const gesture = swipe.current;
    if (!gesture || e.pointerId !== gesture.id) return;
    const dx = e.clientX - gesture.x;
    if (!gesture.moving) {
      const dy = e.clientY - gesture.y;
      const sideways = Math.abs(dx) >= SWIPE_START_PX && Math.abs(dx) > Math.abs(dy) * 1.5;
      if (!sideways) {
        // Moving up or down first means the page is scrolling, not the cards.
        if (Math.abs(dy) >= SWIPE_START_PX) swipe.current = null;
        return;
      }
      gesture.moving = true;
      settle();
      setDragging(true);
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch {
        // Capture only keeps the swipe alive if the finger leaves the card.
      }
    }
    gesture.dx = dx;
    gesture.samples = [...gesture.samples.slice(-4), { x: e.clientX, t: e.timeStamp }];

    // The current card follows the finger, with the card it reveals alongside.
    const current = slideRefs.current[index];
    const direction = dx < 0 ? 1 : -1;
    const neighbor = slideRefs.current[(index + direction + count) % count];
    if (gesture.neighbor && gesture.neighbor !== neighbor) {
      gesture.neighbor.style.transform = '';
      gesture.neighbor.style.visibility = '';
    }
    gesture.neighbor = neighbor;
    gesture.direction = direction;
    current.style.transform = `translateX(${dx}px)`;
    neighbor.style.visibility = 'visible';
    neighbor.style.transform = `translateX(${dx + direction * (current.offsetWidth + CARD_GAP)}px)`;
  };

  const handlePointerEnd = (e) => {
    const gesture = swipe.current;
    if (!gesture || e.pointerId !== gesture.id) return;
    swipe.current = null;
    if (!gesture.moving) return;
    setDragging(false);
    lastSwipeEnd.current = e.timeStamp;
    const current = slideRefs.current[index];
    const first = gesture.samples[0];
    const last = gesture.samples[gesture.samples.length - 1];
    const velocity = last.t > first.t ? (last.x - first.x) / (last.t - first.t) : 0;
    const flicked =
      Math.abs(gesture.dx) >= SWIPE_FLICK_PX &&
      Math.abs(velocity) > SWIPE_FLICK_PX_PER_MS &&
      Math.sign(velocity) === Math.sign(gesture.dx);
    const farEnough = Math.abs(gesture.dx) > current.offsetWidth * SWIPE_COMMIT_SHARE;
    if (e.type === 'pointerup' && (farEnough || flicked)) {
      // Swiping to another review counts as picking it by hand.
      setAutoplay(false);
      slideTo((index + gesture.direction + count) % count, gesture.direction, gesture.dx);
      return;
    }
    // Not far enough: both cards ease back to where they started.
    const distance = current.offsetWidth + CARD_GAP;
    animate(
      [
        [current, gesture.dx, 0],
        [gesture.neighbor, gesture.dx + gesture.direction * distance, gesture.direction * distance],
      ],
      prefersReducedMotion() ? 0 : 300,
    );
  };

  // A swipe that ends over a button shouldn't also press it.
  const handleClickCapture = (e) => {
    if (e.timeStamp - lastSwipeEnd.current < 300) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const controlProps = {
    variant: 'ghost',
    ghostOn: theme.ghost,
    ghostText: theme.ghostText,
    className: '!p-1.5 !rounded-full',
  };

  return (
    <section
      aria-labelledby={headingId}
      aria-roledescription={hasMany ? 'carousel' : undefined}
      className="w-full text-left">
      <div className="flex items-baseline justify-between gap-4 mb-4">
        <h2
          id={headingId}
          className={classNames(
            'text-sm font-semibold uppercase tracking-widest',
            theme.sectionHeading,
          )}>
          Client Reviews
        </h2>
        <TrackedLink
          href={GOOGLE_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          event="google_reviews_click"
          className={classNames(
            'inline-flex items-center gap-1 text-sm font-light underline underline-offset-2 hover:opacity-80',
            theme.sectionHeading,
          )}>
          See all<span className="sr-only"> reviews</span>
          <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5" aria-hidden="true" />
        </TrackedLink>
      </div>

      {/* The stage reaches 1rem past the cards so their shadows aren't clipped. */}
      <div
        ref={stageRef}
        className="-mx-4 -my-4 px-4 py-4 overflow-hidden touch-pan-y touch-pinch-zoom scroll-mt-20"
        style={hasMany ? { maskImage: EDGE_FADE, WebkitMaskImage: EDGE_FADE } : undefined}
        onPointerEnter={(e) => e.pointerType === 'mouse' && setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
        onClickCapture={handleClickCapture}>
        {/* Every review stays in the HTML for crawlers; only the current card is shown. */}
        <div className="grid" aria-live={hasMany && !rotating ? 'polite' : 'off'}>
          {reviews.map((review, i) => {
            const active = i === index;
            const quoteId = `${headingId}-quote-${i}`;
            const size = quoteSizes?.[i];
            const canExpand = hasMany && Boolean(size?.expandable);
            const open = canExpand && active && expanded;
            // Until measured, cut every review so the card starts near its final height.
            const cut = hasMany && (!quoteSizes || canExpand);
            return (
              <div
                key={review.id}
                ref={(slide) => {
                  slideRefs.current[i] = slide;
                }}
                role={hasMany ? 'group' : undefined}
                aria-roledescription={hasMany ? 'slide' : undefined}
                aria-label={hasMany ? `${i + 1} of ${count}` : undefined}
                inert={!active}
                className={classNames(
                  'col-start-1 row-start-1 flex flex-col justify-center rounded-2xl bg-white shadow-lg px-6 py-7 sm:px-10 sm:py-9',
                  !active && 'invisible',
                )}>
                <figure className="grid grid-cols-[1fr_auto] items-center gap-x-4">
                  <Stars rating={review.rating} className={theme.accent} />
                  {/* The date and the toggle share a column; both pin right so neither shifts. */}
                  <time dateTime={review.date} className="justify-self-end text-sm text-gray-600">
                    {formatMonth(review.date)}
                  </time>
                  <blockquote
                    id={quoteId}
                    ref={(quote) => {
                      quoteRefs.current[i] = quote;
                    }}
                    className={classNames(
                      'col-span-2 mt-4 space-y-4 text-base sm:text-lg font-light leading-relaxed text-gray-700',
                      hasMany && CLAMP_LINES,
                      cut && 'overflow-hidden',
                      cut && !open && 'max-h-[calc(var(--clamp-lines)*1lh)]',
                      canExpand && 'transition-[max-height,--review-fade] duration-500 ease-in-out motion-reduce:transition-none',
                    )}
                    style={
                      canExpand
                        ? {
                            // Animates between the cut height and the measured full height.
                            maxHeight: open ? size.fullHeight : undefined,
                            maskImage: FADE,
                            WebkitMaskImage: FADE,
                            '--review-fade': open ? '0px' : '1.5lh',
                          }
                        : undefined
                    }>
                    {review.text.split(/\n\s*\n/).map((paragraph, j) => (
                      <p key={j}>{paragraph}</p>
                    ))}
                  </blockquote>
                  {canExpand && (
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-controls={quoteId}
                      onClick={toggleExpanded}
                      className="col-start-2 row-start-3 justify-self-end mt-6 inline-flex items-center gap-1 rounded-sm text-sm font-medium text-gray-700 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400">
                      {open ? 'Show less' : 'Read more'}
                      <ChevronDownIcon
                        aria-hidden="true"
                        className={classNames('h-4 w-4 transition-transform motion-reduce:transition-none', open && 'rotate-180')}
                      />
                    </button>
                  )}
                  <figcaption className="col-start-1 row-start-3 mt-6 flex items-center gap-3 text-sm">
                    <span
                      aria-hidden="true"
                      className={classNames('h-px w-6 bg-current', theme.accent)}
                    />
                    <span className="font-medium text-gray-800">{review.author}</span>
                  </figcaption>
                </figure>
              </div>
            );
          })}
        </div>
      </div>

      {hasMany && (
        <div
          className={classNames(
            'mt-4 flex items-center justify-center gap-1',
            theme.sectionHeading,
          )}>
          <Button
            {...controlProps}
            aria-label="Previous review"
            onClick={() => go((index - 1 + count) % count, -1)}>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </Button>

          <div className="flex items-center">
            {reviews.map((review, i) => {
              const active = i === index;
              return (
                <button
                  key={review.id}
                  type="button"
                  aria-label={`Show review ${i + 1} of ${count}`}
                  aria-current={active ? 'true' : undefined}
                  onClick={() => !active && go(i, i > index ? 1 : -1)}
                  className="group flex h-6 items-center rounded-full px-[9px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current">
                  <span
                    className={classNames(
                      'relative block h-1.5 overflow-hidden rounded-full transition-[width] duration-500 motion-reduce:transition-none',
                      active ? 'w-8' : 'w-1.5',
                    )}>
                    <span
                      className={classNames(
                        'absolute inset-0 bg-current transition-opacity',
                        active ? 'opacity-30' : 'opacity-40 group-hover:opacity-80',
                      )}
                    />
                    {active && (
                      <span
                        key={`${index}-${autoplay}`}
                        className="absolute inset-0 origin-left bg-current"
                        style={
                          autoplay
                            ? {
                                animationName: 'review-progress',
                                animationDuration: `${displayTime(review.text)}ms`,
                                animationTimingFunction: 'linear',
                                animationFillMode: 'forwards',
                                animationPlayState: rotating ? 'running' : 'paused',
                              }
                            : undefined
                        }
                        onAnimationEnd={advance}
                      />
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          <Button
            {...controlProps}
            aria-label="Next review"
            onClick={() => go((index + 1) % count, 1)}>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </Button>

          <span aria-hidden="true" className="mx-1 h-4 w-px bg-current opacity-30" />

          <Button
            {...controlProps}
            aria-label={autoplay ? 'Pause rotating reviews' : 'Play rotating reviews'}
            onClick={() => setAutoplay((on) => !on)}>
            {autoplay ? (
              <PauseIcon className="h-5 w-5" aria-hidden="true" />
            ) : (
              <PlayIcon className="h-5 w-5" aria-hidden="true" />
            )}
          </Button>
        </div>
      )}

      <p
        className={classNames(
          'mt-3 text-xs font-light italic text-center',
          theme.bodyText,
        )}>
        Every body is different, so individual experiences vary.
      </p>
    </section>
  );
}
