// src/pages/Blog.js
import React from "react";

const Blog = () => (
  <div className="text-center py-20 bg-gray-100">
    <h2 className="text-4xl font-bold text-blue-600">Our Blog</h2>
    <p className="text-gray-600 mt-4">Stay updated with our latest insights and stories.</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 px-10">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <img src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?q=80&w=1496&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Blog 1" className="rounded-md" />
        <h3 className="text-xl font-semibold mt-4">Blog Title One</h3>
        <p className="text-gray-500">An informative article on the latest trends in technology.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <img src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?q=80&w=1496&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Blog 2" className="rounded-md" />
        <h3 className="text-xl font-semibold mt-4">Blog Title Two</h3>
        <p className="text-gray-500">Exploring new innovations in the IT industry.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <img src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?q=80&w=1496&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Blog 3" className="rounded-md" />
        <h3 className="text-xl font-semibold mt-4">Blog Title Three</h3>
        <p className="text-gray-500">How technology is shaping the future of businesses.</p>
      </div>
    </div>
  </div>
);

export default Blog;
