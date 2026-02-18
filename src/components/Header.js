import { Popover } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

import GrayBlueLogo from '../assets/logos/Gray Blue Logo.png';
import Button from '../ui/Button';
import classNames from '../utils/classNames';

export default function Header(props) {
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
              <div className="flex justify-between items-center py-3 sm:py-4 md:justify-start md:space-x-10">
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
                <nav aria-label="Main navigation" className="hidden sm:flex items-center gap-1 sm:gap-2">
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

          {/* Clip container anchored below header; panel slides out from beneath */}
          <Popover.Panel
            static
            className={classNames(
              'fixed z-[45] left-4 right-4 sm:hidden',
              !open && 'pointer-events-none',
            )}
            style={{ top: 50 }}>
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
                <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
                  <Button
                    variant="ghost"
                    active={props.page === 'home'}
                    className="w-full text-left"
                    onClick={() => {
                      props.navigate('home');
                      close();
                    }}>
                    Home
                  </Button>
                  <Button
                    variant="ghost"
                    active={props.page === 'lymphatic'}
                    className="w-full text-left"
                    onClick={() => {
                      props.navigate('lymphatic');
                      close();
                    }}>
                    Lymphatic
                  </Button>
                  <div className="border-t border-white/20 my-1" />
                  <Button
                    className="w-full"
                    onClick={() => {
                      props.setSchedule(true);
                      close();
                    }}>
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
