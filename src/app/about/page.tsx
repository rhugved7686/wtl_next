import React from 'react'
import FooterLink from '@/container/components/FooterLink';

const About = () => {
  return (
    <div>
      <section className="py-16 overflow-hidden about-area md:py-24">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="lg:pr-8">
              <div className="mb-8 section-heading">
                <h2 className="text-3xl font-bold text-center text-gray-800">About Us</h2>
                <h4 className="pt-4 pb-4 text-lg font-medium text-gray-600">
                  WTL has been revolutionising the travel industry. Metasearch for travel? No one was doing it. Until we did.
                </h4>
                <p className="pb-4 text-base text-gray-700">
                  WTL was founded with a vision of making transportation convenient and hassle-free. We understand the importance of reaching your destination comfortably and on time, whether you're heading to an important business meeting, catching a flight, or simply exploring the city. Our journey began with the aim of creating a service that would cater to all your transportation needs.
                </p>
                <p className="pb-4 text-base text-gray-700">
                  At WTL, we're on a mission to redefine the way you experience transportation. With a commitment to safety, reliability, and exceptional service, we have become your trusted partner in getting you to your destination with ease.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-lg shadow-lg about-img-box">
                <img src="/image/VW cars.jpg" alt="VW Cars" className="object-cover object-center w-full h-full rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 funfact-area md:py-24">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Features of WTL Service Company</h2>
          </div>

          <div className="counter-box margin-top-12">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {/* Safety First Feature */}
              <div className="flex flex-col items-center h-full hover:scale-105">
                <div className="flex flex-col justify-between h-full p-6 text-center bg-white rounded-lg shadow-md counter-item">
                  <h3 className="mb-3 text-xl font-semibold text-gray-800">Safety First:</h3>
                  <p className="text-base text-gray-600">
                    Your safety is our top priority. All our drivers undergo rigorous background checks and are trained to ensure your journey is secure.
                  </p>
                </div>
              </div>

              {/* Reliability Feature */}
              <div className="flex flex-col items-center h-full hover:scale-105">
                <div className="flex flex-col justify-between h-full p-6 text-center bg-white rounded-lg shadow-md counter-item">
                  <h3 className="mb-3 text-xl font-semibold text-gray-800">Reliability:</h3>
                  <p className="text-base text-gray-600">
                    Count on us to be punctual and dependable. We're dedicated to getting you where you need to go on time, every time.
                  </p>
                </div>
              </div>

              {/* Comfort Feature */}
              <div className="flex flex-col items-center h-full hover:scale-105">
                <div className="flex flex-col justify-between h-full p-6 text-center bg-white rounded-lg shadow-md counter-item">
                  <h3 className="mb-3 text-xl font-semibold text-gray-800">Comfort:</h3>
                  <p className="text-base text-gray-600">
                    Our vehicles are meticulously maintained to offer you a comfortable and enjoyable ride. Sit back, relax, and let us take care of the driving.
                  </p>
                </div>
              </div>

              {/* Convenience Feature */}
              <div className="flex flex-col items-center h-full hover:scale-105">
                <div className="flex flex-col justify-between h-full p-6 text-center bg-white rounded-lg shadow-md counter-item">
                  <h3 className="mb-3 text-xl font-semibold text-gray-800">Convenience:</h3>
                  <p className="text-base text-gray-600">
                    Booking a ride with WTL is a breeze. Use our user-friendly app or website to reserve a cab in seconds, and track your driver's progress in real-time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <FooterLink />
      </div>
    </div>
  )
}

export default About
