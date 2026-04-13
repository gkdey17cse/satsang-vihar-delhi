import { ExternalLink } from "lucide-react";

export const UtsavHighlights = ({ highlights }) => {
  // Defensive check to prevent crashes if data is missing
  const safeHighlights = Array.isArray(highlights) ? highlights : [];

  return (
    <section id="highlights" className="py-20 px-4 bg-[var(--bg-tertiary)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-main)] mb-4">
            Utsav Highlights
          </h2>
          <div className="w-24 h-1 bg-[var(--primary)] mx-auto rounded-full"></div>
          <p className="text-[var(--text-muted)] text-sm md:text-base mt-4">
            Experience the vibrant spirit of the Utsav through these special attractions.
          </p>
        </div>

        {/* Two-column grid on medium+ screens */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {safeHighlights.map((item) => (
            <div
              key={item.id}
              className="bg-[var(--bg-secondary)] rounded-2xl shadow-xl border border-[var(--border-subtle)] overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div className="aspect-video overflow-hidden shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-bold text-[var(--text-main)] mb-3">
                  {item.title}
                </h3>
                <p className="text-[var(--text-muted)] text-sm md:text-base leading-relaxed mb-4 flex-grow">
                  {item.description}
                </p>
                {item.link && (
                  <div className="mt-auto pt-2">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-md"
                    >
                      Register Now <ExternalLink className="w-4 h-4" />
                    </a>
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