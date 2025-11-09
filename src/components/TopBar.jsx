/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaPhone } from "react-icons/fa6";
import { MdEmail, MdLocationOn } from "react-icons/md";

const TopBar = () => {
  const messages = [
    "Fashion to Celebrate Your Uniqueness",
    "Elegance Redefined for Every Occasion",
    "Luxury & Tradition in Every Stitch",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % messages.length),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#D4F4F0] text-gray-800 text-xs sm:text-sm md:text-base font-[Calibri] fixed top-0 left-0 z-50 border-b border-gray-200">

      {/* ✅ Container */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-1 px-4 md:px-6 py-1">

        {/* ✅ LEFT */}
        <div className="flex items-center gap-4 md:gap-8 whitespace-nowrap">
          <div className="flex items-center gap-2">
            <FaPhone size={16} className="text-gray-700" />
            <span className="text-lg font-medium text-gray-800">
              +8801717196665
            </span>
          </div>

          {/* Email hidden on mobile */}
          <div className="hidden sm:flex items-center gap-2">
            <MdEmail size={18} className="text-gray-700" />
            <span className="text-lg font-medium text-gray-800">
              contact@anizor.com
            </span>
          </div>
        </div>

        {/* ✅ CENTER — FIXED */}
        <div className="relative flex-1 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={`msg-${index}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="text-[13px] sm:text-sm md:text-base font-[Verdana] font-bold not-italic text-gray-700 whitespace-nowrap text-center"
            >
              {messages[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* ✅ RIGHT */}
        <div className="flex items-center gap-2 whitespace-nowrap cursor-pointer hover:text-gray-600">
          <MdLocationOn size={18} className="text-gray-700" />
          <span className="text-lg font-medium text-gray-800">
            Find Us
          </span>
        </div>

      </div>
    </div>
  );
};

export default TopBar;
