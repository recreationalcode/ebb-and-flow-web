import { useState, useEffect } from 'react';
import { Popover } from '@headlessui/react';

import GrayBlueLogo from '../assets/logos/Gray Blue Logo.png';

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
    <Popover
      className={`fixed z-50 top-0 left-4 right-4 sm:left-16 sm:right-16 ${props.bgColor || 'bg-blue'} rounded-b-2xl transition-shadow duration-700 ${scrolled ? 'shadow-header' : 'shadow-none'}`}>
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
          <nav className="flex items-center gap-1 sm:gap-2">
            <button
              className={`px-3 py-1.5 rounded-md text-sm font-light tracking-wide transition-colors ${
                props.page === 'home'
                  ? 'text-white'
                  : 'text-blue-light hover:text-white'
              }`}
              onClick={() => props.navigate('home')}>
              Home
            </button>
            <button
              className={`px-3 py-1.5 rounded-md text-sm font-light tracking-wide transition-colors ${
                props.page === 'lymphatic'
                  ? 'text-white'
                  : 'text-blue-light hover:text-white'
              }`}
              onClick={() => props.navigate('lymphatic')}>
              Lymphatic
            </button>
          </nav>
          <div className="flex items-center justify-end ml-3 sm:ml-4">
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
