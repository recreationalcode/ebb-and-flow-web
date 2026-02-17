import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

import PurpleBlueLogo from "../assets/logos/Purple Blue Logo.png";
import Button from "../ui/Button";

export default function Schedule(props) {
  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={props.setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-blue-light bg-opacity-50 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-gray-light rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-md sm:w-full">
                <div className="bg-gray-light px-4 pt-5 pb-4 sm:p-6 sm:pb-4 sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center rounded-full sm:mx-0 sm:self-center">
                    <img
                      src={PurpleBlueLogo}
                      className="h-16 sm:h-24"
                      aria-hidden="true"
                      alt="Ebb & Flow"
                    />
                  </div>
                  <div className="sm:flex sm:flex-col">
                    <div className="mt-3">
                      <Dialog.Title
                        as="h3"
                        className="text-md text-center font-light text-gray mt-2 mb-2 sm: mt-0 sm:mb-2"
                      >
                        Contact Natalie to schedule your appointment
                      </Dialog.Title>
                    </div>
                    <div className="bg-gray-light px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse sm:self-center">
                      <a href="sms: 8505293740">
                        <Button className="w-full sm:ml-3 sm:w-auto sm:text-sm">
                          Text
                        </Button>
                      </a>
                      <a href="tel: 8505293740">
                        <Button className="w-full mt-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                          Call
                        </Button>
                      </a>
                      <a href="mailto: nat.gamble@yahoo.com">
                        <Button className="w-full mt-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                          Email
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
