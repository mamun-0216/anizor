import React from "react";
import { Facebook, Instagram, Youtube, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <img src="/logo.png" alt="Anizor" className="h-10 mb-4" />
          <p className="text-gray-300 text-sm">
            Welcome to Anizor, your ultimate destination for exclusive luxury dresses.
            Discover a perfect blend of modern and traditional designs.
          </p>
        </div>

        {/* Customer Policies */}
        <div>
          <h4 className="font-semibold mb-4">Customer Policies</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>FAQ</li>
            <li>Blog</li>
            <li>Terms & Conditions</li>
            <li>Returns Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold mb-4">Social</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center space-x-2">
              <Facebook className="w-4 h-4" /> <span>Facebook</span>
            </li>
            <li className="flex items-center space-x-2">
              <Instagram className="w-4 h-4" /> <span>Instagram</span>
            </li>
            <li className="flex items-center space-x-2">
              <Youtube className="w-4 h-4" /> <span>Youtube</span>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />{" "}
              <span>anizorbangladesh@gmail.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="w-4 h-4" /> <span>+88018-0000-0000</span>
            </li>
            <li>
              Plot 43, Road 11, Block F, Banani, Dhaka, Bangladesh
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center text-gray-500 text-xs mt-10">
        © {new Date().getFullYear()} Anizor. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
