// src/sections/Hero.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import NotificationMarquee from "../components/NotificationMarquee";
import "swiper/css";
import "swiper/css/effect-fade";
import Image1 from "../assets/Photos/Caraousel_1.png";
import Image2 from "../assets/Photos/Caraousel_2.png";
import Image3 from "../assets/Photos/Caraousel_3.png";

const Hero = () => {
  const carouselImages = [Image1, Image2, Image3];

  return (
    <section id="hero" className="bg-[var(--bg-main)]">
      <NotificationMarquee />

      <div className="w-full h-[40vh] md:h-[60vh]">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          speed={2000}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="h-full w-full"
        >
          {carouselImages.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full relative">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-full mx-auto px-4 py-16 text-center bg-[var(--bg-tertiary)]">
        <h1 className="text-3xl md:text-5xl font-bold text-[var(--text-main)] mb-8 tracking-tight">
          Do Never Die,{" "}
          <span className="text-[var(--primary)]">Nor Cause Death</span> but
          resist <span className="text-[var(--primary)]">Death to Death</span>
        </h1>

        <p className="tmd:text-xl text-[var(--text-muted)] mb-12 max-w-2xl mx-auto leading-relaxed">
          Nurturing the path of existential upliftment through adherence to the
          Living Ideal.
        </p>

        <div className="mb-14">
          <div className="inline-block px-8 py-4 border-y border-[var(--border-subtle)]">
            <p className="italic text-[var(--text-brand-deep)] text-lg md:text-xl lg:text-2xl font-serif">
              "Fusional adherence that evolves into being with respective
              becoming—is life."
            </p>
            <span className="block mt-2 text-sm text-[var(--text-muted)] opacity-70 font-sans">
              — Sree Sree Thakur Anukulchandra, Satyanusaran
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="bg-[var(--primary)] text-white px-10 py-2.5 lg:py-4 rounded-full text-lg font-semibold shadow-lg">
            Install Him with Love
          </div>
          <p className="text-[var(--text-muted)] text-xs lg:text-sm tracking-wide uppercase">
            Where love concentrates, there the being dwells
          </p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
