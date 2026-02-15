import { useState, useEffect } from 'react';
import { Popover } from '@headlessui/react';

import GrayBlueLogo from '../assets/logos/Gray Blue Logo.png';

export default function Header(props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Popover
      className={`fixed z-50 top-0 left-2 right-2 sm:left-4 sm:right-4 lg:left-8 lg:right-8 bg-blue rounded-b-2xl transition-shadow duration-300 ${scrolled ? 'shadow-header' : 'shadow-none'}`}>
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
          <div className="flex items-center justify-end flex-1 lg:w-0">
            <button
              className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 rounded-md shadow-sm text-base font-medium text-gray-light bg-purple hover:bg-gray-light hover:text-purple active:bg-white drop-shadow"
              onClick={() => props.setSchedule(true)}>
              Schedule
            </button>
          </div>
        </div>
      </div>
    </Popover>
  );
}
