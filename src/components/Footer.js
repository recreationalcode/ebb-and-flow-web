export default function Footer() {
  return (
    <footer aria-label="Availability and location" className="bg-gray-light text-center px-6 pt-8 sm:pt-12 pb-24 sm:pb-16">
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
      <div className="sm:mx-auto sm:max-w-md bg-blue rounded-2xl px-6 py-6 sm:px-8 sm:py-8 shadow-lg">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-light mb-4">
          Located at
        </div>
        <a
          href="https://yaoshancenter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-base sm:text-lg font-medium text-white underline underline-offset-2 decoration-white/40 hover:decoration-white transition-colors"
        >
          Yao Shan Center for Chinese Medicine
        </a>
        <div className="text-base sm:text-lg font-light text-white mt-1">
          910 17th Street NW, Suite 1020
        </div>
        <div className="text-base sm:text-lg font-light text-white">
          Washington, DC 20006
        </div>
        <div className="mt-4 rounded-xl overflow-hidden shadow-md">
          <iframe
            title="Yao Shan Center for Chinese Medicine location"
            src="https://www.google.com/maps?q=Yao+Shan+Center+for+Chinese+Medicine+910+17th+St+NW+Suite+1020+Washington+DC+20006&output=embed"
            width="100%"
            height="180"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </footer>
  );
}
