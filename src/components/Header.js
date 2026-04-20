'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  HomeIcon,
  UserIcon,
  Squares2X2Icon,
  HeartIcon,
  GiftIcon,
  CalendarIcon,
  QuestionMarkCircleIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';

import GrayBlueLogo from '@/src/assets/logos/Gray Blue Logo.png';
import Button from '@/src/ui/Button';
import classNames from '@/src/utils/classNames';
import TrackedLink from '@/src/ui/TrackedLink';
import { useSchedule } from '@/src/context/ScheduleContext';
import { useTransitionNavigate } from './TransitionProvider';

const LYMPHATIC_SUBPAGES = [
  {
    path: '/services/lymphatic/manual-lymphatic-drainage',
    label: 'Manual Lymphatic Drainage',
  },
  {
    path: '/services/lymphatic/pre-post-op-lymphatic-massage',
    label: 'Pre/Post-Op Lymphatic',
  },
  {
    path: '/services/lymphatic/lymphedema-lipedema-management',
    label: 'Lymphedema/Lipedema',
  },
  {
    path: '/services/lymphatic/fertility-ivf-support-massage',
    label: 'Fertility/IVF Support',
  },
  {
    path: '/services/lymphatic/pregnancy-postpartum-lymphatic-massage',
    label: 'Pregnancy/Postpartum',
  },
];

const isLymphaticPath = (p) => p.startsWith('/services/lymphatic/');
const isServicePath = (p) => p.startsWith('/services/');

function MobileSubReset({ open, onReset }) {
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current && !open) onReset();
    prevOpen.current = open;
  }, [open, onReset]);
  return null;
}

