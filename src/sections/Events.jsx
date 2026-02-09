// src/sections/Events.jsx
import { Link } from "react-router-dom";
import Utsav from "../assets/Photos/Utsav.jpg";
import Satsang from "../assets/Photos/Satsang.jpg";
import Conference from "../assets/Photos/Conference.png";

const Events = () => {
  const eventsList = [
    {
      title: "Career Excellence Conference 2026",
      image: Conference,
      date: "20th February 2026 (Friday)",
      time: "09:30 AM - 04:30 PM",
      location: "Tagore Hall, University of Delhi (North Campus)",
      quote:
        "To bring out and materialise a congruity from among varieties and unify them meaningfully... is the essence of education.",
      quoteSource: "The Message-8",
      desc: "A national-level seminar featuring IAS/IES officers, DRDO scientists, and global experts. Includes 1:1 mentorship, CV vetting, and global career roadmaps.",
      buttonText: "Register Now (Free)",
      link: "/conference-du-2026",
      isFeatured: true,
    },
    {
      title: "Annual Utsavs",
      image: Utsav,
      date: "Seasonal",
      quote: "All the prophets are the new Advent of the same...",
      quoteSource: "Satyanusaran",
      desc: "Celebrating the Advent of the Prophets and the Holy Family through communal harmony, spiritual joy, and collective prayer.",
      isFeatured: false,
    },
    {
      title: "Monthly Satsang",
      image: Satsang,
      date: "First Sunday / Monthly",
      quote:
        "When the Ideal is awake in man, he is active, agile, inquisitive...",
      quoteSource: "Satyanusaran",
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

        <div className="grid gap-6 md:grid-cols-3">
          {eventsList.map((event, idx) => (
            <div
              key={idx}
              className={`relative bg-[var(--bg-main)] rounded-2xl shadow-md overflow-hidden border transition-all duration-300 ${
                event.isFeatured
                  ? "border-[var(--primary)] ring-1 ring-[var(--primary)]/20 shadow-lg scale-[1.02]"
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
              <div className="p-6 flex flex-col h-[calc(100%-13rem)]">
                <h3 className="text-xl lg:text-2xl font-bold text-[var(--text-main)] mb-2">
                  {event.title}
                </h3>

                {event.location && (
                  <div className="mb-4">
                    <p className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest flex items-center gap-1 mb-1">
                      📍 {event.location}
                    </p>
                    <p className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest flex items-center gap-1 mb-1">
                      🗓️ {event.date}
                    </p>
                    {event.time && (
                      <p className="text-[10px] font-bold uppercase tracking-widest ">
                        ⏰ {event.time}
                      </p>
                    )}
                  </div>
                )}

                <p className="text-sm text-[13px] text-[var(--primary)] italic mb-4 font-medium leading-relaxed">
                  "{event.quote}"
                  <span className="block mt-1 text-[10px] text-[var(--text-muted)] opacity-70">
                    — Sree Sree Thakur Anukulchandra, {event.quoteSource}
                  </span>
                </p>

                <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6 flex-grow text-justify">
                  {event.desc}
                </p>

                {/* Button Logic */}
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
