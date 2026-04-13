import { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { ExternalLink } from "lucide-react";

export const UtsavNavbar = ({ navLinks, logoLight, logoDark, title }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[var(--bg-secondary)]/90 backdrop-blur-md border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-3 lg:gap-4 shrink-0">
            <div className="relative h-10 w-10 md:h-11 md:w-11 lg:h-14 lg:w-14">
              <img
                src={logoLight}
                alt="Logo"
                className="h-full rounded-full w-full object-contain block dark:hidden"
              />
              <img
                src={logoDark}
                alt="Logo"
                className="h-full rounded-full w-full object-contain hidden dark:block"
              />
            </div>
            <span className="font-bold tracking-tight text-[var(--primary)] text-base md:text-lg lg:text-xl xl:text-2xl">
              {title}
            </span>
          </Link>
          <div className="hidden lg:flex items-center gap-6 xl:gap-4">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg text-sm xl:text-base font-bold cursor-pointer bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white transition-all"
                >
                  {link.name}
                </a>
              ) : (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  spy
                  smooth
                  offset={-80}
                  duration={800}
                  activeClass="text-[var(--primary)] font-bold bg-[var(--bg-tertiary)]"
                  className="cursor-pointer px-3 py-1.5 rounded-lg text-sm xl:text-base font-medium text-[var(--text-muted)] hover:text-[var(--primary)] transition-all"
                >
                  {link.name}
                </ScrollLink>
              ),
            )}
          </div>
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-50 p-2 text-[var(--text-main)] transition-colors focus:outline-none"
            >
              <div className="flex flex-col justify-around w-6 h-5">
                <span
                  className={`h-0.5 w-full bg-current transition ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
                />
                <span
                  className={`h-0.5 w-full bg-current transition ${isMenuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`h-0.5 w-full bg-current transition ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full right-4 mt-2 w-52 rounded-2xl shadow-2xl border border-[var(--border-subtle)] bg-[var(--bg-main)] transform transition-all duration-300 ease-in-out z-50 lg:hidden ${isMenuOpen ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 -translate-y-4 pointer-events-none"}`}
      >
        <div className="flex flex-col p-4 space-y-3">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold cursor-pointer text-[var(--primary)] hover:text-[var(--primary-hover)] transition-colors border-b border-[var(--border-subtle)]/50 pb-2 flex items-center gap-2"
              >
                {link.name} <ExternalLink className="w-3 h-3" />
              </a>
            ) : (
              <ScrollLink
                key={link.name}
                to={link.to}
                smooth
                offset={-70}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-semibold cursor-pointer text-[var(--text-main)] hover:text-[var(--primary)] transition-colors border-b border-[var(--border-subtle)]/50 pb-2"
              >
                {link.name}
              </ScrollLink>
            ),
          )}
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="fixed inset-0 h-screen w-screen lg:hidden z-40 bg-black/5"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
};
