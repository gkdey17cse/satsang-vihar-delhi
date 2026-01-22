import { Link } from "react-router-dom";

const Mission = () => {
  const pillars = [
    {
      title: "Jajan",
      sub: "(Self-Exertion)",
      desc: "Investigate and invent the hows and whys by which matter extends and grows. It is the process of tuning the internal microcosm with the music of the Divine.",
      icon: "🧘‍♂️"
    },
    {
      title: "Jaajan",
      sub: "(Mass-Exertion)",
      desc: "Move on doing and dealing accordingly—elating everyone with the message of love, hope, charity and service that exalts!",
      icon: "🗣️"
    },
    {
      title: "Ishtabhriti",
      sub: "(Love-offering)",
      desc: "Adoration of the Great with devoted service is the way to be great, because bliss is materialized in them through their devotion and worship.",
      icon: "🌺"
    }
  ];

  return (
    <section id="mission" className="py-24 bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-[var(--text-main)] mb-6">Mission & Vision</h2>
          <p className="text-xl text-[var(--text-muted)] max-w-4xl mx-auto leading-relaxed">
            Satsang Vihar New Delhi stands as a lighthouse of the Ideal, rooted in the legacy of <strong>Satsang Ashram, Deoghar</strong>. 
            <br/><span className="italic block mt-4 text-[var(--primary)]">"To ignore the source is to be deprived of resources."</span>
          </p>
        </div>

        {/* The Three Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pillars.map((item) => (
            <div
              key={item.title}
              className="bg-[var(--bg-secondary)] p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-[var(--border-subtle)] flex flex-col items-center text-center group"
            >
              <div className="h-16 w-16 bg-[var(--bg-tertiary)] text-3xl flex items-center justify-center rounded-full mb-6 group-hover:scale-110 transition-transform border border-[var(--border-accent)]">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-[var(--text-main)] mb-1">{item.title}</h3>
              <p className="text-sm font-semibold text-[var(--primary)] mb-4">{item.sub}</p>
              <p className="text-[var(--text-muted)] leading-relaxed italic">"{item.desc}"</p>
            </div>
          ))}
        </div>

        {/* Vision Statement */}
        <div className="bg-[var(--bg-tertiary)] p-10 rounded-3xl border border-[var(--border-accent)] max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-[var(--text-brand-deep)] mb-4">Our Vision</h3>
          <p className="text-[var(--text-brand-deep)] text-lg mb-8">
            To foster a society where every individual, through "active, agile, inquisitive, and responsible" adherence to the Living Ideal, achieves existential upliftment.
          </p>
          <Link
            to="/history"
            className="inline-block bg-[var(--bg-secondary)] text-[var(--primary)] font-bold px-8 py-3 rounded-full border border-[var(--border-subtle)] hover:bg-[var(--primary)] hover:text-white transition-colors"
          >
            Explore Our History →
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Mission;