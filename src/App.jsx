import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FashionOnTrend from "./components/FashionOnTrend";
import CategoryCarousel from "./components/CategoryCarousel";
import NewArrival from "./components/NewArrival";
import Testimonial from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />   {/* ✅ TopBar + Navbar */}
      <HeroSection />     {/* ✅ Rest of your page */}
      <FashionOnTrend/>
      <CategoryCarousel/>
      <NewArrival/>
      <Testimonial/>
      <Footer/>
    </>
  );
}

export default App;
