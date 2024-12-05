import Image from "next/image";
import { blob, text } from "stream/consumers";
import { IoBagCheckOutline,IoHomeOutline  } from "react-icons/io5";
import Link from "next/link";


export default function NavBar() {
  return (
    <div>
      <div className="sticky top-0 flex justify-between sm:w-screen w-full p-4 mx-auto border-4 border-white h-30 item-center place-items-center bg-slate-100 ">
        <div >
        <img className="h-20 w-22" src="https://www.worldtriplink.com/images/wtl-logos.png" alt="" />
        </div>
        <div className="flex items-center justify-center">
          <button className="flex items-center gap-2 px-4 py-2 m-2 text-white bg-[#219ebc] rounded-xl hover:bg-[#176c8c] transition duration-300">MyTrip<IoBagCheckOutline/></button>
          <button className="flex items-center gap-2 px-4 py-2 m-2 text-white bg-[#219ebc] rounded-xl hover:bg-[#176c8c] transition duration-300"><Link href={"/"}>Home</Link><IoHomeOutline /></button>
          <button className="p-2 m-2 text-white bg-[#219ebc] border-5 rounded-xl hover:bg-[#176c8c] transition duration-300 px-4"><Link href={"/login"}>Login</Link></button>
          <button className="p-2 m-2 text-white bg-[#219ebc] border-5 rounded-xl hover:bg-[#176c8c] transition duration-300 px-4 "><Link href={"/register"}>Sign Up</Link></button>
        </div>
      </div>    
    </div>
  );
}
