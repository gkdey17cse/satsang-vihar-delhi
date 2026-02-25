// src/pages/utsav/utsav-2026.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import {
  Calendar,
  MapPin,
  Phone,
  Clock,
  Heart,
  Award,
  Users,
  Music,
  Coffee,
  Stethoscope,
  Navigation,
  Home,
  Sunrise,
  BookOpen,
  HelpCircle,
  Mic2,
} from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// Import logos
import logo_light from "../../assets/Photos/logo_light.png";
import logo_dark from "../../assets/Photos/logo_dark.png";

// Carousel images (your Cloudinary URLs)
const carouselImages = [
  "https://res.cloudinary.com/dk3sj0t4u/image/upload/v1771796681/1_s1rcaa.jpg",
  "https://res.cloudinary.com/dk3sj0t4u/image/upload/v1771796681/2_bhbtvq.jpg",
  "https://res.cloudinary.com/dk3sj0t4u/image/upload/v1771796681/3_g83we0.jpg",
  "https://res.cloudinary.com/dk3sj0t4u/image/upload/v1771796681/4_bzapca.jpg",
  "https://res.cloudinary.com/dk3sj0t4u/image/upload/v1771796681/5_vijdwq.jpg",
];

// Placeholder for The White Band – replace with actual image
const whiteBandImage =
  "https://res.cloudinary.com/dk3sj0t4u/image/upload/v1771797051/whiteband_jdijzp.jpg";

