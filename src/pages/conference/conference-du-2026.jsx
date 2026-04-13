// src/pages/conference/conference-du-2026-new.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Helmet } from "react-helmet-async";

// Import all components
import ConferenceNav from "./components/ConferenceNav";
import ConferenceHero from "./components/ConferenceHero";
import ConferenceGallery from "./components/ConferenceGallery";
import ConferenceObjectives from "./components/ConferenceObjectives";
import GuestsOfHonour from "./components/GuestOfHonour";
import ProgrammeSchedule from "./components/ProgrammeSchedule";
import KeySpeakers from "./components/KeySpeakers";
import ConferenceCommittee from "./components/ConferenceCommittee";
import ConferenceFooter from "./components/ConferenceFooter";

// Import assets
import logo_light from "../../assets/Photos/logo_light.png";
import logo_dark from "../../assets/Photos/logo_dark.png";
import ias_ishitaroy from "../../assets/Photos/conference-du-2026/IAS_IshitaRoy.jpg";
import guest_jubilee from "../../assets/Photos/conference-du-2026/Guest_JubileePurakayastha.jpg";
import guest_debo from "../../assets/Photos/conference-du-2026/Guest_DebojyotiChakraborty.jpg";
import guest_deepak from "../../assets/Photos/conference-du-2026/Guest_DeepakBhardwaj.jpg";
import guest_pravakar from "../../assets/Photos/conference-du-2026/Guest_ProvakarMohanty.png";
import guest_surya from "../../assets/Photos/conference-du-2026/Guest_Surya.jpg";
import guest_sutanu from "../../assets/Photos/conference-du-2026/Guest_SutaniChakraborti.jpg";
// Not used directly but kept for consistency

// Import icons for navbar and committee (already in components)
import {
  ShieldCheck,
  Briefcase,
  Zap,
  Building,
  Microscope,
  Award,
  FileText,
} from "lucide-react";

const ConferenceDetailsPageNew = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAllGallery, setShowAllGallery] = useState(false);

  // --- GALLERY IMAGES (Update here after copnference) ---
  const galleryImages = [
    "v1772042292/1_bly4np.jpg",
    "v1772042290/2_mnil5s.jpg",
    "v1772042291/3_tfuqqn.jpg",
    "v1772042289/4_tsbzcs.jpg",
    "v1772042289/5_ik0hic.jpg",
    "v1772042291/6_nov3ys.jpg",
    "v1772042295/7_nd4pmn.jpg",
    "v1772042291/8_ksjauu.jpg",
    "v1772042292/9_debonw.jpg",
    "v1772042294/9_2_itn1ip.jpg",
    "v1772042295/15_nrkwte.jpg",
    "v1772042297/11_se5pxw.jpg",
    "v1772042293/12_tgemxx.jpg",
    "v1772042294/13_iboioz.jpg",
    "v1772042297/18_j6e2ta.jpg",
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
      `https://res.cloudinary.com/dk3sj0t4u/image/upload/f_auto,q_auto,w_1000/${id}`,
  );

  const top5Images = galleryImages.slice(10, 15);

  // --- GUESTS OF HONOUR ---
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

  // --- PARALLEL SESSIONS (TABLES) ---
  const tableData = [
    {
      id: 1,
      title: "Civil, Staff & Defence",
      sub: "UPSC • STATE PCS • SSC • CDS",
      icon: "Shield",
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
      icon: "Briefcase",
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
      icon: "GraduationCap",
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
      icon: "Compass",
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

  // --- SPEAKER CATEGORIES ---
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

  // --- COMMITTEES ---
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

  // --- SCHEDULE ITEMS (full array from original) ---
  const scheduleItems = [
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
        { content: "Diya Prajjwalan & Theme song dedicated to young students" },
        {
          label: "Welcome Address:",
          content:
            "Dr. Indrakashi Dutta (Advisor of OC, Asso. Prof, Jesus & Mary College, DU)",
        },
        {
          label: "Theme Address:",
          content: "Dr. Dhiraj Sarkar (Asst. Prof, Deshbandhu College, DU)",
        },
        {
          label: "Guest of Honours Speech:",
          content:
            "Mr. Surya Prakash Mahapatra (Global Head-Talent Transformation, WIPRO) , Dr. Sutanu Chakraborty (Prof, Dept of Computer Sci. & Eng, IIT Madras), Ms. Ishita Roy (Director: Kerala State Civil Services Academy), Dr. Jubilee Purkayastha (Scientist F & Joint Director, INMAS DRDO), Dr. Deepak Bhardwaj (Associate Prof. Dept of Botany, DU)",
        },
        { content: "Address by Chief Guest" },
        {
          label: "Vote of Thanks:",
          content: "Dr. Pravakar Mohanty (Scientist ‘E’ & Joint Director, DST)",
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
      subsections: [{ content: "Certificate Distribution and Vote of Thanks" }],
      type: "normal",
    },
  ];

  // Navigation links
  const navLinks = [
    { name: "About", to: "hero" },
    { name: "Gallery", to: "gallery" },
    { name: "Objectives", to: "objectives" },
    { name: "Guests", to: "guests" },
    { name: "Schedule", to: "schedule" },
    { name: "Speakers", to: "speakers" },
    { name: "Committee", to: "committee" },
  ];

  const registrationLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSeaRX9gnEe5JhTZdh4538XpxiB86_jdsGAi4_Rs_7uNOXpWrg/viewform";

  return (
    <>
      <Helmet>
        <title>ASPIRE Conference 2026 | Satsang Vihar Delhi Seminars</title>
        <meta
          name="description"
          content="Join ASPIRE 2026 by Satsang Vihar Delhi at the DRDO Complex. A free seminar offering expert mentorship, career roadmaps, and domain-specific guidance for students and professionals. Register today!"
        />
        <meta
          name="keywords"
          content="ASPIRE conference 2026, Satsang Vihar Delhi events, DRDO complex seminar Delhi, Satsang DU conference, student career counseling Delhi, Satsang youth seminar"
        />
        <link
          rel="canonical"
          href="https://www.satsangvihardelhi.org/conference-du-2026"
        />
      </Helmet>

      <div className="flex flex-col min-h-screen bg-[var(--bg-main)] overflow-x-hidden">
        {/* Navbar (remains in main file) */}
        <ConferenceNav
          navLinks={navLinks}
          registrationLink={registrationLink}
          logoLight={logo_light}
          logoDark={logo_dark}
        />

        <main className="flex-grow">
          <ConferenceHero
            top5Images={top5Images}
            registrationLink={registrationLink}
          />
          <ConferenceGallery
            galleryImages={galleryImages}
            showAllGallery={showAllGallery}
            setShowAllGallery={setShowAllGallery}
          />
          <ConferenceObjectives />
          <GuestsOfHonour
            keynoteImage={ias_ishitaroy}
            keynoteVideoSrc="https://www.youtube.com/embed/Kh8FSySdm8g?autoplay=1&mute=1"
            guests={guestsOfHonour}
          />
          <ProgrammeSchedule
            scheduleItems={scheduleItems}
            tableData={tableData}
          />
          <KeySpeakers speakerCategories={speakerCategories} />
          <ConferenceCommittee
            advisoryCommittee={advisoryCommittee}
            leadership={leadership}
            convenorsAndMembers={convenorsAndMembers}
          />
        </main>

        <ConferenceFooter />
      </div>
    </>
  );
};

export default ConferenceDetailsPageNew;
