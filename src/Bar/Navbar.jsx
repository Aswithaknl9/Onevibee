import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-transparent z-50">
      <nav className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div>
          <img src={logo} alt="logo" className="h-5 md:h-6 lg:h-9" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex lg:space-x-15 md:space-x-8 text-black text-[18px] font-medium">
          <li><Link to="/" className="hover:text-[#E27214]">Home</Link></li>
          <li className="hover:text-[#E27214]">About Us</li>
          <li><Link to="/products" className="hover:text-[#E27214]">Products</Link></li>
          <li><Link to="/referrals" className="hover:text-[#E27214]">Referrals</Link></li>
          <li><Link to="/contact" className="hover:text-[#E27214]">Contact Us</Link></li>
        </ul>

        {/* Buttons */}
        <div className="flex space-x-2">
          <Link to="https://customer.onevibee.com/user/login">
            <button className="px-4 py-2 bg-white text-transparent bg-clip-text bg-gradient-to-r from-[#E27214] via-[#E20C59] to-[#402B75] border border-[#E20C59] rounded-md">
              Login
            </button>
          </Link>
          <Link to="https://customer.onevibee.com/user/register">
            <button className="px-4 py-2 text-white rounded-lg bg-gradient-to-r from-[#E27214] via-[#E20C59] to-[#402B75] hover:opacity-90 transition">
              Pre-Registration
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} className="text-white" /> : <FaBars size={24} className="text-white" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 text-gray-800 text-[18px] font-medium">
          <Link to="/" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Home</Link>
          <li className="hover:text-blue-500 list-none" onClick={() => setMenuOpen(false)}>About Us</li>
          <Link to="/products" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link to="/referrals" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Referrals</Link>
          <Link to="/contact" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
