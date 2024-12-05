"use client";
import React from "react";

const MobileAppSection = () => {
  return (
    <section className="mobile-app pt-24 pb-12 bg-gray-100" style={{ margin: "10px" }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {/* Left Content */}
          <div className="lg:w-1/2 w-full">
            <div className="mobile-app-content">
              <div className="section-heading">
                <h2 className="sec__title text-3xl font-bold leading-tight mb-6">
                  WTL Android and IOS App is Available!
                </h2>
              </div>
              {/* end section-heading */}
              <ul className="info-list pt-8">
                <li className="flex items-center mb-3">
                  <span className="la la-check text-green-500 mr-2"></span>
                  Access and change your itinerary on-the-go
                </li>
                <li className="flex items-center mb-3">
                  <span className="la la-check text-green-500 mr-2"></span>
                  Free cancellation on select hotels
                </li>
                <li className="flex items-center mb-3">
                  <span className="la la-check text-green-500 mr-2"></span>
                  Get real-time trip updates
                </li>
              </ul>
              <div className="btn-box pt-8">
                <a href="#" className="inline-block mr-3">
                  <img src="https://www.worldtriplink.com/images/app-store.png" alt="App Store" />
                </a>
                <a href="#" className="inline-block">
                  <img src="https://www.worldtriplink.com/images/google-play.png" alt="Google Play" />
                </a>
              </div>
              {/* end btn-box */}
            </div>
          </div>
          {/* end col-lg-6 */}
          
          {/* Right Image */}
          <div className="lg:w-1/2 w-full flex justify-center">
            <div className="mobile-img">
              <img src="https://www.worldtriplink.com/images/mobile-app.png" alt="Mobile App" className="w-full" />
            </div>
          </div>
          {/* end col-lg-6 */}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
    </section>
  );
};

export default MobileAppSection;
