import React from 'react'

const Discount = () => {
  return (
    <div>
 
  <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
    <h1 className="flex items-center justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-orange-600">
      Unbeatable Deal: Get Discount
    </h1>
    <h5 className="flex items-center justify-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-green-600 mt-2">
      Special Offers
    </h5>
  </div>

 
  <div className="flex flex-col md:flex-row justify-between max-w-[90%] md:max-w-[800px] mx-auto my-[30px] gap-6">
    
    <div className="w-full md:w-[48%] border border-gray-300 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105">
      <img
        src="https://aimcabbooking.com/admin/wtl-image/offer-image.jpg"
        alt="Cab Offer"
        className="w-full h-auto rounded-lg"
      />
    </div>
 
    <div className="flex flex-col items-center justify-center w-full md:w-[48%] border border-gray-300 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 p-4">
      <h1 className="text-xl sm:text-2xl font-bold text-[#007BFF] mt-2 text-center">
        Exclusive Cab Offer!
      </h1>
      <h5 className="mt-3 text-sm sm:text-base md:text-lg text-center">
        Enjoy an exclusive discount on your next cab booking. Limited time offer, book now!
      </h5>
      <button className="px-4 py-2 mt-4 text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600">
        Book Now
      </button>
    </div>
  </div>
</div>

  )
}

export default Discount