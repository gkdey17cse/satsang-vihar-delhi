import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import { UtsavNavbar } from "./components/UtsavNavbar.jsx";
import { UtsavHero } from "./components/UtsavHero.jsx";
import { UtsavSpecialPerformance } from "./components/UtsavSpecialPerformance.jsx";
import { UtsavHighlights } from "./components/UtsavHighlights.jsx";
import { UtsavMedia } from "./components/UtsavMedia.jsx";
import { UtsavAbout } from "./components/UtsavAbout.jsx";
import { UtsavSchedule } from "./components/UtsavSchedule.jsx";
import { UtsavVenueAndSupport } from "./components/UtsavVenueAndSupport.jsx";
import { UtsavContact } from "./components/UtsavContact.jsx";

import Footer from "../../components/Footer.jsx";

// Assets
import logo_light from "../../assets/Photos/logo_light.png";
import logo_dark from "../../assets/Photos/logo_dark.png";

// DATA OBJECTS
const navLinks = [
  { name: "Home", to: "hero" },
  { name: "Gallery", to: "media" },
  { name: "Highlights", to: "highlights" },
  { name: "About", to: "about" },
  { name: "Schedule", to: "schedule" },
  { name: "Venue", to: "venue" },
  { name: "Contact", to: "contact" },
  {
    name: "Get Directions",
    href: "https://www.google.com/maps/dir/?api=1&destination=Ramleela+Maidan+Ashok+Vihar+Phase+IV+New+Delhi",
    external: true,
  },
];

const heroData = {
  title: "37th Delhi-NCR Utsav",
  subtitle:
    "Param Premamaya <br class='hidden sm:block' /> Sree Sree Thakur Anukulchandra",
  date: "28th & 29th March, 2026",
  association: "In association with North Indian States",
  quote: {
    text: "Wisdom destroys confusion and gives discerning eyes to man",
    author: "Sree Sree Thakur Anukulchandra",
  },
  images: [
    "https://res.cloudinary.com/dk3sj0t4u/image/upload/w_1500,q_auto,f_auto/v1775853716/1_tigtbw.jpg",
    "https://res.cloudinary.com/dk3sj0t4u/image/upload/w_1280,q_auto,f_auto/v1775853730/17_cra93u.jpg",
    "https://res.cloudinary.com/dk3sj0t4u/image/upload/w_1920,q_auto,f_auto/v1775853717/4_mt6fo0.jpg",
    "https://res.cloudinary.com/dk3sj0t4u/image/upload/w_1920,q_auto,f_auto/v1775853728/15_1_qvn1ji.jpg",
    "https://res.cloudinary.com/dk3sj0t4u/image/upload/w_1920,q_auto,f_auto/v1775853723/11_mfi9fb.jpg",
    "https://res.cloudinary.com/dk3sj0t4u/image/upload/w_1920,q_auto,f_auto/v1775853720/7_7_fbt9xq.jpg",
    "https://res.cloudinary.com/dk3sj0t4u/image/upload/w_1920,q_auto,f_auto/v1776118228/DSC_0362_utkywh.jpg"
  ],
  links: [
    {
      label: "View Schedule",
      to: "schedule",
      isScroll: true,
      className:
        "cursor-pointer bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-6 py-3 rounded-2xl font-bold shadow-lg",
    },
    {
      label: "Register for Volunteers",
      to: "https://admin.satsangvihardelhi.org/dsv/www/",
      isScroll: false,
      target: "_blank",
      className:
        "bg-black/40 text-white hover:bg-black/60 px-6 py-3 rounded-2xl font-bold",
    },
  ],
};

const performanceData = {
  title:
    "The White Band <span class='text-[var(--primary)]'>Live Concert</span>",
  description:
    "The renowned devotional rock band from Satsang Deoghar will mesmerize you with their soul‑stirring music.",
  dateTime: "Day 2 – 29th March | 2:00 PM – 4:00 PM",
  venue: "Main Stage, Utsav Ground",
  image:
    "https://res.cloudinary.com/dk3sj0t4u/image/upload/v1771797051/whiteband_jdijzp.jpg",
  imageCaption: "The White Band @ Satsang Deoghar",
};

