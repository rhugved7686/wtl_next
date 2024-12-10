"use client";
import React from "react";

const MobileAppSection = () => {
  return (
    <section className="pt-24 pb-12 bg-gray-100 mobile-app " style={{ margin: "10px" }}>
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="mobile-app-content">
              <div className="section-heading">
                <h2 className="mb-6 text-3xl font-bold leading-tight sec__title">
                  WTL Android and IOS App is Available!
                </h2>
              </div>
              <ul className="pt-8 info-list">
                <li className="flex items-center mb-3">
                  <span className="mr-2 text-green-500 la la-check"></span>
                  Access and change your itinerary on-the-go
                </li>
                <li className="flex items-center mb-3">
                  <span className="mr-2 text-green-500 la la-check"></span>
                  Free cancellation on select hotels
                </li>
                <li className="flex items-center mb-3">
                  <span className="mr-2 text-green-500 la la-check"></span>
                  Get real-time trip updates
                </li>
              </ul>
              <div className="pt-8 btn-box">
                <a href="#" className="inline-block mr-3">
                  <img src="https://www.worldtriplink.com/images/app-store.png" alt="App Store" />
                </a>
                <a href="#" className="inline-block">
                  <img src="https://www.worldtriplink.com/images/google-play.png" alt="Google Play" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full lg:w-1/2">
            <div className="mobile-img">
              <img src="/image/mobile.png" alt="Mobile App" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;
