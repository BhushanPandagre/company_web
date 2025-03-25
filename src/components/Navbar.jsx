import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp"; // Make sure to place your logo in src/assets

const Navbar = () => (
  <nav className="bg-gradient-to-r from-blue-700 to-purple-600 p-5 text-white flex justify-between items-center shadow-lg">
    <div className="flex items-center">
      <img src={logo} alt="Mexdy Technology Logo" className="h-12 w-auto mr-4 rounded-lg shadow-md" />
      <span className="text-xl font-bold tracking-wide">Mexdy Technology</span>
    </div>
    <div className="space-x-6 text-lg font-medium">
      <Link to="/" className="hover:text-yellow-300 transition duration-300">Home</Link>
      <Link to="/services" className="hover:text-yellow-300 transition duration-300">Services</Link>
      <Link to="/about" className="hover:text-yellow-300 transition duration-300">About</Link>
      <Link to="/contact" className="hover:text-yellow-300 transition duration-300">Contact</Link>
      <Link to="/portfolio" className="hover:text-yellow-300 transition duration-300">Portfolio</Link>
      <Link to="/blog" className="hover:text-yellow-300 transition duration-300">Blog</Link>
    </div>
  </nav>
);

export default Navbar;






