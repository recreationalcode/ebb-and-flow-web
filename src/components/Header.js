import { Fragment, useState, useEffect } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

import GrayBlueLogo from '../assets/logos/Gray Blue Logo.png';
import Button from '../ui/Button';
import classNames from '../utils/classNames';

export default function Header(props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      const scrollTop =
        e.target === document || e.target === document.documentElement
          ? window.scrollY
          : e.target.scrollTop;
      setScrolled(scrollTop > 0);
    };
    document.addEventListener('scroll', onScroll, { capture: true, passive: true });
    return () => document.removeEventListener('scroll', onScroll, { capture: true });
  }, []);

  return (
    <Popover>
      {({ open, close }) => (
        <>
          <div
            className={classNames(
              'fixed z-50 top-0 left-4 right-4 sm:left-16 sm:right-16',
              props.bgColor || 'bg-blue',
              open ? 'rounded-b-none' : 'rounded-b-2xl',
              'transition-shadow duration-700',
              scrolled ? 'shadow-header' : 'shadow-none'
            )}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex justify-between items-center pt-3 pb-4 sm:py-4 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                  <img className="h-10" src={GrayBlueLogo} alt="Ebb & Flow" />
                  <span className="flex items-center gap-0.5 ml-3 sm:ml-4 mt-2 sm:mt-1.5">
                    <span className="font-script text-2xl sm:text-3xl text-gray-light">
                      Ebb & flow
                    </span>
                    <span className="ml-2 text-xs font-light tracking-widest text-gray-light hidden sm:block">
                      MASSAGE STUDIO
                    </span>
                  </span>
                  <span className="flex items-baseline ml-2 mt-1 sm:hidden"></span>
                </div>
                <nav className="hidden sm:flex items-center gap-1 sm:gap-2">
                  <Button
                    variant="ghost"
                    active={props.page === 'home'}
                    onClick={() => props.navigate('home')}>
                    Home
                  </Button>
                  <Button
                    variant="ghost"
                    active={props.page === 'lymphatic'}
                    onClick={() => props.navigate('lymphatic')}>
                    Lymphatic
                  </Button>
                </nav>
                <div className="hidden sm:flex items-center justify-end ml-3 sm:ml-4">
                  <Button
                    className="whitespace-nowrap"
                    onClick={() => props.setSchedule(true)}>
                    Schedule
                  </Button>
                </div>
                <div className="sm:hidden">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-blue-light hover:text-white hover:bg-white/10 transition-colors">
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

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-1"
          >
            <Popover.Panel className="fixed z-50 top-[calc(theme(spacing.10)+theme(spacing.3)+theme(spacing.4))] left-4 right-4 sm:hidden">
              <div className={classNames(
                props.bgColor || 'bg-blue',
                'rounded-b-2xl shadow-header px-4 pb-4 pt-2'
              )}>
                <div className="flex flex-col gap-2">
                  <Button
                    variant="ghost"
                    active={props.page === 'home'}
                    className="w-full text-left"
                    onClick={() => { props.navigate('home'); close(); }}>
                    Home
                  </Button>
                  <Button
                    variant="ghost"
                    active={props.page === 'lymphatic'}
                    className="w-full text-left"
                    onClick={() => { props.navigate('lymphatic'); close(); }}>
                    Lymphatic
                  </Button>
                  <div className="border-t border-white/20 my-1" />
                  <Button
                    className="w-full"
                    onClick={() => { props.setSchedule(true); close(); }}>
                    Schedule
                  </Button>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
