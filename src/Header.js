/* This example requires Tailwind CSS v2.0+ */
import { Popover } from "@headlessui/react";

import GrayBlueLogo from "./logos/Gray Blue Logo.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header(props) {
  return (
    <Popover className="fixed top-0 w-screen bg-blue drop-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img className="h-10" src={GrayBlueLogo} alt="" />
            </a>
          </div>
          <div className="flex items-center justify-end flex-1 lg:w-0">
            <a
              href="#"
              className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 rounded-md shadow-sm text-base font-medium text-gray-light bg-purple hover:bg-gray-light hover:text-purple active:bg-white"
              onClick={() => props.setSchedule(true)}
            >
              Schedule
            </a>
          </div>
        </div>
      </div>
    </Popover>
  );
}
