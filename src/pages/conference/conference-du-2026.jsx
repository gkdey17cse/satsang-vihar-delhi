// src/pages/ConferenceDetailsPage.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import {
  ShieldCheck,
  Briefcase,
  Zap,
  Shield,
  GraduationCap,
  Compass,
  UserCheck,
  Clock,
  Building,
  Microscope,
  Award,
  FileText,
  Lightbulb,
  Download,
} from "lucide-react";

// Swiper for the Gallery Carousel
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Import logos (Ensure these paths match your project structure)
import logo_light from "../../assets/Photos/logo_light.png";
import logo_dark from "../../assets/Photos/logo_dark.png";
import ias_ishitaroy from "../../assets/Photos/conference-du-2026/IAS_IshitaRoy.jpg";
import guest_jubilee from "../../assets/Photos/conference-du-2026/Guest_JubileePurakayastha.jpg";
import guest_debo from "../../assets/Photos/conference-du-2026/Guest_DebojyotiChakraborty.jpg";
import guest_deepak from "../../assets/Photos/conference-du-2026/Guest_DeepakBhardwaj.jpg";
import guest_pravakar from "../../assets/Photos/conference-du-2026/Guest_ProvakarMohanty.png";
import guest_surya from "../../assets/Photos/conference-du-2026/Guest_Surya.jpg";
import guest_sutanu from "../../assets/Photos/conference-du-2026/Guest_SutaniChakraborti.jpg";
import guest_rabindra from "../../assets/Photos/conference-du-2026/Guest_RabindraKumarJena.png";

const ConferenceDetailsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAllGallery, setShowAllGallery] = useState(false);

  // --- GALLERY IMAGES ---
  const galleryImages = [
    "v1772042292/1_bly4np.jpg", //1
    "v1772042290/2_mnil5s.jpg",
    "v1772042291/3_tfuqqn.jpg",
    "v1772042289/4_tsbzcs.jpg",
    "v1772042289/5_ik0hic.jpg", // 5
    "v1772042291/6_nov3ys.jpg",
    "v1772042295/7_nd4pmn.jpg",
    "v1772042291/8_ksjauu.jpg",
    "v1772042292/9_debonw.jpg",
    "v1772042294/9_2_itn1ip.jpg", // 10
    // Caraousel
    "v1772042295/15_nrkwte.jpg",
    "v1772042297/11_se5pxw.jpg",
    "v1772042293/12_tgemxx.jpg",
    "v1772042294/13_iboioz.jpg",
    "v1772042297/18_j6e2ta.jpg",
    // End of Caraousel
    "v1772042295/14_hh5tl1.jpg",
    "v1772042293/10_nyjr7b.jpg",
    "v1772042295/16_wmnm5v.jpg",
    "v1772042296/19_tpjucf.jpg",
    "v1772042297/20_d1tmp4.jpg",
    "v1772042319/21_ttdeht.jpg",
    "v1772042298/22_bj1iq4.jpg",
    "v1772042299/23_rkjeri.jpg",
    "v1772042301/25_1_mx2joj.jpg",
    "v1772042301/25_feil1v.jpg",
    "v1772042302/26_kahz06.jpg",
    "v1772042304/27_tmkkzn.jpg",
    "v1772042304/28_pqvigt.jpg",
    "v1772042306/29_yfzhpp.jpg",
    "v1772042307/30_u3hzbh.jpg",
  ].map(
    (id) =>
      // f_auto: best format (WebP/AVIF)
      // q_auto: best compression balance
      // w_1000: caps the resolution to 1000px width (fast but sharp)
      `https://res.cloudinary.com/dk3sj0t4u/image/upload/f_auto,q_auto,w_1000/${id}`,
  );

  // Top 5 images for the featured carousel
  const top5Images = galleryImages.slice(10, 15);

  // Chunk remaining images into groups of 6 for the asymmetric grid
  const chunkedGallery = [];
  for (let i = 0; i < galleryImages.length; i += 6) {
    chunkedGallery.push(galleryImages.slice(i, i + 6));
  }

  // --- 1. GUESTS OF HONOUR ---
  const guestsOfHonour = [
    {
      name: "Dr. Jubilee Purkayastha",
      role: "Scientist 'F' & Joint Director, INMAS (DRDO)",
      sub: "Ministry of Defence, Government of India",
      image: guest_jubilee,
    },
    {
      name: "Dr. Pravakar Mohanty",
      role: "Scientist ‘E’ and Joint Director (R&D)",
      sub: "Ministry of Science & Tech, Govt. of India",
      image: guest_pravakar,
    },
    {
      name: "Surya Prakash Mohapatra",
      role: "Global Talent Skilling Head , AI (WIPRO)",
      sub: "Wipro Technologies",
      image: guest_surya,
    },
    {
      name: "Dr. Sutanu Chakraborti",
      role: "Professor, Dept. of Computer Science & Engineering",
      sub: "IIT Madras",
      image: guest_sutanu,
    },
    {
      name: "Dr. Deepak Bhardwaj",
      role: "Associate Professor , Dept. of Botany",
      sub: "University of Delhi",
      image: guest_deepak,
    },
  ];

  // --- 2. PARALLEL SESSIONS (TABLES) ---
  const tableData = [
    {
      id: 1,
      title: "Civil, Staff & Defence",
      sub: "UPSC • STATE PCS • SSC • CDS",
      icon: Shield,
      experts: [
        {
          name: "Lt. Raj Kumar Thakur",
          desc: "Officer, Combined Defence Services (CDS), Ministry of Defence",
        },
        {
          name: "Mr. Saptaraj Das, IES",
          desc: "Officer, Indian Engineering Services (IES), Govt. of India",
        },
        {
          name: "Mr. Ashish Sutar",
          desc: "Officer, CRPF, Ministry of Home Affairs",
        },
        {
          name: "Dr. Pravakar Mohanty",
          desc: "Scientist ‘E’ & Joint Director (R&D), Dept. of Science & Technology",
        },
      ],
    },
    {
      id: 2,
      title: "Management & Corporate",
      sub: "MBA • Corporate Careers • ESG • HR",
      icon: Briefcase,
      experts: [
        {
          name: "Mr. Surya Prakash Mahapatra",
          desc: "Global Head – Talent Transformation, Wipro Ltd.",
        },
        {
          name: "Prof. Jagannath Sanyal",
          desc: "Faculty Member, KEDGE Business School, France",
        },
        { name: "Mr. Prashant Das", desc: "ESG & Sustainability Professional" },
        { name: "Mr. Raj Dutta", desc: "Talent Partner, Wipro Ltd." },
        {
          name: "Mr. Soumendra Nath Mukherjee",
          desc: "Compliance Analyst, American Express",
        },
      ],
    },
    {
      id: 3,
      title: "Higher Education & Research",
      sub: "MPhil • PhD • UGC-NET • Fellowships",
      icon: GraduationCap,
      experts: [
        {
          name: "Dr. Sutanu Chakraborty",
          desc: "Professor, Dept. of CSE, IIT Madras",
        },
        {
          name: "Dr. Ujjwal Jana",
          desc: "Professor, Dept. of English, University of Delhi",
        },
        {
          name: "Dr. Indrakshi Dutta",
          desc: "Associate Professor, Dept. of Maths, Jesus & Mary College, DU",
        },
        {
          name: "Dr. Atreyee Choudhury",
          desc: "Assistant Professor, NIPFP, New Delhi",
        },
        {
          name: "Mr. Sajal Sarkar",
          desc: "PhD Research Fellow, CSIR–IGIB, New Delhi",
        },
      ],
    },
    {
      id: 4,
      title: "Career Roadmap 360°",
      sub: "Holistic Mentorship • Strategy",
      icon: Compass,
      experts: [
        {
          name: "Dr. Dhiraj Sarkar",
          desc: "Assistant Professor, Deshbandhu College, University of Delhi",
        },
        {
          name: "Mr. Sandeep Kanyal",
          desc: "Assistant Professor, ARSD College, University of Delhi",
        },
        { name: "Mr. Kriti Sundar Sahoo", desc: "Chartered Accountant" },
        {
          name: "Mr. Arnab K. Chakraborty",
          desc: "Programme Officer, UN Global Compact Network India",
        },
        { name: "Mr. Karan Barman", desc: "PhD Scholar, IIT Delhi" },
      ],
    },
  ];
  // Speakers
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
  // --- 3. COMMITTEES ---
  const advisoryCommittee = [
    {
      name: "Prof. Ujjwal Jana",
      role: "Professor, Department of English",
      inst: "University of Delhi",
    },
    {
      name: "Dr. Dhiraj Sarkar",
      role: "Assistant Professor, Deshbandhu College",
      inst: "University of Delhi",
    },
    {
      name: "Dr. Indrakshi Dutta",
      role: "Associate Professor, Jesus & Mary College",
      inst: "University of Delhi",
    },
    {
      name: "Mr. Sandeep Kanyal",
      role: "Assistant Professor, ARSD",
      inst: "University of Delhi",
    },
  ];

  const leadership = [
    {
      name: "G.K. Patnaik ",
      role: "President",
      designation: "Chartered Accountant",
      icon: ShieldCheck,
      desc: "Providing financial stewardship and strategic oversight.",
    },
    {
      name: "Mr. S.K. Mukherjee",
      role: "Working President",
      designation: "Compliance Professional, American Express",
      icon: Briefcase,
      desc: "Driving operational excellence and organizational compliance.",
    },
    {
      name: "Mr. Prashant Das",
      role: "Organising Secretary",
      designation: "ESG & Sustainability Professional",
      icon: Zap,
      desc: "Leading sustainability initiatives and coordinating conferences.",
    },
  ];

  const convenorsAndMembers = [
    {
      name: "Mr. Aditya Das",
      role: "Joint Convenor",
      designation: "AGM, Powergrid Corporation of India",
      icon: Building,
    },
    {
      name: "Mr. Jayanta Bandopadhyay",
      role: "Joint Convenor",
      designation: "General Manager, GAIL (India) Pvt. Ltd.",
      icon: Building,
    },
    {
      name: "Mr. Gaurav Saha",
      role: "Member",
      designation: "Scientist ‘B’, Ministry of Telecommunications",
      icon: Microscope,
    },
    {
      name: "Mr. Saswata Sinha",
      role: "Member",
      designation: "Advance Associate, Pearson; IIT Roorkee Alumni",
      icon: Award,
    },
    {
      name: "Mr. R.K. Sarkar",
      role: "Member",
      designation: "Finance Consultant",
      icon: FileText,
    },
  ];

  // Navigation Links
  const navLinks = [
    { name: "About", to: "hero" },
    { name: "Gallery", to: "gallery" }, // Added Gallery Link
    { name: "Objectives", to: "objectives" },
    { name: "Guests", to: "guests" },
    { name: "Schedule", to: "schedule" },
    { name: "Speakers", to: "speakers" },
    { name: "Committee", to: "committee" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-main)] overflow-x-hidden">
      {/* --- CUSTOM NAVBAR --- */}
      <nav className="sticky top-0 z-50 w-full bg-[var(--bg-secondary)]/90 backdrop-blur-md border-b border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">
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

            <div className="hidden lg:flex items-center gap-6 xl:gap-1">
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
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeaRX9gnEe5JhTZdh4538XpxiB86_jdsGAi4_Rs_7uNOXpWrg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:block shrink-0 font-bold hover:text-[var(--text-muted)] text-[var(--primary)] transition-colors text-xs md:text-sm border border-[var(--border-subtle)] px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-[var(--bg-tertiary)]"
              >
                Register Now ↗
              </a>
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
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full right-4 mt-2 w-52 rounded-2xl shadow-2xl border border-[var(--border-subtle)] bg-[var(--bg-main)] transform transition-all duration-300 ease-in-out z-50 lg:hidden ${isMenuOpen ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 -translate-y-4 pointer-events-none"}`}
        >
          <div className="flex flex-col p-4 space-y-3">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                smooth={true}
                offset={-70}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-semibold cursor-pointer text-[var(--text-main)] hover:text-[var(--primary)] transition-colors border-b border-[var(--border-subtle)]/50 pb-2"
              >
                {link.name}
              </ScrollLink>
            ))}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeaRX9gnEe5JhTZdh4538XpxiB86_jdsGAi4_Rs_7uNOXpWrg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-[var(--primary)] pt-1"
            >
              Register Now ↗
            </a>
          </div>
        </div>
        {isMenuOpen && (
          <div
            className="fixed inset-0 h-screen w-screen lg:hidden z-40 bg-black/5"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </nav>

      <main className="flex-grow">
        {/* --- HERO SECTION WITH BACKGROUND CAROUSEL --- */}
        <section
          id="hero"
          className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden"
        >
          {/* Background Carousel Layer */}
          <div className="absolute inset-0 z-0">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              speed={2000}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              className="w-full h-full"
            >
              {top5Images.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-full relative">
                    <img
                      src={src}
                      alt={`Background ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {/* Dark Overlay to ensure text readability */}
                    <div className="absolute inset-0 bg-black/40"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Additional Gradient for bottom blending */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-main)]"></div>
          </div>

          {/* Foreground Text Content */}
          <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[var(--primary)] bg-black/0 backdrop-blur-md shadow-lg">
              <span className="text-[var(--primary)] font-bold text-xs md:text-sm uppercase tracking-widest">
                Organised By Satsang Vihar, Delhi
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-2xl">
              ASPIRE <br className="hidden sm:block" />
              Career <span className="text-[var(--primary)]">Seminar 2026</span>
            </h1>

            <div className="flex flex-col items-center justify-center gap-4 text-white/95 mb-10 font-medium">
              <div className="flex items-center gap-3 text-sm md:text-lg lg:text-xl bg-white/10 px-6 py-2 rounded-full backdrop-blur-md border border-white/20">
                <span className="text-xl">📍</span>
                <span>
                  DRDO Residential Complex, (DROMI) Timarpur (Neatest Metro
                  Vishwavidyalaya Gate no 1)
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm md:text-lg lg:text-xl bg-[var(--primary)]/90 px-6 py-2 rounded-full shadow-lg">
                <span className="text-xl">📅</span>
                <span>20th February 2026 (Friday) • 09:30 AM</span>
              </div>
            </div>

            <p className="hidden md:block text-lg text-gray-200 mb-10 font-light max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Guiding students toward informed, confident, and future-ready
              career decisions through expert mentorship from IAS officers, DRDO
              scientists, and Global Industry Leaders.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-xs mx-auto sm:max-w-none">
              <ScrollLink
                to="gallery"
                smooth={true}
                duration={800}
                offset={-80}
                className="bg-[var(--primary)] cursor-pointer hover:bg-[var(--primary-hover)] text-white px-10 py-4 rounded-full text-base font-bold transition-all shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)] transform hover:-translate-y-1 text-center"
              >
                View Highlights
              </ScrollLink>
              <ScrollLink
                to="schedule"
                smooth={true}
                duration={800}
                offset={-50}
                className="cursor-pointer bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 px-10 py-4 rounded-full text-base font-bold transition-all text-center"
              >
                Full Schedule ↓
              </ScrollLink>
            </div>
          </div>
        </section>

        {/* --- GALLERY SECTION --- */}
        <section id="gallery" className="py-12 lg:py-20 bg-[var(--bg-main)]">
          <div className="max-w-7xl mx-auto px-5">
            {/* Gallery Header */}
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 md:gap-8 mb-12 md:mb-16">
              {/* Left Side: Title and Decorative Bar */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-2xl md:text-4xl font-extrabold text-[var(--text-main)] mb-4 tracking-tight">
                  Glimpses of{" "}
                  <span className="text-[var(--primary)]">ASPIRE</span>
                </h2>
                {/* Decorative Bar: Slightly thinner on mobile for elegance */}
                <div className="w-20 md:w-24 h-1.5 md:h-2 bg-[var(--primary)] rounded-full"></div>
              </div>

              {/* Right Side: Description */}
              <p className="w-full lg:w-1/2 leading-relaxed text-[var(--text-muted)] text-sm lg:text-base text-justify md:text-left lg:text-justify">
                Relive the memorable moments from our Comprehensive Career
                Counselling Seminar. Explore highlights of keynote sessions, 1:1
                mentorship circles, and interactive student engagements designed
                to shape the leaders of tomorrow.
              </p>
            </div>

            {/* Asymmetric Grid */}
            <div className="flex flex-col gap-4 md:gap-6">
              {/* Only show the first chunk (6 images) unless showAllGallery is true */}
              {chunkedGallery
                .slice(0, showAllGallery ? chunkedGallery.length : 1)
                .map((chunk, chunkIdx) => (
                  <div key={chunkIdx} className="flex flex-wrap md:-m-2 -m-1">
                    {/* Left Half */}
                    <div className="flex flex-wrap w-1/2">
                      {chunk[0] && (
                        <div className="md:p-2 p-1 w-1/2 relative group overflow-hidden">
                          <img
                            alt="gallery"
                            className="w-full h-48 md:h-64 object-cover block rounded-xl md:rounded-2xl transition-transform duration-500 group-hover:scale-110"
                            src={chunk[0]}
                          />
                          <a
                            href={chunk[0]}
                            download
                            className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                          >
                            <div className="bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-[var(--primary)] text-white">
                              <Download size={24} />
                            </div>
                          </a>
                        </div>
                      )}
                      {chunk[1] && (
                        <div className="md:p-2 p-1 w-1/2 relative group overflow-hidden">
                          <img
                            alt="gallery"
                            className="w-full h-48 md:h-64 object-cover block rounded-xl md:rounded-2xl transition-transform duration-500 group-hover:scale-110"
                            src={chunk[1]}
                          />
                          <a
                            href={chunk[1]}
                            download
                            className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                          >
                            <div className="bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-[var(--primary)] text-white">
                              <Download size={24} />
                            </div>
                          </a>
                        </div>
                      )}
                      {chunk[2] && (
                        <div className="md:p-2 p-1 w-full relative group overflow-hidden">
                          <img
                            alt="gallery"
                            className="w-full h-64 md:h-96 object-cover block rounded-xl md:rounded-2xl transition-transform duration-500 group-hover:scale-110"
                            src={chunk[2]}
                          />
                          <a
                            href={chunk[2]}
                            download
                            className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                          >
                            <div className="bg-white/20 backdrop-blur-md p-4 rounded-full hover:bg-[var(--primary)] text-white">
                              <Download size={28} />
                            </div>
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Right Half */}
                    <div className="flex flex-wrap w-1/2">
                      {chunk[3] && (
                        <div className="md:p-2 p-1 w-full relative group overflow-hidden">
                          <img
                            alt="gallery"
                            className="w-full h-64 md:h-96 object-cover block rounded-xl md:rounded-2xl transition-transform duration-500 group-hover:scale-110"
                            src={chunk[3]}
                          />
                          <a
                            href={chunk[3]}
                            download
                            className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                          >
                            <div className="bg-white/20 backdrop-blur-md p-4 rounded-full hover:bg-[var(--primary)] text-white">
                              <Download size={28} />
                            </div>
                          </a>
                        </div>
                      )}
                      {chunk[4] && (
                        <div className="md:p-2 p-1 w-1/2 relative group overflow-hidden">
                          <img
                            alt="gallery"
                            className="w-full h-48 md:h-64 object-cover block rounded-xl md:rounded-2xl transition-transform duration-500 group-hover:scale-110"
                            src={chunk[4]}
                          />
                          <a
                            href={chunk[4]}
                            download
                            className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                          >
                            <div className="bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-[var(--primary)] text-white">
                              <Download size={24} />
                            </div>
                          </a>
                        </div>
                      )}
                      {chunk[5] && (
                        <div className="md:p-2 p-1 w-1/2 relative group overflow-hidden">
                          <img
                            alt="gallery"
                            className="w-full h-48 md:h-64 object-cover block rounded-xl md:rounded-2xl transition-transform duration-500 group-hover:scale-110"
                            src={chunk[5]}
                          />
                          <a
                            href={chunk[5]}
                            download
                            className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                          >
                            <div className="bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-[var(--primary)] text-white">
                              <Download size={24} />
                            </div>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
            </div>

            {/* See More / Show Less Button */}
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowAllGallery(!showAllGallery)}
                className="group relative inline-flex items-center justify-center px-10 py-3 font-bold text-white transition-all duration-300 bg-[var(--primary)] rounded-full hover:bg-[var(--primary-hover)] shadow-xl hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)] active:scale-95"
              >
                <span className="mr-2">
                  {showAllGallery ? "Show Less" : "See All Moments"}
                </span>
                <div
                  className={`transition-transform duration-300 ${showAllGallery ? "rotate-180" : "group-hover:translate-y-1"}`}
                >
                  ↓
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* --- OBJECTIVES & PERKS --- */}
        <section
          id="objectives"
          className="py-16 px-4 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)]"
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12">
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

        {/* --- GUESTS OF HONOUR --- */}
        <section
          id="guests"
          className="py-12 lg:py-20 px-4 bg-[var(--bg-tertiary)] border-y border-[var(--border-subtle)]"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[var(--text-main)] mb-3">
                Keynote Speaker
              </h2>
              <div className="w-20 h-1.5 bg-[var(--primary)] mx-auto rounded-full"></div>
            </div>

            <div className="flex justify-center px-4">
              <div className="group w-full max-w-6xl bg-[var(--bg-secondary)] rounded-3xl shadow-xl border border-[var(--border-subtle)] flex flex-col md:flex-row overflow-hidden hover:shadow-2xl transition-all duration-500">
                {/* Left: Speaker Image (Fixed Width on Desktop) */}
                <div className="w-full md:w-1/3 lg:w-1/4 h-72 md:h-auto relative overflow-hidden">
                  <img
                    src={ias_ishitaroy}
                    alt="Ms. Ishita Roy"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
                </div>

                {/* Right: Info & Video side-by-side */}
                <div className="w-full md:w-2/3 lg:w-3/4 p-6 lg:p-10 flex flex-col justify-center">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Description Section */}
                    <div className="text-center md:text-left">
                      <span className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-widest uppercase bg-[var(--primary)]/10 text-[var(--primary)] rounded-md border border-[var(--primary)]/20">
                        Guest of Honor
                      </span>
                      <h3 className="text-3xl lg:text-4xl font-black text-[var(--text-main)] mb-2 leading-tight">
                        Ms. Ishita Roy
                      </h3>
                      <div className="w-12 h-1 bg-[var(--primary)] mb-6 mx-auto md:mx-0"></div>

                      <div className="space-y-2">
                        <p className="text-lg font-bold text-[var(--text-main)] leading-snug">
                          Director, Kerala State Civil Services Academy
                        </p>
                        <p className="text-base text-[var(--text-muted)] font-medium">
                          Government of Kerala
                        </p>
                      </div>

                      <p className="mt-6 text-sm text-[var(--text-muted)] leading-relaxed italic border-l-2 border-[var(--border-subtle)] pl-4 hidden lg:block">
                        Leading the transformation of civil service coaching and
                        public administration excellence.
                      </p>
                    </div>

                    {/* Video Section (Landscape/Compact ratio) */}
                    <div className="relative">
                      <div className="relative z-10 w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/5 bg-black">
                        <iframe
                          src="https://www.youtube.com/embed/Kh8FSySdm8g?autoplay=1&mute=1"
                          title="Ms. Ishita Roy – Introduction"
                          className="w-full h-full"
                          allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                      {/* Decorative background element */}
                      <div className="absolute -inset-2 bg-[var(--primary)]/5 blur-2xl rounded-full -z-0"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Guests Grid */}
            <div className="mt-16 mb-10">
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
                        <UserCheck
                          size={40}
                          className="text-[var(--primary)]"
                        />
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

        {/* --- PROGRAMME SCHEDULE --- */}
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
              <p className="text-[var(--primary)] text-sm md:text-lg font-medium">
                Officer Transit Facility Hall, DRDO Residential Complex, (DROMI)
                Timarpur • 20th February 2026
              </p>
            </div>

            <div className="relative space-y-6">
              <div className="hidden md:block absolute left-[160px] top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-[var(--border-subtle)] to-transparent"></div>

              {[
                {
                  time: "09:00 AM – 10:00 AM",
                  title: "Registration & Student Orientation",
                  subsections: [
                    {
                      content:
                        "Kit distribution, welcome of students and seminar overview.",
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
                        "Diya Prajjwalan & Theme song dedicated to young students",
                    },
                    {
                      label: "Welcome Address:",
                      content:
                        "Dr. Indrakashi Dutta (Advisor of OC, Asso. Prof, Jesus & Mary College, DU)",
                    },
                    {
                      label: "Theme Address:",
                      content:
                        "Dr. Dhiraj Sarkar (Asst. Prof, Deshbandhu College, DU)",
                    },
                    {
                      label: "Guest of Honours Speech:",
                      content:
                        "Mr. Surya Prakash Mahapatra (Global Head-Talent Transformation, WIPRO) , Dr. Sutanu Chakraborty (Prof, Dept of Computer Sci. & Eng, IIT Madras), Ms. Ishita Roy (Director: Kerala State Civil Services Academy), Dr. Jubilee Purkayastha (Scientist F & Joint Director, INMAS DRDO), Dr. Deepak Bhardwaj (Associate Prof. Dept of Botany, DU)",
                    },
                    { content: "Address by Chief Guest" },
                    {
                      label: "Vote of Thanks:",
                      content:
                        "Dr. Pravakar Mohanty (Scientist ‘E’ & Joint Director, DST)",
                    },
                  ],
                  type: "session",
                },
                {
                  time: "11:00 AM – 11:15 AM",
                  title: "TEA BREAK",
                  subsections: [{ content: "Networking & Refreshments" }],
                  type: "break",
                },
                {
                  time: "11:15 AM – 01:00 PM",
                  title: "Career Counselling Sessions (Motivators Speech)",
                  subsections: [
                    {
                      label: "Dr. Sutanu Chakraborty",
                      content:
                        "Topic: 'Career Confusion and Clarity: Ideal-Centric Life Leads to Excellence'",
                    },
                    {
                      label: "Ms. Ishita Roy",
                      content:
                        "Topic: 'From Ideals to IAS: Approaching the UPSC Journey through Self-Discipline, Cooperation, Consistency & Resilience'",
                    },
                    {
                      label: "Mr. Surya Prakash Mahapatra",
                      content: "Topic: 'Career Pathways and Strategic Choices'",
                    },
                    {
                      content:
                        "Interactive Q&A Session (Moderated discussion with all speakers)",
                    },
                  ],
                  type: "session",
                },
                {
                  time: "01:00 PM – 02:00 PM",
                  title: "LUNCH BREAK",
                  subsections: [{ content: "" }],
                  type: "break",
                },
                {
                  time: "02:00 PM – 02:20 PM",
                  title: "Rhythm & Resonance",
                  subsections: [
                    {
                      content:
                        "'Celebrating Harmony in Life, Purpose and Career Path: A Musical Reflection' by Sandeep Mohanty",
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
                      theme:
                        "From Aspirant to Officer: Strategy, Resilience & Ethical Leadership in Public Service",
                      moderator: {
                        name: "Ms. Ishita Roy",
                        qual: "Director: Kerala State Civil Services Academy",
                      },
                      speakers: [
                        {
                          name: "Dr. Pravakar Mohanty",
                          qual: "Scientist E & Joint Director (R&D), DST, Govt. of India",
                        },
                        {
                          name: "Lt. Raj Kumar Thakur",
                          qual: "Officer, Combined Defence Services (CDS), Ministry of Defence",
                        },
                        {
                          name: "Mr. Saptaraj Das, IES",
                          qual: "Indian Engineering Services Officer, Government of India",
                        },
                        {
                          name: "Mr. Ashish Sutar",
                          qual: "Officer, Central Reserve Police Force (CRPF), Ministry of Home Affairs",
                        },
                      ],
                    },
                    {
                      id: "P2",
                      name: "Higher Education, Academia & Research",
                      theme:
                        "Knowledge with Character: Research, Reflection & Responsibility",
                      moderator: {
                        name: "Dr. Sutanu Chakraborty",
                        qual: "Professor, Dept of Computer Science, IIT Madras",
                      },
                      speakers: [
                        {
                          name: "Dr. Atreyee Choudhury",
                          qual: "Assistant Professor, National Institute of Public Finance & Policy (NIPFP), New Delhi",
                        },
                        {
                          name: "Dr. Md. SK Azharuddin",
                          qual: "Economist, NIPFP, New Delhi",
                        },
                        {
                          name: "Dr. Ujjwal Jana",
                          qual: "Professor, Department of English, University of Delhi",
                        },
                        {
                          name: "Dr. Indrakshi Dutta",
                          qual: "Associate Professor, Department of Mathematics, Jesus & Mary College, University of Delhi",
                        },
                        {
                          name: "Mr. Sourav Saha",
                          qual: "Social Anthropologist | Former Faculty Ashoka University",
                        },
                        {
                          name: "Mr. Sajal Sarkar",
                          qual: "PhD Research Fellow, CSIR-IGIB, New Delhi",
                        },
                      ],
                    },
                    {
                      id: "P3",
                      name: "Management, Corporate & Business",
                      theme:
                        "Corporate Leadership with Conscience: Strategy, Sustainability & Long-Term Excellence",
                      moderator: {
                        name: "Mr. Surya Prakash Mahapatra",
                        qual: "Global Head for AI, Wipro Ltd.",
                      },
                      speakers: [
                        {
                          name: "Prof. Jagannath Sanyal",
                          qual: "Faculty, KEDGE Business School, France",
                        },
                        {
                          name: "Mr. Prashant Das",
                          qual: "ESG & Sustainability Professional",
                        },
                        {
                          name: "Mr. Subhranghu Sinha",
                          qual: "MBA, IIM Kashipur | Marketing Professional",
                        },
                        {
                          name: "Mr. Jishnu Jyoti Roy Chatterjee",
                          qual: "Founder & CEO, JJR Industries Ltd.",
                        },
                        {
                          name: "Mr. Soumendra Nath Mukherjee",
                          qual: "Compliance Analyst, American Express",
                        },
                        {
                          name: "Mr. Raj Dutta",
                          qual: "Talent Partner, Wipro Ltd.",
                        },
                      ],
                    },
                    {
                      id: "P4",
                      name: "Fire Side Chat: Career Roadmap 360°",
                      theme:
                        "From Classroom to Leadership: Skill, Character & Holistic Career Development",
                      moderator: {
                        name: "Dr. Dhiraj Sarkar",
                        qual: "Assistant Professor, Deshbandhu College, University of Delhi",
                      },
                      speakers: [
                        {
                          name: "Mr. Sandeep Kanyal",
                          qual: "Assistant Professor, ARSD College, University of Delhi",
                        },
                        {
                          name: "Mr. Kriti Sundar Sahoo",
                          qual: "Chartered Accountant",
                        },
                        {
                          name: "Mr. Karan Barman",
                          qual: "PhD Scholar, IIT Delhi",
                        },
                        {
                          name: "Dr. Sutapa Das",
                          qual: "Senior Resident Doctor, VMMC & Safdarjung Hospital",
                        },
                        {
                          name: "Mr. Arnab K. Chakraborty",
                          qual: "Programme Officer, UN Global Compact Network India (UN-GCNI)",
                        },
                        {
                          name: "Mr. Hadunga Narzary",
                          qual: "PhD Scholar, University of Delhi",
                        },
                        {
                          name: "Mr. Gour Krishna Dey",
                          qual: "M.Tech, Computer Science Engineering, IIIT Delhi",
                        },
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
                  <div className="md:w-[150px] shrink-0 md:text-right pt-1">
                    <span
                      className={`inline-block px-3 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase border ${item.type === "break" ? "bg-gray-100 text-gray-400 border-gray-200" : "bg-[var(--bg-main)] text-[var(--primary)] border-[var(--primary)]/20"}`}
                    >
                      {item.time}
                    </span>
                  </div>
                  <div
                    className={`flex-1 p-5 md:p-6 rounded-2xl border transition-all duration-300 relative ${item.type === "session" ? "bg-[var(--bg-main)] border-[var(--border-subtle)] shadow-sm border-l-4 border-l-[var(--primary)]" : item.type === "break" ? "bg-transparent border-dashed border-gray-300 opacity-60" : "bg-[var(--bg-main)] border-[var(--border-subtle)]"}`}
                  >
                    <h3
                      className={`text-base md:text-lg font-bold mb-4 ${item.type === "break" ? "text-[var(--text-muted)]" : "text-[var(--text-main)]"}`}
                    >
                      {item.title}
                    </h3>
                    {item.isPlenary ? (
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {item.sessions.map((plenary) => (
                          <div
                            key={plenary.id}
                            className="bg-[var(--bg-secondary)] p-5 rounded-xl border border-[var(--border-subtle)] shadow-sm"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <span className="bg-[var(--primary)] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                                {plenary.id}
                              </span>
                              <h4 className="font-bold text-sm text-[var(--text-main)]">
                                {plenary.name}
                              </h4>
                            </div>
                            <p className="text-[11px] text-[var(--text-muted)] italic mb-4 font-medium leading-snug">
                              "{plenary.theme}"
                            </p>

                            <div className="mb-4 p-3 bg-[var(--primary)]/5 border-l-2 border-[var(--primary)] rounded-r-md">
                              <p className="text-[10px] uppercase font-bold text-[var(--primary)] mb-1 tracking-wider">
                                Moderator
                              </p>
                              <p className="text-[13px] font-bold text-[var(--text-main)] leading-tight">
                                {plenary.moderator.name}
                              </p>
                              <p className="text-[11px] font-medium text-[var(--text-muted)] mt-0.5 leading-snug">
                                {plenary.moderator.qual}
                              </p>
                            </div>

                            <ul className="space-y-3 mt-4">
                              {plenary.speakers.map((speaker, sIdx) => (
                                <li
                                  key={sIdx}
                                  className="flex items-start gap-2 leading-tight"
                                >
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--primary)] shrink-0 opacity-50"></span>
                                  <div className="flex flex-col">
                                    <span className="font-bold text-[12px] text-[var(--text-main)]">
                                      {speaker.name}
                                    </span>
                                    <span className="text-[11px] font-medium text-[var(--text-muted)] mt-0.5 leading-snug opacity-90">
                                      {speaker.qual}
                                    </span>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <ul className="space-y-2.5">
                        {item.subsections.map((sub, sIdx) => (
                          <li
                            key={sIdx}
                            className="text-xs md:text-[13px] text-[var(--text-muted)] flex items-start gap-3 leading-relaxed"
                          >
                            {sub.content && (
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--primary)] shrink-0 opacity-40"></span>
                            )}
                            <div>
                              {sub.label && (
                                <span className="font-bold text-[var(--text-main)] block mb-0.5">
                                  {sub.label}
                                </span>
                              )}
                              <span
                                className={
                                  sub.label
                                    ? "opacity-90 italic text-[11px] md:text-xs"
                                    : "font-medium"
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

            {/* Parallel Sessions Block (Inside Schedule) */}
            <div className="mt-20 pt-16 border-t border-[var(--border-subtle)]">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-[10px] font-bold uppercase tracking-widest mb-4">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span>
                    </span>
                    Parallel Session
                  </div>
                  <h2 className="text-2xl md:text-4xl font-bold text-[var(--text-main)]">
                    One-To-One Career Counselling
                  </h2>
                </div>
                <div className="flex items-center gap-3 bg-[var(--bg-main)] px-5 py-3 rounded-2xl border border-[var(--border-subtle)] shadow-sm">
                  <Clock size={20} className="text-[var(--primary)]" />
                  <div>
                    <p className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-tighter">
                      Available Timing
                    </p>
                    <p className="text-sm font-bold text-[var(--text-main)]">
                      11:15 AM — 04:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {tableData.map((table) => (
                  <div
                    key={table.id}
                    className="bg-[var(--bg-main)] rounded-3xl border border-[var(--border-subtle)] overflow-hidden flex flex-col hover:shadow-xl transition-all duration-500 group"
                  >
                    <div className="p-6 border-b border-[var(--border-subtle)] bg-gradient-to-r from-[var(--bg-secondary)] to-transparent flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 rounded-lg bg-[var(--primary)]/5 flex items-center justify-center text-[var(--primary)] font-bold text-xs border border-[var(--primary)]/10">
                            T{table.id}
                          </div>
                          <h3 className="text-xl font-bold text-[var(--text-main)] group-hover:text-[var(--primary)] transition-colors">
                            {table.title}
                          </h3>
                        </div>
                        <p className="text-[11px] font-bold text-[var(--primary)] uppercase tracking-wider ml-11">
                          {table.sub}
                        </p>
                      </div>
                      <table.icon
                        size={32}
                        className="opacity-10 group-hover:opacity-30 transition-opacity text-[var(--text-main)]"
                      />
                    </div>
                    <div className="p-6 space-y-5 flex-grow">
                      {table.experts.map((expert, idx) => (
                        <div key={idx} className="flex gap-4 group/item">
                          <div className="mt-1">
                            <div className="w-5 h-5 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-muted)] group-hover/item:border-[var(--primary)] group-hover/item:text-[var(--primary)] transition-all">
                              <UserCheck size={10} />
                            </div>
                          </div>
                          <div>
                            <h4 className="text-[15px] font-bold text-[var(--text-main)] leading-tight mb-1">
                              {expert.name}
                            </h4>
                            <p className="text-[12px] text-[var(--text-muted)] leading-relaxed font-medium">
                              {expert.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key speakers */}
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
          </div>
        </section>

        {/* --- COMMITTEES --- */}
        <section id="committee" className="py-24 px-4 bg-[var(--bg-main)]">
          <div className="max-w-6xl mx-auto">
            {/* 1. Advisory Committee */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 mb-4">
                  <span className="h-px w-10 bg-[var(--primary)]/30"></span>
                  <span className="text-[12px] font-black uppercase tracking-[0.4em] text-[var(--primary)]">
                    Guidance
                  </span>
                  <span className="h-px w-10 bg-[var(--primary)]/30"></span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--text-main)]">
                  Advisory Committee
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {advisoryCommittee.map((advisor, i) => (
                  <div
                    key={i}
                    className="p-6 text-center bg-[var(--bg-secondary)] rounded-2xl border border-[var(--border-subtle)] hover:shadow-md transition-all"
                  >
                    <div className="mx-auto w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-4 text-[var(--primary)]">
                      <Lightbulb size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-[var(--text-main)] mb-1">
                      {advisor.name}
                    </h3>
                    <p className="text-[11px] font-bold text-[var(--primary)] uppercase tracking-wide mb-2">
                      {advisor.role}
                    </p>
                    <p className="text-xs text-[var(--text-muted)] italic">
                      {advisor.inst}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Organizing Committee */}
            <div className="text-center mb-12 border-t border-[var(--border-subtle)] pt-20">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="h-px w-10 bg-[var(--primary)]/30"></span>
                <span className="text-[12px] font-black uppercase tracking-[0.4em] text-[var(--primary)]">
                  Leadership & Execution
                </span>
                <span className="h-px w-10 bg-[var(--primary)]/30"></span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--text-main)] mb-6">
                Organising Committee
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {leadership.map((person, i) => (
                <div
                  key={i}
                  className="group relative p-8 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] hover:border-[var(--primary)]/40 transition-all duration-300 shadow-sm"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <person.icon size={48} />
                  </div>
                  <p className="text-[10px] font-bold text-[var(--primary)] uppercase tracking-widest mb-3">
                    {person.role}
                  </p>
                  <h3 className="text-xl font-bold text-[var(--text-main)] mb-1">
                    {person.name}
                  </h3>
                  <p className="text-[13px] font-medium text-[var(--text-muted)] mb-4">
                    {person.designation}
                  </p>
                  <p className="text-[12px] leading-relaxed text-[var(--text-muted)] opacity-80">
                    {person.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-[var(--bg-secondary)]/40 rounded-3xl p-6 md:p-10 border border-[var(--border-subtle)]">
              <h4 className="text-center text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-[0.3em] mb-12">
                Convenors & Executive Members
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12">
                {convenorsAndMembers.map((member, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="mt-1 p-2 rounded-lg bg-[var(--bg-main)] border border-[var(--border-subtle)] text-[var(--text-muted)] group-hover:text-[var(--primary)] transition-colors">
                      <member.icon size={16} />
                    </div>
                    <div>
                      <h5 className="text-[16px] font-bold text-[var(--text-main)] leading-tight">
                        {member.name}
                      </h5>
                      <p className="text-[10px] font-bold text-[var(--primary)] uppercase mt-1 tracking-wide">
                        {member.role}
                      </p>
                      <p className="text-[12px] text-[var(--text-muted)] mt-1.5 leading-snug font-medium">
                        {member.designation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* --- CUSTOM FOOTER --- */}
      <footer className="bg-[var(--color-neutral-900)] text-white py-10 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8">
            <p className="text-[13px] md:text-sm lg:text-base font-medium text-[var(--color-brand-200)] italic leading-relaxed">
              "To bring out and materialise <br /> a congruity <br /> from among
              varieties <br /> and unify them meaningfully <br /> discovering
              their relation <br /> to existence— <br /> is the essence of
              education."
            </p>
            <span className="block mt-4 text-[10px] md:text-xs lg:text-sm text-[var(--color-neutral-400)] uppercase tracking-wider">
              — Sree Sree Thakur Anukulchandra, <br className="md:hidden" />
              ESSENCE OF EDUCATION, The Message-8
            </span>
          </div>
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
