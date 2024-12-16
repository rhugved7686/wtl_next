import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="breadcrumb-area bread-bg-5">
      <div className="breadcrumb-wrap">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between">
            <div className="w-full lg:w-1/2">
              <div className="breadcrumb-content">
                <div className="section-heading">
                  <h2 className="text-3xl font-semibold text-white sec__title">Contact us</h2>
                </div>
              </div>
            </div>
            <div className="w-full text-right lg:w-1/2">
              <div className="breadcrumb-list">
                <ul className="flex justify-end space-x-4 list-items">
                  <li>
                    <a href="/" className="text-white hover:text-gray-300">Home</a>
                  </li>
                  <li className="text-white">Pages</li>
                  <li className="text-white">Contact us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bread-svg-box">
        <svg
          className="w-full bread-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
        >
          <polygon points="100 0 50 10 0 0 0 10 100 10"></polygon>
        </svg>
      </div>
    </section>

      {/* Services Section */}
      <section className="py-12 text-center bg-gray-50">
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap justify-center gap-8">
      {/* One Way Trip */}
      <div className="w-full mb-8 lg:w-1/3 lg:mb-0">
        <div className="p-6 transition-all duration-300 transform shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl hover:shadow-xl hover:scale-105 hover:translate-y-2">
          <div className="mb-4 text-4xl text-blue-600">
            <i className="la la-car"></i>
          </div>
          <h4 className="mb-2 text-2xl font-semibold text-gray-800">ONE WAY TRIP</h4>
          <p className="text-base text-gray-700">
            Book a <Link href="/services"><span className="font-medium text-blue-600 hover:text-blue-800">one-way cab</span></Link> for city-to-city travel. Choose from Hatchback, Sedan, or SUV. Flexible timings for pickup and drop.
            <br />
            One-way drop service is available in Pune. Affordable pricing calculated per kilometer.
          </p>
        </div>
      </div>

      {/* Round Way Trip */}
      <div className="w-full mb-8 lg:w-1/3 lg:mb-0">
        <div className="p-6 transition-all duration-300 transform shadow-lg bg-gradient-to-r from-green-50 to-green-100 rounded-xl hover:shadow-xl hover:scale-105 hover:translate-y-2">
          <div className="mb-4 text-4xl text-green-600">
            <i className="la la-car"></i>
          </div>
          <h4 className="mb-2 text-2xl font-semibold text-gray-800">ROUND WAY TRIP</h4>
          <p className="text-base text-gray-700">
            Plan your trip with easy return options. Book for same-day or multi-day return journeys. Transparent pricing with packages or per-km rates. 
            <Link href="/services"><span className="font-medium text-green-600 hover:text-green-800">Round trip cabs</span></Link> for outstation travel.
            <br />
            Book now and enjoy flat discounts!
          </p>
        </div>
      </div>

      {/* Rental Way Trip */}
      <div className="w-full mb-8 lg:w-1/3 lg:mb-0">
        <div className="p-6 transition-all duration-300 transform shadow-lg bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl hover:shadow-xl hover:scale-105 hover:translate-y-2">
          <div className="mb-4 text-4xl text-yellow-600">
            <i className="la la-car"></i>
          </div>
          <h4 className="mb-2 text-2xl font-semibold text-gray-800">RENTAL WAY TRIP</h4>
          <p className="text-base text-gray-700">
            Hourly or daily rental options are available with unlimited km options (on request). Ideal for city tours, business trips, or outstation needs. 
            Choose from Hatchback, Sedan, SUV, or Tempo Travelers.
            <br />
            Affordable <Link href="/services"><span className="font-medium text-yellow-600 hover:text-yellow-800">Rental Cab Services</span></Link> for your next trip.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Deal Cards Section */}
      <section className="py-12 bg-gray-100">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-semibold text-center text-gray-800">Popular City Deals</h2>
          <div className="flex flex-wrap -mx-4">
            {/* Dynamic Deal Cards */}
            {[
              { from: 'Shirdi', to: 'Latur', link: '/city/Shirdi-Latur' },
              { from: 'Shirdi', to: 'Solapur', link: '/city/Shirdi-Solapur' },
              { from: 'Aurangabad', to: 'Pune', link: '/city/Aurangabad-Pune' },
              { from: 'Aurangabad', to: 'Mumbai', link: '/city/Aurangabad-Mumbai' },
              { from: 'Aurangabad', to: 'Shirdi', link: '/city/Aurangabad-Shirdi' },
              { from: 'Aurangabad', to: 'Solapur', link: '/city/Aurangabad-Solapur' },
              { from: 'Aurangabad', to: 'Latur', link: '/city/Aurangabad-Latur' },
              { from: 'Aurangabad', to: 'Nanded', link: '/city/Aurangabad-Nanded' },
              { from: 'Nashik', to: 'Pune', link: '/city/Nashik-Pune' },
              { from: 'Nashik', to: 'Mumbai', link: '/city/Nashik-Mumbai' },
              { from: 'Nashik', to: 'Shirdi', link: '/city/Nashik-Shirdi' },
              { from: 'Nashik', to: 'Solapur', link: '/city/Nashik-Solapur' },
              { from: 'Nashik', to: 'Latur', link: '/city/Nashik-Latur' },
              { from: 'Nashik', to: 'Aurangabad', link: '/city/Nashik-Aurangabad' }
            ].map((deal, index) => (
              <div key={index} className="w-full p-4 sm:w-1/2 lg:w-1/3">
                <div className="p-6 transition-transform duration-300 transform bg-white shadow-md rounded-xl hover:shadow-xl hover:scale-105">
                  <div className="flex items-center">
                    <Image
                      src="/image/auto-automobile-car-pictogram-service-traffic-transport--2.png"
                      alt="deal-img"
                      width={40}
                      height={40}
                    />
                    <h3 className="ml-3 text-xl font-semibold text-gray-800">
                      <Link href={deal.link}>
                        {deal.from} <i className="mx-2 la la-exchange"></i> {deal.to}
                      </Link>
                    </h3>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <Link href={deal.link}>
                      <span className="text-sm font-medium text-blue-600 hover:text-blue-800">
                        See Details
                        <i className="ml-1 la la-angle-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="py-6 text-white bg-gray-900">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-400">© Copyright WTL 2023 Made with bycobaztech. All Rights Reserved.</p>
        </div>
      </section>
    </div>
  );
};

export default Services;