const highlightsData = [
  {
    id: 1,
    title: "SAMARPAN – A Soulful Indian Music Choir Experience",
    description:
      "Samarpan is the much-awaited Indian Music Choir, presented this year by Samanvay, the music society of IIT Delhi. A beloved tradition for three years, it returns to blend the richness of Indian classical melodies with contemporary harmonies. Experience a powerful, soul-stirring tribute to the spirit of music and unity that perfectly complements the melodious evenings of Satsang.",
    image:
      "https://res.cloudinary.com/dk3sj0t4u/image/upload/v1772822745/Screenshot_2026-03-07_001436_zbmh1n.png",
    link: null,
  },
  {
    id: 2,
    title: "Rang O Rekha: Festival of Colors & Lines",
    description:
      "Unleash your inner artist at this premier drawing event! Learn from renowned artists, master color mixing, and explore live painting techniques. Open to all ages—from Nursery to adults. Winners will be awarded on Day 2. Sheets and topics provided on-spot; bring your own favorite colors!",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1000&auto=format&fit=crop",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdC_taPc7yB3Szs4LhpfroowqaNSW2154dbrub6zY7iu4-Wew/viewform",
  },
  {
    id: 3,
    title: "Utsav Sports: Friendly Competitions",
    description:
      "Celebrate physical vigor with our multi-category sports event! From 'Toffee Races' for the little ones (Nursery-LKG) to 'Sankho Dhani' and 'Musical Chairs' for ladies, and 'Aloo Peel' for gents. Special features include 'Math Races' for students and 'Mind Game Equations' for couples. A day of joy, speed, and community spirit!",
    image:
      "https://weezevent.com/wp-content/uploads/2019/04/25124031/promouvoir-evenement-sportif-1000x640.jpg",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSe5h6STAbNNEEBWXsPSXEQO2SLFNVhACvRlFN5fkJWVUKfv-A/viewform",
  },
  {
    id: 4,
    title: "ASPIRE: Career Counselling & Academic Guidance",
    description:
      "Inspired by the vision of a holistic education, ASPIRE focuses on 'Becoming and Being.' This session helps students navigate their academic and professional journeys through expert guidance, awareness of emerging opportunities, and a focus on character-building. Empowering the youth to align their careers with higher life values.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop",
    link: null,
  },
  {
    id: 5,
    title: "Free Medical Camp",
    description:
      "In the spirit of 'Jajan, Yaajan, and Ishtabhriti,' our Free Medical Camp offers comprehensive health check-ups and consultations by senior physicians. Dedicated to the well-being of all, services are available throughout the Utsav for attendees seeking expert medical advice and preventive care.",
    image:
      "https://cdn.expresshealthcare.in/wp-content/uploads/2020/01/03174832/Medical-camp-750x409.jpg",
    link: null,
  },
  {
    id: 6,
    title: "High Spirit Kirtan",
    description:
      "Immerse yourself in devotional ecstasy. Our soulful kirtan sessions, led by experienced singers from various Satsang Kendras, create a divine atmosphere of joy and surrender. Let the rhythmic chants and melodies elevate your spiritual consciousness.",
    image:
      "https://res.cloudinary.com/dk3sj0t4u/image/upload/v1772822125/kirtan_imfskj.jpg",
    link: null,
  },
];

