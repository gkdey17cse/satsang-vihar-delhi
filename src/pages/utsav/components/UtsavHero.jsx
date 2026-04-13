import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

export const UtsavHero = ({
  title,
  subtitle,
  date,
  association,
  quote,
  images,
  links,
}) => {
  return (
    <section
      id="hero"
      className="relative w-full h-[100vh] lg:h-[85vh] flex items-center justify-center overflow-hidden"
    >
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        loop
        speed={2000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="absolute inset-0 w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full">
              <img
                src={src}
                alt={`Utsav ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent z-10"></div>
      <div className="relative z-20 text-center px-4 py-8 max-w-7xl mx-auto">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white mb-1.5 lg:mb-3 leading-tight drop-shadow-xl">
          {title}
        </h1>
        <div className="md:text-lg lg:text-xl font-bold text-[var(--primary)] mb-3 drop-shadow-lg">
          138<sup>th</sup> Holy Birth Anniversary of
        </div>
        <h2
          className="md:text-lg lg:text-xl xl:text-2xl font-black text-white mb-2 lg:mb-5 leading-tight drop-shadow-xl"
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />

        {association && (
          <div className="inline-block px-5 lg:px-8 py-2.5 rounded-full text-gray-200 border border-[var(--primary)] p-3 bg-black/80">
            <span className="text-[var(--primary)] font-bold text-xs uppercase tracking-widest">
              {association}
            </span>
          </div>
        )}

        <div className="inline-block bg-black/80 backdrop-blur-md px-6 py-3 rounded-xl shadow-2xl border border-white/60 my-4 lg:my-6">
          <p className="text-sm md:text-lg font-semibold text-[var(--primary)] flex items-center gap-2">
            {date}
          </p>
        </div>

        <div className="hidden lg:block max-w-2xl mx-auto py-1.5 lg:mb-8">
          <p className="text-xs md:text-sm italic text-gray-200 border-l-4 border-[var(--primary)] p-3 bg-black/40 rounded-r-lg">
            "{quote.text}"
            <span className="block mt-2 text-xs text-gray-300 text-right">
              — {quote.author}
            </span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-1.5 justify-center py-2">
          {links.map((link, i) =>
            link.isScroll ? (
              <ScrollLink
                key={i}
                to={link.to}
                smooth
                offset={-50}
                duration={800}
                className={link.className}
              >
                {link.label}
              </ScrollLink>
            ) : (
              <Link
                key={i}
                to={link.to}
                target={link.target || "_self"}
                className={link.className}
              >
                {link.label}
              </Link>
            ),
          )}
        </div>
        <p className="mt-2.5 lg:mt-6 text-xs md:text-sm font-medium text-gray-900">
          <span className="text-[var(--primary)]">Vande Purushottamam!</span> •
          Open to all irrespective of caste, creed, religion and nationality
        </p>
      </div>
    </section>
  );
};
