import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import NotificationMarquee from "../components/NotificationMarquee";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// Asset Imports
import Image1 from "../assets/Photos/Caraousel_1.png";
import Image2 from "../assets/Photos/Caraousel_2.png";
import Image3 from "../assets/Photos/Caraousel_3.png";

const Hero = () => {
  const carouselImages = [Image1, Image2, Image3];

  return (
    <section id="hero" className="bg-[var(--bg-main)]">
      {/* 1. Separated Notification NotificationMarquee Component */}
      <NotificationMarquee />

      {/* 2. Infinite Auto-scrolling Dissolve Carousel */}
      <div className="w-full h-[40vh] md:h-[60vh]">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          speed={2000}
          autoplay={{
            delay: 5000,
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

      {/* 3. Hero Content */}
      <div className="relative py-24 px-4 text-center bg-[var(--bg-tertiary)] border-b border-[var(--border-subtle)]">
        <div className="max-w-11/12 mx-auto relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-[var(--text-main)] mb-8 tracking-tight">
            Do Never Die,{" "}
            <span className="text-[var(--primary)]">Nor Cause Death</span> but
            resist <span className="text-[var(--primary)]">Death to Death</span>
          </h1>

          <p className="text-lg md:text-xl text-[var(--text-muted)] mb-12 max-w-2xl mx-auto leading-relaxed">
            Nurturing the path of existential upliftment through adherence to
            the Living Ideal.
          </p>

          <div className="mb-14">
            <div className="inline-block px-8 py-4 border-y border-[var(--border-subtle)]">
              <p className="italic text-[var(--text-brand-deep)] text-xl md:text-2xl font-serif">
                "Fusional adherence that evolves into being with respective
                becoming—is life."
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-10 py-4 rounded-full text-lg font-semibold transition-all cursor-pointer">
              Install Him with Love
            </div>
            <p className="text-[var(--text-muted)] text-sm tracking-wide uppercase">
              Where love concentrates, there the being dwells
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;