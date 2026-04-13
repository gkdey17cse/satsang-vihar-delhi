import { useState } from "react";
import {
  PlayCircle,
  Image as ImageIcon,
  Download,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

// Individual Image Component with Skeleton Loader and Hover Overlay
const ImageWithSkeleton = ({ src, alt, className }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={`relative group overflow-hidden bg-[var(--bg-primary)] ${className}`}
    >
      {/* Loading Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 animate-pulse flex items-center justify-center z-10">
          <ImageIcon className="w-8 h-8 text-[var(--text-muted)] opacity-30 animate-bounce" />
        </div>
      )}

      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoading(false)}
        loading="lazy"
        className={`w-full h-full object-cover block rounded-xl md:rounded-2xl transition-transform duration-700 group-hover:scale-110 ${
          isLoading ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      />

      {/* Download Overlay */}
      <a
        href={src}
        download
        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl md:rounded-2xl z-20"
      >
        <div className="bg-white/20 backdrop-blur-md p-3 md:p-4 rounded-full hover:bg-[var(--primary)] text-white transition-colors">
          <Download size={24} className="md:w-7 md:h-7" />
        </div>
      </a>
    </div>
  );
};

export const UtsavMedia = ({ videos, images }) => {
  const safeImages = Array.isArray(images) ? images : [];
  const safeVideos = Array.isArray(videos) ? videos : [];

  // State to track how many CHUNKS to show
  // Starts by showing 1 chunk (6 images)
  const [visibleChunks, setVisibleChunks] = useState(1);

  // Chunk images into groups of 6 for the asymmetric layout
  const chunkedGallery = [];
  for (let i = 0; i < safeImages.length; i += 6) {
    chunkedGallery.push(safeImages.slice(i, i + 6));
  }

  // Determine what is currently visible
  const displayedChunks = chunkedGallery.slice(0, visibleChunks);

  // Handlers for extending/collapsing
  const handleShowMore = () => {
    setVisibleChunks((prev) => prev + 1); // Add one more chunk (6 images)
  };

  const handleShowLess = () => {
    setVisibleChunks(1); // Reset to 1 chunk
    const gallerySection = document.getElementById("photo-gallery-title");
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="media" className="py-12 lg:py-20 px-4 bg-[var(--bg-tertiary)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-main)] mb-4">
            Media & Memories
          </h2>
          <div className="w-24 h-1 bg-[var(--primary)] mx-auto rounded-full"></div>
        </div>

        {/* --- VIDEOS SECTION --- */}
        {safeVideos.length > 0 && (
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3 text-[var(--text-main)]">
              <PlayCircle className="text-[var(--primary)] w-8 h-8" /> Live
              Coverage & Special Videos
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {safeVideos.map((vid, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl overflow-hidden shadow-lg bg-black aspect-video border border-[var(--border-subtle)]"
                >
                  <iframe
                    src={vid}
                    width="100%"
                    height="100%"
                    style={{ border: "none", overflow: "hidden" }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- ASYMMETRIC GALLERY SECTION --- */}
        <div id="photo-gallery-title" className="scroll-mt-24">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 md:gap-8 mb-12">
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl md:text-4xl font-extrabold text-[var(--text-main)] mb-4 tracking-tight flex items-center gap-3">
                <ImageIcon className="text-[var(--primary)] w-8 h-8" />
                Glimpses of <span className="text-[var(--primary)]">Utsav</span>
              </h3>
            </div>
            <p className="w-full lg:w-1/2 leading-relaxed text-[var(--text-muted)] text-sm lg:text-base text-justify md:text-left lg:text-justify">
              Relive the memorable moments from the holy celebrations. Explore
              highlights of the events, musical performances, and the vibrant
              spirit of the community gathering.
            </p>
          </div>

          {/* Asymmetric Grid */}
          <div className="flex flex-col gap-4 md:gap-6">
            {displayedChunks.map((chunk, chunkIdx) => (
              <div key={chunkIdx} className="flex flex-wrap md:-m-2 -m-1">
                {/* Left Half */}
                <div className="flex flex-wrap w-1/2">
                  {chunk[0] && (
                    <div className="md:p-2 p-1 w-1/2">
                      <ImageWithSkeleton
                        src={chunk[0].url}
                        alt={chunk[0].alt}
                        className="h-48 md:h-64 rounded-xl md:rounded-2xl"
                      />
                    </div>
                  )}
                  {chunk[1] && (
                    <div className="md:p-2 p-1 w-1/2">
                      <ImageWithSkeleton
                        src={chunk[1].url}
                        alt={chunk[1].alt}
                        className="h-48 md:h-64 rounded-xl md:rounded-2xl"
                      />
                    </div>
                  )}
                  {chunk[2] && (
                    <div className="md:p-2 p-1 w-full">
                      <ImageWithSkeleton
                        src={chunk[2].url}
                        alt={chunk[2].alt}
                        className="h-64 md:h-96 rounded-xl md:rounded-2xl"
                      />
                    </div>
                  )}
                </div>

                {/* Right Half */}
                <div className="flex flex-wrap w-1/2">
                  {chunk[3] && (
                    <div className="md:p-2 p-1 w-full">
                      <ImageWithSkeleton
                        src={chunk[3].url}
                        alt={chunk[3].alt}
                        className="h-64 md:h-96 rounded-xl md:rounded-2xl"
                      />
                    </div>
                  )}
                  {chunk[4] && (
                    <div className="md:p-2 p-1 w-1/2">
                      <ImageWithSkeleton
                        src={chunk[4].url}
                        alt={chunk[4].alt}
                        className="h-48 md:h-64 rounded-xl md:rounded-2xl"
                      />
                    </div>
                  )}
                  {chunk[5] && (
                    <div className="md:p-2 p-1 w-1/2">
                      <ImageWithSkeleton
                        src={chunk[5].url}
                        alt={chunk[5].alt}
                        className="h-48 md:h-64 rounded-xl md:rounded-2xl"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons Container */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {visibleChunks < chunkedGallery.length && (
              <button
                onClick={handleShowMore}
                className="group relative inline-flex items-center justify-center px-10 py-3 font-bold text-white transition-all duration-300 bg-[var(--primary)] rounded-full hover:bg-[var(--primary-hover)] shadow-xl hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)] active:scale-95"
              >
                <span className="mr-2">Load More Memories</span>
                <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" />
              </button>
            )}

            {visibleChunks > 1 && (
              <button
                onClick={handleShowLess}
                className="group relative inline-flex items-center justify-center px-10 py-3 font-bold text-[var(--text-muted)] border-2 border-[var(--text-muted)] transition-all duration-300 bg-transparent rounded-full hover:bg-[var(--text-muted)] hover:text-white shadow-xl active:scale-95"
              >
                <span className="mr-2">Show Less</span>
                <ChevronUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
