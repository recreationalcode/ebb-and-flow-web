import { useState, useRef, useCallback, useEffect } from 'react';
import { Popover } from '@headlessui/react';
import {
  MenuIcon,
  XIcon,
  ChevronDownIcon,
  GiftIcon,
  CalendarIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/outline';

import GrayBlueLogo from '../assets/logos/Gray Blue Logo.png';
import Button from '../ui/Button';
import classNames from '../utils/classNames';

const LYMPHATIC_SUBPAGES = [
  {
    page: 'lymph-mld',
    path: '/services/lymphatic/manual-lymphatic-drainage',
    label: 'Manual Lymphatic Drainage',
  },
  {
    page: 'lymph-operative',
    path: '/services/lymphatic/pre-post-op-lymphatic-massage',
    label: 'Pre/Post-Op Lymphatic',
  },
  {
    page: 'lymph-edema',
    path: '/services/lymphatic/lymphedema-lipedema-management',
    label: 'Lymphedema/Lipedema',
  },
  {
    page: 'lymph-fertility',
    path: '/services/lymphatic/fertility-ivf-support-massage',
    label: 'Fertility/IVF Support',
  },
  {
    page: 'lymph-pregnancy',
    path: '/services/lymphatic/pregnancy-postpartum-lymphatic-massage',
    label: 'Pregnancy/Postpartum',
  },
];
const isLymphaticPage = (p) => p.startsWith('lymph-');

function MobileSubReset({ open, onReset }) {
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current && !open) onReset();
    prevOpen.current = open;
  }, [open, onReset]);
  return null;
}