export default function Header({ bgColor }) {
  const pathname = usePathname();
  const navigate = useTransitionNavigate();
  const { bookingUrl } = useSchedule();
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [mobileNavDepth, setMobileNavDepth] = useState(0);
  const [panelHeight, setPanelHeight] = useState(null);
  const panelRefs = useRef([]);
  const closeTimer = useRef(null);

  const measurePanel = useCallback((depth) => {
    const el = panelRefs.current[depth];
    if (!el) return;
    // Temporarily make panel visible at natural height to measure
    const prev = el.style.cssText;
    el.style.position = 'absolute';
    el.style.visibility = 'hidden';
    el.style.height = 'auto';
    const h = el.scrollHeight;
    el.style.cssText = prev;
    setPanelHeight(h);
  }, []);

  useEffect(() => {
    measurePanel(mobileNavDepth);
  }, [mobileNavDepth, measurePanel]);

  const openDesktopMenu = useCallback(() => {
    clearTimeout(closeTimer.current);
    setServicesMenuOpen(true);
  }, []);

  const closeDesktopMenu = useCallback(() => {
    closeTimer.current = setTimeout(() => setServicesMenuOpen(false), 150);
  }, []);

  return (
    <Popover>
      {({ open, close }) => (
        <>
          <div
            className={classNames(
              'fixed z-50 top-0 left-4 right-4 sm:left-16 sm:right-16',
              bgColor || 'bg-blue',
              'rounded-b-2xl shadow-header',
            )}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex justify-between items-center py-3 sm:py-4 lg:justify-start lg:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                  <button
                    type="button"
                    className="flex items-center cursor-pointer bg-transparent border-none p-0"
                    onClick={() => navigate('/')}
                    aria-label="Go to home page">
                    <img
                      className="h-10"
                      src={GrayBlueLogo.src}
                      alt="Ebb & Flow"
                    />
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
                  className="hidden lg:flex items-center gap-1">
                  <Button
                    variant="ghost"
                    href="/"
                    active={pathname === '/'}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/');
                    }}>
                    <HomeIcon className="h-4 w-4 mr-1" aria-hidden="true" />
                    Home
                  </Button>

                  <Button
                    variant="ghost"
                    href="/about"
                    active={pathname === '/about'}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/about');
                    }}>
                    <UserIcon className="h-4 w-4 mr-1" aria-hidden="true" />
                    About
                  </Button>

                  {/* Services dropdown */}
                  <div
                    className="relative"
                    onMouseEnter={openDesktopMenu}
                    onMouseLeave={closeDesktopMenu}>
                    <Button
                      variant="ghost"
                      active={isServicePath(pathname)}
                      className="mr-[-2px]">
                      <Squares2X2Icon
                        className="h-4 w-4 mr-1"
                        aria-hidden="true"
                      />
                      Services
                      <ChevronDownIcon
                        className={classNames(
                          'ml-1 h-3.5 w-3.5 transition-transform duration-200',
                          servicesMenuOpen && 'rotate-180',
                        )}
                        aria-hidden="true"
                      />
                    </Button>
                    <div
                      className={classNames(
                        'absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200',
                        servicesMenuOpen
                          ? 'opacity-100 translate-y-0 pointer-events-auto'
                          : 'opacity-0 -translate-y-1 pointer-events-none',
                      )}>
                      <div
                        className={classNames(
                          bgColor || 'bg-blue',
                          'rounded-xl shadow-header py-3 px-3 min-w-[320px]',
                        )}>
                        <span className="block text-xs uppercase tracking-widest text-blue-300/70 font-medium px-3 py-1.5">
                          Lymphatic
                        </span>
                        {LYMPHATIC_SUBPAGES.map((sub) => (
                          <Button
                            key={sub.path}
                            variant="ghost"
                            href={sub.path}
                            active={pathname === sub.path}
                            className="w-full !justify-start whitespace-nowrap"
                            onClick={(e) => {
                              e.preventDefault();
                              navigate(sub.path);
                              setServicesMenuOpen(false);
                            }}>
                            {sub.label}
                          </Button>
                        ))}
                        <div className="border-t border-white/20 my-1.5" />
                        <Button
                          variant="ghost"
                          href="/services/oncology-massage"
                          active={pathname === '/services/oncology-massage'}
                          className="w-full !justify-start whitespace-nowrap"
                          onClick={(e) => {
                            e.preventDefault();
                            navigate('/services/oncology-massage');
                            setServicesMenuOpen(false);
                          }}>
                          Oncology Massage
                        </Button>
                        <Button
                          variant="ghost"
                          href="/services/craniosacral-therapy"
                          active={pathname === '/services/craniosacral-therapy'}
                          className="w-full !justify-start whitespace-nowrap"
                          onClick={(e) => {
                            e.preventDefault();
                            navigate('/services/craniosacral-therapy');
                            setServicesMenuOpen(false);
                          }}>
                          Craniosacral Therapy
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    href="/faq"
                    active={pathname === '/faq'}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/faq');
                    }}>
                    <QuestionMarkCircleIcon
                      className="h-4 w-4 mr-1"
                      aria-hidden="true"
                    />
                    FAQs
                  </Button>

                  <Button
                    variant="ghost"
                    href="/contact"
                    active={pathname === '/contact'}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/contact');
                    }}>
                    <EnvelopeIcon className="h-4 w-4 mr-1" aria-hidden="true" />
                    Contact
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
                  <TrackedLink
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    event="book_online_click"
                    eventParams={{ booking_url: bookingUrl }}>
                    <Button className="whitespace-nowrap">
                      <CalendarIcon
                        className="h-4 w-4 mr-1.5"
                        aria-hidden="true"
                      />
                      Schedule
                    </Button>
                  </TrackedLink>
                </div>
                <div className="lg:hidden">
                  <PopoverButton className="inline-flex items-center justify-center rounded-md p-2 text-blue-300 hover:text-white hover:bg-white/10 transition-colors">
                    <span className="sr-only">Open menu</span>
                    {open ? (
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    )}
                  </PopoverButton>
                </div>
              </div>
            </div>
          </div>

          {/* Clip container anchored below header; panel slides out from beneath */}
          <PopoverPanel
            static
            className={classNames(
              'fixed z-[45] left-4 right-4 sm:left-16 sm:right-16 lg:hidden overflow-hidden',
              !open && 'pointer-events-none',
            )}
            style={{ top: 50 }}>
            <MobileSubReset open={open} onReset={() => setMobileNavDepth(0)} />
            <div
              className={classNames(
                'transition-transform duration-300 ease-out',
                open ? 'translate-y-0' : '-translate-y-full',
              )}>
              <div
                className={classNames(
                  bgColor || 'bg-blue',
                  'rounded-b-2xl shadow-header px-4 pb-4 pt-8',
                )}>
                <nav
                  aria-label="Mobile navigation"
                  className="flex flex-col gap-2">
                  {/* Sliding panel area */}
                  <div
                    className={classNames(
                      'overflow-hidden',
                      panelHeight !== null &&
                        'transition-[height] duration-300 ease-out',
                    )}
                    style={{ height: panelHeight ?? 'auto' }}>
                    <div
                      className="flex transition-transform duration-300 ease-out"
                      style={{
                        transform: `translateX(-${mobileNavDepth * 100}%)`,
                      }}>
                      {/* Panel 0: Root */}
                      <div
                        ref={(el) => (panelRefs.current[0] = el)}
                        className="w-full flex-shrink-0 flex flex-col gap-2">
                        <Button
                          variant="ghost"
                          href="/"
                          active={pathname === '/'}
                          className="w-full"
                          onClick={(e) => {
                            e.preventDefault();
                            navigate('/');
                            close();
                          }}>
                          <HomeIcon
                            className="h-4 w-4 mr-1.5"
                            aria-hidden="true"
                          />
                          Home
                        </Button>
                        <Button
                          variant="ghost"
                          href="/about"
                          active={pathname === '/about'}
                          className="w-full"
                          onClick={(e) => {
                            e.preventDefault();
                            navigate('/about');
                            close();
                          }}>
                          <UserIcon
                            className="h-4 w-4 mr-1.5"
                            aria-hidden="true"
                          />
                          About
                        </Button>
                        <Button
                          variant="ghost"
                          active={isServicePath(pathname)}
                          className="w-full"
                          onClick={() => setMobileNavDepth(1)}>
                          <Squares2X2Icon
                            className="h-4 w-4 mr-1.5"
                            aria-hidden="true"
                          />
                          Services
                          <ChevronRightIcon
                            className="ml-1 h-3.5 w-3.5"
                            aria-hidden="true"
                          />
                        </Button>
                        <Button
                          variant="ghost"
                          href="/faq"
                          active={pathname === '/faq'}
                          className="w-full"
                          onClick={(e) => {
                            e.preventDefault();
                            navigate('/faq');
                            close();
                          }}>
                          <QuestionMarkCircleIcon
                            className="h-4 w-4 mr-1.5"
                            aria-hidden="true"
                          />
                          FAQs
                        </Button>
                        <Button
                          variant="ghost"
                          href="/contact"
                          active={pathname === '/contact'}
                          className="w-full"
                          onClick={(e) => {
                            e.preventDefault();
                            navigate('/contact');
                            close();
                          }}>
                          <EnvelopeIcon
                            className="h-4 w-4 mr-1.5"
                            aria-hidden="true"
                          />
                          Contact
                        </Button>
                      </div>

                      {/* Panel 1: Services */}
                      <div
                        ref={(el) => (panelRefs.current[1] = el)}
                        className="w-full flex-shrink-0 flex flex-col gap-2">
                        <div className="relative pb-1 mb-1 border-b border-white/15 flex items-center justify-center">
                          <Button
                            variant="ghost"
                            className="absolute left-0 !text-xs !py-1"
                            onClick={() => setMobileNavDepth(0)}>
                            <ChevronRightIcon
                              className="h-3 w-3 mr-0.5 rotate-180"
                              aria-hidden="true"
                            />
                            <span className="hidden sm:inline">
                              Back to Menu
                            </span>
                            <span className="sm:hidden">Back</span>
                          </Button>
                          <span className="flex items-center text-xs uppercase tracking-widest text-blue-300/50 font-medium py-1.5">
                            <Squares2X2Icon
                              className="h-3.5 w-3.5 mr-1.5"
                              aria-hidden="true"
                            />
                            Services
                          </span>
                        </div>
                        <Button
                          variant="ghost"
                          active={isLymphaticPath(pathname)}
                          className="w-full"
                          onClick={() => setMobileNavDepth(2)}>
                          Lymphatic
                          <ChevronRightIcon
                            className="ml-1 h-3.5 w-3.5"
                            aria-hidden="true"
                          />
                        </Button>
                        <Button
                          variant="ghost"
                          href="/services/oncology-massage"
                          active={pathname === '/services/oncology-massage'}
                          className="w-full"
                          onClick={(e) => {
                            e.preventDefault();
                            navigate('/services/oncology-massage');
                            close();
                          }}>
                          Oncology Massage
                        </Button>
                        <Button
                          variant="ghost"
                          href="/services/craniosacral-therapy"
                          active={pathname === '/services/craniosacral-therapy'}
                          className="w-full"
                          onClick={(e) => {
                            e.preventDefault();
                            navigate('/services/craniosacral-therapy');
                            close();
                          }}>
                          Craniosacral Therapy
                        </Button>
                      </div>

                      {/* Panel 2: Lymphatic */}
                      <div
                        ref={(el) => (panelRefs.current[2] = el)}
                        className="w-full flex-shrink-0 flex flex-col gap-2">
                        <div className="relative pb-1 mb-1 border-b border-white/15 flex items-center justify-center">
                          <Button
                            variant="ghost"
                            className="absolute left-0 !text-xs !py-1"
                            onClick={() => setMobileNavDepth(1)}>
                            <ChevronRightIcon
                              className="h-3 w-3 mr-0.5 rotate-180"
                              aria-hidden="true"
                            />
                            <span className="hidden sm:inline">
                              Back to Services
                            </span>
                            <span className="sm:hidden">Back</span>
                          </Button>
                          <span className="flex items-center text-xs uppercase tracking-widest text-blue-300/50 font-medium py-1.5">
                            <HeartIcon
                              className="h-3.5 w-3.5 mr-1.5"
                              aria-hidden="true"
                            />
                            Lymphatic
                          </span>
                        </div>
                        {LYMPHATIC_SUBPAGES.map((sub) => (
                          <Button
                            key={sub.path}
                            variant="ghost"
                            href={sub.path}
                            active={pathname === sub.path}
                            className="w-full"
                            onClick={(e) => {
                              e.preventDefault();
                              navigate(sub.path);
                              close();
                            }}>
                            {sub.label}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Always visible actions */}
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
                  <TrackedLink
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    event="book_online_click"
                    eventParams={{ booking_url: bookingUrl }}
                    onClick={() => close()}>
                    <Button className="w-full">
                      <CalendarIcon
                        className="h-4 w-4 mr-1.5"
                        aria-hidden="true"
                      />
                      Schedule
                    </Button>
                  </TrackedLink>
                </nav>
              </div>
            </div>
          </PopoverPanel>
        </>
      )}
    </Popover>
  );
}
