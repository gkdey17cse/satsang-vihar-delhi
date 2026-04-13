// src/pages/conference/components/ConferenceGallery.jsx
import { Download } from "lucide-react";

const ConferenceGallery = ({ galleryImages, showAllGallery, setShowAllGallery }) => {
  // Chunk images into groups of 6
  const chunkedGallery = [];
  for (let i = 0; i < galleryImages.length; i += 6) {
    chunkedGallery.push(galleryImages.slice(i, i + 6));
  }

  return (
    <section id="gallery" className="py-12 lg:py-20 bg-[var(--bg-tertiary)]">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 md:gap-8 mb-12 md:mb-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[var(--text-main)] mb-4 tracking-tight">
              Glimpses of <span className="text-[var(--primary)]">ASPIRE</span>
            </h2>
            <div className="w-20 md:w-24 h-1.5 md:h-2 bg-[var(--primary)] rounded-full"></div>
          </div>
          <p className="w-full lg:w-1/2 leading-relaxed text-[var(--text-muted)] text-sm lg:text-base text-justify md:text-left lg:text-justify">
            Relive the memorable moments from our Comprehensive Career Counselling
            Seminar. Explore highlights of keynote sessions, 1:1 mentorship circles,
            and interactive student engagements designed to shape the leaders of tomorrow.
          </p>
        </div>

        {/* Asymmetric Grid */}
        <div className="flex flex-col gap-4 md:gap-6">
          {chunkedGallery
            .slice(0, showAllGallery ? chunkedGallery.length : 1)
            .map((chunk, chunkIdx) => (
              <div key={chunkIdx} className="flex flex-wrap md:-m-2 -m-1">
                {/* Left Half */}
                <div className="flex flex-wrap w-1/2">
                  {chunk[0] && (
                    <div className="md:p-2 p-1 w-1/2 relative group overflow-hidden">
                      <img
                        alt="gallery"
                        className="w-full h-48 md:h-64 object-cover block rounded-xl md:rounded-2xl transition-transform duration-500 group-hover:scale-110"
                        src={chunk[0]}
                      />
                      <a
                        href={chunk[0]}
                        download
                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                      >
                        <div className="bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-[var(--primary)] text-white">
                          <Download size={24} />
                        </div>
                      </a>
                    </div>
                  )}
                  {chunk[1] && (
                    <div className="md:p-2 p-1 w-1/2 relative group overflow-hidden">
                      <img
                        alt="gallery"
                        className="w-full h-48 md:h-64 object-cover block rounded-xl md:rounded-2xl transition-transform duration-500 group-hover:scale-110"
                        src={chunk[1]}
                      />
                      <a
                        href={chunk[1]}
                        download
                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                      >
                        <div className="bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-[var(--primary)] text-white">
                          <Download size={24} />
                        </div>
                      </a>
                    </div>
                  )}
                  {chunk[2] && (
                    <div className="md:p-2 p-1 w-full relative group overflow-hidden">
                      <img
                        alt="gallery"
                        className="w-full h-64 md:h-96 object-cover block rounded-xl md:rounded-2xl transition-transform duration-500 group-hover:scale-110"
                        src={chunk[2]}
                      />
                      <a
                        href={chunk[2]}
                        download
                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                      >
                        <div className="bg-white/20 backdrop-blur-md p-4 rounded-full hover:bg-[var(--primary)] text-white">
                          <Download size={28} />
                        </div>
                      </a>
                    </div>
                  )}
                </div>

                {/* Right Half */}
                <div className="flex flex-wrap w-1/2">
                  {chunk[3] && (
                    <div className="md:p-2 p-1 w-full relative group overflow-hidden">
                      <img
                        alt="gallery"
                        className="w-full h-64 md:h-96 object-cover block rounded-xl md:rounded-2xl transition-transform duration-500 group-hover:scale-110"
                        src={chunk[3]}
                      />
                      <a
                        href={chunk[3]}
                        download
                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                      >
                        <div className="bg-white/20 backdrop-blur-md p-4 rounded-full hover:bg-[var(--primary)] text-white">
                          <Download size={28} />
                        </div>
                      </a>
                    </div>
                  )}
                  {chunk[4] && (
                    <div className="md:p-2 p-1 w-1/2 relative group overflow-hidden">
                      <img
                        alt="gallery"
                        className="w-full h-48 md:h-64 object-cover block rounded-xl md:rounded-2xl transition-transform duration-500 group-hover:scale-110"
                        src={chunk[4]}
                      />
                      <a
                        href={chunk[4]}
                        download
                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                      >
                        <div className="bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-[var(--primary)] text-white">
                          <Download size={24} />
                        </div>
                      </a>
                    </div>
                  )}
                  {chunk[5] && (
                    <div className="md:p-2 p-1 w-1/2 relative group overflow-hidden">
                      <img
                        alt="gallery"
                        className="w-full h-48 md:h-64 object-cover block rounded-xl md:rounded-2xl transition-transform duration-500 group-hover:scale-110"
                        src={chunk[5]}
                      />
                      <a
                        href={chunk[5]}
                        download
                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                      >
                        <div className="bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-[var(--primary)] text-white">
                          <Download size={24} />
                        </div>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>

        {/* See More / Show Less Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAllGallery(!showAllGallery)}
            className="group relative inline-flex items-center justify-center px-10 py-3 font-bold text-white transition-all duration-300 bg-[var(--primary)] rounded-full hover:bg-[var(--primary-hover)] shadow-xl hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)] active:scale-95"
          >
            <span className="mr-2">
              {showAllGallery ? "Show Less" : "See All Moments"}
            </span>
            <div
              className={`transition-transform duration-300 ${
                showAllGallery ? "rotate-180" : "group-hover:translate-y-1"
              }`}
            >
              ↓
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConferenceGallery;