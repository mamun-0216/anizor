import React from "react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FashionOnTrend from "../components/FashionOnTrend";
import CategoryCarousel from "../components/CategoryCarousel";
import NewArrival from "../components/NewArrival";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="bg-white text-gray-900 font-sans">
      <TopBar />
      <div className="pt-12">   {/* Push page below TopBar */}
        <Navbar />
        <HeroSection />
        <FashionOnTrend />
        <CategoryCarousel />
        <NewArrival />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;