const mediaData = {
  videos: [
    "https://www.youtube.com/embed/a3_GtmLRU0E?si=fSKlq3AAav_BLdzZ",
    "https://www.youtube.com/embed/wfsPTc3w2_w?si=msGb-o8ISKNpL6Wu",
    "https://www.youtube.com/embed/F5ZrAeblw2g?si=y5JW1LA5Y6Q8FPuS",
  ],
  images: [
    {
      id: 1,
      url: "https://res.cloudinary.com/dk3sj0t4u/image/upload/w_1200,f_auto/v1775853717/4_mt6fo0.jpg",
      alt: "Utsav Memory 1",
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/dk3sj0t4u/image/upload/w_1200,f_auto/v1775853716/2_bh6yxq.jpg",
      alt: "Utsav Memory 2",
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/dk3sj0t4u/image/upload/w_1200,f_auto/v1775853716/3_dh3jym.jpg",
      alt: "Utsav Memory 3",
    },
    {
      id: 4,
      url: "https://res.cloudinary.com/dk3sj0t4u/image/upload/w_1200,f_auto/v1775853716/1_tigtbw.jpg",
      alt: "Utsav Memory 4",
    },
    {
      id: 6,
      url: "https://res.cloudinary.com/dk3sj0t4u/image/upload/w_1200,f_auto/v1775853717/6_afkkl0.jpg",
      alt: "Utsav Memory 6",
    },
    {
      id: 7,
      url: "https://res.cloudinary.com/dk3sj0t4u/image/upload/w_1200,f_auto/v1775853718/7_4_epufem.jpg",
      alt: "Utsav Memory 7",
    },
    {
      id: 8,
      url: "https://res.cloudinary.com/dk3sj0t4u/image/upload/w_1200,f_auto/v1775853717/5_2_ui7nbz.jpg",
      alt: "Utsav Memory 8",
    },
    {
      id: 9,
      url: "https://res.cloudinary.com/dk3sj0t4u/image/upload/w_1200,f_auto/v1775853719/9_1_d3w5hi.jpg",
      alt: "Utsav Memory 9",
    },
    {
      id: 10,
      url: "https://res.cloudinary.com/dk3sj0t4u/image/upload/w_1200,f_auto/v1775853719/9_1_ycsmdu.jpg",
      alt: "Utsav Memory 10",
    },
    {
      id: 11,
      url: "https://res.cloudinary.com/dk3sj0t4u/image/upload/w_1200,f_auto/v1775853720/9_2_riaqne.jpg",
      alt: "Utsav Memory 11",
    },
    {
      id: 12,
      url: "https://res.cloudinary.com/dk3sj0t4u/image/upload/w_1200,f_auto/v1775853719/9_3_qwckng.jpg",
      alt: "Utsav Memory 12",
    },
    {
      id: 13,
      url: "https://res.cloudinary.com/dk3sj0t4u/image/upload/w_1200,f_auto/v1775853720/9_4_zywyaw.jpg",
      alt: "Utsav Memory 13",
    },
    {
      id: 14,
      url: "https://res.cloudinary.com/dk3sj0t4u/image/upload/w_1200,f_auto/v1775853722/10_4_wccawn.jpg",
      alt: "Utsav Memory 14",
    },
    {
      id: 15,
      url: "https://res.cloudinary.com/dk3sj0t4u/image/upload/w_1200,f_auto/v1775853721/10_3_kao1kt.jpg",
      alt: "Utsav Memory 15",
    },
    {
      id: 16,
      url: "https://res.cloudinary.com/dk3sj0t4u/image/upload/w_1200,f_auto/v1775853722/10_5_kkx4vc.jpg",
      alt: "Utsav Memory 16",
    },
    {
      id: 17,
      url: "https://res.cloudinary.com/dk3sj0t4u/image/upload/w_1200,f_auto/v1775853722/10_6_ur5ziz.jpg",
      alt: "Utsav Memory 17",
    },
    {
      id: 18,
      url: "https://res.cloudinary.com/dk3sj0t4u/image/upload/w_1200,f_auto/v1775853723/12._1_bz9afp.jpg",
      alt: "Utsav Memory 18",
    },
    {
      id: 19,
      url: "https://res.cloudinary.com/dk3sj0t4u/image/upload/w_1200,f_auto/v1775853723/11_mfi9fb.jpg",
      alt: "Utsav Memory 19",
    },
    {
      id: 20,
      url: "https://res.cloudinary.com/dk3sj0t4u/image/upload/w_1200,f_auto/v1775853725/13_2_gvt5ql.jpg",
      alt: "Utsav Memory 20",
    },
    {
      id: 21,
      url: "https://res.cloudinary.com/dk3sj0t4u/image/upload/w_1200,f_auto/v1775853725/13_3_g6nxfh.jpg",
      alt: "Utsav Memory 21",
    },
    {
      id: 22,
      url: "https://res.cloudinary.com/dk3sj0t4u/image/upload/w_1200,f_auto/v1775853725/13_1_hb84tc.jpg",
      alt: "Utsav Memory 22",
    },
    {
      id: 23,
      url: "https://res.cloudinary.com/dk3sj0t4u/image/upload/w_1200,f_auto/v1775853726/13__5_rdou2d.jpg",
      alt: "Utsav Memory 23",
    },
    {
      id: 24,
      url: "https://res.cloudinary.com/dk3sj0t4u/image/upload/w_1200,f_auto/v1775853728/15_1_qvn1ji.jpg",
      alt: "Utsav Memory 24",
    },
    {
      id: 25,
      url: "https://res.cloudinary.com/dk3sj0t4u/image/upload/w_1200,f_auto/v1775853728/15_2_fppny5.jpg",
      alt: "Utsav Memory 25",
    },
    {
      id: 26,
      url: "https://res.cloudinary.com/dk3sj0t4u/image/upload/w_1200,f_auto/v1775853729/15_3_nb1an3.jpg",
      alt: "Utsav Memory 26",
    },
    {
      id: 27,
      url: "https://res.cloudinary.com/dk3sj0t4u/image/upload/w_1200,f_auto/v1775853729/16_1_fdoiw5.jpg",
      alt: "Utsav Memory 27",
    },
    {
      id: 28,
      url: "https://res.cloudinary.com/dk3sj0t4u/image/upload/w_1200,f_auto/v1775853730/18_1_xtybyw.jpg",
      alt: "Utsav Memory 28",
    },
    {
      id: 29,
      url: "https://res.cloudinary.com/dk3sj0t4u/image/upload/w_1200,f_auto/v1775853730/17_cra93u.jpg",
      alt: "Utsav Memory 29",
    },
    {
      id: 30,
      url: "https://res.cloudinary.com/dk3sj0t4u/image/upload/w_1200,f_auto/v1775853732/19_mowakn.jpg",
      alt: "Utsav Memory 30",
    },
    {
      id: 31,
      url: "https://res.cloudinary.com/dk3sj0t4u/image/upload/w_1200,f_auto/v1775853732/18_3_kj66tx.jpg",
      alt: "Utsav Memory 31",
    },
    {
      id: 32,
      url: "https://res.cloudinary.com/dk3sj0t4u/image/upload/w_1200,f_auto/v1775853733/23_zml6rx.jpg",
      alt: "Utsav Memory 32",
    },
    {
      id: 33,
      url: "https://res.cloudinary.com/dk3sj0t4u/image/upload/w_1200,f_auto/v1776118179/DSC04035_qsbzqa.jpg",
      alt: "Utsav Memory 33",
    },
    {
      id: 34,
      url: "https://res.cloudinary.com/dk3sj0t4u/image/upload/w_1200,f_auto/v1775853733/21_psfscw.jpg",
      alt: "Utsav Memory 34",
    },
    {
      id: 35,
      url: "https://res.cloudinary.com/dk3sj0t4u/image/upload/w_1200,f_auto/v1776118217/5_11_dgnx1u.jpg",
      alt: "Utsav Memory 35",
    },
    {
      id: 36,
      url: "https://res.cloudinary.com/dk3sj0t4u/image/upload/w_1200,f_auto/v1776118228/DSC_0362_utkywh.jpg",
      alt: "Utsav Memory 36",
    },
  ],
};

