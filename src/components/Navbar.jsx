// src/components/Navbar.jsx
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import PrayerTimesModal from "./PrayerTimesModal";

// Cloudinary URLs with optimization
const logo_dark =
  "https://res.cloudinary.com/dk3sj0t4u/image/upload/w_400,f_auto,q_auto/v1769624130/logo_dark_b7axue.png";
const logo_light =
  "https://res.cloudinary.com/dk3sj0t4u/image/upload/w_400,f_auto,q_auto/v1769624131/logo_light_smzzit.png";

// Local image fallbacks
const localFallbacks = {
  "logo_dark_b7axue.png": "/assets/Photos/logo_dark.png",
  "logo_light_smzzit.png": "/assets/Photos/logo_light.png",
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPrayerModalOpen, setIsPrayerModalOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isKendrasPage = location.pathname === "/upyojna";

  // Function to get fallback image URL
  const getFallbackImage = (cloudinaryUrl) => {
    const filename = cloudinaryUrl.split("/").pop();
    return localFallbacks[filename] || cloudinaryUrl;
  };

  // Navigation links
  const navLinks = [
    { name: "Home", route: "/", section: "hero" },
    { name: "Mission & Vision", route: "/", section: "mission" },
    { name: "Events", route: "/", section: "events" },
    { name: "Upayojna Kendras", route: "/upyojna", section: null },
    { name: "Contact Us", route: "/", section: "contact" },
  ];

  // Determine if a link is active (used for styling)
  const isActive = (link) => {
    if (link.route === "/" && isHomePage) return true;
    if (link.route === "/upyojna" && isKendrasPage) return true;
    return false;
  };

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-[var(--bg-secondary)]/90 backdrop-blur-md border-b border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <RouterLink to="/" className="flex items-center gap-4 group">
                <div className="relative h-10 w-10 lg:h-12 lg:w-12">
                  <img
                    src={logo_light}
                    alt="Logo"
                    className="h-full rounded-full w-full object-contain block dark:hidden"
                    onError={(e) => {
                      e.target.onerror = null;
                      const fallbackSrc = getFallbackImage(logo_light);
                      if (fallbackSrc !== logo_light) e.target.src = fallbackSrc;
                    }}
                  />
                  <img
                    src={logo_dark}
                    alt="Logo"
                    className="h-full rounded-full w-full object-contain hidden dark:block"
                    onError={(e) => {
                      e.target.onerror = null;
                      const fallbackSrc = getFallbackImage(logo_dark);
                      if (fallbackSrc !== logo_dark) e.target.src = fallbackSrc;
                    }}
                  />
                </div>
                <span className="font-bold tracking-tight text-[var(--primary)] text-lg lg:text-xl xl:text-2xl">
                  Satsang Vihar Delhi
                </span>
              </RouterLink>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-4">
              {navLinks.map((link) => {
                if (link.route === "/upyojna") {
                  return (
                    <RouterLink
                      key={link.name}
                      to={link.route}
                      className="cursor-pointer font-medium px-3 py-2 transition-all text-xs xl:text-sm 2xl:text-base text-[var(--text-muted)] hover:text-[var(--primary)]"
                    >
                      {link.name}
                    </RouterLink>
                  );
                }

                if (isHomePage) {
                  return (
                    <ScrollLink
                      key={link.name}
                      to={link.section}
                      spy={true}
                      smooth={true}
                      offset={-80}
                      className="cursor-pointer font-medium px-3 py-2 transition-all text-xs xl:text-sm 2xl:text-base text-[var(--text-muted)] hover:text-[var(--primary)]"
                      activeClass="text-[var(--primary)] font-bold"
                    >
                      {link.name}
                    </ScrollLink>
                  );
                } else {
                  return (
                    <RouterLink
                      key={link.name}
                      to={`/#${link.section}`}
                      className="cursor-pointer font-medium px-3 py-2 transition-all text-xs xl:text-sm 2xl:text-base text-[var(--text-muted)] hover:text-[var(--primary)]"
                    >
                      {link.name}
                    </RouterLink>
                  );
                }
              })}

              {/* CTA Button - Desktop only */}
              <button
                onClick={() => setIsPrayerModalOpen(true)}
                className="ml-4 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-bold rounded-full transition-all shadow-md text-[10px] px-3 py-1.5 xl:text-xs xl:px-5 xl:py-2 2xl:text-sm 2xl:px-6 2xl:py-2.5"
              >
                Daily Prayer Times
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative z-50 p-2 text-[var(--text-main)] transition-colors focus:outline-none"
              >
                <div className="flex flex-col justify-around w-6 h-5">
                  <span
                    className={`h-0.5 w-full bg-current transform transition duration-300 ${
                      isOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                  />
                  <span
                    className={`h-0.5 w-full bg-current transition duration-300 ${
                      isOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`h-0.5 w-full bg-current transform transition duration-300 ${
                      isOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Overlay Menu */}
        <div
          className={`
            absolute top-full right-4 mt-2 w-52 rounded-2xl shadow-2xl border border-[var(--border-subtle)]
            bg-[var(--bg-main)] transform transition-all duration-300 ease-in-out z-50 lg:hidden
            ${isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 -translate-y-4 pointer-events-none"}
          `}
        >
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => {
              if (link.route === "/upyojna") {
                return (
                  <RouterLink
                    key={link.name}
                    to={link.route}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-semibold cursor-pointer text-[var(--text-main)] hover:text-[var(--primary)] border-b border-[var(--border-subtle)]/50 pb-2"
                  >
                    {link.name}
                  </RouterLink>
                );
              }

              if (isHomePage) {
                return (
                  <ScrollLink
                    key={link.name}
                    to={link.section}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-semibold cursor-pointer text-[var(--text-main)] hover:text-[var(--primary)] border-b border-[var(--border-subtle)]/50 pb-2"
                  >
                    {link.name}
                  </ScrollLink>
                );
              } else {
                return (
                  <RouterLink
                    key={link.name}
                    to={`/#${link.section}`}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-semibold cursor-pointer text-[var(--text-main)] hover:text-[var(--primary)] border-b border-[var(--border-subtle)]/50 pb-2"
                  >
                    {link.name}
                  </RouterLink>
                );
              }
            })}

            {/* Prayer button in mobile menu */}
            <button
              onClick={() => {
                setIsOpen(false);
                setIsPrayerModalOpen(true);
              }}
              className="w-full bg-[var(--primary)] text-sm text-white -ml-2 py-2 rounded-lg font-semibold shadow-lg hover:brightness-110 active:scale-95 transition-all"
            >
              Daily Prayer Times
            </button>
          </div>
        </div>

        {/* Click-out overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 h-screen w-screen lg:hidden z-40 bg-black/5"
            onClick={() => setIsOpen(false)}
          />
        )}
      </nav>

      <PrayerTimesModal
        isOpen={isPrayerModalOpen}
        onClose={() => setIsPrayerModalOpen(false)}
      />
    </>
  );
};

export default Navbar;