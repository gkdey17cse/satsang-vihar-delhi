// src/pages/conference/components/ConferenceHero.jsx
import { Link as ScrollLink } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const ConferenceHero = ({ top5Images, registrationLink }) => {
  return (
    <section
      id="hero"
      className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          speed={2000}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="w-full h-full"
        >
          {top5Images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full relative">
                <img
                  src={src}
                  alt={`Background ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-main)]"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[var(--primary)] bg-black/0 backdrop-blur-md shadow-lg">
          <span className="text-[var(--primary)] font-bold text-xs md:text-sm uppercase tracking-widest">
            Organised By Satsang Vihar, Delhi
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-2xl">
          ASPIRE <br className="hidden sm:block" />
          Career <span className="text-[var(--primary)]">Seminar 2026</span>
        </h1>

        <div className="flex flex-col items-center justify-center gap-4 text-white/95 mb-10 font-medium">
          <div className="flex items-center gap-3 text-sm md:text-lg lg:text-xl bg-white/10 px-6 py-2 rounded-full backdrop-blur-md border border-white/20">
            <span className="text-xl">📍</span>
            <span>
              DRDO Residential Complex, (DROMI) Timarpur (Neatest Metro
              Vishwavidyalaya Gate no 1)
            </span>
          </div>
          <div className="flex items-center gap-3 text-sm md:text-lg lg:text-xl bg-[var(--primary)]/90 px-6 py-2 rounded-full shadow-lg">
            <span className="text-xl">📅</span>
            <span>20th February 2026 (Friday) • 09:30 AM</span>
          </div>
        </div>

        <p className="hidden md:block text-lg text-gray-200 mb-10 font-light max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          Guiding students toward informed, confident, and future-ready career
          decisions through expert mentorship from IAS officers, DRDO
          scientists, and Global Industry Leaders.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-xs mx-auto sm:max-w-none">
          <ScrollLink
            to="gallery"
            smooth={true}
            duration={800}
            offset={-80}
            className="bg-[var(--primary)] cursor-pointer hover:bg-[var(--primary-hover)] text-white px-10 py-4 rounded-full text-base font-bold transition-all shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)] transform hover:-translate-y-1 text-center"
          >
            View Highlights
          </ScrollLink>
          <ScrollLink
            to="schedule"
            smooth={true}
            duration={800}
            offset={-50}
            className="cursor-pointer bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 px-10 py-4 rounded-full text-base font-bold transition-all text-center"
          >
            Full Schedule ↓
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default ConferenceHero;