const aboutData = {
  title: "Join the Divine Celebrations",
  paragraphs: [
    "On this auspicious occasion, let us all gather to celebrate the 37th Delhi-NCR Annual Utsav...",
    "Be enlivened, imbued with divine inspiration, and blessed with infinite grace.",
  ],
  quote: {
    text: "Religions may be many, but the principle and realisation thereof are ever the same!",
    author: "Sree Sree Thakur Anukulchandra",
  },
};

const scheduleData = [
  {
    day: "Day 1",
    date: "28th March 2026 (Saturday)",
    items: [
      {
        time: "07:00 – 10:00",
        title: "Registration & Morning Refreshments",
        desc: "Welcome desk opens, kit distribution, and tea/coffee",
      },
      {
        time: "10:00 – 11:30",
        title: "Drawing & Sports Event",
        desc: "Competitions for various age groups",
      },
      {
        time: "11:30 – 13:00",
        title: "ASPIRE: Career Counselling Session",
        desc: "Empowering students through guidance, awareness, and opportunities",
      },
      {
        time: "13:00 – 14:30",
        title: "Bhandara (Prasad-Seva)",
        desc: "Lunch break – free meal for all",
      },
      {
        time: "15:00 – 16:00",
        title: "Nukkar Natak",
        desc: "Performed by local youth",
      },
      {
        time: "16:00 – 18:30",
        title: "Musical Performances",
        desc: "Presented by devotees of Delhi-NCR SUKs/SAKs and North Indian States",
      },
      {
        time: "18:30 – 19:00",
        title: "Evening Congregational Prayer",
        desc: "Collective evening prayer and arati",
      },
      {
        time: "19:00 onwards",
        title: "Evening Session (TBD)",
        desc: "Special programming to be announced",
      },
      {
        time: "20:30 onwards",
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
        time: "05:30 – 08:00",
        title: "Usha Kirtan & Morning Prayer",
        desc: "Early morning vedic chants and collective meditation",
      },
      {
        time: "08:00 – 10:00",
        title: "Kallobrata (Breakfast)",
        desc: "Simple breakfast served to all attendees",
      },
      {
        time: "10:00 – 12:30",
        title: "Sangitanjali",
        desc: "Musical offerings and devotional gathering",
      },
      {
        time: "12:30 – 13:30",
        title: "Samarpan – Indian Music Choir",
        desc: "A soulful experience presented by Samanvay, the musical society of IIT Delhi",
      },
      {
        time: "13:30 – 15:00",
        title: "High Spirit Kirtan & Bhandara",
        desc: "Kirtan by Satsang Upayojana Kendra followed by afternoon meal",
      },
      {
        time: "15:00 – 18:30",
        title: "Musical Concert by 'THE WHITE BAND'",
        desc: "Special performance by the renowned band from Satsang, Deoghar",
      },
      {
        time: "18:30 – 19:00",
        title: "Evening Congregational Prayer",
        desc: "Concluding group prayer",
      },
      {
        time: "19:00 – 20:00",
        title: "Evening Session (TBD)",
        desc: "To be decided",
      },
      {
        time: "20:00 – 21:00",
        title: "Prize Distribution",
        desc: "Awards for competition winners",
      },
      {
        time: "21:00 onwards",
        title: "Vote of Thanks & Conclusion",
        desc: "Closing ceremony and final bhandara",
      },
    ],
  },
];

