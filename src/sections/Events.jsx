// src/sections/Events.jsx
const Events = () => {
  const eventsList = [
    {
      title: "Monthly Satsang",
      // Replace with your actual image path
      image: "https://placehold.co/600x400/e0f2fe/0ea5e9?text=Monthly+Satsang",
      quote:
        "When the Ideal is awake in man, he is active, agile, inquisitive...",
      desc: "Join our monthly gatherings on the first Sunday to nourish the soul through collective prayer and the 'rolling peaceful concert' of the inner self.",
    },
    {
      title: "Special Utsavs",
      image: "https://placehold.co/600x400/fef3c7/f59e0b?text=Special+Utsavs",
      quote: "All the prophets are the new Advent of the same...",
      desc: "Celebrating the Advent of the Prophets and the Holy Family. Similar in attributes and characteristics according to the need of time.",
    },
    {
      title: "Dharma Unnyani",
      image:
        "https://placehold.co/600x400/d1fae5/10b981?text=Dharma+Conference",
      quote: "What makes us live and grow with healthy maintenance is Dharma.",
      desc: "Seminars dedicated to 'Dharma'—the upholding urge of existence. Quarterly spiritual conferences.",
    },
  ];

  return (
    <section
      id="events"
      className="py-24 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-[var(--text-main)] mb-12 text-center">
          Upcoming Events
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {eventsList.map((event, idx) => (
            <div
              key={idx}
              // Removed border-l-4, added overflow-hidden for image rounded corners
              className="relative bg-[var(--bg-main)] rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-[var(--border-subtle)]"
            >
              {/* New Image Section */}
              <div className="h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Existing Text Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[var(--text-main)] mb-3">
                  {event.title}
                </h3>
                <p className="text-sm text-[var(--primary)] italic mb-4 font-medium">
                  "{event.quote}"
                </p>
                <p className="text-[var(--text-muted)] leading-relaxed">
                  {event.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Events;
