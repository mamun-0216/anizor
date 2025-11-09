import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[85vh] flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/assets/hero-bg.jpg')" }}
    >
      <div className="bg-black/40 absolute inset-0"></div>
      <div className="relative text-center px-6">
        <h1 className="text-4xl md:text-6xl font-serif mb-4">
          Discover Luxury & Tradition in Every Stitch
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Bridal, Party & Designer Wear – Banani, Dhaka
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
