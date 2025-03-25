import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://img.freepik.com/free-photo/website-hosting-concept-with-bright-light_23-2149406783.jpg?t=st=1742894978~exp=1742898578~hmac=63531bb91c92645b21055a05ab9960b06786ac84b53526692f8bbc5441022468&w=1380",
  "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
  };

  return (
    <div className="relative h-screen">
      {/* Carousel Container */}
      <Slider {...settings} className="absolute inset-0 w-full h-full">
        {images.map((img, index) => (
          <div key={index} className="w-full h-screen">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            />
          </div>
        ))}
      </Slider>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <h2 className="text-5xl font-extrabold drop-shadow-lg animate-fade-in">
          Empowering Your Business with Technology
        </h2>
        <p className="text-lg text-gray-200 mt-4 animate-fade-in delay-200">
          Providing innovative IT solutions to drive your success.
        </p>
        <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg font-semibold transition duration-300 shadow-lg">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
