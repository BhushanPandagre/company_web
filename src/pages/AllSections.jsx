// src/pages/AllSections.js
import React from "react";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Team from "./Team";

const AllSections = () => (
  <div>
    <Home />

    <Services />
    <About />
    <Portfolio />
    <Blog />
    <Team/>
    <Contact />
  </div>
);

export default AllSections;