const UtsavDelhi2026 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Schedule", to: "schedule" },
    { name: "Highlights", to: "highlights" },
    { name: "Venue", to: "venue" },
    { name: "Contact", to: "contact" },
  ];

  const contactNumbers = [
    "01141045161",
    "7840000542",
    "9871697533",
    "9318404769",
    "9891901098",
    "9289122535",
    "9810139772",
    "9911060183",
    "9717480626",
    "9432357334",
    "9811407990",
    "9365637437",
    "9818760189",
    "8439432926",
    "9839070196",
    "9453048453",
    "8004611108",
  ];

  const busRoutes = ["102A", "159", "166", "761", "901CL", "971", "78"];

  const scheduleDays = [
    {
      day: "Day 1",
      date: "28th March 2026 (Saturday)",
      items: [
        {
          time: "07:00 – 09:00",
          title: "Registration & Morning Refreshments",
          desc: "Welcome desk opens, kit distribution, tea/coffee",
        },
        {
          time: "09:00 – 11:00",
          title: "Sports & Drawing Competitions",
          desc: "Open for all age groups – register on-site",
        },
        {
          time: "11:00 – 13:00",
          title: "Musical Performances",
          desc: "Devotional songs by local artists and Satsangis",
        },
        {
          time: "13:00 – 14:00",
          title: "Bhandara (Prasad-Seva)",
          desc: "Lunch break – free meal for all",
        },
        {
          time: "14:00 – 16:00",
          title: "Cultural Programmes",
          desc: "Dance, drama, and skits by children and youth",
        },
        {
          time: "16:00 – 17:00",
          title: "Kirtan by Satsang Upyojana Kendras",
          desc: "Group kirtan from various Delhi-NCR Kendras",
        },
        {
          time: "17:00 – 18:30",
          title: "Evening Congregational Prayer",
          desc: "Special arati and prayer led by senior devotees",
        },
        {
          time: "18:30 onwards",
          title: "Dinner Prasadam",
          desc: "Night bhandara",
        },
      ],
    },
    {
      day: "Day 2",
      date: "29th March 2026 (Sunday)",
      items: [
        {
          time: "05:30 – 06:30",
          title: "Vedmangalik & Usha Kirtan",
          desc: "Early morning vedic chants and kirtan",
        },
        {
          time: "06:30 – 08:00",
          title: "Morning Congregational Prayer",
          desc: "Collective prayer and meditation",
        },
        {
          time: "08:00 – 09:00",
          title: "Kallobrata (Breakfast)",
          desc: "Simple breakfast served",
        },
        {
          time: "09:00 – 11:00",
          title: "Satsangee Sammelan",
          desc: "Devotees' gathering – sharing experiences",
        },
        {
          time: "11:00 – 13:00",
          title: "Sangitanjali & Discourses",
          desc: "Philosophical discourses on Sree Sree Thakur's teachings",
        },
        {
          time: "13:00 – 14:00",
          title: "Bhandara (Prasad-Seva)",
          desc: "Afternoon meal",
        },
        {
          time: "14:00 – 16:00",
          title: "Musical Concert by The White Band",
          desc: "Special performance by the renowned White Band from Satsang Deoghar",
        },
        {
          time: "16:00 – 17:00",
          title: "Prize Distribution",
          desc: "Awards for competition winners",
        },
        {
          time: "17:00 – 18:30",
          title: "Evening Congregational Prayer",
          desc: "Concluding prayer",
        },
        {
          time: "18:30 onwards",
          title: "Valedictory & Dinner",
          desc: "Closing ceremony and final bhandara",
        },
      ],
    },
  ];

  const highlights = [
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Bhandara (Prasad-Seva)",
      desc: "Free meals on both days – afternoon & evening.",
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Free Medical Camp",
      desc: "Senior physicians available throughout the Utsav.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Holy Initiation",
      desc: "Jaajan & initiation round the clock.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Information Desk",
      desc: "Volunteers to assist at all major points.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Prizes & Recognition",
      desc: "For sports, drawing, and cultural competitions.",
    },
    {
      icon: <Sunrise className="w-8 h-8" />,
      title: "Morning Prayers",
      desc: "Vedmangalik, Usha Kirtan, and congregational prayer.",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Spiritual Discourses",
      desc: "Insights into Sree Sree Thakur's teachings.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-main)]">
      {/* Navbar (unchanged) */}
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
            <div className="hidden lg:flex items-center gap-6 xl:gap-4">
              {navLinks.map((link) => (
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
              ))}
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
            {navLinks.map((link) => (
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
            ))}
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
        {/* --- HERO SECTION with balanced overlay for clarity --- */}
        <section
          id="hero"
          className="relative w-full h-[100vh] lg:h-[85vh] flex items-center justify-center overflow-hidden"
        >
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            spaceBetween={0}
            slidesPerView={1}
            loop
            speed={2000}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="absolute inset-0 w-full h-full"
          >
            {carouselImages.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full">
                  <img
                    src={src}
                    alt={`Utsav ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Gradient overlay that makes text pop without blurring images */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent z-10"></div>

          <div className="relative z-20 text-center px-4 max-w-7xl mx-auto ">
            <div className="inline-block mt-2 px-4 py-2.5 mb-4 rounded-full border border-[var(--primary)] bg-black/80 backdrop-blur-md shadow-lg">
              <span className="text-[var(--primary)] font-bold text-xs uppercase tracking-widest">
                In association with North Indian States
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-1.5 lg:mb-3 leading-tight drop-shadow-xl">
              37th Delhi-NCR Utsav
            </h1>

            <div className="text-lg md:text-xl lg:text-2xl font-bold text-[var(--primary)] mb-3 drop-shadow-lg">
              138<sup>th</sup> Holy Birth Anniversary of
            </div>

            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-black text-white mb-2 lg:mb-5 leading-tight drop-shadow-xl">
              Param Premamaya <br className="hidden sm:block" />
              Sree Sree Thakur Anukulchandra
            </h2>

            <div className="inline-block bg-black/80 backdrop-blur-md px-6 py-3 rounded-xl shadow-2xl border border-white/60 my-4 lg:my-6">
              <p className="text-base md:text-lg font-semibold text-[var(--primary)] flex items-center gap-2">
               28th & 29th March, 2026
              </p>
            </div>

            <div className="max-w-2xl mx-auto mb-8">
              <p className="text-cs md:text-sm italic text-gray-200 border-l-4 border-[var(--primary)] p-3 bg-black/40 rounded-r-lg">
                "Wisdom destroys confusion and gives discerning eyes to man"
                <p className="mt-2 text-xs text-gray-300 text-right">
                  — Sree Sree Thakur Anukulchandra
                </p>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-1.5 justify-center py-2">
              <ScrollLink
                to="schedule"
                smooth
                offset={-50}
                duration={800}
                className="cursor-pointer bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-6 py-3 rounded-2xl text-sm md:text-base font-bold transition-all shadow-lg transform"
              >
                View Schedule
              </ScrollLink>
              <ScrollLink
                to="venue"
                smooth
                offset={-50}
                duration={800}
                className="cursor-pointer bg-black/40 backdrop-blur-md text-white hover:bg-black/60 hover:text-[var(--primary)] px-6 py-3 rounded-2xl text-sm md:text-base font-bold transition-all"
              >
                Get Directions
              </ScrollLink>
              <a
                href="https://acco.satsangvihardelhi.org/utsav/visitor/register_visitor.html" // registration link
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer bg-[var(--primary)]/80 hover:bg-[var(--primary)] text-white px-6 py-3 rounded-2xl text-sm md:text-base font-bold transition-all shadow-lg border-2 border-white/30 flex items-center gap-2"
              >
                Accommodation Registration
              </a>
            </div>

            <p className="mt-2.5 lg:mt-6 text-xs md:text-sm font-medium text-gray-900">
              <span className="text-[var(--primary)]">
                Vande Purushottamam!
              </span>{" "}
              • Open to all irrespective of caste, creed, religion and
              nationality
            </p>
          </div>
        </section>

        {/* About section (unchanged) */}
        <section id="about" className="py-20 px-4 bg-[var(--bg-secondary)]">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1 mb-6 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/30">
              <span className="text-[var(--primary)] font-bold text-xs uppercase tracking-widest">
                Welcome
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-main)] mb-8">
              Join the Divine Celebrations
            </h2>
            <div className="prose prose-lg mx-auto text-[var(--text-muted)]">
              <p className="text-lg md:text-xl leading-relaxed mb-8">
                On this auspicious occasion, let us all, irrespective of caste,
                creed, religion and nationality, gather to celebrate the 37th
                Delhi-NCR & North India Annual Utsav and 138th Holy Birth
                Anniversary of the all-loving and all-fulfilling Purushottam
                Sree Sree Thakur Anukulchandra.
              </p>
              <p className="text-lg md:text-xl leading-relaxed mb-8">
                Be enlivened, imbued with divine inspiration, and blessed with
                the infinite grace of the benign Lord,
                <span className="text-[var(--primary)] font-semibold">
                  {" "}
                  Param Pujyapad Sree Sree Acharyadev & Puj. Sree Sree Abin Da.
                </span>
              </p>
              <div className="bg-[var(--bg-tertiary)] p-8 rounded-2xl my-10 border border-[var(--border-subtle)] relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[var(--primary)] text-white px-4 py-1 rounded-full text-xs font-bold">
                  Eternal Wisdom
                </div>
                <p className="text-2xl md:text-3xl font-serif italic text-[var(--primary)] mb-4">
                  "Religions may be many, but the principle and realisation
                  thereof are ever the same!"
                </p>
                <p className="text-sm text-[var(--text-muted)]">
                  — Sree Sree Thakur Anukulchandra
                </p>
              </div>
              <p className="text-3xl font-bold text-[var(--primary)] mt-8">
                Vande Purushottamam!
              </p>
            </div>
          </div>
        </section>

        {/* --- SCHEDULE SECTION with two columns, no scroll, fully visible --- */}
        <section id="schedule" className="py-20 px-4 bg-[var(--bg-main)]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-main)] mb-4">
                Programme Schedule
              </h2>
              <div className="w-24 h-1 bg-[var(--primary)] mx-auto mb-6 rounded-full"></div>
              <p className="text-[var(--text-muted)] text-sm md:text-base">
                * Programme subject to change under unavoidable circumstances
              </p>
            </div>

            {/* Two columns on medium+ screens, stack on mobile */}
            <div className="grid md:grid-cols-2 gap-8">
              {scheduleDays.map((day, idx) => (
                <div
                  key={idx}
                  className="bg-[var(--bg-secondary)] rounded-2xl shadow-xl border border-[var(--border-subtle)] overflow-hidden"
                >
                  <div className="bg-[var(--primary)] text-white p-4 text-center">
                    <h3 className="text-2xl font-bold">{day.day}</h3>
                    <p className="text-sm opacity-90">{day.date}</p>
                  </div>
                  <div className="p-4">
                    <div className="space-y-3">
                      {day.items.map((item, i) => (
                        <div
                          key={i}
                          className="border-b border-[var(--border-subtle)] pb-3 last:border-0"
                        >
                          <span className="inline-block px-2 py-0.5 bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-bold rounded-full mb-1">
                            {item.time}
                          </span>
                          <h4 className="font-bold text-[var(--text-main)] text-base">
                            {item.title}
                          </h4>
                          <p className="text-[var(--text-muted)] text-xs mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Highlights section (unchanged) */}
        <section id="highlights" className="py-20 px-4 bg-[var(--bg-tertiary)]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-main)] mb-4">
                Key Highlights
              </h2>
              <div className="w-24 h-1 bg-[var(--primary)] mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="bg-[var(--bg-secondary)] p-6 rounded-2xl shadow-lg border border-[var(--border-subtle)] hover:shadow-xl transition-all group"
                >
                  <div className="text-[var(--primary)] mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-main)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[var(--text-muted)] text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-12 p-8 bg-[var(--bg-secondary)] rounded-2xl border border-[var(--border-subtle)] text-center">
              <p className="text-lg text-[var(--text-muted)]">
                <span className="font-bold text-[var(--primary)]">
                  Throughout the programme:
                </span>{" "}
                Guests will be welcomed, introduced to Sree Sree Thakur and the
                Mission of Satsang. Informative leaflets, books, and related
                materials will be provided.
              </p>
            </div>
          </div>
        </section>

        {/* White Band feature (unchanged) */}
        <section className="py-20 px-4 bg-[var(--bg-main)] border-y border-[var(--border-subtle)]">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-block px-4 py-1 mb-4 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/30">
                  <span className="text-[var(--primary)] font-bold text-xs uppercase tracking-widest flex items-center gap-1">
                    <Mic2 className="w-3 h-3" /> Special Performance
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-main)] mb-6">
                  The White Band{" "}
                  <span className="text-[var(--primary)]">Live in Concert</span>
                </h2>
                <p className="text-lg text-[var(--text-muted)] mb-6 leading-relaxed">
                  The renowned devotional rock band from Satsang Deoghar will
                  mesmerize you with their soul‑stirring music. Known for
                  blending contemporary rock with timeless spiritual lyrics, The
                  White Band has been a highlight of Utsavs across India.
                </p>
                <div className="space-y-3 text-[var(--text-muted)]">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-[var(--primary)]" />
                    <span className="font-medium">
                      Day 2 – 29th March | 2:00 PM – 4:00 PM
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[var(--primary)]" />
                    <span>Main Stage, Utsav Ground</span>
                  </div>
                </div>
                <div className="mt-8">
                  <ScrollLink
                    to="schedule"
                    smooth
                    offset={-50}
                    className="inline-block bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg"
                  >
                    View Full Schedule
                  </ScrollLink>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                  <img
                    src={whiteBandImage}
                    alt="The White Band performing"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-bold bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                      The White Band @ Satsang Deoghar
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Venue section (unchanged) */}
        <section id="venue" className="py-20 px-4 bg-[var(--bg-main)]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-main)] mb-4">
                Venue & Directions
              </h2>
              <div className="w-24 h-1 bg-[var(--primary)] mx-auto rounded-full"></div>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-[var(--bg-secondary)] p-6 rounded-2xl shadow-lg border border-[var(--border-subtle)]">
                  <h3 className="text-xl font-bold text-[var(--primary)] mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5" /> Address
                  </h3>
                  <p className="text-[var(--text-muted)] text-lg leading-relaxed">
                    Ramleela Maidan, Prakashvir Shastri Marg,
                    <br />
                    Block-A, Ashok Vihar, Phase-IV,
                    <br />
                    New Delhi
                  </p>
                </div>
                <div className="bg-[var(--bg-secondary)] p-6 rounded-2xl shadow-lg border border-[var(--border-subtle)]">
                  <h3 className="text-xl font-bold text-[var(--primary)] mb-4 flex items-center gap-2">
                    <Navigation className="w-5 h-5" /> How to Reach
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-xl">🚇</span>
                      <div>
                        <p className="font-semibold text-[var(--text-main)]">
                          Metro:
                        </p>
                        <p className="text-[var(--text-muted)]">
                          Nearest Station:{" "}
                          <span className="font-medium text-[var(--primary)]">
                            Kanhaiya Nagar (Red Line)
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xl">🚌</span>
                      <div>
                        <p className="font-semibold text-[var(--text-main)]">
                          Bus:
                        </p>
                        <p className="text-[var(--text-muted)]">
                          Stop: Ashok Vihar Central Market
                        </p>
                        <p className="text-[var(--text-muted)] text-sm mt-1">
                          Routes: {busRoutes.join(", ")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-[var(--border-subtle)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.185270450783!2d77.1691432!3d28.68410399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03ebd016322d%3A0x67b49a89bb3c8f81!2sRamleela%20ground!5e0!3m2!1sen!2sin!4v1771878002347!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ashok Vihar Map"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Donations section (unchanged) */}
        <section className="py-16 px-4 bg-[var(--bg-tertiary)]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-main)] mb-6">
              Support the Utsav
            </h2>
            <div className="bg-[var(--bg-secondary)] p-8 rounded-2xl shadow-xl border border-[var(--border-subtle)]">
              <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                The Utsav Organising Committee humbly welcomes all forms of
                donations, including festival offerings, grains, and vegetables
                for the Bhandara.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-semibold">
                  Festival Offerings
                </span>
                <span className="px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-semibold">
                  Grains
                </span>
                <span className="px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-semibold">
                  Vegetables
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact section (unchanged) */}
        <section id="contact" className="py-20 px-4 bg-[var(--bg-main)]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-main)] mb-4">
                Contact Us
              </h2>
              <div className="w-24 h-1 bg-[var(--primary)] mx-auto rounded-full"></div>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-[var(--bg-secondary)] p-8 rounded-2xl shadow-xl border border-[var(--border-subtle)]">
                <h3 className="text-2xl font-bold text-[var(--primary)] mb-6">
                  Organizing Committee
                </h3>
                <div className="mb-8">
                  <p className="text-lg font-semibold text-[var(--text-main)]">
                    Jatindra Nath Mohanty
                  </p>
                  <p className="text-[var(--text-muted)]">
                    Incharge, Delhi Satsang Vihar
                  </p>
                </div>
                <div className="mb-8">
                  <p className="text-lg font-semibold text-[var(--text-main)] mb-4 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-[var(--primary)]" /> Contact
                    Numbers
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {contactNumbers.slice(0, 8).map((number, index) => (
                      <a
                        key={index}
                        href={`tel:${number}`}
                        className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors text-sm"
                      >
                        {number}
                      </a>
                    ))}
                  </div>
                  <details className="mt-4">
                    <summary className="text-[var(--primary)] cursor-pointer text-sm font-semibold">
                      View More Numbers
                    </summary>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      {contactNumbers.slice(8).map((number, index) => (
                        <a
                          key={index}
                          href={`tel:${number}`}
                          className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors text-sm"
                        >
                          {number}
                        </a>
                      ))}
                    </div>
                  </details>
                </div>
                <div>
                  <p className="text-lg font-semibold text-[var(--text-main)] mb-2">
                    Phone
                  </p>
                  <a
                    href="tel:01141045161"
                    className="text-[var(--primary)] text-xl font-bold"
                  >
                    011-41045161
                  </a>
                </div>
              </div>
              <div className="bg-[var(--bg-secondary)] p-8 rounded-2xl shadow-xl border border-[var(--border-subtle)]">
                <h3 className="text-2xl font-bold text-[var(--primary)] mb-6">
                  Important Information
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <HelpCircle className="w-6 h-6 text-[var(--primary)] shrink-0" />
                    <div>
                      <h4 className="font-bold text-[var(--text-main)]">
                        Information Desk
                      </h4>
                      <p className="text-[var(--text-muted)] text-sm">
                        Located at various points. Volunteers available.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Users className="w-6 h-6 text-[var(--primary)] shrink-0" />
                    <div>
                      <h4 className="font-bold text-[var(--text-main)]">
                        Discipline
                      </h4>
                      <p className="text-[var(--text-muted)] text-sm">
                        Follow announcements and maintain strict discipline.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Clock className="w-6 h-6 text-[var(--primary)] shrink-0" />
                    <div>
                      <h4 className="font-bold text-[var(--text-main)]">
                        Round the Clock
                      </h4>
                      <p className="text-[var(--text-muted)] text-sm">
                        Jaajan and Holy initiation programme run continuously.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer (unchanged) */}
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
              — Sree Sree Thakur Anukulchandra, <br className="md:hidden" />{" "}
              ESSENCE OF EDUCATION, The Message-8
            </span>
          </div>
          <div className="flex justify-center gap-6 md:gap-8 pt-4 border-t border-[var(--color-neutral-800)]">
            {/* social icons same as before */}
            <a
              href="https://www.facebook.com/SatsangViharDelhi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-neutral-400)] hover:text-[#1877F2] transition-colors"
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
              className="text-[var(--color-neutral-400)] hover:text-[#FF0000] transition-colors"
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
              className="text-[var(--color-neutral-400)] hover:text-[#25D366] transition-colors"
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

export default UtsavDelhi2026;
