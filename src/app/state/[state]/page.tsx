'use client';
import React from 'react';
import { useRouter } from 'next/router';
import Form from '../../../container/components/Form';
import CabImg from '@/container/components/CabImg';
import FooterLink from '@/container/components/FooterLink';
import { useParams } from 'next/navigation';

const Page: React.FC = () => {
  const { state } = useParams(); // Accessing the dynamic 'state' parameter

  if (!state) {
    return <div>Loading...</div>; // Show a loading state while the state parameter is being fetched
  }

  return (
    <div>
      <div>
        <Form />
      </div>
      <div>
        <h1 className="flex justify-center mt-4 text-2xl font-bold text-center text-black-800 md:text-4xl">
           {state} Cab Booking
        </h1>
        <h2 className="mt-4 ml-4 text-xl font-semibold text-gray-800">
          Looking for a Cab in {state}?
        </h2>
        <h6 className="max-w-6xl mx-auto mt-2 ml-5 text-base leading-6 text-gray-600">
        Welcome to WorldTripLink, your trusted partner for hassle-free cab bookings in the vibrant state of {state}. Immerse yourself in the rich culture,or navigating the dynamic streets of {state}, our reliable cab services are here to enhance your travel experience. Our fleet of comfortable and well-maintained vehicles, coupled with professional drivers,
        ensures a smooth and enjoyable journey for both locals and visitors alike. Discover the convenience of WorldTripLink and let us be your preferred choice for all your transportation needs in {state}.
        </h6>
      </div>
      <div>
        <CabImg />
      </div>
      <div className="space-y-8">
      {/* One-Way Trip Section */}
      <div className="p-6 text-center rounded-lg shadow-md bg-gray-50">
        <h1 className="mb-4 text-3xl font-semibold text-blue-500">
          Book Your {state} One-Way Trip with WTL Today!
        </h1>
        <h6 className="max-w-2xl mx-auto text-lg text-gray-700">
          Experience the charm of {state} without the stress of travel logistics.
          WTL's one-way trip service is your gateway to a hassle-free journey to this
          coastal gem. So, why wait? Book your one-way trip to {state} with WTL and
          embark on an incredible adventure.
        </h6>
      </div>

      {/* Round-Way Trip Section */}
      <div className="p-6 text-center rounded-lg shadow-md bg-gray-50">
        <h1 className="mb-4 text-3xl font-semibold text-blue-500">
          Book Your {state} Round-Way Trip with WTL Today!
        </h1>
        <h6 className="max-w-2xl mx-auto text-lg text-gray-700">
          Experience the charm of {state} without the stress of travel logistics.
          WTL's round-way trip service is your gateway to a hassle-free journey to this
          coastal gem. So, why wait? Book your round-way trip to {state} with WTL and
          embark on an incredible adventure.
        </h6>
      </div>

      {/* Rental Trip Section */}
      <div className="p-6 text-center rounded-lg shadow-md bg-gray-50">
        <h1 className="mb-4 text-3xl font-semibold text-blue-500">
          Book Your {state} Rental Trip with WTL Today!
        </h1>
        <h6 className="max-w-2xl mx-auto text-lg text-gray-700">
          Experience the charm of {state} without the stress of travel logistics.
          WTL's rental-way trip service is your gateway to a hassle-free journey to this
          coastal gem. So, why wait? Book your rental-way trip to {state} with WTL and
          embark on an incredible adventure.
        </h6>
      </div>
    </div>
      <div>
        <h1 className="flex justify-center mt-6 text-xl">{state} Cab Booking Services</h1>
        <h6 className="flex justify-center mt-2 text-2xl font-bold text-center text-black-300 md:text-4xl">
          About WTL Pvt Ltd
        </h6>
        <h1 className="ml-10 mr-10">
          Welcome To "WTL" Cab Booking Service In {state}! WTL is an established car rental service provider in India, 
          offering both long-term and short-term cab booking solutions. Our top priorities are ensuring safety, comfort, 
          and reliable service for every client. With experienced and courteous drivers, we strive to provide the best 
          possible transportation experience in Maharashtra. Since our inception in 2001, we have aimed to bring transparency 
          to pricing and have grown rapidly to cater to a wide range of customers.
          
          WTL is committed to providing rides that are both convenient and memorable. When you make a cab reservation with WTL, 
          you can put aside any worries about routes, cleanliness, and pricing behind. We offer a diverse range of options, 
          including sedans and SUVs, to cater to your preferences and ensure a hassle-free experience. We Provide Comfortable 
          Cab Rides To People From Over 1000+ Cities In India.
          <br />
          We are from WTL always there to ensure a hassle-free and joyful ride. Our practices have enabled our establishment 
          as one of the most preferred radio taxi services in various parts of the country, including Maharashtra, Delhi, 
          Kolkata, Bengaluru, Jaipur, Shimla, Dehradun, Manali, Agra, Haridwar, Chandigarh, and Amritsar. We firmly believe 
          in growth and outstanding services for our customers. Whether you need to rush for a flight or reach for a meeting 
          on time, you just need to book a taxi online with WTL and count on us for a safe and comfortable ride.
        </h1>
      </div>
      <div>
        <FooterLink />
      </div>
    </div>
  );
};

export default Page;
