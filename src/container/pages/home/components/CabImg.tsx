"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically import react-slick (client-side only)
const Slider = dynamic(() => import("react-slick"), { ssr: false });

// Import required CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CabImg = () => {
  // Slider settings
  const settings = {
    dots: true, // No navigation dots
    infinite: true, // Loop through images infinitely
    speed: 3000, // Scrolling speed
    slidesToShow: 3, // Number of slides visible at a time
    slidesToScroll: 2, // Number of slides to scroll per step
    autoplay: true, // Enable autoplay
    autoplaySpeed: 0, // Continuous scrolling
    cssEase: "linear", // Smooth scrolling
    responsive: [
      {
        breakpoint: 1024, // For devices smaller than 1024px
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768, // For devices smaller than 768px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // For devices smaller than 480px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="slider-container">
      <Slider {...settings}>
        <div className="w-full h-60 sm:h-60 md:h-80 lg:h-96">
          <img
            className="object-contain w-full h-full"
            src="/image/maruti-swift-dzire.webp"
            alt="Maruti Swift Dzire"
            
          />
          <h5 className="flex justify-center mb-20">Hatchback</h5>
        </div>
        <div className="w-full h-60 sm:h-60 md:h-80 lg:h-96">
          <img
            className="object-contain w-full h-full"
            src="/image/wagonr.webp"
            alt="WagonR"
          />
           <h5 className="flex justify-center mb-20">Hatchback</h5>
        </div>
        <div className="w-full h-60 sm:h-60 md:h-80 lg:h-96">
          <img
            className="object-contain w-full h-full"
            src="/image/Toyota.webp"
            alt="Toyota"
          />
        <h5 className="flex justify-center mb-20">Sedan</h5>
        </div>
        <div className="w-full h-60 sm:h-60 md:h-80 lg:h-96">
          <img
            className="object-contain w-full h-full"
            src="/image/Maruti-Suzuki-Ertiga.webp"
            alt="Maruti Suzuki Ertiga"
          />
          <h5 className="flex justify-center mb-20">MUV</h5>
        </div>
        <div className="w-full h-60 sm:h-60 md:h-80 lg:h-96">
          <img
            className="object-contain w-full h-full"
            src="/image/innova.jpg"
            alt="Innova"
          />
        <h5 className="flex justify-center mb-20">SUV</h5>
        </div>
      </Slider>
    </section>
  );
};

export default CabImg;
