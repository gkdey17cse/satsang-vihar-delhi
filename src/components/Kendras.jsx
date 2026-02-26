// src/sections/Kendras.jsx
import { Link } from "react-router-dom";

const Kendras = () => {
  const regionalHighlights = [
    {
      region: "South Delhi",
      count: 17,
      areas: "Mehrauli, Vasant Kunj, AIIMS, R K Puram",
    },
    {
      region: "West Delhi",
      count: 10,
      areas: "Dwarka, Uttam Nagar, Paschim Vihar",
    },
    {
      region: "North & Central",
      count: 6,
      areas: "Rohini, Narela, Karol Bagh",
    },
    { region: "NCR", count: 20, areas: "Noida, Gurgaon, Ghaziabad, Faridabad" },
  ];

  return (
    <section
      id="kendras"
      className="py-24 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-main)] mb-6">
              Upayojna Kendras
            </h2>
            <div className="text-sm lg:text-base text-[var(--text-primary)] leading-relaxed">
              <p className="mb-6 italic font-medium text-[var(--primary)] ">
                "I am as much within me as I am within you. If you do not become
                fulfilled, I remain unfulfilled to the same extent."
                <span className="block mt-2 text-xs opacity-70 text-gray-800 ">
                  — Sree Sree Thakur Anukulchandra
                </span>
              </p>
              <p className="mb-8">
                With <strong>53 active centers</strong> across the Delhi-NCR
                network, our Kendras serve as "Common Platforms" where devotees
                conjointly serve one another. These are centers for meaningful,
                coherent, and compassionate effulgence.
              </p>
              <Link
                to="/upyojna"
                className="inline-block bg-[var(--primary)] text-white px-8 py-3 rounded-full font-bold hover:bg-[var(--primary-hover)] transition-all shadow-lg"
              >
                View All 53 Kendras & Map
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {regionalHighlights.map((item) => (
              <div
                key={item.region}
                className="bg-[var(--bg-main)] p-6 rounded-2xl border border-[var(--border-subtle)] shadow-sm"
              >
                <h4 className="font-bold text-[var(--primary)] mb-1">
                  {item.region}
                </h4>
                <p className="text-xs text-[var(--text-muted)] mb-2">
                  {item.areas}...
                </p>
                <span className="text-xl font-extrabold text-[var(--text-main)]">
                  {item.count} Centers
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kendras;
