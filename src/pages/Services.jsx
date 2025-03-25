
// src/pages/Services.js
import React from "react";

const Services = () => (
  <div className="text-center py-20 bg-gray-100">
    <h2 className="text-4xl font-bold text-blue-600">Our Services</h2>
    <p className="text-gray-600 mt-4">We offer top-notch IT solutions tailored for your business needs.</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 px-10">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <img src="https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595847.jpg?t=st=1742898844~exp=1742902444~hmac=0ab4ed0f1ab73d8b48ac3d49be2bb551efec3b3dbb13dbe2359b337877ca2db9&w=900" alt="Web Development" className="rounded-md" />
        <h3 className="text-xl font-semibold mt-4">Web Development</h3>
        <p className="text-gray-500">Building responsive and high-performance websites.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <img src="https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?t=st=1742898986~exp=1742902586~hmac=3782ebf9fd9681d179e12107cab9be69e23d0eb12d8bb5c15f0c1a5a80c89f72&w=996" alt="App Development" className="rounded-md" />
        <h3 className="text-xl font-semibold mt-4">App Development</h3>
        <p className="text-gray-500">Creating seamless mobile experiences for all platforms.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <img src="https://img.freepik.com/free-photo/group-young-business-people-working-office_158595-5210.jpg?t=st=1742899390~exp=1742902990~hmac=3f502a5bff06cb3b7d2e619654a65d3e2d649f9a19815df6fae04f3084b19672&w=996" alt="Cybersecurity" className="rounded-md" />
        <h3 className="text-xl font-semibold mt-4">Cybersecurity</h3>
        <p className="text-gray-500">Providing cutting-edge security solutions to safeguard your data.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <img src="https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150061967.jpg?t=st=1742899463~exp=1742903063~hmac=a555af883ac315e942340fe627482e67880977d042d8bb7144be38f479cb0bf7&w=900" alt="Cloud Computing" className="rounded-md" />
        <h3 className="text-xl font-semibold mt-4">Cloud Computing</h3>
        <p className="text-gray-500">Scalable and reliable cloud solutions for your business.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <img src="https://img.freepik.com/free-photo/looks-suspiciously-polygraph-examiners-works-office-with-his-lie-detector-s-equipment_146671-17266.jpg?t=st=1742899169~exp=1742902769~hmac=6dce82657531210656b693dd42365af71ba7c8a3c725225cd18a3056c8008cf7&w=996" alt="AI Solutions" className="rounded-md" />
        <h3 className="text-xl font-semibold mt-4">AI & Machine Learning</h3>
        <p className="text-gray-500">Innovative AI-driven solutions to enhance your business growth.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <img src="https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595830.jpg?t=st=1742899346~exp=1742902946~hmac=708dd2c0ec7a5082159a2df4855fb49534cffa87d41c1727ac9273303956bd19&w=996" alt="IT Consulting" className="rounded-md" />
        <h3 className="text-xl font-semibold mt-4">IT Consulting</h3>
        <p className="text-gray-500">Expert guidance to navigate your digital transformation journey.</p>
      </div>
    </div>
  </div>
);

export default Services;
