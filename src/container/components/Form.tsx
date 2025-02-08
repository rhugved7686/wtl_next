"use client";
import { useState, useRef } from "react";
import { LoadScript, Autocomplete } from "@react-google-maps/api";
import Image from "next/image";
import { useRouter } from "next/navigation";  

// Google Maps API Key (Ensure it has Places API enabled)
const GOOGLE_MAPS_API_KEY = "AIzaSyCelDo4I5cPQ72TfCTQW-arhPZ7ALNcp8w"; // Replace with your actual key

const TransportForm = () => {
  const [selectedTransport, setSelectedTransport] = useState("Cabs");
  const [tripType, setTripType] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [showReturnFields, setShowReturnFields] = useState(false);

  const pickupAutocompleteRef = useRef(null);  // Ref for Pickup Autocomplete
  const dropAutocompleteRef = useRef(null);  // Ref for Drop Autocomplete
  const router = useRouter();  // Initialize useRoute
  const handleTransportChange = (transport) => {
    setSelectedTransport(transport);
    setTripType("");
    setShowReturnFields(false);
  };

  const handleTripTypeChange = (e) => {
    setTripType(e.target.value);
    setShowReturnFields(e.target.value === "Round Trip");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      tripType,
      pickupLocation,
      dropLocation,
      startDate,
      returnDate: showReturnFields ? returnDate : null,
    };

    const apiEndpoint = selectedTransport === "Cabs" ? "/api/cabs" : "/api/busses";

    try {
      // const response = await fetch(apiEndpoint, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });

      // const data = await response.json();

      // if (response.ok) {
       // alert("Booking successful!");
        router.push("/carspage");
       // console.log("Response:", data);
      // } else {
      //   alert("Error: " + (data.error || "Something went wrong!"));
      // }
    } catch (error) {
      alert("Failed to submit booking. Please try again.");
      console.error("Error:", error);
    }
  };

  const onPlaceSelected = (place, isPickup) => {
    const address = place.formatted_address;
    if (isPickup) {
      setPickupLocation(address);
    } else {
      setDropLocation(address);
    }
  };

  return (
    <div className="relative min-h-screen ">
      {/* Background Image */}
      <div className="relative w-full h-[75vh] sm:h-[85vh]  overflow-hidden">
  {/* Background Image */}
  <Image
    src="https://www.shutterstock.com/image-photo/car-driving-on-beautiful-road-600nw-2473243119.jpg"
    alt="Background Image"
    layout="fill"
    objectFit="cover"
    className="opacity-60"
  />

  {/* Overlay Effect for Better Readability */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent"></div>
</div>



      {/* Form Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="relative w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
          {/* Transport Options */}
          <div className="flex justify-center mb-4 space-x-4">
            <button
              className={`py-2 px-6 bg-white-600 border border-black rounded-md hover:scale-105 ${selectedTransport === "Cabs" ? "bg-gray-200" : ""}`}
              onClick={() => handleTransportChange("Cabs")}
            >
              Cabs
            </button>
            <button
              className={`py-2 px-6 bg-white-600 border border-black rounded-md hover:scale-105 ${selectedTransport === "Busses" ? "bg-gray-200" : ""}`}
              onClick={() => handleTransportChange("Busses")}
            >
              Busses
            </button>
          </div>

          {/* Form Fields */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Trip Type</label>
              <select
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md"
                value={tripType}
                required
                onChange={handleTripTypeChange}
              >
                <option value="">Select Trip Type</option>
                <option value="One Way">One Way</option>
                <option value="Round Trip">Round Trip</option>
                <option value="Rental Trip">Rental Trip</option>
              </select>
            </div>

            <div className="flex mb-4 space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Pickup Location</label>
                <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY} libraries={["places"]}>
                  <Autocomplete
                    onLoad={(autocomplete) => (pickupAutocompleteRef.current = autocomplete)}
                    onPlaceChanged={() => onPlaceSelected(pickupAutocompleteRef.current.getPlace(), true)}
                  >
                    <input
                      type="text"
                      required
                      className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md"
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      placeholder="Enter pickup location"
                    />
                  </Autocomplete>
                </LoadScript>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Drop Location</label>
                <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY} libraries={["places"]}>
                  <Autocomplete
                    onLoad={(autocomplete) => (dropAutocompleteRef.current = autocomplete)}
                    onPlaceChanged={() => onPlaceSelected(dropAutocompleteRef.current.getPlace(), false)}
                  >
                    <input
                      type="text"
                      required
                      className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md"
                      value={dropLocation}
                      onChange={(e) => setDropLocation(e.target.value)}
                      placeholder="Enter drop location"
                    />
                  </Autocomplete>
                </LoadScript>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Start Date and Time</label>
              <input
                type="datetime-local"
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md"
                value={startDate}
                required
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            {showReturnFields && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Return Date and Time</label>
                <input
                  type="datetime-local"
                  className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md"
                  value={returnDate}
                  required
                  onChange={(e) => setReturnDate(e.target.value)}
                />
              </div>
            )}

            <div className="mb-4">
              <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TransportForm;
