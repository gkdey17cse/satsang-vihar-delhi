export const UtsavFooter = ({ year, quote, quoteSource, socials }) => {
  return (
    <footer className="bg-[var(--color-neutral-900)] text-white py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="mb-8">
          <p
            className="text-[13px] md:text-sm lg:text-base font-medium text-[var(--color-brand-200)] italic leading-relaxed"
            dangerouslySetInnerHTML={{ __html: quote }}
          />
          <span
            className="block mt-4 text-[10px] md:text-xs lg:text-sm text-[var(--color-neutral-400)] uppercase tracking-wider"
            dangerouslySetInnerHTML={{ __html: quoteSource }}
          />
        </div>
        <div className="flex justify-center gap-6 md:gap-8 pt-4 border-t border-[var(--color-neutral-800)]">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-[var(--color-neutral-400)] hover:text-[${social.hoverColor}] transition-colors`}
            >
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5 lg:w-7 lg:h-7"
              >
                <path d={social.iconPath} />
              </svg>
            </a>
          ))}
        </div>
        <p className="text-[10px] md:text-xs text-[var(--color-neutral-500)] mt-4 tracking-widest uppercase">
          © {year} Satsang Vihar New Delhi • All rights reserved.
        </p>
      </div>
    </footer>
  );
};
