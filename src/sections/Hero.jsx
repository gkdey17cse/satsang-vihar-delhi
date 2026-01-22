// src/sections/Hero.jsx
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from "swiper/react";
// 1. Import EffectFade module
import { Autoplay, EffectFade } from "swiper/modules";

// 2. Import Swiper styles AND EffectFade styles
import "swiper/css";
import "swiper/css/effect-fade";

// Import your assets
import Image1 from "../assets/Photos/Caraousel_1.png";
import Image2 from "../assets/Photos/Caraousel_2.png";
import Image3 from "../assets/Photos/Caraousel_3.png";

const Hero = () => {
  const carouselImages = [Image1, Image2, Image3];

  return (
    <section id="hero" className="bg-[var(--bg-main)]">
      {/* 1. Notification Marquee */}
      <div className="bg-[var(--primary)] text-white py-2">
        <Marquee gradient={false} speed={40}>
          <span className="mx-4 font-medium">
            🔔 Upcoming Event: Special Dharma Unnyani Conference on [Date] — All
            are welcome!
          </span>
          <span className="mx-4 font-medium">
            — Daily Prayer times are updated on the portal.
          </span>
        </Marquee>
      </div>

      {/* 2. Infinite Auto-scrolling Dissolve Carousel */}
      <div className="w-full h-[40vh] md:h-[60vh]">
        <Swiper
          // 3. Added EffectFade to modules
          modules={[Autoplay, EffectFade]}
          // 4. Set effect to 'fade'
          effect="fade"
          // 5. CrossFade ensures the background doesn't show through during transition
          fadeEffect={{ crossFade: true }}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          speed={2000} // 2 seconds to dissolve (Smooth)
          autoplay={{
            delay: 5000, // Wait 3.5 seconds before changing
            disableOnInteraction: false,
          }}
          className="h-full w-full"
        >
          {carouselImages.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 3. Original Hero Content */}
      <div className="relative py-20 px-4 text-center bg-[var(--bg-tertiary)] border-b border-[var(--border-subtle)]">
        <div className="max-w-5xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[var(--text-main)] mb-4 tracking-tight">
            Being and <span className="text-[var(--primary)]">Becoming</span>.
          </h1>

          <p className="text-lg md:text-xl text-[var(--text-muted)] mb-8 font-light italic max-w-3xl mx-auto leading-relaxed">
            "To fulfill the mission of life and growth with every free access...
            entering in a common platform conjointly to serve one another—that
            is a blessed Socio-communistic Democratic Congress."
          </p>

          {/* Dynamic Vani Box */}
          <div className="bg-[var(--bg-secondary)]/80 backdrop-blur-md p-6 rounded-xl shadow-lg border-l-4 border-[var(--primary)] inline-block max-w-2xl mb-10">
            <p className="italic text-[var(--text-brand-deep)] font-medium text-lg">
              "Fusional adherence that evolves into being with respective
              becoming—is life."
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-8 py-4 rounded-full text-md font-bold transition-all shadow-lg transform hover:-translate-y-1 cursor-pointer">
              Install Him with Love
            </button>
            <span className="text-[var(--text-muted)] text-sm italic mt-2 sm:mt-0">
              "Where love concentrates, there the being dwells."
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;