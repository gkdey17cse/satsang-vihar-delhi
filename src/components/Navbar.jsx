// // src/components/Navbar.jsx
// import { useState } from "react";
// import { Link as ScrollLink } from "react-scroll";
// import { Link as RouterLink, useLocation } from "react-router-dom";
// import logo_light from '../assets/Photos/logo_light.png';
// import logo_dark from '../assets/Photos/logo_dark.png';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();
//   const isHomePage = location.pathname === "/";

//   const navLinks = [
//     { name: "Home", to: "hero" },
//     { name: "Mission & Vision", to: "mission" },
//     { name: "Events", to: "events" },
//     { name: "Upayojna Kendras", to: "kendras" },
//     { name: "Contact Us", to: "contact" },
//   ];

//   return (
//     <nav className="sticky top-0 z-50 w-full bg-[var(--bg-secondary)]/90 backdrop-blur-md border-b border-[var(--border-subtle)]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
//         <div className="flex items-center justify-between h-16 lg:h-20">
          
//           {/* 1. Logo Section - Scalable Text */}
//           <div className="flex-shrink-0">
//             <RouterLink to="/" className="flex items-center gap-2 group">
//               <div className="relative h-10 w-10 lg:h-12 lg:w-12 ">
//                  <img src={logo_light} alt="Logo" className="h-full rounded-full  w-full object-contain block dark:hidden" />
//                  <img src={logo_dark} alt="Logo" className="h-full  rounded-full w-full object-contain hidden dark:block" />
//               </div>
//               <span className="font-bold tracking-tight text-[var(--primary)] 
//                 text-base      /* Mobile */
//                 sm:text-lg    /* Tablet */
//                 lg:text-xl    /* Desktop */
//                 xl:text-2xl   /* Large Monitor */
//               ">
//                 Satsang Vihar Delhi
//               </span>
//             </RouterLink>
//           </div>

//           {/* 2. Desktop Navigation (Visible from LG screen) */}
//           <div className="hidden lg:flex items-center gap-1 xl:gap-4">
//             {isHomePage ? (
//               navLinks.map((link) => (
//                 <ScrollLink
//                   key={link.name}
//                   to={link.to}
//                   spy={true}
//                   smooth={true}
//                   offset={-80}
//                   className="cursor-pointer font-medium text-[var(--text-muted)] hover:text-[var(--primary)] px-3 py-2 transition-all
//                     lg:text-[10px]   /* Font Size LG */
//                     xl:text-sm      /* Font Size XL */
//                     2xl:text-base   /* Font Size 2XL */
//                   "
//                   activeClass="text-[var(--primary)] font-bold"
//                 >
//                   {link.name}
//                 </ScrollLink>
//               ))
//             ) : (
//               <RouterLink to="/" className="text-sm font-medium text-[var(--text-muted)] px-3">
//                 Back to Home
//               </RouterLink>
//             )}
            
//             {/* CTA Button - Desktop only */}
//             <button className="ml-4 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-bold rounded-full transition-all shadow-md
//               lg:text-[10px] lg:px-3 lg:py-1.5
//               xl:text-xs xl:px-5 xl:py-2
//               2xl:text-sm 2xl:px-6 2xl:py-2.5
//             ">
//               Daily Prayer Times
//             </button>
//           </div>

//           {/* 3. Mobile Menu Toggle (Visible below LG) */}
//           <div className="lg:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="relative z-50 p-2 text-[var(--text-main)] transition-colors focus:outline-none"
//             >
//               <div className="flex flex-col justify-around w-6 h-5">
//                 <span className={`h-0.5 w-full bg-current transform transition duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
//                 <span className={`h-0.5 w-full bg-current transition duration-300 ${isOpen ? "opacity-0" : ""}`} />
//                 <span className={`h-0.5 w-full bg-current transform transition duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* 4. Mobile Overlay Menu (Top-Right Card) */}
//       <div className={`
//         absolute top-full right-4 mt-2 w-64 rounded-2xl shadow-2xl border border-[var(--border-subtle)]
//         bg-[var(--bg-main)] transform transition-all duration-300 ease-in-out z-50
//         lg:hidden 
//         ${isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 -translate-y-4 pointer-events-none"}
//       `}>
//         <div className="flex flex-col p-6 space-y-4">
//           {isHomePage ? (
//             navLinks.map((link) => (
//               <ScrollLink
//                 key={link.name}
//                 to={link.to}
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 onClick={() => setIsOpen(false)}
//                 className="text-base font-semibold text-[var(--text-main)] hover:text-[var(--primary)] transition-colors border-b border-[var(--border-subtle)]/50 pb-2"
//               >
//                 {link.name}
//               </ScrollLink>
//             ))
//           ) : (
//             <RouterLink to="/" onClick={() => setIsOpen(false)} className="text-base font-semibold">
//               Back to Home
//             </RouterLink>
//           )}

//           {/* Prayer Button moved inside mobile menu */}
//           <button className="w-full bg-[var(--primary)] text-white py-3 rounded-xl font-bold shadow-lg hover:brightness-110 active:scale-95 transition-all">
//             Daily Prayer Times
//           </button>
//         </div>
//       </div>

