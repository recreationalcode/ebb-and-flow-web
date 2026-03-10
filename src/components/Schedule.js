import { Dialog } from '@headlessui/react';

import { CalendarIcon, ChatIcon, PhoneIcon, MailIcon } from '@heroicons/react/outline';
import PurpleBlueLogo from '../assets/logos/Purple Blue Logo.png';
import Button from '../ui/Button';
import Modal from '../ui/Modal';

export default function Schedule({ open, setOpen, bookingUrl, ...props }) {
  return (
    <Modal open={open} setOpen={setOpen}>
      <div className="bg-gray-200 px-4 pt-5 pb-4 sm:p-6 sm:pb-4 sm:flex sm:items-start">
        <div className="mx-auto flex-shrink-0 flex items-center justify-center rounded-full sm:mx-0 sm:self-center">
          <img
            src={PurpleBlueLogo}
            className="h-16 sm:h-24"
            aria-hidden="true"
            alt="Ebb & Flow"
          />
        </div>
        <div className="sm:flex sm:flex-col w-full">
          <div className="mt-3">
            <Dialog.Title
              as="h3"
              className="text-md text-center font-light text-gray-600 mt-2 mb-2 sm:mt-0 sm:mb-2">
              Schedule your appointment
            </Dialog.Title>
          </div>
          <div className="px-4 py-3 sm:px-6 flex flex-col sm:items-center">
            <a
              href={bookingUrl || 'https://ebbnflow.janeapp.com'}
              target="_blank"
              rel="noopener noreferrer">
              <Button className="w-full sm:w-auto sm:text-sm">
                <CalendarIcon className="h-4 w-4 mr-1.5" aria-hidden="true" />
                Book Online
              </Button>
            </a>
            <p className="text-xs italic text-gray-600 font-light mt-2 text-center">
              A card on file will be required
            </p>
          </div>
          <hr className="mx-6 my-1 border-gray/20" />
          <p className="text-xs text-gray-600 font-medium text-center mt-4 px-4">
            Want to speak with Natalie directly about your therapy
            needs?
          </p>
          <div className="px-4 py-3 sm:px-6 flex flex-col sm:flex-row justify-center gap-3">
            <a href="sms:+18505293740">
              <Button className="w-full sm:w-auto sm:text-sm">
                <ChatIcon className="h-4 w-4 mr-1.5" aria-hidden="true" />
                Text
              </Button>
            </a>
            <a href="tel:+18505293740">
              <Button className="w-full sm:w-auto sm:text-sm">
                <PhoneIcon className="h-4 w-4 mr-1.5" aria-hidden="true" />
                Call
              </Button>
            </a>
            <a href="mailto:nat.gamble@yahoo.com">
              <Button className="w-full sm:w-auto sm:text-sm">
                <MailIcon className="h-4 w-4 mr-1.5" aria-hidden="true" />
                Email
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
}
