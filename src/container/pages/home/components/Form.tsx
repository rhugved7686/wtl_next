"use client";
import { useState } from 'react';
import Image from 'next/image';

const TransportForm = () => {
  const [selectedTransport, setSelectedTransport] = useState('Cabs'); // Default transport is 'Cabs'
  const [tripType, setTripType] = useState('');
  const [showReturnFields, setShowReturnFields] = useState(false);

  const handleTransportChange = (transport) => {
    setSelectedTransport(transport);
    setTripType('');
    setShowReturnFields(false);
  };

  const handleTripTypeChange = (e) => {
    setTripType(e.target.value);
    setShowReturnFields(e.target.value === 'Round Trip');
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://cdn.pixabay.com/photo/2020/03/19/18/52/bend-4948376_1280.jpg" // Nature background image from Pixabay
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>

      {/* Main Form and Transport Buttons */}
      <div className="absolute inset-0 flex justify-center items-center z-10">
        <div className="relative max-w-lg w-full p-6 bg-white rounded-lg shadow-lg">
          {/* Transport Options */}
          <div className="flex justify-center mb-4 space-x-4">
            <button
              className={`py-2 px-6 bg-white-600 border border-solid border-black text-black rounded-md hover:scale-105 focus:outline-none ${selectedTransport === 'Cabs' ? 'bg-gray-200' : ''}`}
              onClick={() => handleTransportChange('Cabs')}
            >
              Cabs
            </button>
            <button
              className={`py-2 px-6 bg-white-600 border border-solid border-black text-black rounded-md hover:scale-105 focus:outline-none ${selectedTransport === 'Busses' ? 'bg-gray-200' : ''}`}
              onClick={() => handleTransportChange('Busses')}
            >
              Busses
            </button>
          </div>

          {/* Show Form for Transport */}
          <div className="mt-6">
            {/* Trip Type Selection */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Trip Type</label>
              <select
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                value={tripType}
                onChange={handleTripTypeChange}
              >
                <option value="">Select Trip Type</option>
                <option value="One Way">One Way</option>
                <option value="Round Trip">Round Trip</option>
                <option value="Rental Trip">Rental Trip</option>
              </select>
            </div>

            {/* Pickup and Drop Location (Flex Layout) */}
            <div className="flex mb-4 space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Pickup Location</label>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter pickup location"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Drop Location</label>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter drop location"
                />
              </div>
            </div>

            {/* Date and Time */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Start Date and Time</label>
              <input
                type="datetime-local"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {showReturnFields && (
              <>
                {/* Return Date and Time */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Return Date and Time</label>
                  <input
                    type="datetime-local"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              </>
            )}

            {/* Submit Button */}
            <div className="mb-4">
              <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
                Submit
              </button>
            </div>

            {/* For Busses: Display Distance (Below Submit Button) */}
            {selectedTransport === "Busses" && (
              <div className="text-center mt-4">
                <p className="text-sm text-gray-600">Distance: <strong>XYZ km</strong></p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportForm;