export default function Header(props) {
  const [lymphMenuOpen, setLymphMenuOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(() => isLymphaticPage(props.page));
  const closeTimer = useRef(null);

  const openDesktopMenu = useCallback(() => {
    clearTimeout(closeTimer.current);
    setLymphMenuOpen(true);
  }, []);

  const closeDesktopMenu = useCallback(() => {
    closeTimer.current = setTimeout(() => setLymphMenuOpen(false), 150);
  }, []);

  return (
    <Popover>
      {({ open, close }) => (
        <>
          <div
            className={classNames(
              'fixed z-50 top-0 left-4 right-4 sm:left-16 sm:right-16',
              props.bgColor || 'bg-blue',
              'rounded-b-2xl shadow-header',
            )}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex justify-between items-center py-3 sm:py-4 lg:justify-start lg:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                  <button
                    type="button"
                    className="flex items-center cursor-pointer bg-transparent border-none p-0"
                    onClick={() => props.navigate('home')}
                    aria-label="Go to home page">
                    <img className="h-10" src={GrayBlueLogo} alt="Ebb & Flow" />
                    <span className="flex items-center gap-0.5 ml-3 sm:ml-4 mt-2 sm:mt-1.5">
                      <span className="font-script text-2xl sm:text-3xl text-gray-100 whitespace-nowrap">
                        Ebb & flow
                      </span>
                      <span className="ml-2 text-xs font-light tracking-widest text-gray-100 hidden xl:block">
                        MASSAGE STUDIO
                      </span>
                    </span>
                  </button>
                </div>
                <nav
                  aria-label="Main navigation"
                  className="hidden lg:flex items-center gap-1 lg:gap-1.5">
                  <Button
                    variant="ghost"
                    href="/"
                    active={props.page === 'home'}
                    onClick={(e) => {
                      e.preventDefault();
                      props.navigate('home');
                    }}>
                    Home
                  </Button>

                  <Button
                    variant="ghost"
                    href="/about"
                    active={props.page === 'about'}
                    onClick={(e) => {
                      e.preventDefault();
                      props.navigate('about');
                    }}>
                    About
                  </Button>

                  {/* Lymphatic dropdown */}
                  <div
                    className="relative"
                    onMouseEnter={openDesktopMenu}
                    onMouseLeave={closeDesktopMenu}>
                    <Button
                      variant="ghost"
                      active={isLymphaticPage(props.page)}
                      onClick={(e) => {
                        e.preventDefault();
                        props.navigate('lymph-mld');
                      }}>
                      Lymphatic
                      <ChevronDownIcon
                        className={classNames(
                          'ml-1 h-3.5 w-3.5 transition-transform duration-200',
                          lymphMenuOpen && 'rotate-180',
                        )}
                        aria-hidden="true"
                      />
                    </Button>
                    <div
                      className={classNames(
                        'absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200',
                        lymphMenuOpen
                          ? 'opacity-100 translate-y-0 pointer-events-auto'
                          : 'opacity-0 -translate-y-1 pointer-events-none',
                      )}>
                      <div
                        className={classNames(
                          props.bgColor || 'bg-blue',
                          'rounded-xl shadow-header py-3 px-3 min-w-[280px]',
                        )}>
                        {LYMPHATIC_SUBPAGES.map((sub) => (
                          <Button
                            key={sub.page}
                            variant="ghost"
                            href={sub.path}
                            active={props.page === sub.page}
                            className="w-full !justify-start whitespace-nowrap"
                            onClick={(e) => {
                              e.preventDefault();
                              props.navigate(sub.page);
                              setLymphMenuOpen(false);
                            }}>
                            {sub.label}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    href="/services/oncology-massage"
                    active={props.page === 'oncology'}
                    onClick={(e) => {
                      e.preventDefault();
                      props.navigate('oncology');
                    }}>
                    Oncology
                  </Button>
                  <Button
                    variant="ghost"
                    href="/services/craniosacral-therapy"
                    active={props.page === 'craniosacral'}
                    onClick={(e) => {
                      e.preventDefault();
                      props.navigate('craniosacral');
                    }}>
                    Craniosacral
                  </Button>
                  <Button
                    variant="ghost"
                    href="/faq"
                    active={props.page === 'faq'}
                    onClick={(e) => {
                      e.preventDefault();
                      props.navigate('faq');
                    }}>
                    <QuestionMarkCircleIcon
                      className="h-4 w-4 mr-1"
                      aria-hidden="true"
                    />
                    FAQs
                  </Button>
                </nav>
                <div className="hidden lg:flex items-center justify-end gap-2 ml-3 lg:ml-4">
                  <Button
                    variant="ghost"
                    href="https://ebbnflow.janeapp.com/online_gift_cards/new"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whitespace-nowrap">
                    <GiftIcon className="h-4 w-4 mr-1.5" aria-hidden="true" />
                    Gift Card
                  </Button>
                  <Button
                    className="whitespace-nowrap"
                    onClick={() => props.setSchedule(true)}>
                    <CalendarIcon
                      className="h-4 w-4 mr-1.5"
                      aria-hidden="true"
                    />
                    Schedule
                  </Button>
                </div>
                <div className="lg:hidden">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-blue-300 hover:text-white hover:bg-white/10 transition-colors">
                    <span className="sr-only">Open menu</span>
                    {open ? (
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    )}
                  </Popover.Button>
                </div>
              </div>
            </div>
          </div>

          {/* Clip container anchored below header; panel slides out from beneath */}
          <Popover.Panel
            static
            className={classNames(
              'fixed z-[45] left-4 right-4 sm:left-16 sm:right-16 lg:hidden overflow-hidden',
              !open && 'pointer-events-none',
            )}
            style={{ top: 50 }}>
            <MobileSubReset
              open={open}
              onReset={() => setMobileSubOpen(isLymphaticPage(props.page))}
            />
            <div
              className={classNames(
                'transition-transform duration-300 ease-out',
                open ? 'translate-y-0' : '-translate-y-full',
              )}>
              <div
                className={classNames(
                  props.bgColor || 'bg-blue',
                  'rounded-b-2xl shadow-header px-4 pb-4 pt-8',
                )}>
                <nav
                  aria-label="Mobile navigation"
                  className="flex flex-col gap-2">
                  <Button
                    variant="ghost"
                    href="/"
                    active={props.page === 'home'}
                    className="w-full text-left"
                    onClick={(e) => {
                      e.preventDefault();
                      props.navigate('home');
                      close();
                    }}>
                    Home
                  </Button>

                  <Button
                    variant="ghost"
                    href="/about"
                    active={props.page === 'about'}
                    className="w-full text-left"
                    onClick={(e) => {
                      e.preventDefault();
                      props.navigate('about');
                      close();
                    }}>
                    About
                  </Button>

                  {/* Lymphatic toggle + sub-links */}
                  <div>
                    <Button
                      variant="ghost"
                      active={isLymphaticPage(props.page)}
                      className="w-full"
                      onClick={() => setMobileSubOpen(!mobileSubOpen)}>
                      Lymphatic
                      <ChevronDownIcon
                        className={classNames(
                          'ml-1 h-3.5 w-3.5 transition-transform duration-200',
                          mobileSubOpen && 'rotate-180',
                        )}
                        aria-hidden="true"
                      />
                    </Button>
                    <div
                      className={classNames(
                        'overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]',
                        mobileSubOpen
                          ? 'max-h-64 opacity-100'
                          : 'max-h-0 opacity-0',
                      )}>
                      <div className="flex flex-col gap-1 items-center pt-1">
                        {LYMPHATIC_SUBPAGES.map((sub) => (
                          <Button
                            key={sub.page}
                            variant="ghost"
                            href={sub.path}
                            active={props.page === sub.page}
                            className="w-full"
                            onClick={(e) => {
                              e.preventDefault();
                              props.navigate(sub.page);
                              close();
                            }}>
                            {sub.label}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    href="/services/oncology-massage"
                    active={props.page === 'oncology'}
                    className="w-full text-left"
                    onClick={(e) => {
                      e.preventDefault();
                      props.navigate('oncology');
                      close();
                    }}>
                    Oncology
                  </Button>
                  <Button
                    variant="ghost"
                    href="/services/craniosacral-therapy"
                    active={props.page === 'craniosacral'}
                    className="w-full text-left"
                    onClick={(e) => {
                      e.preventDefault();
                      props.navigate('craniosacral');
                      close();
                    }}>
                    Craniosacral
                  </Button>
                  <Button
                    variant="ghost"
                    href="/faq"
                    active={props.page === 'faq'}
                    className="w-full text-left"
                    onClick={(e) => {
                      e.preventDefault();
                      props.navigate('faq');
                      close();
                    }}>
                    <QuestionMarkCircleIcon
                      className="h-4 w-4 mr-1.5"
                      aria-hidden="true"
                    />
                    FAQs
                  </Button>
                  <div className="border-t border-white/20 my-1" />
                  <Button
                    variant="ghost"
                    href="https://ebbnflow.janeapp.com/online_gift_cards/new"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full">
                    <GiftIcon className="h-4 w-4 mr-1.5" aria-hidden="true" />
                    Gift Card
                  </Button>
                  <Button
                    className="w-full"
                    onClick={() => {
                      props.setSchedule(true);
                      close();
                    }}>
                    <CalendarIcon
                      className="h-4 w-4 mr-1.5"
                      aria-hidden="true"
                    />
                    Schedule
                  </Button>
                </nav>
              </div>
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
}