const venueData = {
  address:
    "Ramleela Maidan, Prakashvir Shastri Marg,<br/>Block-A, Ashok Vihar, Phase-IV,<br/>New Delhi",
  metro: "Kanhaiya Nagar (Red Line)",
  busStop: "Ashok Vihar Central Market",
  busRoutes: ["102A", "159", "166", "761", "901CL", "971", "78"],
  mapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.139222302878!2d77.16636507601785!3d28.685481681673313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03ebd016322d%3A0x67b49a89bb3c8f81!2sRamleela%20ground!5e0!3m2!1sen!2sin!4v1773915926783!5m2!1sen!2sin",
  mapDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Ramleela+Maidan+Ashok+Vihar+Phase+IV+Delhi",
};

const contactData = {
  committee: {
    name: "Jatindra Nath Mohanty",
    role: "Incharge, Delhi Satsang Vihar",
  },
  mainPhone: "011-41045161",
  numbers: [
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
  ],
  infoBlocks: [
    { title: "Information Desk", desc: "Located at various points." },
    { title: "Discipline", desc: "Follow announcements." },
    { title: "Round the Clock", desc: "Jaajan programme run continuously." },
  ],
};

const UtsavDelhi2026 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Delhi Utsav 2026 | Satsang Vihar Delhi</title>
        <meta
          name="description"
          content="Holy 138th Janma Mahatsav of Parampremamaya Sree Sree Thakur Anukulchandra & the 37th DELHI NCR Utsav in association of North Indian States on 28th and 29th March 2026"
        />
        <link
          rel="canonical"
          href="https://www.satsangvihardelhi.org/utsav-delhi-2026"
        />
      </Helmet>

      <div className="flex flex-col min-h-screen bg-[var(--bg-main)]">
        <UtsavNavbar
          navLinks={navLinks}
          logoLight={logo_light}
          logoDark={logo_dark}
          title="Satsang Vihar Delhi"
        />

        <main className="flex-grow">
          <UtsavHero {...heroData} />
          <UtsavMedia videos={mediaData.videos} images={mediaData.images} />
          <UtsavSpecialPerformance performance={performanceData} />
          <UtsavHighlights highlights={highlightsData} />
          <UtsavAbout {...aboutData} />
          <UtsavSchedule scheduleDays={scheduleData} />
          <UtsavVenueAndSupport {...venueData} />
          <UtsavContact {...contactData} />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default UtsavDelhi2026;
