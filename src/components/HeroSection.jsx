import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const HeroSection = () => {
  const slides = [
    {
      image: "/heros/hero1.jpg",
      title: "Discover Luxury & Tradition in Every Stitch",
      subtitle: "Bridal, Party & Designer Wear – Banani, Dhaka",
      buttonText: "Shop Bridal",
      buttonLink: "/bridal",
    },
    {
      image: "/heros/hero2.jpg",
      title: "Elegance Redefined for Every Occasion",
      subtitle: "New Arrivals • Trending Styles",
      buttonText: "Shop Collection",
      buttonLink: "/new-arrivals",
    },
    {
      image: "/heros/hero3.jpg",
      title: "When Tradition Meets Fashion",
      subtitle: "Handcrafted with Love & Culture",
      buttonText: "Explore Ethnic",
      buttonLink: "/ethnic",
    },
  ];

  return (
    <section className="relative h-[85vh] w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="h-full w-full"
      >
        {slides.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="h-full w-full bg-cover bg-center relative flex items-center justify-center"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Text content */}
              <div className="relative text-center text-white px-6 max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-serif mb-4 drop-shadow-lg">
                  {item.title}
                </h1>

                <p className="text-lg md:text-xl mb-6 drop-shadow-lg">
                  {item.subtitle}
                </p>

                {item.buttonText && (
                  <a href={item.buttonLink}>
                    <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition">
                      {item.buttonText}
                    </button>
                  </a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