//       {/* Click-out overlay to close menu */}
//       {isOpen && (
//         <div 
//           className="fixed inset-0 h-screen w-screen lg:hidden z-40 bg-black/5" 
//           onClick={() => setIsOpen(false)}
//         />
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// src/components/Navbar.jsx
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import PrayerTimesModal from "./PrayerTimesModal"; // Import the modal
import logo_light from '../assets/Photos/logo_light.png';
import logo_dark from '../assets/Photos/logo_dark.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPrayerModalOpen, setIsPrayerModalOpen] = useState(false); // State for Modal
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
    <>
      <nav className="sticky top-0 z-50 w-full bg-[var(--bg-secondary)]/90 backdrop-blur-md border-b border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* 1. Logo Section - Scalable Text */}
            <div className="flex-shrink-0">
              <RouterLink to="/" className="flex items-center gap-4 group">
                <div className="relative h-10 w-10 lg:h-12 lg:w-12 ">
                   <img src={logo_light} alt="Logo" className="h-full rounded-full  w-full object-contain block dark:hidden" />
                   <img src={logo_dark} alt="Logo" className="h-full  rounded-full w-full object-contain hidden dark:block" />
                </div>
                <span className="font-bold tracking-tight text-[var(--primary)] 
                  text-base       /* Mobile */
                  sm:text-lg      /* Tablet */
                  lg:text-xl      /* Desktop */
                  xl:text-2xl     /* Large Monitor */
                ">
                  Satsang Vihar Delhi
                </span>
              </RouterLink>
            </div>

            {/* 2. Desktop Navigation (Visible from LG screen) */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-4">
              {isHomePage ? (
                navLinks.map((link) => (
                  <ScrollLink
                    key={link.name}
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    className="cursor-pointer font-medium text-[var(--text-muted)] hover:text-[var(--primary)] px-3 py-2 transition-all
                      lg:text-[10px]    /* Font Size LG */
                      xl:text-sm        /* Font Size XL */
                      2xl:text-base     /* Font Size 2XL */
                    "
                    activeClass="text-[var(--primary)] font-bold"
                  >
                    {link.name}
                  </ScrollLink>
                ))
              ) : (
                <RouterLink to="/" className="text-sm font-medium text-[var(--text-muted)] px-3">
                  Back to Home
                </RouterLink>
              )}
              
              {/* CTA Button - Desktop only */}
              <button 
                onClick={() => setIsPrayerModalOpen(true)}
                className="ml-4 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-bold rounded-full transition-all shadow-md
                  lg:text-[10px] lg:px-3 lg:py-1.5
                  xl:text-xs xl:px-5 xl:py-2
                  2xl:text-sm 2xl:px-6 2xl:py-2.5
              ">
                Daily Prayer Times
              </button>
            </div>

            {/* 3. Mobile Menu Toggle (Visible below LG) */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative z-50 p-2 text-[var(--text-main)] transition-colors focus:outline-none"
              >
                <div className="flex flex-col justify-around w-6 h-5">
                  <span className={`h-0.5 w-full bg-current transform transition duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                  <span className={`h-0.5 w-full bg-current transition duration-300 ${isOpen ? "opacity-0" : ""}`} />
                  <span className={`h-0.5 w-full bg-current transform transition duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* 4. Mobile Overlay Menu (Top-Right Card) */}
        <div className={`
          absolute top-full right-4 mt-2 w-64 rounded-2xl shadow-2xl border border-[var(--border-subtle)]
          bg-[var(--bg-main)] transform transition-all duration-300 ease-in-out z-50
          lg:hidden 
          ${isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 -translate-y-4 pointer-events-none"}
        `}>
          <div className="flex flex-col p-6 space-y-4">
            {isHomePage ? (
              navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-semibold text-[var(--text-main)] hover:text-[var(--primary)] transition-colors border-b border-[var(--border-subtle)]/50 pb-2"
                >
                  {link.name}
                </ScrollLink>
              ))
            ) : (
              <RouterLink to="/" onClick={() => setIsOpen(false)} className="text-base font-semibold">
                Back to Home
              </RouterLink>
            )}

            {/* Prayer Button moved inside mobile menu */}
            <button 
              onClick={() => {
                setIsOpen(false);
                setIsPrayerModalOpen(true);
              }}
              className="w-full bg-[var(--primary)] text-white py-3 rounded-xl font-bold shadow-lg hover:brightness-110 active:scale-95 transition-all"
            >
              Daily Prayer Times
            </button>
          </div>
        </div>

        {/* Click-out overlay to close menu */}
        {isOpen && (
          <div 
            className="fixed inset-0 h-screen w-screen lg:hidden z-40 bg-black/5" 
            onClick={() => setIsOpen(false)}
          />
        )}
      </nav>

      {/* Render the Modal */}
      <PrayerTimesModal 
        isOpen={isPrayerModalOpen} 
        onClose={() => setIsPrayerModalOpen(false)} 
      />
    </>
  );
};

export default Navbar;