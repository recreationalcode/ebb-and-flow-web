'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import classNames from '@/src/utils/classNames';
import faqData from '@/src/config/faqData';
import Section from './Section';

function initialSection() {
  if (typeof window === 'undefined') return faqData[0].id;
  const hash = window.location.hash?.slice(1);
  if (hash && faqData.some((s) => s.id === hash)) return hash;
  return faqData[0].id;
}

export default function FAQ() {
  const [activeSection, setActiveSection] = useState(initialSection);
  const pillBarRef = useRef(null);
  const pillRefs = useRef({});
  const isScrolling = useRef(false);

  // Scroll-spy via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrolling.current) return;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-140px 0px -60% 0px', threshold: 0 },
    );

    faqData.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Update URL hash and auto-scroll pill when active section changes
  useEffect(() => {
    window.history.replaceState(null, '', '/faq#' + activeSection);
    const pill = pillRefs.current[activeSection];
    if (pill && pillBarRef.current) {
      const bar = pillBarRef.current;
      const pillLeft = pill.offsetLeft;
      const pillWidth = pill.offsetWidth;
      const barWidth = bar.offsetWidth;
      const target = pillLeft - barWidth / 2 + pillWidth / 2;
      bar.scrollTo({ left: target, behavior: 'smooth' });
    }
  }, [activeSection]);

  // Handle hash on mount — scroll to target
  useEffect(() => {
    const hash = window.location.hash?.slice(1);
    if (!hash || !faqData.some((s) => s.id === hash)) return;

    isScrolling.current = true;

    const scrollToHash = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const target = document.getElementById(hash);
          if (target) {
            const isMobile = window.innerWidth < 1024;
            const offset = isMobile ? 140 : 112;
            const targetTop = target.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: targetTop - offset, behavior: 'smooth' });
          }
          setTimeout(() => {
            isScrolling.current = false;
          }, 1500);
        });
      });
    };

    // Delay to allow page transition to complete
    const timer = setTimeout(scrollToHash, 500);
    return () => {
      clearTimeout(timer);
      isScrolling.current = false;
    };
  }, []);

  const scrollToSection = useCallback(
    (id) => {
      const target = document.getElementById(id);
      if (!target) return;

      isScrolling.current = true;
      setActiveSection(id);
      window.history.replaceState(null, '', '/faq#' + id);

      const isMobile = window.innerWidth < 1024;
      const offset = isMobile ? 140 : 112;
      const targetTop = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: targetTop - offset, behavior: 'smooth' });

      let scrollTimer;
      const onScroll = () => {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
          isScrolling.current = false;
          window.removeEventListener('scroll', onScroll);
        }, 150);
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      setTimeout(() => {
        isScrolling.current = false;
        window.removeEventListener('scroll', onScroll);
      }, 2000);
    },
    [],
  );

  return (
      <Section ariaLabel="Frequently Asked Questions">
        <h1 className="font-script text-5xl text-purple text-center mb-12">
          Frequently Asked Questions
        </h1>

        {/* Mobile pill bar */}
        <nav
          ref={pillBarRef}
          aria-label="FAQ sections"
          className="lg:hidden sticky top-16 z-10 -mx-4 sm:-mx-8 px-4 sm:px-8 py-3 flex gap-2 overflow-x-auto scrollbar-hide mb-8">
          {faqData.map((section) => (
            <button
              key={section.id}
              ref={(el) => (pillRefs.current[section.id] = el)}
              type="button"
              onClick={() => scrollToSection(section.id)}
              className={classNames(
                'whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors flex-shrink-0 shadow-md',
                activeSection === section.id
                  ? 'bg-purple text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50',
              )}>
              {section.label}
            </button>
          ))}
        </nav>

        <div className="max-w-5xl mx-auto lg:grid lg:grid-cols-[220px_1fr] lg:gap-12">
          {/* Desktop sidebar */}
          <nav
            aria-label="FAQ sections"
            className="hidden lg:block sticky top-32 self-start">
            <ul className="space-y-1">
              {faqData.map((section) => (
                <li key={section.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className={classNames(
                      'w-full text-left px-3 py-2 text-sm rounded-md transition-colors relative overflow-hidden active:bg-gray-200',
                      activeSection === section.id
                        ? 'text-purple font-medium bg-purple/5'
                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100',
                    )}>
                    {activeSection === section.id && (
                      <span className="absolute left-0 top-1 bottom-1 w-1 rounded-r bg-purple" />
                    )}
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* FAQ content */}
          <div className="space-y-16">
            {faqData.map((section) => (
              <div
                key={section.id}
                id={section.id}
                className="scroll-mt-36 lg:scroll-mt-28">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-800 mb-6">
                  {section.heading}
                </h2>
                <div className="space-y-3">
                  {section.questions.map((item, i) => (
                    <Disclosure key={i}>
                      {({ open }) => (
                        <div className="bg-white rounded-lg shadow-sm">
                          <DisclosureButton className="flex w-full items-center justify-between px-5 py-4 text-left text-gray-800 font-medium hover:bg-gray-50 rounded-lg transition-colors">
                            <span className="pr-4">{item.q}</span>
                            <ChevronDownIcon
                              className={classNames(
                                'h-5 w-5 flex-shrink-0 text-gray-400 transition-transform duration-200',
                                open && 'rotate-180',
                              )}
                              aria-hidden="true"
                            />
                          </DisclosureButton>
                          <div
                            className={classNames(
                              'grid transition-[grid-template-rows] duration-300 ease-out',
                              open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                            )}>
                            <div className="overflow-hidden">
                              <DisclosurePanel
                                static
                                className="px-5 pt-2 pb-5 font-light text-gray-600 leading-relaxed space-y-3">
                                {item.a}
                              </DisclosurePanel>
                            </div>
                          </div>
                        </div>
                      )}
                    </Disclosure>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
  );
}
