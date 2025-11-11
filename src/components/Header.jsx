/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaPhone } from "react-icons/fa6";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { Search, Menu, X, ChevronDown } from "lucide-react";

import logo from "../assets/images/anizor_logo.svg";
import cartIcon from "../assets/images/cart.svg";

const Header = () => {
  const messages = [
    "Fashion to Celebrate Your Uniqueness",
    "Elegance Redefined for Every Occasion",
    "Luxury & Tradition in Every Stitch",
  ];

  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);
  const [activeDesktopMenu, setActiveDesktopMenu] = useState(null);

  const cartCount = 3;

  const menus = [
    {
      title: "DESIGNER WEAR"
      
    },
    {
      title: "PARTY WEAR",
      sub: ["Three Pcs", "Two Pcs", "Gown", "Kaftan"],
    },
    {
      title: "ETHNIC",
      sub: ["Saree", "Unstitched"],
    },
    {
      title: "WESTERN",
      sub: ["Co-ords", "Tops", "Pant"],
    },
    {
      title: "MEN",
      sub: ["Panjabi", "Koti"],
    },
    {
      title: "ACCESSORIES",
      sub: ["Clothing-Shawl", "Jewelry", "Hand Bag", "Footwear"]
    },
  ];

  useEffect(() => {
    const intv = setInterval(
      () => setIndex((prev) => (prev + 1) % messages.length),
      3000
    );
    return () => clearInterval(intv);
  }, []);

  return (
    <>
      <div className="sticky top-0 z-50">
        
        {/* ✅ TOP BAR */}
        <div className="w-full bg-[#D4F4F0] text-gray-800 border-b border-gray-200 text-sm font-[Calibri]">
          <div className="w-full h-10 flex items-center px-4 md:px-6">

            {/* LEFT */}
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

            {/* CENTER MESSAGE */}
            <div className="flex flex-1 justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={`msg-${index}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="text-base font-bold font-[Verdana] text-gray-700 whitespace-nowrap"
                >
                  {messages[index]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* RIGHT */}
            <div className="hidden md:flex items-center gap-2 flex-none min-w-[120px] justify-end cursor-pointer hover:text-gray-600 whitespace-nowrap">
              <MdLocationOn size={16} className="text-gray-700" />
              <span className="text-lg font-medium text-gray-800">Find Us</span>
            </div>

          </div>
        </div>

        {/* ✅ NAV BAR */}
        <nav className="bg-white shadow w-full">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

            {/* MOBILE LEFT */}
            <div className="flex items-center gap-6 md:hidden">
              <Menu
                className="w-7 h-7 text-gray-700 cursor-pointer"
                onClick={() => setOpen(true)}
              />

              <img src={logo} alt="Anizor" className="h-8 object-contain" />
            </div>

            {/* DESKTOP LEFT */}
            <div className="hidden md:flex items-center gap-2">
              <img src={logo} alt="Anizor" className="h-10 object-contain" />
            </div>

            {/* ✅ DESKTOP CENTER MENU */}
              <ul className="hidden md:flex space-x-8 text-gray-800 font-semibold tracking-wide">
              {menus.map((m, idx) => (
                <li key={idx} className="relative group cursor-pointer">
                  <div className="flex items-center gap-1">
                    {m.title}
                    {m.sub?.length > 0 && <ChevronDown size={16} />}
                  </div>

                  {m.sub?.length > 0 && (
                    <div
                      className="
                        absolute left-0 top-full 
                        bg-white border shadow-lg w-48 z-50
                        hidden group-hover:block
                        pt-2
                      "
                    >
                      {m.sub.map((s, i) => (
                        <p
                          key={i}
                          className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                        >
                          {s}
                        </p>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>



            {/* DESKTOP RIGHT */}
            <div className="hidden md:flex items-center space-x-5 text-gray-700 font-medium">
              <a>Login</a>
              <a>Create Account</a>

              <Search className="w-5 h-5 cursor-pointer hover:text-black" />

              <div className="relative cursor-pointer">
                <img src={cartIcon} alt="cart" className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-1.5 rounded-full">
                    {cartCount}
                  </span>
                )}
              </div>
            </div>

            {/* ✅ MOBILE RIGHT */}
            <div className="md:hidden flex items-center gap-4 text-gray-600">
              <Search className="w-5 h-5 cursor-pointer hover:text-black" />

              <div className="relative cursor-pointer">
                <img src={cartIcon} alt="cart" className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-1.5 rounded-full">
                    {cartCount}
                  </span>
                )}
              </div>
            </div>
          </div>
        </nav>

      </div>

      {/* ✅ BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ✅ MOBILE DRAWER */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white z-50 shadow-xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <X
            className="w-6 h-6 text-gray-700 cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>

        {/* ✅ MOBILE MENU WITH SUB */}
        <div className="px-6 space-y-6 text-gray-800 font-medium">
          <p className="font-bold text-sm text-gray-600">ALL CATEGORY</p>

          {menus.map((m, idx) => (
            <div key={idx}>
              <div
                className="flex justify-between items-center py-2 cursor-pointer"
                onClick={() =>
                  setActiveMobileMenu(activeMobileMenu === idx ? null : idx)
                }
              >
                <span>{m.title}</span>
                {m.sub?.length > 0 && (
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      activeMobileMenu === idx ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              {/* ✅ Submenu */}
              {activeMobileMenu === idx && m.sub?.length > 0 && (
                <div className="pl-4 space-y-2 pb-2">
                  {m.sub.map((s, i) => (
                    <p key={i} className="cursor-pointer text-gray-600">
                      {s}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}

          <hr />

          <div className="space-y-3 pt-3">
            <p>SIGN IN</p>
            <p>CREATE ACCOUNT</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
