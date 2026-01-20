import { Link } from "react-router-dom";

const Mission = () => {
  return (
    <section id="mission" className="py-20 bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-[var(--text-main)] mb-8">
          Our Mission & Vision
        </h2>

        <p className="text-lg text-[var(--text-muted)] max-w-3xl mx-auto mb-12 leading-relaxed">
          Satsang Vihar New Delhi is an integral branch of the{" "}
          <strong className="text-[var(--text-brand-deep)]">Satsang Ashram, Deoghar</strong>. 
          Established under the divine vision of Sri Sri Thakur, we carry forward the flame 
          of 'Ideal-centric life' to the heart of the capital.
        </p>

        {/* Cards using Secondary Background */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {["Jajan", "Jaajan", "Ishtabhriti"].map((item) => (
            <div
              key={item}
              className="bg-[var(--bg-secondary)] p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-[var(--border-subtle)]"
            >
              <div className="h-16 w-16 bg-[var(--bg-tertiary)] text-[var(--primary)] rounded-full mx-auto mb-4 flex items-center justify-center border border-[var(--border-accent)]">
                <span className="text-2xl">☸️</span>
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-main)] mb-2">
                {item}
              </h3>
            </div>
          ))}
        </div>

        {/* CTA Area using Tertiary Background */}
        <div className="bg-[var(--bg-tertiary)] p-8 rounded-2xl border border-[var(--border-accent)]">
          <p className="text-[var(--text-brand-deep)] mb-6 font-medium">
            From a humble beginning to a spiritual landmark in Delhi—explore how
            the Vihar has served the community since its inception.
          </p>
          <Link
            to="/history"
            className="text-[var(--primary)] font-bold hover:text-[var(--primary-hover)] transition-colors"
          >
            Explore Our History →
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Mission;