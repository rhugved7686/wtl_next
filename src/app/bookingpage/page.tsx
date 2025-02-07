import FooterLinks from "@/container/components/FooterLink"; // Ensure this path is correct

const Invoice = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200 mb-20">
      {/* Main Content */}
      <div className="flex-grow flex justify-center items-start pt-10 px-4">
        <div className="bg-white shadow-xl rounded-lg p-6 w-[94%] mx-auto text-center">
          <h1 className="text-xl md:text-2xl font-semibold">Invoice</h1>

          {/* Responsive Box with Gray Border and Vertical Divider */}
          <div className="border border-gray-400 mt-4 w-full h-auto flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 h-full flex flex-col items-start p-4">
              <span className="text-lg md:text-xl font-bold">Cab Information:</span>
              <span className="text-sm md:text-base mt-2">
                <span className="font-bold">Model Type:</span> Hatchback
              </span>
              <span className="text-sm md:text-base mt-2">
                <span className="font-bold">Seats:</span> 4+1
              </span>
              <span className="text-sm md:text-base mt-2">
                <span className="font-bold">Fuel Type:</span> CNG-Diesel
              </span>
              <span className="text-sm md:text-base mt-2">
                <span className="font-bold">Availability:</span> Available
              </span>
              <span className="text-sm md:text-base mt-2">
                <span className="font-bold">Price:</span> 1963
              </span>
              <span className="text-sm md:text-base mt-2">
                <span className="font-bold">Service Charge:</span> 95
              </span>
              <span className="text-sm md:text-base mt-2">
                <span className="font-bold">GST:</span> 190
              </span>
              <span className="text-sm md:text-base mt-2">
                <span className="font-bold">Total Amount:</span> 2248
              </span>

              <div className="mt-1">
                <img src="https://3.imimg.com/data3/CO/UC/MY-12558295/second-hand-cars-500x500.jpg" alt="Car" className="w-[85%] h-auto mx-auto" />
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="w-full md:w-px bg-gray-400 h-full md:h-auto"></div>

            {/* Right Side Information */}
            <div className="w-full md:w-1/2 h-full flex flex-col items-start p-4">
              <span className="text-lg md:text-xl font-bold">Trip Information:</span>
              <span className="text-sm md:text-base mt-2">
                <span className="font-bold">Pickup Location:</span> Pune, Maharashtra, India
              </span>
              <span className="text-sm md:text-base mt-2">
                <span className="font-bold">Drop Location:</span> Mumbai, Maharashtra, India
              </span>
              <span className="text-sm md:text-base mt-2">
                <span className="font-bold">Date:</span> 2025-02-19
              </span>
              <span className="text-sm md:text-base mt-2">
                <span className="font-bold">Return Date:</span> Not Available
              </span>
              <span className="text-sm md:text-base mt-2">
                <span className="font-bold">Time:</span> 18:18
              </span>
              <span className="text-sm md:text-base mt-2">
                <span className="font-bold">Trip Type:</span> Oneway
              </span>
              <span className="text-sm md:text-base mt-2">
                <span className="font-bold">Distance:</span> 151 km
              </span>

              {/* Input Fields for Name, Email, Phone */}
              <div className="mt-4 w-full">
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="w-full mt-4 p-2 border border-gray-300 rounded-md"
                />
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-full mt-4 p-2 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  id="phone"
                  placeholder="Phone"
                  className="w-full mt-4 p-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* "Book Now" Button */}
              <div className="mt-6">
                <button className="px-6 py-2 bg-blue-500 text-white rounded-md">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default Invoice;
