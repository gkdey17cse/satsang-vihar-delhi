export const UtsavSchedule = ({ scheduleDays }) => {
  return (
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
        <div className="grid md:grid-cols-2 gap-8">
          {scheduleDays.map((day, idx) => (
            <div
              key={idx}
              className="bg-[var(--bg-secondary)] shadow-xl border border-[var(--border-subtle)] overflow-hidden rounded-2xl"
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
  );
};
