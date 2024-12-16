import React from "react";
import { FaCar } from "react-icons/fa";

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Corporate Cabs */}
        <div className="p-6 text-center border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center justify-center mb-4">
            <FaCar className="text-6xl text-blue-500" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">CORPORATE CABS</h2>
          <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
            <p className="text-gray-700">
              If you are looking for a dependable{" "}
              <a className="font-bold text-black hover:text-blue-700" href="/">
                corporate car rental service
              </a>
              , you can trust <strong>WTL (WorldTripLink) Cabs</strong>. Our team is always available to assist you with any questions or concerns.
              Providing a safe, convenient, and secure travel experience at the best price is our ultimate goal. Our 24/7 service is tailored to meet your needs.
            </p>
            <p className="text-gray-700 mt-4">
              The best <strong className="font-semibold">corporate cab services</strong> in Pune City and all around business places near Pune.
              We have a great team, including directors, managers, technical support, and our best drivers.
            </p>
          </div>
        </div>

        {/* Special Functions */}
        <div className="p-6 text-center border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center justify-center mb-4">
            <FaCar className="text-6xl text-green-500" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">SPECIAL FUNCTIONS</h2>
          <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
            <p className="text-gray-700">
              You now have the option to book{" "}
              <a className="font-medium text-black underline hover:text-gray-800" href="/">
                One way cab
              </a>{" "}
              between the routes wherever the service is applicable.
            </p>
            <p className="text-gray-700 mt-2">
              <strong className="font-semibold">Affordable:</strong> For a one-way trip, pay for one side fare only.
            </p>
            <p className="text-gray-700 mt-2">
              <strong className="font-semibold">Car as per your need:</strong> Hatchback, Sedan, SUV, Innova, Tempo-Traveller.{" "}
              <a className="font-medium text-black underline hover:text-gray-800" href="/">
                One way drop
              </a>{" "}
              taxi in all cities.
            </p>
            <p className="text-gray-700 mt-2">
              Our like Pune to Mumbai cab fare depends on the type of vehicle. Our cab or fare charges may include toll, parking, or other charges.
            </p>
          </div>
        </div>

        {/* Rental Cabs */}
        <div className="p-6 text-center border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center justify-center mb-4">
            <FaCar className="text-6xl text-red-500" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">RENTAL CABS</h2>
          <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
            <p className="text-gray-700">
              Car Rental Services In Pune offer the economical, easiest, fastest, trusted, and reliable service of online booking a taxi, cab, or a{" "}
              <a className="font-medium text-black underline hover:text-gray-800" href="/">
                car rental
              </a>{" "}
              of your choice and preferences in your city.
            </p>
            <p className="text-gray-700 mt-4">
              WTL provides car hire and cab services for all major tourist destinations, e.g., Shirdi, Mahabaleshwar, Nashik, Aurangabad, Mumbai, Pune, and many more cities in India.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
