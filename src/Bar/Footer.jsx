import React from "react";
import logo from "../assets/logo.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6 md:px-10 w-full mt-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left items-center">
        
        {/* Logo (Centered on Small Screens) */}
        <div className="flex justify-center md:justify-start">
          <img src={logo} alt="Logo" className="h-12" />
        </div>

        {/* Location */}
        <div className="flex items-center space-x-3 justify-center md:justify-start">
          <div className="p-3 rounded-full bg-gradient-to-b from-orange-500 via-pink-500 to-purple-700">
            <FaMapMarkerAlt className="text-white text-lg" />
          </div>
          <div>
            <h5 className="text-white font-bold">Location</h5>
            <p className="text-gray-300 text-sm max-w-[200px] md:max-w-none">
              Flat no - 404, Sri Main Sai Kalan Arcade, X Road, Balaji Nagar, Miyapur, Hyderabad, Telangana 500049
            </p>
          </div>
        </div>

        {/* Phone Number & Email */}
        <div className="flex flex-col space-y-4 items-center md:items-start">
          {/* Phone */}
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-full bg-gradient-to-b from-orange-500 via-pink-500 to-purple-700">
              <FaPhoneAlt className="text-white text-lg" />
            </div>
            <div>
              <h5 className="text-white font-bold">Phone</h5>
              <p className="text-gray-300">+91 9865201347</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-full bg-gradient-to-b from-orange-500 via-pink-500 to-purple-700">
              <FaEnvelope className="text-white text-lg" />
            </div>
            <div>
              <h5 className="text-white font-bold">Email</h5>
              <p className="text-gray-300">support@onevibe.com</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="flex space-x-6">
            <a href="#" className="text-white hover:text-blue-500 text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-white hover:text-blue-400 text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-white hover:text-pink-500 text-xl">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="flex flex-wrap justify-center space-x-4 md:space-x-6 border-t border-gray-800 mt-6 pt-4">
        <a href="#" className="text-white hover:text-gray-300 text-sm md:text-base">Home</a>
        <a href="#" className="text-white hover:text-gray-300 text-sm md:text-base">About Us</a>
        <a href="#" className="text-white hover:text-gray-300 text-sm md:text-base">Products</a>
        <a href="#" className="text-white hover:text-gray-300 text-sm md:text-base">Referrals</a>
        <a href="#" className="text-white hover:text-gray-300 text-sm md:text-base">Contact Us</a>
      </div>

      {/* Policy Links */}
      <div className="flex flex-wrap justify-center space-x-4 md:space-x-6 mt-4">
        <a href="#" className="text-gray-500 hover:text-white text-xs md:text-sm">Terms & Conditions</a>
        <a href="#" className="text-gray-500 hover:text-white text-xs md:text-sm">Privacy Policy</a>
        <a href="#" className="text-gray-500 hover:text-white text-xs md:text-sm">Refund & Cancellation Policy</a>
        <a href="#" className="text-gray-500 hover:text-white text-xs md:text-sm">Shipping Policy</a>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-6 text-xs md:text-sm">
        © 2024 onevibe.com. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
