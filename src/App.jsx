// // src/App.js
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Services from "./pages/Services";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Footer from "./components/Footer";


// const App = () => (
//   <Router>
//     <Navbar />
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/services" element={<Services />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/contact" element={<Contact />} />
//     </Routes>
//     <Footer />
//   </Router>
// );

// export default App;

// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import AllSections from "./pages/AllSections";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Team from "./pages/Team";


const App = () => (
  <Router>
    <Navbar />
    <Routes>
    <Route path="/" element={<AllSections />} />
      <Route path="/home" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/team" element={<Team />} />
 
    </Routes>
    <Footer />
  </Router>
);

export default App;



