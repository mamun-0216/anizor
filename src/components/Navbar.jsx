import React, { useState } from "react";
import { Search, Menu } from "lucide-react";
import logo from "../assets/images/anizor_logo.svg";
import cartIcon from "../assets/icons/cart.svg";   // ✅ custom cart icon

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow z-40 w-full">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* ✅ LEFT SECTION  —  Mobile & Desktop Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Anizor" className="h-10 object-contain" />
        </div>

        {/* ✅ MOBILE — LEFT Hamburger */}
        <button
          className="md:hidden block"
          onClick={() => setOpen(!open)}
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>

        {/* ✅ CENTER DESKTOP MENU */}
        <ul className="hidden md:flex space-x-8 text-gray-800 font-semibold tracking-wide">

          <li className="hover:text-black cursor-pointer">
            DESIGNER WEAR
          </li>

          <li className="hover:text-black cursor-pointer relative">
            PARTY WEAR <span className="text-xs ml-1">▼</span>
          </li>

          <li className="hover:text-black cursor-pointer relative">
            WESTERN <span className="text-xs ml-1">▼</span>
          </li>

          <li className="hover:text-black cursor-pointer relative">
            MEN <span className="text-xs ml-1">▼</span>
          </li>

          <li className="hover:text-black cursor-pointer relative">
            ACCESSORIES <span className="text-xs ml-1">▼</span>
          </li>
        </ul>

        {/* ✅ RIGHT — Desktop Items */}
        <div className="hidden md:flex items-center space-x-5 text-gray-700 font-medium">
          <a href="#" className="hover:text-black">Login</a>
          <a href="#" className="hover:text-black">Create Account</a>

          <Search className="w-5 h-5 cursor-pointer hover:text-black" />

          {/* ✅ Custom cart icon */}
          <img
            src={cartIcon}
            alt="Cart"
            className="w-6 h-6 cursor-pointer hover:opacity-80"
          />
        </div>
      </div>

      {/* ✅ MOBILE DROPDOWN PANEL */}
      {open && (
        <div className="md:hidden bg-white shadow px-4 py-3 space-y-4 text-gray-700 font-medium">

          <ul className="space-y-3">
            <li className="hover:text-black cursor-pointer">DESIGNER WEAR</li>
            <li className="hover:text-black cursor-pointer">PARTY WEAR</li>
            <li className="hover:text-black cursor-pointer">WESTERN</li>
            <li className="hover:text-black cursor-pointer">MEN</li>
            <li className="hover:text-black cursor-pointer">ACCESSORIES</li>
          </ul>

          {/* ✅ Mobile Bottom Options */}
          <div className="pt-3 border-t flex items-center justify-between">
            <a href="#" className="hover:text-black">Login</a>
            <a href="#" className="hover:text-black">Create Account</a>

            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 cursor-pointer hover:text-black" />

              {/* ✅ Custom cart icon */}
              <img
                src={cartIcon}
                alt="Cart"
                className="w-6 h-6 cursor-pointer hover:opacity-80"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
