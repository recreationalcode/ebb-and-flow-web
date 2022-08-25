/* This example requires Tailwind CSS v2.0+ */
import { Popover } from "@headlessui/react";

import NatalieGamble from "./ng.jpeg";
import AustinTexas from "./Austin Texas.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Info(props) {
  return (
    <div className="h-screen w-screen bg-gray-light text-center overflow-auto">
      <div className="h-32"></div>
      <img
        className="h-32 mx-auto mb-4 rounded-full ring-2 ring-purple sm:h-64 drop-shadow"
        src={NatalieGamble}
        alt=""
      />
      <span className="text-4xl font font-extralight text-blue sm:text-6xl">
        Natalie Gamble
      </span>
      <br />
      <span className="text-2xlfont font-thin tracking-widest text-blue sm:text-4xl">
        LMT, CMLDT, MMP
      </span>
      <div className="h-2 sm:h-4" />
      <div className="text-m mx-8 font font-light tracking-widest text-gray sm:text-xl">
        Specialized in{" "}
        <span className="text-m font-medium">Lymphatic Drainage</span> and{" "}
        <span className="text-m font-medium">Oncology Massage</span>
      </div>
      <div className="h-4 sm:h-8" />
      <br />
      <div className="text-l mx-8 font font-light text-gray sm:text-2xl">
        <span className="text-m font-medium">60 minute sessions</span> starting
        at <span className="text-m font-medium">$150</span>
      </div>
      <div className="h-6 sm:h-12" />
      <span className="text-xl font font-normal tracking-wide text-blue sm:text-2xl">
        I come to you!
      </span>
      <br />
      <span className="text-xs font font-light tracking-wide text-gray sm:text-m">
        Note: Prices may change based on location.
      </span>
      <br />
      <span className="text-l font font-thin tracking-widest text-gray sm:text-2xl"></span>
      <div className="h-6 sm:h-12 w-1/4 mx-auto border-b-2 border-blue mb-6 sm:mb-12 " />
      <img
        className="h-24 mx-auto mb-4 sm:h-48 mb-10"
        src={AustinTexas}
        alt=""
      />
      <div className="text-s font font-bold tracking-widest text-blue sm:text-l">
        AUSTIN, TX
      </div>
      <span className="text-xs font font-light tracking-wide text-gray sm:text-m">
        (and surrounding areas)
      </span>
      <div className="h-16" />
    </div>
  );
}
