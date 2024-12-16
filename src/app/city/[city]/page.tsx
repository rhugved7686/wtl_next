'use client';
import React from 'react';
import { useRouter } from 'next/router';
import Form from '../../../container/components/Form';
import CabImg from '@/container/components/CabImg';
import FooterLink from '@/container/components/FooterLink';
import { useParams } from 'next/navigation';

const Page: React.FC = () => {
  const { city } = useParams(); // Accessing the dynamic 'city' parameter

  if (!city) {
    return <div>Loading...</div>; // Show a loading state while the city parameter is being fetched
  }

  return (
    <div>
      <div>
        <Form />
      </div>
      <div>
        <h1 className="flex justify-center mt-4 text-2xl font-bold text-center text-blue-400 md:text-4xl">
           {city} Cab Booking
        </h1>
        <h2 className="mt-4 ml-4 text-xl font-semibold text-gray-800">
          Looking for a Cab in {city}?
        </h2>
        <h6 className="max-w-3xl mx-auto mt-2 ml-5 text-base leading-6 text-gray-600">
          {city} Cab Booking at Affordable fare. We at WTL provide quality services for cab bookings for Outstation, 
          One-Way, Airport Cabs, and Round Trips from Pune, Maharashtra, and other cities. Book your next cab with WTL 
          and get a discount on the total fare to {city}.
        </h6>
      </div>
      <div>
        <CabImg />
      </div>
      <div>
        <h1 className="flex justify-center mt-6 text-xl">{city} Cab Booking Services</h1>
        <h6 className="flex justify-center mt-2 text-2xl font-bold text-center text-black-300 md:text-4xl">
          About WTL Pvt Ltd
        </h6>
        <h1 className="ml-10 mr-10">
          Welcome To "WTL" Cab Booking Service In {city}! WTL is an established car rental service provider in India, 
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
