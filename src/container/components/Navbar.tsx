import Image from "next/image";
import { blob, text } from "stream/consumers";
import { IoBagCheckOutline,IoHomeOutline  } from "react-icons/io5";
import { PhoneCall, Mail  } from 'lucide-react'
// import { Button } from '@/components/ui/button'
import Link from "next/link";


export default function NavBar() {
  return (
    <div>
      <div className="flex items-center justify-between w-full h-10 px-4 text-sm text-white bg-orange-400 sm:px-6 lg:px-8">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        {/* Phone */}
        <div className="flex items-center">
        <PhoneCall className="w-4 h-4" />
          <span>+91 9730545491</span>
        </div>
        {/* Email */}
        <div className="flex items-center">
        <Mail className="w-5 h-5" />
          <span>contact@worldtriplink.com</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="col-lg-4" style={{ textAlign: 'center', padding: '10px' }}>
        <div className="footer-social-box" style={{ display: 'inline-block' }}>
          <ul className="social-profile" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'inline-flex', gap: '15px' }}>
            <li style={{ display: 'inline' }}>
              <a
                href="https://www.facebook.com/profile.php?id=61554946222967&mibextid=ZbWKwL"
                style={{ textDecoration: 'none', color: '#3b5998', fontSize: '20px', transition: 'color 0.3s ease' }}
              >
                <i className="lab la-facebook-f hover:scale-110"></i>
              </a>
            </li>
            <li style={{ display: 'inline' }}>
              <a
                href="https://x.com/world_trip_link"
                style={{ textDecoration: 'none', color: '#1da1f2', fontSize: '20px', transition: 'color 0.3s ease' }}
              >
                <i className="lab la-twitter hover:scale-110"></i>
              </a>
            </li>
            <li style={{ display: 'inline' }}>
              <a
                href="https://www.instagram.com/worldtriplink/"
                style={{ textDecoration: 'none', color: '#e1306c', fontSize: '20px', transition: 'color 0.3s ease' }}
              >
                <i className="lab la-instagram hover:scale-110"></i>
              </a>
            </li>
            <li style={{ display: 'inline' }}>
              <a
                href="https://www.linkedin.com/in/world-trip-link9562762a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                style={{ textDecoration: 'none', color: '#0077b5', fontSize: '20px', transition: 'color 0.3s ease' }}
              >
                <i className="lab la-linkedin-in hover:scale-110"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
      <div className="sticky top-0 flex flex-col items-center justify-between w-full p-4 mx-auto border-b-4 border-white sm:flex-row sm:w-screen bg-sky-100">
         <div className="flex justify-center sm:justify-start">
            <img className="h-16 w-22 sm:h-20 sm:w-22" src="/image/wtl-logo.png" alt="Logo" />
        </div>
        <div className="flex flex-wrap items-center justify-center mt-4 sm:justify-end sm:mt-0">
          <button className="flex items-center gap-2 px-4 py-2 m-2 text-sm sm:text-base text-white bg-[#219ebc] rounded-xl hover:bg-[#176c8c] transition duration-300">  MyTrip <IoBagCheckOutline /> </button>
          <button className="flex items-center gap-2 px-4 py-2 m-2 text-sm sm:text-base text-white bg-[#219ebc] rounded-xl hover:bg-[#176c8c] transition duration-300">     <Link href={"/"}>Home</Link> <IoHomeOutline /> </button> 
          <button className="px-4 py-2 m-2 text-sm sm:text-base text-white bg-[#219ebc] rounded-xl hover:bg-[#176c8c] transition duration-300"><Link href={"/login"}>Login</Link></button>
          <button className="px-4 py-2 m-2 text-sm sm:text-base text-white bg-[#219ebc] rounded-xl hover:bg-[#176c8c] transition duration-300"><Link href={"/register"}>Sign Up</Link> </button>
        </div>
      </div>
    </div>

  );
}
