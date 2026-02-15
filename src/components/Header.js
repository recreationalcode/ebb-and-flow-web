/* This example requires Tailwind CSS v2.0+ */
import { Popover } from "@headlessui/react";

import GrayBlueLogo from "../assets/logos/Gray Blue Logo.png";
import LightGrayFullName from "../assets/name-logos/Light Gray Full Name.png";
import LightGrayName from "../assets/name-logos/Light Gray Name.png";

export default function Header(props) {
  return (
    <Popover className="fixed z-50 top-0 w-screen bg-blue drop-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 sm:py-5 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <img className="h-10" src={GrayBlueLogo} alt="Ebb & Flow" />
            <img
              className="hidden sm:block sm:h-10 sm:ml-4 sm:mt-1"
              src={LightGrayFullName}
              alt="Ebb & Flow"
            />
            <img
              className="h-10 mt-1 ml-2 sm:hidden"
              src={LightGrayName}
              alt="Ebb & Flow"
            />
          </div>
          <div className="flex items-center justify-end flex-1 lg:w-0">
            <button
              className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 rounded-md shadow-sm text-base font-medium text-gray-light bg-purple hover:bg-gray-light hover:text-purple active:bg-white drop-shadow"
              onClick={() => props.setSchedule(true)}
            >
              Schedule
            </button>
          </div>
        </div>
      </div>
    </Popover>
  );
}
