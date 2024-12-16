"use client";

import React from "react";
import dynamic from "next/dynamic";
const Slider = dynamic(() => import("react-slick"), { ssr: false });
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CabImg = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="px-4 py-8 slider-container md:px-8 lg:px-16">
      <Slider {...settings}>
        {[
          { src: "/image/maruti-swift-dzire.webp", label: "Hatchback" },
          { src: "/image/wagonr.webp", label: "Hatchback" },
          { src: "/image/Toyota.webp", label: "Sedan" },
          { src: "/image/Maruti-Suzuki-Ertiga.webp", label: "MUV" },
          { src: "/image/innova.jpg", label: "SUV" },
        ].map((car, index) => (
          <div
            key={index}
            className="relative w-full p-4 h-60 sm:h-72 md:h-80 lg:h-96"
          >
            <img
              className="object-contain w-full h-full rounded-lg shadow-lg"
              src={car.src}
              alt={car.label}
            />
            <h5 className="absolute px-3 py-1 text-sm font-medium text-gray-800 transform -translate-x-1/2 bg-white bg-opacity-75 rounded-md bottom-4 left-1/2">
              {car.label}
            </h5>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CabImg;
