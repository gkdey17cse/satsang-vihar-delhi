// src/sections/Kendras.jsx
const Kendras = () => {
  return (
    <section
      id="kendras"
      className="py-24 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <h2 className="text-3xl md:text-5xl  font-bold text-[var(--text-main)] mb-6">
              Upayojna Kendras
            </h2>
            <div className="text-sm lg:text-base prose prose-lg text-[var(--text-muted)]">
              <div className="mb-6">
                <p className="font-medium text-[var(--text-brand-deep)] italic">
                  "I am as much within me as I am within you. If you do not
                  become fulfilled, I remain unfulfilled to the same extent."
                </p>
                <span className="block mt-2 text-xs lg:text-sm opacity-70 not-italic">
                  — Sree Sree Thakur Anukulchandra, Satyanusaran
                </span>
              </div>

              <p className="mb-6">
                Our Kendras across Delhi-NCR serve as{" "}
                <span className="font-bold text-[var(--primary)]">
                  "Common Platforms"
                </span>{" "}
                where devotees conjointly serve one another. They are centers
                for meaningful, coherent, compassionate effulgence.
              </p>
              <button className="bg-[var(--primary)] text-sm lg:text-base text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[var(--primary-hover)] transition-colors shadow-md">
                Find a SUK Near You
              </button>
            </div>
          </div>

          {/* Right: Visual/Map Representation */}
          <div className="bg-[var(--bg-main)] p-8 rounded-2xl shadow-lg border border-[var(--border-subtle)]">
            <h3 className="text-lg lg:text-xl font-bold text-[var(--text-main)] mb-4">
              Delhi-NCR Network
            </h3>
            <ul className="space-y-3">
              {[
                "Rohini",
                "Dwarka",
                "Noida",
                "Gurgaon",
                "Faridabad",
                "Mayur Vihar",
              ].map((loc) => (
                <li
                  key={loc}
                  className="text-xs lg:text-sm flex items-center text-[var(--text-muted)] border-b border-[var(--border-subtle)] pb-2 last:border-0"
                >
                  <span className="h-2 w-2 bg-[var(--primary)] rounded-full mr-3"></span>
                  {loc} Satsang Kendra
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Kendras;
