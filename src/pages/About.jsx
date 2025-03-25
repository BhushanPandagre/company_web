// src/pages/About.js
import React from "react";

const About = () => (
  <div className="py-20 bg-gray-100 text-center">
    <h2 className="text-4xl font-bold text-blue-600">About Us</h2>
    <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
      Mexdy Technology is a leading IT company specializing in cutting-edge digital solutions, offering innovative services in web development, app development, cybersecurity, and AI-driven technologies.
    </p>
    <div className="flex flex-wrap justify-center mt-10 gap-6 px-10">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h3 className="text-xl font-semibold">Our Vision</h3>
        <p className="text-gray-500">To empower businesses with innovative and transformative IT solutions.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h3 className="text-xl font-semibold">Our Mission</h3>
        <p className="text-gray-500">Delivering cutting-edge technology solutions that drive business success.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h3 className="text-xl font-semibold">Why Choose Us?</h3>
        <p className="text-gray-500">Expert team, innovative solutions, and a customer-centric approach.</p>
      </div>
    </div>
    <div className="mt-10">
      <img src="https://via.placeholder.com/800x400" alt="Company Overview" className="rounded-lg shadow-lg mx-auto" />
    </div>
  </div>
);

export default About;
