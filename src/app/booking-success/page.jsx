"use client"
import { useRouter } from "next/navigation";

const BookingSuccess = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 pt-0 ">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center border-t-4 border-green-500 w-[90%] max-w-[900px]">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-gray-800">Thank You!</h2>
        <p className="text-lg text-gray-600 mt-2">Your Cab Booked Successfully</p>

        <button
          className="mt-4 px-6 py-3 bg-green-500 text-white text-lg rounded-lg shadow-md hover:bg-green-600"
          onClick={() => router.push("/")}
        >
          Back Home
        </button>
      </div>
    </div>
  );
};

export default BookingSuccess;
