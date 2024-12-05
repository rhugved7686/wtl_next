"use client";
import React, { useState } from "react";

const cars = [
  {
    image: "https://www.popularmaruti.com/blog/wp-content/uploads/2022/12/20903608375b891fb77e8402.66922053.jpg",
    title: "Hatchback",
  },
  {
    image: "https://worldtriplink.com/images/swift.jpeg",
    title: "Hatchback",
  },
  {
    image: "https://www.girnationalpark.in/uploads/0000/25/2021/11/22/etios-car.jpg",
    title: "Sedan",
  },
  {
    image: "https://worldtriplink.com/images/swift-dzire-car-jpg-500x500.webp",
    title: "Sedan",
  },
  {
    image: "https://worldtriplink.com/images/536-5368941_innova-crysta-images-hd-hd-png-download.png",
    title: "SUV",
  },
  {
    image: "https://worldtriplink.com/images/c6es93a_1572125.jpg",
    title: "SUV",
  },
];

const CabImg = () => {
  const [favorites, setFavorites] = useState({}); 
  const handleFavoriteToggle = (index: number) => {
    setFavorites((prev) => ({
      ...prev,
      [index]: !prev[index], 
    }));
  };

  return (
    <div>
      <section className="py-12 bg-gray-100" style={{ padding: "50px" }}>
        <div className="container px-4 mx-auto">
          <div className="text-center">
            <h1 className="flex justify-center mt-3 text-4xl font-bold">Book Your Cab Now!</h1>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
            {cars.map((car, index) => (
              <div
                key={index}
                className="overflow-hidden transition-transform transform rounded-lg shadow-md hover:scale-105 hover:shadow-xl"
              >
                <div className="relative">
                  <a href="#Form" className="block">
                    <img src={car.image} alt={car.title} className="w-full h-auto" />
                  </a>
                  <div
                    onClick={() => handleFavoriteToggle(index)}
                    className="absolute p-2 rounded-full shadow-md cursor-pointer top-3 right-3"
                    title="Save for later"
                  >
                    <i
                      className={`text-xl ${
                        favorites[index] ? "text-red-500 la la-heart" : "text-gray-400 la la-heart-o"
                      }`}
                    ></i>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{car.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CabImg;
