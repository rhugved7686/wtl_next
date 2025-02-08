"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Invoice = () => {
  const router = useRouter();
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    pickup: "Pune, Maharashtra, India",
    drop: "Mumbai, Maharashtra, India",
    date: "2025-02-19",
    time: "18:18",
    tripType: "Oneway",
    distance: "151 km",
    model: "Hatchback",
    seats: "4+1",
    fuelType: "CNG-Diesel",
    price: 2248,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookingData({ ...bookingData, [e.target.id]: e.target.value });
  };
  

  const handleBooking = async () => {
    if (!bookingData.name || !bookingData.email || !bookingData.phone) {
      toast.error("Please fill all the fields");
      return;
    }

    try {
      //const response = await fetch("https://your-api-url.com/bookings", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(bookingData),
      // });

      //if (response.ok) {
        toast.success("Booking Successful!");
        setTimeout(() => {
          router.push("/booking-success"); // Redirect to thanks page after booking
        }, 2000);
      // } else {
      //   toast.error("Booking Failed. Try again.");
      // }
    } catch (error) {
      console.error("Booking Error:", error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-200 mb-20">
      <div className="flex-grow flex justify-center items-start pt-10 px-4">
        <div className="bg-white shadow-xl rounded-lg p-6 w-[94%] mx-auto text-center">
          <h1 className="text-xl md:text-2xl font-semibold">Invoice</h1>

          <div className="border border-gray-400 mt-4 w-full h-auto flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 h-full flex flex-col items-start p-4">
              <span className="text-lg md:text-xl font-bold">Cab Information:</span>
              <span className="text-sm md:text-base mt-2">
                <span className="font-bold">Model Type:</span> {bookingData.model}
              </span>
              <span className="text-sm md:text-base mt-2">
                <span className="font-bold">Seats:</span> {bookingData.seats}
              </span>
              <span className="text-sm md:text-base mt-2">
                <span className="font-bold">Fuel Type:</span> {bookingData.fuelType}
              </span>
              <span className="text-sm md:text-base mt-2">
                <span className="font-bold">Total Amount:</span> ₹{bookingData.price}
              </span>

              <div className="mt-1">
                <img src="https://3.imimg.com/data3/CO/UC/MY-12558295/second-hand-cars-500x500.jpg" alt="Car" className="w-[85%] h-auto mx-auto" />
              </div>
            </div>

            <div className="w-full md:w-px bg-gray-400 h-full md:h-auto"></div>

            <div className="w-full md:w-1/2 h-full flex flex-col items-start p-4">
              <span className="text-lg md:text-xl font-bold">Trip Information:</span>
              <span className="text-sm md:text-base mt-2">
                <span className="font-bold">Pickup Location:</span> {bookingData.pickup}
              </span>
              <span className="text-sm md:text-base mt-2">
                <span className="font-bold">Drop Location:</span> {bookingData.drop}
              </span>
              <span className="text-sm md:text-base mt-2">
                <span className="font-bold">Date:</span> {bookingData.date}
              </span>
              <span className="text-sm md:text-base mt-2">
                <span className="font-bold">Time:</span> {bookingData.time}
              </span>
              <span className="text-sm md:text-base mt-2">
                <span className="font-bold">Trip Type:</span> {bookingData.tripType}
              </span>
              <span className="text-sm md:text-base mt-2">
                <span className="font-bold">Distance:</span> {bookingData.distance}
              </span>

              <div className="mt-4 w-full">
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  value={bookingData.name}
                  onChange={handleInputChange}
                  className="w-full mt-4 p-2 border border-gray-300 rounded-md"
                />
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={bookingData.email}
                  onChange={handleInputChange}
                  className="w-full mt-4 p-2 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  id="phone"
                  placeholder="Phone"
                  value={bookingData.phone}
                  onChange={handleInputChange}
                  className="w-full mt-4 p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="mt-6">
                <button onClick={handleBooking} className="px-6 py-2 bg-blue-500 text-white rounded-md">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
