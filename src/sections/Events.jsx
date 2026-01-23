// src/sections/Events.jsx
import { Link } from "react-router-dom";
import Utsav from "../assets/Photos/Utsav.jpg";
import Satsang from "../assets/Photos/Satsang.jpg";
import Conference from "../assets/Photos/Conference.png";

const Events = () => {
  const eventsList = [
    {
      title: "Career Excellence Conference @ DU",
      image: Conference,
      date: "20 February 2026",
      location: "University of Delhi",
      quote: "Knowledge that does not know to apply is no knowledge at all.",
      desc: "A national-level conference focusing on Government Services (UPSC/SSC), Corporate Internships, and Global Higher Education opportunities.",
      buttonText: "View Full Agenda & Details",
      link: "/conference-du-2026", // The separate page we will create
      isFeatured: true,
    },
    {
      title: "Annual Utsavs",
      image: Utsav,
      date: "Seasonal",
      quote: "All the prophets are the new Advent of the same...",
      desc: "Celebrating the Advent of the Prophets and the Holy Family through communal harmony, spiritual joy, and collective prayer.",
      isFeatured: false,
    },
    {
      title: "Monthly Satsang",
      image: Satsang,
      date: "First Sunday / Monthly",
      quote:
        "When the Ideal is awake in man, he is active, agile, inquisitive...",
      desc: "Nourish the soul through collective prayer and spiritual discourse on the first Sunday of every month.",
      isFeatured: false,
    },
  ];

  return (
    <section
      id="events"
      className="py-24 bg-[var(--bg-tertiary)] border-t border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-brand-deep)] mb-4">
            Upcoming Events & Conferences
          </h2>
          <p className="text-sm lg:text-base text-[var(--text-muted)]">
            Join our initiatives for spiritual growth and social excellence.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {eventsList.map((event, idx) => (
            <div
              key={idx}
              className={`relative bg-[var(--bg-main)] rounded-2xl shadow-md overflow-hidden border transition-all duration-300 ${
                event.isFeatured
                  ? "border-[var(--primary)] ring-1 ring-[var(--primary)]/20 shadow-lg"
                  : "border-[var(--border-subtle)] hover:shadow-xl"
              }`}
            >
              {/* Image Section */}
              <div className="h-52 overflow-hidden relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-[var(--bg-main)]/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[var(--primary)] shadow-sm">
                  {event.date}
                </div>
              </div>

              {/* Text Content */}
              <div className="p-8 flex flex-col h-[calc(100%-13rem)]">
                <h3 className="text-xl lg:text-2xl font-bold text-[var(--text-main)] mb-2">
                  {event.title}
                </h3>

                {event.location && (
                  <p className="text-xs font-semibold text-[var(--text-muted)] mb-4 uppercase tracking-widest">
                    📍 {event.location}
                  </p>
                )}

                <p className="text-sm text-[var(--primary)] italic mb-4 font-medium leading-relaxed">
                  "{event.quote}"
                  <span className="block mt-1 text-[10px] text-[var(--text-muted)] opacity-70">
                    — Sree Sree Thakur Anukulchandra, Satyanusaran
                  </span>
                </p>

                <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6 flex-grow">
                  {event.desc}
                </p>

                {/* Only show button if a link exists (DU Conference) */}
                {event.link ? (
                  <Link
                    to={event.link}
                    className="block w-full text-center text-sm lg:text-base py-3 bg-[var(--primary)] text-white rounded-xl font-bold hover:bg-[var(--primary-hover)] transition-all shadow-md"
                  >
                    {event.buttonText}
                  </Link>
                ) : (
                  <div className="pt-4 border-t border-[var(--border-subtle)] text-center">
                    <span className="text-xs lg:text-sm font-bold text-[var(--text-muted)] uppercase tracking-widest">
                      Open to All
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
