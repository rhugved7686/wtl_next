import Image from "next/image";
import Link from "next/link";
import { IoBagCheckOutline, IoHomeOutline } from "react-icons/io5";
import { PhoneCall, Mail } from "lucide-react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function NavBar() {
  return (
    <div className="w-full">
    <div className="top-bar">
  {/* Contact Info */}
  <div className="flex items-center space-x-4">
    <div className="flex items-center gap-2">
      <PhoneCall className="icon" />
      <span className="info-text">+91 9730545491</span>
    </div>
    <div className="flex items-center gap-2">
      <Mail className="icon" />
      <span className="info-text">contact@worldtriplink.com</span>
    </div>
  </div>

  {/* Social Media Links */}
  <div className="flex space-x-3">
    <a href="https://www.facebook.com/" className="social-icon hover:text-blue-600">
      <Facebook />
    </a>
    <a href="https://x.com/" className="social-icon hover:text-blue-400">
      <Twitter />
    </a>
    <a href="https://www.instagram.com/" className="social-icon hover:text-pink-500">
      <Instagram />
    </a>
    <a href="https://www.linkedin.com/" className="social-icon hover:text-blue-700">
      <Linkedin />
    </a>
  </div>
</div>


      {/* Main Navbar */}
      <div className="sticky top-0 flex items-center justify-between w-full px-6 py-3 bg-white shadow-md sm:px-10">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/image/wtl-logo.png"
            width={80}
            height={60}
            alt="Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-blue-600 transition"
          >
            Home <IoHomeOutline className="w-4 h-4" />
          </Link>
          <Link
            href="/mytrip"
            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-blue-600 transition"
          >
            MyTrip <IoBagCheckOutline className="w-4 h-4" />
          </Link>

          {/* Modern Styled Buttons */}
          <Link href="/login">
            <button className="modern-button">Login</button>
          </Link>
          <Link href="/register">
            <button className="modern-button signup">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
