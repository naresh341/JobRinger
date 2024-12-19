import React from "react";

const JobsDestination = () => {
  return (
    <div className="relative flex items-center justify-center  ">
    
      <div className="w-full">
        <img
          src="https://www.jobringer.com/images/city-job-bg.jpg"
          className="w-full lg:h-[30rem] h-[25rem] object-cover "
          alt="Map Background"
        />
      </div>

      <div className="absolute flex flex-col items-center justify-center lg:w-full  px-4  lg:flex-row  lg:space-y-0 lg:items-start lg:space-x-2 lg:justify-end">
       
        <div className=" lg:w-[25%] bg-[#E0EDED]/50 border   lg:h-[30rem]  rounded-lg p-4 ">
          <div className="text-[1.5rem] font-bold text-center text-black mb-2">
            Jobs in India
          </div>
          <div className="flex flex-wrap gap-3 font-medium text-sm">
            <a href="#" className="px-2 py-1 hover:text-gray-500">#Mumbai</a>
            <a href="#" className="px-2 py-1 hover:text-gray-500">#Delhi</a>
            <a href="#" className="px-2 py-1 hover:text-gray-500">#Ajmer</a>
            <a href="#" className="px-2 py-1 hover:text-gray-500">#Pune</a>
            <a href="#" className="px-2 py-1 hover:text-gray-500">#Hyderabad</a>
            <a href="#" className="px-2 py-1 hover:text-gray-500">#Agra</a>
            <a href="#" className="px-2 py-1 hover:text-gray-500">#Chennai</a>
          </div>
        </div>

      
        <div className=" lg:w-[25%] bg-[#E0EDED]/40 border lg:h-[30rem] lg:mb-5 rounded-lg p-4 mb-14 ">
          <div className="text-[1.5rem] font-bold text-center text-black mb-2">
            International Jobs
          </div>
          <div className="flex flex-wrap gap-3 font-medium text-sm">
            <a href="#" className="px-2 py-1 hover:text-gray-500">#Africa</a>
            <a href="#" className="px-2 py-1 hover:text-gray-500">#USA</a>
            <a href="#" className="px-2 py-1 hover:text-gray-500">#UK</a>
            <a href="#" className="px-2 py-1 hover:text-gray-500">#Australia</a>
            <a href="#" className="px-2 py-1 hover:text-gray-500">#Canada</a>
            <a href="#" className="px-2 py-1 hover:text-gray-500">#Singapore</a>
            <a href="#" className="px-2 py-1 hover:text-gray-500">#Dubai</a>
            <a href="#" className="px-2 py-1 hover:text-gray-500">#Saudi Arabia</a>
            <a href="#" className="px-2 py-1 hover:text-gray-500">#New Zealand</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsDestination;
