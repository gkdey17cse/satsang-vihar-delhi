import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "Mission & Vision", to: "mission" },
    { name: "Events", to: "events" },
    { name: "Upayojna Kendras", to: "kendras" },
    { name: "Contact Us", to: "contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-[var(--bg-secondary)]/90 backdrop-blur-sm shadow-sm border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-xl text-[var(--primary)]">
            <RouterLink to="/">Satsang Vihar Delhi</RouterLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {isHomePage ? (
                navLinks.map((link) => (
                  <ScrollLink
                    key={link.name}
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-64}
                    duration={500}
                    className="cursor-pointer px-3 py-2 rounded-md text-sm font-medium text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors"
                    activeClass="text-[var(--primary)] font-semibold"
                  >
                    {link.name}
                  </ScrollLink>
                ))
              ) : (
                <RouterLink
                  to="/"
                  className="px-3 py-2 rounded-md text-sm font-medium text-[var(--text-muted)] hover:text-[var(--primary)]"
                >
                  Back to Home
                </RouterLink>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors shadow-md cursor-pointer">
              Daily Prayer Times
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-[var(--bg-main)] inline-flex items-center justify-center p-2 rounded-md text-[var(--text-muted)] hover:text-[var(--primary)] focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? "X" : "Menu"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <p className="p-4 text-[var(--text-muted)]">Mobile menu items...</p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
