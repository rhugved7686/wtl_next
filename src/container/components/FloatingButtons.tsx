"use client"
import React from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

const FloatingButtons: React.FC = () => {
    return (
      <>
        {/* WhatsApp Icon */}
        <a
          href="https://wa.me/9130030054"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 left-5 w-16 h-16 rounded-full flex items-center justify-center bg-green-500 text-white text-3xl shadow-lg cursor-pointer hover:scale-110 transition-transform duration-200"
          onClick={() => console.log("WhatsApp Clicked!")}
        >
          <FaWhatsapp />
        </a>
  
        {/* Call Icon */}
        <a
          href="tel:+9130030054"
          className="fixed bottom-5 right-5 w-16 h-16 rounded-full flex items-center justify-center bg-blue-500 text-white text-3xl shadow-lg cursor-pointer hover:scale-110 transition-transform duration-200"
          onClick={() => console.log("Call Clicked!")}
        >
          <FaPhone />
        </a>
      </>
    );
  };
  

export default FloatingButtons;
