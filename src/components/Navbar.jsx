import React from "react";
import { ShoppingBag, Search } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow ">   {/* ✅ Removed sticky + top-0 and added margin */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Anizor" className="h-10" />
        </div>

        {/* Center: Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li className="hover:text-black cursor-pointer">New Arrival</li>
          <li className="hover:text-black cursor-pointer">Party Wear</li>
          <li className="hover:text-black cursor-pointer">Ethnic</li>
          <li className="hover:text-black cursor-pointer">Western</li>
          <li className="hover:text-black cursor-pointer">Men</li>
        </ul>

        {/* Right: Icons */}
        <div className="flex items-center space-x-4 text-gray-600">
          <a href="#" className="hover:text-black">Login</a>
          <a href="#" className="hover:text-black">Create Account</a>
          <Search className="w-5 h-5 cursor-pointer hover:text-black" />
          <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-black" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
