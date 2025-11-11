import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import logo from "../assets/images/anizor_logo.svg";
import cartIcon from "../assets/images/cart.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const cartCount = 3;

  return (
    <>
      <nav className="bg-white shadow w-full z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

          {/* MOBILE LEFT */}
          <div className="flex items-center gap-6 md:hidden">
            <Menu
              className="w-7 h-7 text-gray-700 cursor-pointer"
              onClick={() => setOpen(true)}
            />

            <img src={logo} alt="Anizor" className="h-8 object-contain" />
          </div>

          {/* DESKTOP LOGO */}
          <div className="hidden md:flex items-center gap-2">
            <img src={logo} alt="Anizor" className="h-10 object-contain" />
          </div>

          {/* CENTER MENU */}
          <ul className="hidden md:flex space-x-8 text-gray-800 font-semibold tracking-wide">
            <li>DESIGNER WEAR</li>
            <li>PARTY WEAR ▾</li>
            <li>SAREE ▾</li>
            <li>WESTERN ▾</li>
            <li>MEN ▾</li>
            <li>ACCESSORIES ▾</li>
          </ul>

          {/* RIGHT SECTION */}
          <div className="hidden md:flex items-center space-x-5 text-gray-700 font-medium">
            <a>Login</a>
            <a>Create Account</a>

            <Search className="w-5 h-5 cursor-pointer hover:text-black" />

            {/* CART */}
            <div className="relative cursor-pointer">
              <img src={cartIcon} alt="cart" className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-1.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </div>
          </div>

          {/* MOBILE RIGHT */}
          <div className="md:hidden flex items-center gap-4 text-gray-600">
            <Search className="w-5 h-5 cursor-pointer" />

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

      {/* Mobile drawer etc remains SAME */}
    </>
  );
};

export default Navbar;
