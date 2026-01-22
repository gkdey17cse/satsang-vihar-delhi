// src/pages/ConferenceDetailsPage.jsx
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
// Import logos
import logo_light from "../assets/Photos/logo_light.png";
import logo_dark from "../assets/Photos/logo_dark.png";

const ConferenceDetailsPage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const REGISTRATION_LINK = "#";

  // Data for Speakers grouped by category
  const speakerCategories = [
    {
      title: "UPSC, Civil Services & Defence",
      speakers: [
        {
          name: "Shantanu Singh, IAS",
          role: "Civil Services",
          inst: "Government of India",
        },
        {
          name: "Shantanu Singh, IFS",
          role: "Foreign Service",
          inst: "Government of India",
        },
        {
          name: "Saptaraj Das, IES",
          role: "Engineering Services",
          inst: "Government of India",
        },
        {
          name: "Lt. Raj Kumar Thakur",
          role: "UPSC CDS",
          inst: "Defence Services",
        },
        {
          name: "Sachidanand Choudhury",
          role: "SSC & Govt Exams",
          inst: "Specialist",
        },
        {
          name: "Ashish Sutar",
          role: "Armed Forces",
          inst: "NSG (National Security Guard)",
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
          name: "Subhrangsu Sinha",
          role: "MBA / Management",
          inst: "IIM Raipur",
        },
        { name: "Prasanta Das", role: "Manager", inst: "GAP" },
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
          name: "Dr. Aitree Choudhury",
          role: "Asst. Professor (Economics)",
          inst: "NIPFP, New Delhi",
        },
        { name: "Dr. Sourav Saha", role: "Faculty", inst: "Ashoka University" },
        { name: "Sajal Sarkar", role: "PhD Scholar", inst: "IGIB New Delhi" },
        { name: "Karan Barman", role: "PhD Scholar", inst: "IIT Delhi" },
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
          role: "Data Scientist",
          inst: "MTech AI Specialization, IIIT Delhi",
        },
        {
          name: "Sunetra Das",
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
          role: "Alumna",
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
        { name: "Sadhana Ghosh", role: "Dance", inst: "Hindu College" },
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-main)]">
      {/* --- CUSTOM NAVBAR --- */}
      <nav className="sticky top-0 z-50 w-full bg-[var(--bg-secondary)]/90 backdrop-blur-md border-b border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-4">
              <div className="relative h-10 w-10 lg:h-12 lg:w-12 ">
                <img
                  src={logo_light}
                  alt="Logo"
                  className="h-full rounded-full  w-full object-contain block dark:hidden"
                />
                <img
                  src={logo_dark}
                  alt="Logo"
                  className="h-full  rounded-full w-full object-contain hidden dark:block"
                />
              </div>
              <span
                className="font-bold tracking-tight text-[var(--primary)] 
                  text-base       /* Mobile */
                  sm:text-lg      /* Tablet */
                  lg:text-xl      /* Desktop */
                  xl:text-2xl     /* Large Monitor */
                "
              >
                Satsang Vihar Delhi
              </span>
            </Link>

            {/* 1. Official Website Redirects to Homepage */}
            <Link
              to="/"
              className="font-semibold text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors text-sm lg:text-base border border-[var(--border-subtle)] px-4 py-2 rounded-full hover:bg-[var(--bg-tertiary)]"
            >
              Official Website ↗
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {/* 1. HERO SECTION */}
        <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
              alt="University of Delhi"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[var(--bg-main)]"></div>
          </div>

          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-10">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[var(--primary)] bg-black/40 backdrop-blur-sm">
              <span className="text-[var(--primary)] font-bold text-xs md:text-sm uppercase tracking-widest">
                By Satsang Vihar, Delhi
              </span>
            </div>

            <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-4 leading-tight tracking-tight">
              Career Counselling{" "}
              <span className="text-[var(--primary)]">Session</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium mb-4">
              @ University of Delhi
            </p>
            <p className="text-xl md:text-2xl text-[var(--primary)] font-medium mb-8">
              20th February , 2026
            </p>

            <p className="text-base md:text-lg text-gray-200 mb-8 font-light max-w-3xl mx-auto">
              Guiding students toward informed, confident, and future-ready
              career choices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={REGISTRATION_LINK}
                className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-[var(--primary)]/50 transform hover:-translate-y-1"
              >
                Register Now (Free)
              </a>

              {/* 2. ScrollSpy Button */}
              <ScrollLink
                to="schedule"
                smooth={true}
                duration={800}
                className="cursor-pointer bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-full text-lg font-bold transition-all"
              >
                View Schedule ↓
              </ScrollLink>
            </div>
          </div>
        </section>

        {/* 2. GUESTS OF HONOUR */}
        <section className="py-20 px-4 bg-[var(--bg-main)]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[var(--text-main)] mb-4">
                Guests of Honour
              </h2>
              <div className="w-24 h-1 bg-[var(--primary)] mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. Jubilee Purkayastha",
                  role: "Joint Director, DRDO (INMAS)",
                  sub: "Ministry of Defence, Govt. of India",
                },
                {
                  name: "Dr. Pravakar Mohanty",
                  role: "Scientist ‘E’ & Joint Director (R&D)",
                  sub: "Ministry of Science & Tech, Govt. of India",
                },
                {
                  name: "Rabindra Kumar Jena, IES",
                  role: "Senior Economic Advisor",
                  sub: "Ministry of Information & Broadcasting",
                },
              ].map((guest, i) => (
                <div
                  key={i}
                  className="bg-[var(--bg-secondary)] p-8 rounded-2xl shadow-lg border border-[var(--border-subtle)] hover:-translate-y-2 transition-transform duration-300 text-center"
                >
                  <div className="w-20 h-20 bg-[var(--bg-tertiary)] rounded-full mx-auto mb-6 flex items-center justify-center text-[var(--primary)]">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-main)] mb-2">
                    {guest.name}
                  </h3>
                  <p className="text-[var(--primary)] font-medium text-sm mb-1">
                    {guest.role}
                  </p>
                  <p className="text-[var(--text-muted)] text-xs">
                    {guest.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. KEY SPEAKERS & COUNSELLORS (Categorized) */}
        <section className="py-20 px-4 bg-[var(--bg-secondary)] border-y border-[var(--border-subtle)]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[var(--text-main)] mb-4">
                Key Speakers & Counsellors
              </h2>
              <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
                Eminent scientists, civil servants, academicians, industry
                leaders, and subject experts from India and abroad.
              </p>
            </div>

            <div className="space-y-16">
              {speakerCategories.map((cat, idx) => (
                <div key={idx}>
                  <h3 className="text-xl md:text-2xl font-bold text-[var(--primary)] mb-6 border-l-4 border-[var(--primary)] pl-4">
                    {cat.title}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cat.speakers.map((speaker, sIdx) => (
                      <div
                        key={sIdx}
                        className="bg-[var(--bg-main)] p-5 rounded-xl border border-[var(--border-subtle)] hover:shadow-md transition-shadow flex items-start gap-4"
                      >
                        <div className="mt-1 min-w-[10px] h-[10px] rounded-full bg-[var(--primary)]"></div>
                        <div>
                          <h4 className="font-bold text-[var(--text-main)] text-lg leading-tight mb-1">
                            {speaker.name}
                          </h4>
                          <p className="text-sm font-semibold text-[var(--text-muted)] opacity-80 mb-1">
                            {speaker.role}
                          </p>
                          <p className="text-xs text-[var(--text-muted)] italic">
                            {speaker.inst}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. OBJECTIVES & PERKS */}
        <section className="py-20 px-4 bg-[var(--bg-main)]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Objectives */}
            <div className="bg-[var(--bg-secondary)] p-8 rounded-2xl border border-[var(--border-subtle)]">
              <h3 className="text-2xl font-bold text-[var(--text-main)] mb-6">
                Objectives of the Session
              </h3>
              <ul className="space-y-4">
                {[
                  "To provide structured career counselling across diverse domains",
                  "To enable one-to-one personal interaction with experts",
                  "To support mental well-being, stress management, and academic confidence",
                  "To help students overcome procrastination and improve focus",
                  "To share effective study techniques and career strategies",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[var(--primary)] font-bold text-lg">
                      •
                    </span>
                    <span className="text-[var(--text-muted)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Perks */}
            <div className="bg-[var(--primary)] text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Perks of Attending
              </h3>
              <ul className="space-y-4">
                {[
                  "Certificate of Participation",
                  "Direct interaction with IAS officers, scientists, & leaders",
                  "Expert-led masterclasses on AI & Emerging Careers",
                  "CV vetting and career profiling",
                  "LinkedIn professional branding guidance",
                  "Free entry for Delhi University students",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="bg-white/20 p-1 rounded-full text-xs">
                      ✓
                    </span>
                    <span className="text-white/90 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 5. SCHEDULE (Target for ScrollSpy) */}
        <section
          id="schedule"
          className="py-20 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)]"
        >
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[var(--text-main)] mb-4">
                Programme Schedule
              </h2>
              <p className="text-[var(--text-muted)]">
                A packed day of learning, interaction, and growth.
              </p>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute left-[180px] top-4 bottom-4 w-[2px] bg-[var(--border-subtle)]"></div>

              <div className="space-y-0">
                {[
                  {
                    time: "09:30 - 10:00",
                    title: "Registration & Welcome",
                    desc: "Kit distribution and seating arrangements.",
                    type: "normal",
                  },
                  {
                    time: "10:00 - 11:30",
                    title: "Session I: Government Services",
                    desc: "UPSC, SSC, Defence Services. Exam patterns and strategy.",
                    type: "session",
                  },
                  {
                    time: "11:30 - 11:45",
                    title: "Tea Break",
                    desc: "Networking & Refreshments.",
                    type: "break",
                  },
                  {
                    time: "11:45 - 13:00",
                    title: "Session II: Commerce & Management",
                    desc: "MBA (CAT/XAT), Finance, Marketing, HR, and Specialisations.",
                    type: "session",
                  },
                  {
                    time: "13:00 - 13:45",
                    title: "Lunch Break",
                    desc: "Lunch will be provided for all registered participants.",
                    type: "break",
                  },
                  {
                    time: "13:45 - 15:00",
                    title: "Session III: Corporate & Employability",
                    desc: "Internships, Resume Building, Interview Techniques, LinkedIn Branding.",
                    type: "session",
                  },
                  {
                    time: "15:00 - 16:00",
                    title: "Session IV: Higher Education & Abroad",
                    desc: "Study Abroad, Scholarships, GRE/GMAT/IELTS guidance.",
                    type: "session",
                  },
                  {
                    time: "16:00 - 16:30",
                    title: "Open House & Q&A",
                    desc: "One-on-one interaction with experts and closing remarks.",
                    type: "normal",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-[180px_auto] gap-6 group relative pb-10 last:pb-0"
                  >
                    <div className="md:text-right">
                      <span className="inline-block md:block text-sm font-bold text-[var(--primary)] bg-[var(--bg-tertiary)] md:bg-transparent px-3 py-1 md:p-0 rounded-full md:rounded-none">
                        {item.time}
                      </span>
                    </div>
                    <div className="relative pl-8 md:pl-10">
                      <div
                        className={`
                        absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 z-10
                        ${item.type === "break" ? "bg-[var(--bg-secondary)] border-[var(--text-muted)]" : "bg-[var(--primary)] border-[var(--primary)]"}
                        md:-left-[9px]
                      `}
                      ></div>
                      <div
                        className={`
                        p-6 rounded-xl border transition-all duration-300
                        ${
                          item.type === "session"
                            ? "bg-[var(--bg-main)] border-[var(--border-subtle)] shadow-sm hover:shadow-md border-l-4 border-l-[var(--primary)]"
                            : item.type === "break"
                              ? "bg-[var(--bg-tertiary)] border-transparent border-dashed border-[var(--border-subtle)] opacity-80"
                              : "bg-[var(--bg-secondary)] border-[var(--border-subtle)]"
                        }
                      `}
                      >
                        <h3 className="text-xl font-bold text-[var(--text-main)] mb-1">
                          {item.title}
                        </h3>
                        <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. BOTTOM CTA */}
        <section className="py-24 bg-[var(--primary)] text-white text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Empowering students to shape meaningful careers.
            </h2>
            <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
              Registration opens 2 days prior to the event. Secure your spot
              early.
            </p>
            <a
              href={REGISTRATION_LINK}
              className="inline-block bg-white text-[var(--primary)] px-10 py-5 rounded-full text-xl font-bold hover:bg-[var(--bg-secondary)] hover:scale-105 transition-all shadow-xl"
            >
              Register for Conference
            </a>
            <p className="mt-6 text-sm opacity-80">
              Free for Delhi University Students • Certificate Provided
            </p>
          </div>
        </section>
      </main>

      {/* --- CUSTOM FOOTER FOR EDUCATION PAGE --- */}
      <footer className="bg-[var(--color-neutral-900)] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Specific Education Quote */}
          <div className="mb-8">
            <p className="text-lg font-medium text-[var(--color-brand-200)] italic leading-relaxed whitespace-pre-line">
              "To bring out and materialise <br />
              a congruity <br />
              from among varieties <br />
              and unify them meaningfully <br />
              discovering their relation <br />
              to existence— <br />
              is the essence of education."
            </p>
            <span className="block mt-4 text-xs text-[var(--color-neutral-400)]">
              — Sree Sree Thakur Anukulchandra, ESSENCE OF EDUCATION, The
              Message-8
            </span>
          </div>

          {/* Social Media Links (Reused from global footer) */}
          <div className="flex justify-center gap-8 mt-8 border-t border-[var(--color-neutral-800)] pt-8">
            <a
              href="https://www.facebook.com/SatsangViharDelhi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-neutral-400)] hover:text-[#1877F2] transition-colors transform hover:scale-110 duration-300"
              aria-label="Facebook"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
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
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
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
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
            </a>
          </div>

          <p className="text-xs text-[var(--color-neutral-500)] mt-8">
            © 2026 Satsang Vihar New Delhi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ConferenceDetailsPage;
