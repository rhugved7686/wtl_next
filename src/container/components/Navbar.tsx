import Image from "next/image";
import { blob, text } from "stream/consumers";
import { IoBagCheckOutline,IoHomeOutline  } from "react-icons/io5";
import Link from "next/link";


export default function NavBar() {
  return (
    <div>
      <div className="sticky top-0 flex flex-col sm:flex-row justify-between items-center sm:w-screen w-full p-4 mx-auto border-b-4 border-white bg-slate-100">
         <div className="flex justify-center sm:justify-start">
            <img className="h-16 w-22 sm:h-20 sm:w-22" src="https://www.worldtriplink.com/images/wtl-logos.png" alt="Logo" />
        </div>
        <div className="flex flex-wrap justify-center sm:justify-end items-center mt-4 sm:mt-0">
          <button className="flex items-center gap-2 px-4 py-2 m-2 text-sm sm:text-base text-white bg-[#219ebc] rounded-xl hover:bg-[#176c8c] transition duration-300">  MyTrip <IoBagCheckOutline /> </button>
          <button className="flex items-center gap-2 px-4 py-2 m-2 text-sm sm:text-base text-white bg-[#219ebc] rounded-xl hover:bg-[#176c8c] transition duration-300">     <Link href={"/"}>Home</Link> <IoHomeOutline /> </button> 
          <button className="px-4 py-2 m-2 text-sm sm:text-base text-white bg-[#219ebc] rounded-xl hover:bg-[#176c8c] transition duration-300"><Link href={"/login"}>Login</Link></button>
          <button className="px-4 py-2 m-2 text-sm sm:text-base text-white bg-[#219ebc] rounded-xl hover:bg-[#176c8c] transition duration-300"><Link href={"/register"}>Sign Up</Link> </button>
        </div>
      </div>
    </div>

  );
}
