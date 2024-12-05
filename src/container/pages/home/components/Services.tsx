import React from "react";
import globle from ""
import { FaCar } from "react-icons/fa";

const Services = () => {
  return (
    <div className="flex p-4 space-x-4">
      <div className="w-1/3 p-4 text-center border border-gray-300 rounded-lg">
        <div className="flex items-center justify-center mb-4">
          <FaCar className="text-6xl text-blue-500" />
        </div>
        <h2 className="text-xl font-semibold text-gray-800">CORPORATE CABS</h2>
        <h4 className="text-sm text-gray-600">
          Reliable corporate car services, specific needs of business travelers with a commitment to professionalism and punctuality.
        </h4>
      </div>

      <div className="w-1/3 p-4 text-center border border-gray-300 rounded-lg">
        <div className="flex items-center justify-center mb-4">
          <FaCar className="text-6xl text-green-500" />
        </div>
        <h2 className="text-xl font-semibold text-gray-800">SPECIAL FUNCTIONS</h2>
        <h4 className="text-sm text-gray-600">
          We provide all types of cabs for all types of functions.
        </h4>
      </div>

      <div className="w-1/3 p-4 text-center border border-gray-300 rounded-lg">
        <div className="flex items-center justify-center mb-4">
          <FaCar className="text-6xl text-red-500" />
        </div>
        <h2 className="text-xl font-semibold text-gray-800">RENTAL CABS</h2>
        <h4 className="text-sm text-gray-600">
          We proudly offer a wide range of rental cabs to meet your diverse transportation needs.
        </h4>
      </div>
    </div>
  );
};

export default Services;
