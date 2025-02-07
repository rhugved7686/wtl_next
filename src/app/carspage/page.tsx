"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import FooterLink from "../footerLinks/footerLinks";

interface Car {
  id: number;
  name: string;
  models: string[];
  capacity: string;
  features: string[];
  fuelType: string;
  luggageCapacity: string;
  price: string;
  discount: string;
  imageUrl: string;
}

const carsData: Car[] = [
  {
    id: 1,
    name: "Hatchback",
    models: ["Maruti Wagonr", "Toyota Glanza", "Celerio"],
    capacity: "For 4+1",
    features: ["USB Charging Cable", "Music System", "Air Conditioning", "FastStay & 1 More"],
    fuelType: "CNG/Diesel",
    luggageCapacity: "2 bags",
    price: "Rs 1963",
    discount: "13% Off",
    imageUrl: "https://www.shutterstock.com/image-photo/thessalonikigreece-12-september-2024-byd-600nw-2541070797.jpg",
  },
  {
    id: 2,
    name: "SUV",
    models: ["Maruti Swift Dzire", "Honda Amaze", "Hyundai Aura/Xcent", "Toyota Etios"],
    capacity: "For 4+1",
    features: ["USB Charging Cable", "Music System", "Air Conditioning", "FastStay & 1 More"],
    fuelType: "CNG/Diesel",
    luggageCapacity: "2 bags",
    price: "Rs 2114",
    discount: "13% Off",
    imageUrl: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Camry/11344/1733916451269/front-view-118.jpg",
  },
  {
    id: 3,
    name: "Sedan",
    models: ["Maruti Swift Dzire", "Honda Amaze", "Hyundai Aura/Xcent", "Toyota Etios"],
    capacity: "For 4+1",
    features: ["USB Charging Cable", "Music System", "Air Conditioning", "FastStay & 1 More"],
    fuelType: "CNG/Diesel",
    luggageCapacity: "3 bags",
    price: "Rs 1000",
    discount: "18% Off",
    imageUrl: "https://stimg.cardekho.com/images/car-images/large/Maruti/Dzire/11387/1731318766367/front-left-side-47.jpg",
  },
  {
    id: 4,
    name: "SUV",
    models: ["Maruti Swift Dzire", "Honda Amaze", "Hyundai Aura/Xcent", "Toyota Etios"],
    capacity: "For 4+1",
    features: ["USB Charging Cable", "Music System", "Air Conditioning", "FastStay & 1 More"],
    fuelType: "CNG/Diesel",
    luggageCapacity: "1 bags",
    price: "Rs 2000",
    discount: "20% Off",
    imageUrl: "https://imgd.aeplcdn.com/600x337/n/cw/ec/121943/verna-exterior-right-front-three-quarter-101.jpeg?isig=0&q=80",
  },
];

export default function CarsPage() {
  const router = useRouter();

  const handleBookNow = (carId: number) => {
    router.push(`/bookingpage`);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center cursor-pointer">
      {carsData.map((car) => (
        <div
          key={car.id}
          className="flex lg:flex-row flex-col bg-white shadow-lg rounded-lg overflow-hidden mb-6 p-4 border w-3/4 md:w-4/5 sm:w-full hover:bg-blue-100 transition-all duration-300 relative"
        >
          {/* Image Section */}
          <div className="w-full lg:w-1/3 flex justify-center items-center p-4">
            <Image
              src={car.imageUrl}
              alt={car.name}
              width={250}
              height={180}
              className="rounded-lg object-cover w-full sm:w-3/4 lg:w-auto"
            />
          </div>

          {/* Details Section */}
          <div className="w-full lg:w-2/3 p-4 relative">
            <h2 className="text-lg lg:text-xl font-semibold text-gray-700">
              {car.name} <span className="text-green-500 text-sm">NEW</span>
            </h2>
            <p className="text-sm lg:text-base text-gray-600">{car.models.join(" • ")}</p>
            <p className="text-gray-700 font-medium mt-2">{car.capacity}</p>
            <ul className="text-gray-600 mt-2 grid grid-cols-2 gap-1 text-sm lg:text-base">
              {car.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  🔹 {feature}
                </li>
              ))}
            </ul>
            <p className="text-gray-700 mt-2 text-sm lg:text-base">Fuel Type: {car.fuelType}</p>
            <p className="text-gray-700 text-sm lg:text-base">Luggage Capacity: {car.luggageCapacity}</p>

            {/* Price and Button */}
            <div className="flex flex-col lg:flex-row justify-between items-center mt-4">
              <p className="text-red-500 font-bold text-sm lg:text-base">{car.discount}</p>
              <p className="text-xl lg:text-2xl font-bold text-green-600 bg-yellow-100 px-2 py-1 rounded-lg flex items-center gap-2 animate-pulse">
                ✨ {car.price} <span className="text-xs lg:text-sm text-gray-600">Onward</span> ✨
              </p>
            </div>

            {/* Book Now Button */}
            <button
              onClick={() => handleBookNow(car.id)}
              className="mt-4 lg:mt-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2 right-4 bg-blue-600 text-white px-4 py-2 lg:px-6 lg:py-2 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 cursor-pointer text-sm lg:text-base"
            >
              BOOK NOW
            </button>
          </div>
        </div>
      ))}
    
    </div>
  );
}