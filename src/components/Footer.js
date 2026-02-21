export default function Footer() {
  return (
    <footer
      aria-label="Availability and location"
      className="bg-gray-light text-center px-6 pt-8 sm:pt-12 pb-24 sm:pb-16">
      <div className="mb-6 sm:mb-8">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gray mb-3">
          Availability
        </div>
        <div className="text-lg sm:text-xl font-medium text-blue">
          Wednesdays &amp; Saturdays
        </div>
        <div className="text-base sm:text-lg font-light text-gray">
          8:00 AM &ndash; 5:00 PM
        </div>
      </div>
      <div className="flex flex-col gap-4 sm:mx-auto sm:max-w-lg bg-blue rounded-2xl px-6 py-6 sm:px-8 sm:py-8 shadow-lg">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-light">
          Location
        </div>
        <div className="text-base sm:text-lg font-light text-white">
          <div>910 17th Street NW, Suite 1020</div>
          <div>Washington, DC 20006</div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-md">
          <iframe
            title="Yao Shan Center for Chinese Medicine location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.9667265936364!2d-77.0398039!3d38.9018762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b702b2f89c25%3A0x3053ccabaca800cf!2sEbb%20%26%20Flow!5e0!3m2!1sen!2sus!4v1771646114733!5m2!1sen!2sus"
            width="100%"
            height="180"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="font-light text-white">
          <span>Inside the </span>
          <a
            href="https://yaoshancenter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 decoration-white/40 hover:decoration-white transition-colors">
            Yao Shan Center for Chinese Medicine
          </a>
        </div>
      </div>
    </footer>
  );
}
