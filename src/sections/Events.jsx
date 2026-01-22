const Events = () => {
  const eventsList = [
    {
      title: "Monthly Satsang",
      quote:
        "When the Ideal is awake in man, he is active, agile, inquisitive...",
      desc: "Join our monthly gatherings on the first Sunday to nourish the soul through collective prayer and the 'rolling peaceful concert' of the inner self.",
    },
    {
      title: "Special Utsavs",
      quote: "All the prophets are the new Advent of the same...",
      desc: "Celebrating the Advent of the Prophets and the Holy Family. Similar in attributes and characteristics according to the need of time.",
    },
    {
      title: "Dharma Unnyani",
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
              className="relative bg-[var(--bg-main)] p-8 rounded-xl border-l-4 border-[var(--primary)] shadow-sm"
            >
              <h3 className="text-2xl font-bold text-[var(--text-main)] mb-3">
                {event.title}
              </h3>
              <p className="text-sm text-[var(--primary)] italic mb-4">
                "{event.quote}"
              </p>
              <p className="text-[var(--text-muted)]">{event.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Events;
