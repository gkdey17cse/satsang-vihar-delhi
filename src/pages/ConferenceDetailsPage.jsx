// src/pages/ConferenceDetailsPage.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll"; // Using alias for clarity
// Import logos
import logo_light from "../assets/Photos/logo_light.png";
import logo_dark from "../assets/Photos/logo_dark.png";
import ias_ishitaroy from "../assets/Photos/conference-du-2026/IAS_IshitaRoy.jpg";
import guest_jubilee from "../assets/Photos/conference-du-2026/Guest_JubileePurakayastha.jpg";
import guest_debo from "../assets/Photos/conference-du-2026/Guest_DebojyotiChakraborty.jpg";
import guest_deepak from "../assets/Photos/conference-du-2026/Guest_DeepakBhardwaj.jpg";
import guest_pravakar from "../assets/Photos/conference-du-2026/Guest_ProvakarMohanty.png";
import guest_surya from "../assets/Photos/conference-du-2026/Guest_Surya.jpg";
import guest_sutanu from "../assets/Photos/conference-du-2026/Guest_SutaniChakraborti.jpg";
import guest_rabindra from "../assets/Photos/conference-du-2026/Guest_RabindraKumarJena.png";
const ConferenceDetailsPage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const REGISTRATION_LINK = "#";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Guests
  const guestsOfHonour = [
    {
      name: "Dr. Jubilee Purkayastha",
      role: "Scientist 'F' & Joint Director, INMAS (DRDO)",
      sub: "Ministry of Defence, Government of India",
      image: guest_jubilee, // Replace with: dr_jubilee
    },
    {
      name: "Dr. Pravakar Mohanty",
      role: "Scientist ‘E’ and Joint Director (R&D)",
      sub: "Ministry of Science & Tech, Govt. of India",
      image: guest_pravakar, // Replace with: dr_pravakar
    },
    {
      name: "Dr. Debojyoti Chakraborty",
      role: "Senior Principal Scientist",
      sub: "CSIR - Institute of Genomics and Integrative Biology , New Delhi",
      // image: guest_debo, // Replace with: rabindra_jena
    },
    {
      name: "Surya Prakash Mohapatra",
      role: "Global Talent Skilling Head , AI (WIPRO)",
      sub: "Wipro Technologies",
      image: guest_surya, // Replace with: surya_prakash
    },
    {
      name: "Sutanu Chakraborti",
      role: "Professor, Dept. of Computer Science & Engineering",
      sub: "IIT Madras",
      image: guest_sutanu, // Replace with: sutanu_chakraborti
    },
    {
      name: "Dr. Deepak Bhardwaj",
      role: "Associate Professor , Dept. of Botany",
      sub: "University of Delhi",
      image: guest_deepak, // Replace with: rabindra_jena
    },
  ];

  // Data for Speakers grouped by category
  const speakerCategories = [
    {
      title: "UPSC, Civil Services & Defence",
      speakers: [
        {
          name: "Shantanu Singh, IAS",
          role: "UPSC Civil Services",
          inst: "Government of India",
        },
        {
          name: "Shantanu Singh, IFS",
          role: "UPSC Civil Service",
          inst: "Government of India",
        },
        {
          name: "Saptaraj Das, IES",
          role: "UPSC Engineering Services",
          inst: "Government of India",
        },
        {
          name: "Lt. Raj Kumar Thakur",
          role: "UPSC CDS",
          inst: "Government of India",
        },
        {
          name: "Sachidanand Choudhury",
          role: "SSC & Govt Exams",
          inst: "Specialist",
        },
        {
          name: "Ashish Sutar",
          role: "Ministry of Home Affairs",
          inst: "Government of India",
        },
      ],
    },
    {
      title: "Management, Corporate & Business",
      speakers: [
        {
          name: "Prof. Jaganath Sanyal",
          role: "Professor",
          inst: "KEDGE Business School, France",
        },
        {
          name: "Shirsendu Banik",
          role: "MBA / Management",
          inst: "IIM Amritsar",
        },
        {
          name: "Ritabrata Gogoi",
          role: "MBA/Management",
          inst: "University of Sussex , US",
        },
        {
          name: "Shubhrangshu Sinha",
          role: "Deputy General Manager ( Sales & Mktg.)",
          inst: "IIM Kashipur",
        },
        {
          name: "Prashant Das",
          role: "ESG & Sustainability Professional",
          inst: "",
        },
        { name: "Ashim Ganguly", role: "Technology Consulting", inst: "KPMG" },
        {
          name: "Soumendra Nath Mukherjee",
          role: "Marketing & Corporate",
          inst: "American Express",
        },
        {
          name: "Jishnu Roh Chatterjee",
          role: "Founder & CEO",
          inst: "JJR Industries",
        },
      ],
    },
    {
      title: "Academia, Research & Policy",
      speakers: [
        {
          name: "Dr. Atrayee Choudhury",
          role: "Asst. Professor (Economics)",
          inst: "National Institute of Public Finance and Policy, New Delhi",
        },
        {
          name: "Dr. SK Md. Azharuddin",
          role: "Economist",
          inst: "National Institute of Public Finance and Policy, New Delhi",
        },
        { name: "Sourav Saha", role: "Faculty", inst: "Ashoka University" },
        {
          name: "Sajal Sarkar",
          role: "PhD Scholar",
          inst: "CSIR Institute of Genomics and Integrative Biology, New Delhi",
        },
        {
          name: "Abheek Ghosh",
          role: "Post Doctoral Fellow",
          inst: "Oxford University , UK",
        },
        { name: "Karan Barman", role: "PhD Scholar", inst: "IIT Delhi" },
        {
          name: "Sanchari Kundu",
          role: "PhD Student",
          inst: "Virginia Tech , USA",
        },
        {
          name: "Hadungra Narzary",
          role: "PhD Scholar , Dept of Political Science",
          inst: "University of Delhi",
        },
        { name: "Tanay Malick", role: "Researcher", inst: "TERISAS, BHU" },
      ],
    },
    {
      title: "University of Delhi Faculty Panel",
      speakers: [
        {
          name: "Dr. Indrakashi Dutta",
          role: "Associate Professor",
          inst: "Jesus and Mary College",
        },
        {
          name: "Prof. Ujjal Jena",
          role: "Professor",
          inst: "Dept. of English, DU",
        },
        {
          name: "Dr. Dhiraj Sarkar",
          role: "Dept. of English",
          inst: "Deshbandhu College, DU",
        },
      ],
    },
    {
      title: "Medical, Law & Tech",
      speakers: [
        {
          name: "Dr. Bhruti Shethi",
          role: "Medical (NEET UG/PG)",
          inst: "AIIMS Delhi",
        },
        {
          name: "Dr. Sutopa Das",
          role: "Medical Professional",
          inst: "Safdarjung Hospital",
        },
        {
          name: "Misthu Yadav",
          role: "Lawyer",
          inst: "Supreme Court, New Delhi",
        },
        {
          name: "Gour Krishna Dey",
          role: "AI / ML Enthusiast",
          inst: "IIIT Delhi",
        },
        {
          name: "Sunetra Maity",
          role: "UI/UX Design",
          inst: "Amity University, Noida",
        },
      ],
    },
    {
      title: "CUET PG & Student Guidance",
      speakers: [
        {
          name: "Arpita Das",
          role: "Dept. of Political Science",
          inst: "Lady Shri Ram College, DU",
        },
        {
          name: "Sudeepa Das",
          role: "Dept. of English",
          inst: "University of Delhi",
        },
        { name: "Nibedita Bauri", role: "Dept. of English", inst: "JNU" },
        {
          name: "Subhash Dash",
          role: "Dept. of Chemistry",
          inst: "University of Delhi",
        },
        {
          name: "Kritiranjan Bhattrai",
          role: "Dept. of Labour Studies",
          inst: "JNU",
        },
      ],
    },
    {
      title: "Arts & Creative Careers",
      speakers: [
        {
          name: "Sandeep Mohanty",
          role: "Singing / PhD Scholar",
          inst: "University of Delhi",
        },
        {
          name: "Sadhana Ghosh",
          role: "Dept. of Commerce & National Level Dancer",
          inst: "Hindu College , University of Delhi",
        },
      ],
    },
  ];

  // Navigation Links Configuration
  const navLinks = [
    { name: "Objectives", to: "objectives" },
    { name: "Guests", to: "guests" },
    { name: "Schedule", to: "schedule" },
    { name: "Speakers", to: "speakers" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-main)]">
      {/* --- CUSTOM NAVBAR --- */}
      <nav className="sticky top-0 z-50 w-full bg-[var(--bg-secondary)]/90 backdrop-blur-md border-b border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 lg:gap-4 shrink-0">
              <div className="relative h-10 w-10 md:h-11 md:w-11 lg:h-14 lg:w-14">
                <img
                  src={logo_light}
                  alt="Logo"
                  className="h-full rounded-full w-full object-contain block dark:hidden"
                />
                <img
                  src={logo_dark}
                  alt="Logo"
                  className="h-full rounded-full w-full object-contain hidden dark:block"
                />
              </div>
              <span className="font-bold tracking-tight text-[var(--primary)] text-base md:text-lg lg:text-xl xl:text-2xl">
                Satsang Vihar Delhi
              </span>
            </Link>

            {/* --- Desktop ScrollSpy Navigation (Hidden on Mobile) --- */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={800}
                  activeClass="text-[var(--primary)] font-bold bg-[var(--bg-tertiary)]"
                  className="cursor-pointer px-3 py-1.5 rounded-lg text-sm xl:text-base font-medium text-[var(--text-muted)] hover:text-[var(--primary)] transition-all"
                >
                  {link.name}
                </ScrollLink>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {/* Official Website Button (Hidden on very small screens to save space, or kept) */}
              <Link
                to="/"
                className="hidden sm:block shrink-0 font-semibold text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors text-xs md:text-sm border border-[var(--border-subtle)] px-3 py-1.5 md:px-4 md:py-2 rounded-full hover:bg-[var(--bg-tertiary)]"
              >
                Official Website ↗
              </Link>

              {/* --- THREE BARS MOBILE TOGGLE --- */}
              <div className="lg:hidden flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="relative z-50 p-2 text-[var(--text-main)] transition-colors focus:outline-none"
                >
                  <div className="flex flex-col justify-around w-6 h-5">
                    <span
                      className={`h-0.5 w-full bg-current transform transition duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
                    />
                    <span
                      className={`h-0.5 w-full bg-current transition duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
                    />
                    <span
                      className={`h-0.5 w-full bg-current transform transition duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* --- MOBILE OVERLAY MENU --- */}
        <div
          className={`
      absolute top-full right-4 mt-2 w-52 rounded-2xl shadow-2xl border border-[var(--border-subtle)]
      bg-[var(--bg-main)] transform transition-all duration-300 ease-in-out z-50
      lg:hidden 
      ${isMenuOpen ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 -translate-y-4 pointer-events-none"}
    `}
        >
          <div className="flex flex-col p-4 space-y-3">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-semibold cursor-pointer text-[var(--text-main)] hover:text-[var(--primary)] transition-colors border-b border-[var(--border-subtle)]/50 pb-2"
              >
                {link.name}
              </ScrollLink>
            ))}
            <Link
              to="/"
              className="text-sm font-semibold text-[var(--primary)] pt-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Official Website ↗
            </Link>
          </div>
        </div>

        {/* Click-out overlay to close menu */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 h-screen w-screen lg:hidden z-40 bg-black/5"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </nav>
      <main className="flex-grow">
        {/* 1. HERO SECTION */}
        <section
          id="hero" // Added ID (Optional, for top scroll)
          className="relative w-full h-[75vh] min-h-[500px] flex items-center justify-center overflow-hidden"
        >
          {/* Background Image & Gradient Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
              alt="University of Delhi - North Campus"
              className="w-full h-full object-cover"
            />
            {/* Darker gradient at bottom for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[var(--bg-main)]"></div>
          </div>

          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            {/* Organizer Badge */}
            <div className="inline-block px-4 py-1.5 mb-4 lg:mb-6 rounded-full border border-[var(--primary)] bg-black/40 backdrop-blur-md shadow-lg">
              <span className="text-[var(--primary)] font-bold text-xs md:text-sm uppercase tracking-widest">
                Organised By Satsang Vihar, Delhi
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 lg:mb-4 leading-tight tracking-tight drop-shadow-xl">
              Comprehensive <br className="hidden sm:block" />
              Career Counselling{" "}
              <span className="text-[var(--primary)]">Seminar 2026</span>
            </h1>

            {/* Date & Venue - Clean Row Layout */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-white/95 mb-6 font-medium">
              <p className="flex items-center gap-2 text-sm md:text-lg lg:text-xl bg-black/20 md:bg-transparent px-3 py-1 rounded-lg backdrop-blur-sm md:backdrop-blur-none">
                <span>📍</span> Tagore Hall, University of Delhi
              </p>
              <span className="hidden md:inline text-[var(--primary)] opacity-80 text-xl">
                •
              </span>
              <p className="flex items-center gap-2 text-sm md:text-lg lg:text-xl bg-black/20 md:bg-transparent px-3 py-1 rounded-lg backdrop-blur-sm md:backdrop-blur-none text-[var(--primary)]">
                <span>📅</span> 20th February 2026 (Friday)
              </p>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-8 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md hidden sm:block">
              Guiding students toward informed, confident, and future-ready
              career decisions through expert mentorship and global networking.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full max-w-xs mx-auto sm:max-w-none">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeaRX9gnEe5JhTZdh4538XpxiB86_jdsGAi4_Rs_7uNOXpWrg/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white 
                px-6 py-3 md:px-8 md:py-3 rounded-full
                text-sm md:text-base font-bold 
                transition-all shadow-lg hover:shadow-[var(--primary)]/50 transform hover:-translate-y-1 text-center"
              >
                Register Now (Free)
              </a>

              {/* ScrollSpy Button */}
              <ScrollLink
                to="schedule"
                smooth={true}
                duration={800}
                offset={-50}
                className="cursor-pointer bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 
                px-6 py-3 md:px-8 md:py-3 rounded-full
                text-sm md:text-base font-bold 
                transition-all text-center"
              >
                View Schedule ↓
              </ScrollLink>
            </div>
          </div>
        </section>

        {/* 2. OBJECTIVES & PERKS */}
        <section
          id="objectives" // --- ADDED ID HERE ---
          className="py-16 px-4 bg-[var(--bg-secondary)]"
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Objectives */}
            <div className="bg-[var(--bg-secondary)] p-6 md:p-8 rounded-2xl border border-[var(--border-subtle)]">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[var(--text-main)] mb-5">
                Objectives of the Session
              </h3>
              <ul className="text-xs md:text-sm lg:text-base space-y-3 lg:space-y-4">
                {[
                  "Providing expert career roadmaps across Government, Corporate, and Research domains",
                  "Facilitating direct one-to-one mentorship with bureaucrats and industry leaders",
                  "Equipping students with strategies for competitive exams and placements",
                  "CV preparation and LinkedIn profile building",
                  "Fostering mental resilience and focus for effective stress management",
                  "Building a diverse professional network for long-term career growth",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[var(--primary)] font-bold text-base lg:text-lg">
                      •
                    </span>
                    <span className="text-[var(--text-muted)] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Perks */}
            <div className="bg-[var(--primary)] text-white p-6 md:p-8 rounded-2xl shadow-xl">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-5 text-white">
                Perks of Attending
              </h3>
              <ul className="text-xs md:text-sm lg:text-base space-y-3 lg:space-y-4">
                {[
                  "Official Certificate of Participation for all attendees",
                  "Exclusive Delegate Kit & Resource Materials",
                  "Personalized Resume Review & Career Profiling",
                  "Direct Q&A with IAS, IES officers, and Global Scientists",
                  "Complimentary Lunch & Refreshments for registered participants",
                  "Full Access: 100% Free Entry",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="bg-white/20 p-1 rounded-full text-[10px] lg:text-xs">
                      ✓
                    </span>
                    <span className="text-white/90 font-medium leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 3. GUESTS OF HONOUR & CHIEF GUEST */}
        <section
          id="guests"
          className="py-12 lg:py-20 px-4 bg-[var(--bg-tertiary)] border-y border-[var(--border-subtle)]"
        >
          <div className="max-w-7xl mx-auto">
            {/* --- PROFESSIONAL CHIEF GUEST CARD --- */}
            <div className="mb-20">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[var(--text-main)] mb-3">
                  Speakers
                </h2>
                <div className="w-20 h-1.5 bg-[var(--primary)] mx-auto rounded-full"></div>
              </div>

              <div className="flex justify-center">
                <div className="group w-full max-w-4xl bg-[var(--bg-secondary)] rounded-3xl shadow-xl border border-[var(--border-subtle)] flex flex-col md:flex-row overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  {/* Image Section */}
                  <div className="w-full md:w-2/5 h-80 md:h-auto relative bg-[var(--color-neutral-200)]">
                    <img
                      src={ias_ishitaroy}
                      alt="Ms. Ishita Roy"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="w-full md:w-3/5 p-8 lg:p-12 flex flex-col justify-center items-center md:items-start text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-[var(--text-main)] mb-4 leading-tight">
                      Ms. Ishita Roy
                    </h3>
                    <div className="w-16 h-1 bg-[var(--border-subtle)] mb-6 mx-auto md:mx-0"></div>
                    <p className="text-base lg:text-lg font-bold text-[var(--primary)]  leading-snug mb-2 max-w-sm md:max-w-none">
                      Director, Centre of Continuing Education and Civil
                      Services Academy
                    </p>
                    <p className="text-sm lg:text-base text-[var(--text-muted)] font-medium">
                      Government of Kerala
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* --- GUESTS OF HONOUR --- */}
            <div className="mb-20">
              <div className="text-center mb-10 lg:mb-12">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[var(--text-main)] mb-3">
                  Guests of Honour
                </h2>
                <div className="w-16 h-1 bg-[var(--primary)] mx-auto rounded-full opacity-60"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {guestsOfHonour.map((guest, i) => (
                  <div
                    key={i}
                    className="bg-[var(--bg-secondary)] p-6 lg:p-8 rounded-2xl shadow-lg border border-[var(--border-subtle)] hover:-translate-y-2 transition-transform duration-300 text-center flex flex-col items-center h-full"
                  >
                    <div className="w-24 h-24 lg:w-32 lg:h-32 bg-[var(--bg-tertiary)] rounded-full mb-5 flex items-center justify-center overflow-hidden border-2 border-[var(--bg-tertiary)] shadow-sm">
                      {guest.image ? (
                        <img
                          src={guest.image}
                          alt={guest.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          className="w-10 h-10 text-[var(--primary)]"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      )}
                    </div>

                    <h3 className="text-base md:text-lg lg:text-xl font-bold text-[var(--text-main)] mb-2 leading-tight">
                      {guest.name}
                    </h3>
                    <p className="text-[var(--primary)] font-semibold text-xs md:text-sm lg:text-base mb-3 leading-snug">
                      {guest.role}
                    </p>
                    <div className="mt-auto w-full pt-3 border-t border-[var(--border-subtle)]">
                      <p className="text-[var(--text-muted)] text-[11px] md:text-xs lg:text-sm leading-relaxed italic">
                        {guest.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. PROGRAMME SCHEDULE */}
        <section
          id="schedule"
          className="py-16 lg:py-24 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)]"
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-main)] mb-4 tracking-tight uppercase">
                Programme Schedule
              </h2>
              <div className="w-24 h-1 bg-[var(--primary)] mx-auto mb-6 rounded-full"></div>
              <p className="text-[var(--primary)] text-sm md:text-lg max-w-3xl mx-auto font-medium">
                ASPIRE-A: Comprehensive Career Counselling Seminar • Tagore
                Hall, University of Delhi • 20th February 2026
              </p>
            </div>

            <div className="relative space-y-6">
              {/* Decorative vertical line for desktop */}
              <div className="hidden md:block absolute left-[160px] top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-[var(--border-subtle)] to-transparent"></div>

              {[
                {
                  time: "09:00 AM – 10:00 AM",
                  title: "Registration & Student Orientation",
                  subsections: [
                    {
                      content:
                        "Kit distribution and student orientation session",
                    },
                  ],
                  type: "normal",
                },
                {
                  time: "10:00 AM – 11:00 AM",
                  title: "Inaugural Session",
                  subsections: [
                    {
                      content:
                        "Diya Prajjwalan and Theme song dedicated to young students",
                    },
                    {
                      content:
                        "Welcome Address: Mr. Prashant Das (The Convenor)",
                    },
                    {
                      label: "Guest of Honour Speeches",
                      content:
                        "Mr. Surya Prakash Mohapatra (Global Talent Skilling Head, AI - WIPRO), Dr. Sutanu Chakraborti (Professor, CSE, IIT Madras), Dr. Deepak Bhardwaj (Associate Professor, Dept. of Botany, DU), Dr. Debojyoti Chakraborty (Senior Principal Scientist, CSIR-IGIB), Dr. Jubilee Purkayastha (Scientist 'F' & Joint Director, INMAS-DRDO), Ms. Ishita Roy (Director, Kerala State Civil Services Academy)",
                    },
                    { content: "Address by Chief Guest" },
                    {
                      content:
                        "Vote of Thanks: Dr. Pravakar Mohanty (Scientist ‘E’ & Joint Director, Ministry of Science & Tech, Govt. of India)",
                    },
                  ],
                  type: "session",
                },
                {
                  time: "11:00 AM – 11:15 AM",
                  title: "Tea Break",
                  subsections: [{ content: "Networking & Refreshments" }],
                  type: "break",
                },
                {
                  time: "11:15 AM – 01:00 PM",
                  title: "Career Counselling Sessions",
                  subsections: [
                    {
                      label: "Dr. Sutanu Chakraborty (HoD, CSE, IIT Madras)",
                      content:
                        "Topic: 'Career Confusion & Clarity - Ideal-Centric Life Leads to Excellence'",
                    },
                    {
                      label: "Ms. Ishita Roy (Director, KSCSA)",
                      content:
                        "Topic: 'Competition, Cooperation, Consistency - Nishtha & Ekagrata'",
                    },
                    {
                      label:
                        "Dr. Debojyoti Chakraborty (Sr. Scientist, CSIR-IGIB)",
                      content:
                        "Topic: 'Confluence of Music, Mind and Art shaping Science - Sitar Recital'",
                    },
                    {
                      label: "Mr. Surya Prakash Mahapatra (Global Head, WIPRO)",
                      content: "Topic: 'Career Pathways & Strategic Choices'",
                    },
                    { content: "Interactive Q&A Session" },
                  ],
                  type: "session",
                },
                {
                  time: "01:00 PM – 02:00 PM",
                  title: "Lunch Break",
                  subsections: [
                    {
                      content:
                        "Complimentary lunch provided for all registered participants",
                    },
                  ],
                  type: "break",
                },
                {
                  time: "02:00 PM – 02:20 PM",
                  title: "Rhythm & Resonance",
                  subsections: [
                    {
                      content:
                        "'Celebrating Harmony in Life, Purpose and Career Path' - A Musical Reflection by Sandeep Mohanty (Hindustani Classical Vocalist, PhD Scholar, University of Delhi)",
                    },
                  ],
                  type: "session",
                },
                {
                  time: "02:20 PM – 03:50 PM",
                  title: "Domain-Specific Plenary Sessions",
                  isPlenary: true,
                  sessions: [
                    {
                      id: "P1",
                      name: "Civil, Staff & Defence Services",
                      moderator:
                        "Ms. Ishita Roy (Director, Kerala State Civil Services Academy)",
                      speakers: [
                        "Dr. Pravakar Mohanty (Scientist ‘E’ & Joint Director, Ministry of Science & Tech)",
                        "Lt. Raj Kumar Thakur (UPSC CDS)",
                        "Mr. Saptaraj Das, IES (Ministry of Home Affairs)",
                        "Mr. Ashish Sutar (CRPF , Ministry of Home Affairs)",
                      ],
                    },
                    {
                      id: "P2",
                      name: "Higher Ed & Research",
                      moderator:
                        "Dr. Sutanu Chakraborti (Professor, CSE, IIT Madras)",
                      speakers: [
                        "Dr. Atreyee Choudhury (Asst. Prof, National Institute of Public Finance and Policy)",
                        "Dr. Md. SK Azharuddin (Economist, National Institute of Public Finance and Policy)",
                        "Dr. Ujjwal Jana (Prof, Dept of English, DU)",
                        "Dr. Indrakshi Dutta (Associate Prof, Mathematics, DU)",
                        "Mr. Sourav Saha (Former Teaching Faculty of Ashoka University , Social Anthropologist)",
                        "Mr. Sajal Sarkar (SRF, CSIR-IGIB)",
                      ],
                    },
                    {
                      id: "P3",
                      name: "Management & Corporate",
                      moderator:
                        "Mr. Surya Prakash Mahapatra (Global Competency Head, Wipro Technologies)",
                      speakers: [
                        "Mr. Jagannath Sanyal (KEDGE Business School)",
                        "Mr. Prashant Das (ESG & Sustainability Professional)",
                        "Mr. Shubhrangshu Sinha (MBA , IIM Kashipur)",
                        "Mr. Jishnu Jyoti Roy Chatterjee (JJR Industries Ltd.)",
                        "Mr. Soumendra Nath Mukherjee (American Express)",
                      ],
                    },
                    {
                      id: "P4",
                      name: "Fireside Chat: Roadmap 360°",
                      moderator: "Shri Prashant Das (The Convenor)",
                      speakers: [
                        "Mr. Kriti Sundar Sahoo (CA)",
                        "Mr. Karan Barman (PhD Scholar, IIT Delhi)",
                        "Dr. Sutapa Das (Senior Resident, VMMC & Safdarjung Hospital)",
                        "Mr. Gour Krishna Dey (MTech CSE, IIITDelhi)",
                        "Mr. Tanay Mullick (Geoinformatics Analyst, TERI)",
                      ],
                    },
                  ],
                  type: "session",
                },
                {
                  time: "03:50 PM – 04:00 PM",
                  title: "Valedictory Session",
                  subsections: [
                    { content: "Certificate Distribution and Vote of Thanks" },
                  ],
                  type: "normal",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-4 md:gap-10 group transition-all duration-300"
                >
                  {/* Time Block */}
                  <div className="md:w-[150px] shrink-0 md:text-right pt-1">
                    <span
                      className={`inline-block px-3 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase border
              ${
                item.type === "break"
                  ? "bg-gray-100 text-gray-400 border-gray-200"
                  : "bg-[var(--bg-main)] text-[var(--primary)] border-[var(--primary)]/20"
              }
            `}
                    >
                      {item.time}
                    </span>
                  </div>

                  {/* Details Card */}
                  <div
                    className={`flex-1 p-5 md:p-6 rounded-2xl border transition-all duration-300 relative
            ${
              item.type === "session"
                ? "bg-[var(--bg-main)] border-[var(--border-subtle)] shadow-sm border-l-4 border-l-[var(--primary)]"
                : item.type === "break"
                  ? "bg-transparent border-dashed border-gray-300 opacity-60"
                  : "bg-[var(--bg-main)] border-[var(--border-subtle)]"
            }
          `}
                  >
                    <h3
                      className={`text-base md:text-lg font-bold mb-4 ${item.type === "break" ? "text-[var(--text-muted)]" : "text-[var(--text-main)]"}`}
                    >
                      {item.title}
                    </h3>

                    {item.isPlenary ? (
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {item.sessions.map((plenary) => (
                          <div
                            key={plenary.id}
                            className="bg-[var(--bg-secondary)] p-4 rounded-xl border border-[var(--border-subtle)]"
                          >
                            <div className="flex items-center gap-2 mb-3">
                              <span className="bg-[var(--primary)] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                                {plenary.id}
                              </span>
                              <h4 className="font-bold text-sm text-[var(--text-main)]">
                                {plenary.name}
                              </h4>
                            </div>

                            <div className="mb-3 p-2 bg-[var(--primary)]/5 border-l-2 border-[var(--primary)] rounded-r-md">
                              <p className="text-[10px] uppercase font-bold text-[var(--primary)] mb-0.5">
                                Moderator
                              </p>
                              <p className="text-xs font-semibold text-[var(--text-main)] leading-tight">
                                {plenary.moderator}
                              </p>
                            </div>

                            <ul className="space-y-1.5">
                              {plenary.speakers.map((speaker, sIdx) => (
                                <li
                                  key={sIdx}
                                  className="text-[11px] text-[var(--text-muted)] flex items-start gap-2 leading-tight"
                                >
                                  <span className="mt-1 w-1 h-1 rounded-full bg-[var(--primary)] shrink-0 opacity-40"></span>
                                  <span>{speaker}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        <div className="lg:col-span-2 text-center pt-2">
                          <p className="text-xs font-bold text-[var(--primary)] italic tracking-wide">
                            Interactive Q&A Sessions across all domains
                          </p>
                        </div>
                      </div>
                    ) : (
                      <ul className="space-y-2.5">
                        {item.subsections.map((sub, sIdx) => (
                          <li
                            key={sIdx}
                            className="text-xs md:text-[13px] text-[var(--text-muted)] flex items-start gap-3 leading-relaxed"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--primary)] shrink-0 opacity-40"></span>
                            <div>
                              {sub.label && (
                                <span className="font-bold text-[var(--text-main)] block mb-0.5">
                                  {sub.label}
                                </span>
                              )}
                              <span
                                className={
                                  sub.label ? "opacity-90" : "font-medium"
                                }
                              >
                                {sub.content}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Parallel Session Footer */}
            <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-transparent border border-[var(--primary)]/10">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="px-4 py-2 bg-[var(--primary)] text-white rounded-lg font-bold text-sm tracking-widest uppercase">
                  Parallel Session
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-base font-bold text-[var(--text-main)]">
                    One-to-One Career Counselling
                  </h4>
                  <p className="text-xs text-[var(--text-muted)]">
                    Tables 1-4 • 11:15 AM – 04:00 PM • Resume Review & Profile
                    Optimization
                  </p>
                </div>
                <div className="md:ml-auto flex gap-1.5">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-[var(--bg-main)] border border-[var(--primary)]/20 flex items-center justify-center text-[10px] font-bold text-[var(--primary)]"
                    >
                      T{i}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. KEY SPEAKERS & COUNSELLORS (Categorized) */}
        <section
          id="speakers"
          className="py-12 lg:py-20 px-4 bg-[var(--bg-tertiary)] border-y border-[var(--border-subtle)]"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 lg:mb-16">
              {/* Reduced Main Title: 2xl on mobile, 3xl on desktop */}
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[var(--text-main)] mb-3">
                Key Speakers & Counsellors
              </h2>
              <p className="text-[var(--text-muted)] text-xs md:text-sm lg:text-base max-w-2xl mx-auto">
                Eminent scientists, civil servants, academicians, industry
                leaders, and subject experts from India and abroad.
              </p>
            </div>

            <div className="space-y-12 lg:space-y-16">
              {speakerCategories.map((cat, idx) => (
                <div key={idx}>
                  {/* Category Title: Reduced for better mobile fit */}
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[var(--primary)] mb-5 border-l-4 border-[var(--primary)] pl-3 lg:pl-4">
                    {cat.title}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                    {cat.speakers.map((speaker, sIdx) => (
                      <div
                        key={sIdx}
                        className="bg-[var(--bg-main)] p-4 lg:p-6 rounded-xl border border-[var(--border-subtle)] hover:shadow-md transition-shadow flex items-start gap-3 lg:gap-4"
                      >
                        {/* Smaller bullet point for mobile */}
                        <div className="mt-1.5 min-w-[8px] h-[8px] lg:min-w-[10px] lg:h-[10px] rounded-full bg-[var(--primary)]"></div>

                        <div>
                          {/* Speaker Name: text-sm/base on mobile, text-lg/xl on desktop */}
                          <h4 className="font-bold text-[var(--text-main)] text-sm md:text-base lg:text-lg leading-tight mb-1 lg:mb-1.5">
                            {speaker.name}
                          </h4>

                          {/* Speaker Role: text-[11px] on mobile, text-sm on desktop */}
                          <p className="text-[11px] md:text-xs lg:text-sm font-semibold text-[var(--text-muted)] opacity-90 mb-1">
                            {speaker.role}
                          </p>

                          {/* Institution: text-[10px] on mobile, text-xs on desktop */}
                          <p className="text-[10px] md:text-[11px] lg:text-xs text-[var(--text-muted)] italic leading-tight">
                            {speaker.inst}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* ORGANISING COMMITTEE: CLEAN PROFESSIONAL DESIGN */}
            <div className="mt-24 mb-12">
              <div className="relative max-w-5xl mx-auto">
                {/* Header with subtle lines */}
                <div className="flex items-center justify-center gap-4 mb-12">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--primary)]/30"></div>
                  <h3 className="text-[18px] font-black uppercase tracking-[0.4em] text-[var(--primary)] whitespace-nowrap">
                    Organising Committee
                  </h3>
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-[var(--primary)]/30"></div>
                </div>

                {/* Roles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
                  {[
                    { role: "President", name: "Gopal Krushna Pattnayak" },
                    { role: "Chairperson", name: "Soumendranath Mukherjee" },
                    { role: "Secretary", name: "Prashant Das" },
                  ].map((person, i) => (
                    <div
                      key={i}
                      className={`px-8 py-4 text-center ${
                        i !== 2
                          ? "md:border-r border-[var(--border-subtle)]"
                          : ""
                      }`}
                    >
                      <p className="text-[9px] font-bold text-[var(--text-muted)] uppercase tracking-widest mb-2 opacity-70">
                        {person.role}
                      </p>
                      <h4 className="text-lg md:text-xl font-bold text-[var(--text-main)] tracking-tight">
                        {person.name}
                      </h4>
                    </div>
                  ))}
                </div>

                {/* Bottom Accent */}
                <div className="mt-12 flex justify-center">
                  <div className="w-24 h-1 bg-[var(--primary)]/10 rounded-full overflow-hidden">
                    <div className="w-1/2 h-full bg-[var(--primary)] opacity-40"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. BOTTOM CTA */}
        <section className="py-12 lg:py-20 bg-[var(--primary)] text-white text-center px-6">
          <div className="max-w-4xl mx-auto">
            {/* Reduced Title: text-xl on mobile, text-4xl on desktop */}
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 leading-tight">
              Empowering students to shape meaningful careers.
            </h2>

            {/* Reduced Description: text-xs on mobile, text-base on desktop */}
            <p className="text-xs md:text-base lg:text-lg text-white/90 mb-8 max-w-xl mx-auto leading-relaxed">
              Registration is now open. Seats are limited and will be filled on
              a first-come, first-served basis. Secure your spot today.
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeaRX9gnEe5JhTZdh4538XpxiB86_jdsGAi4_Rs_7uNOXpWrg/viewform?usp=header"
              target="_blank"
              className="inline-block bg-white text-[var(--primary)] 
              px-8 py-3 lg:px-10 lg:py-4
              text-base md:text-lg lg:text-xl 
              font-extrabold rounded-full hover:bg-[var(--bg-secondary)] hover:scale-105 transition-all shadow-xl active:scale-95"
            >
              Register for Conference
            </a>

            {/* Sub-text: text-[10px] on mobile, text-sm on desktop */}
            <p className="mt-6 text-[10px] md:text-sm lg:text-base font-medium opacity-90 tracking-wide uppercase">
              Free for Delhi University Students • Certificate Provided
            </p>
          </div>
        </section>
      </main>
      {/* --- CUSTOM FOOTER --- */}
      <footer className="bg-[var(--color-neutral-900)] text-white py-10 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Specific Education Quote - Preserving exact line breaks */}
          <div className="mb-8">
            <p className="text-[13px] md:text-sm lg:text-base font-medium text-[var(--color-brand-200)] italic leading-relaxed">
              "To bring out and materialise <br />
              a congruity <br />
              from among varieties <br />
              and unify them meaningfully <br />
              discovering their relation <br />
              to existence— <br />
              is the essence of education."
            </p>
            <span className="block mt-4 text-[10px] md:text-xs lg:text-sm text-[var(--color-neutral-400)] uppercase tracking-wider">
              — Sree Sree Thakur Anukulchandra, <br className="md:hidden" />
              ESSENCE OF EDUCATION, The Message-8
            </span>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center gap-6 md:gap-8 pt-4 border-t border-[var(--color-neutral-800)]">
            <a
              href="https://www.facebook.com/SatsangViharDelhi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-neutral-400)] hover:text-[#1877F2] transition-colors transform hover:scale-110 duration-300"
              aria-label="Facebook"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5 lg:w-7 lg:h-7"
              >
                <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.148 0-2.971.956-2.971 3.594v.376h5.36l-.729 3.667h-4.631v7.98h-4.843Z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@SatsangViharDelhi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-neutral-400)] hover:text-[#FF0000] transition-colors transform hover:scale-110 duration-300"
              aria-label="YouTube"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5 lg:w-7 lg:h-7"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href="https://wa.me/919811148043"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-neutral-400)] hover:text-[#25D366] transition-colors transform hover:scale-110 duration-300"
              aria-label="WhatsApp"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5 lg:w-7 lg:h-7"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
            </a>
          </div>

          <p className="text-[10px] md:text-xs text-[var(--color-neutral-500)] mt-4 tracking-widest uppercase">
            © 2026 Satsang Vihar New Delhi • All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ConferenceDetailsPage;
