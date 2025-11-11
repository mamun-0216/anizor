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
    <div className="w-full bg-[#D4F4F0] text-gray-800 text-sm font-[Calibri] border-b border-gray-200">
      <div className="w-full h-10 flex items-center px-4 md:px-6">
        
        {/* LEFT (Desktop) */}
        <div className="hidden md:flex items-center gap-8 flex-none min-w-[380px]">
          <div className="flex items-center gap-2">
            <FaPhone size={14} className="text-gray-700" />
            <span className="text-lg font-medium text-gray-800">
              +8801717196665
            </span>
          </div>

          <div className="flex items-center gap-2">
            <MdEmail size={16} className="text-gray-700" />
            <span className="text-lg font-medium text-gray-800">
              contact@anizor.com
            </span>
          </div>
        </div>

        {/* CENTER (Mobile + Desktop) */}
        <div className="flex flex-1 justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={`msg-${index}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="text-base font-[Verdana] font-bold text-gray-700 whitespace-nowrap"
            >
              {messages[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* RIGHT (Desktop only) */}
        <div className="hidden md:flex items-center gap-2 flex-none min-w-[120px] justify-end cursor-pointer hover:text-gray-600 whitespace-nowrap">
          <MdLocationOn size={16} className="text-gray-700" />
          <span className="text-lg font-medium text-gray-800">Find Us</span>
        </div>

      </div>
    </div>
  );
};

export default TopBar;
