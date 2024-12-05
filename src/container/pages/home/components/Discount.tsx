import React from 'react'

const Discount = () => {
  return (
    <div>
        <div className='h-20 bg-gray-200'>
            <h1 className='flex items-center justify-center text-4xl font-semibold text-orange-600'>Unbeatable Deal: Get Discount</h1>
            <h5 className='flex items-center justify-center text-2xl font-semibold text-green-600'>Special Offers</h5>
        </div>
        <div  className="flex justify-around max-w-[800px] mx-auto my-[30px] sm:h-2">
            <div className="w-[49%] border border-gray-300 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105">
                <img src="https://aimcabbooking.com/admin/wtl-image/offer-image.jpg" alt="Cab Offer" className="w-full rounded-lg" />   
            </div>
            <div className="flex flex-col items-center justify-center w-[49%] border border-gray-300 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 p-4">
                <h1 className="text-[20px] font-bold text-[#007BFF] mt-2 text-center">Exclusive Cab Offer! </h1>
                <h5 className="mt-3 text-[15px] text-center">
                    Enjoy an exclusive discount on your next cab booking. Limited time offer, book now!
                </h5>
                <button className="px-4 py-2 mt-4 text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600">Book Now</button>
            </div>
        </div>
    </div>
  )
}

export default Discount