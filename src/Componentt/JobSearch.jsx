import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const JobSearch = () => {
  return (
    <div>
      <div className=" flex justify-center item-center ">
        <div className="text-xl m-2 tracking-tighter whitespace-nowrap font-semibold text-[#051A89] ">
          BRINGING YOU THE PERFECT JOB !
        </div>
      </div>

      <div className="flex justify-center item-center">
        <div className="text-[#051A89] font-medium">11,000 + JOBS to Apply</div>
      </div>

      <div className="flex lg:justify-between lg:flex-row flex-col -mt-5 lg:p-12 p-5 space-y-3 ">
        <div className="bg-[#7AD5D5] lg:w-[45%] w-[100%] rounded-md lg:h-[10rem] h-[9rem]  ">
          <div className="mt-5 ml-3 space-x-2 ">
            <input
              type="text"
              placeholder="Search Jobs Now"
              className="lg:w-[80%] lg:p-2 w-[70%] h-10 rounded md text-sm outline-none  "
            />

            <button className=" lg:ml-2 lg:w-20 lg:h-10 w-16 h-10  bg-[#FFD52C] hover:text-gray-600 text-sm font-medium rounded-md">
              Search
            </button>
          </div>

          <div className="flex justify-end lg:mt-2 mt-8">
            <button className="w-24 h-10  bg-white rounded-md text-sm font-medium ">
              view Jobs
            </button>
            <button className="  ml-3 mr-3 w-32 h-10 bg-[#FFD52C] text-sm font-medium hover:text-white rounded-md">
              Register for Free
            </button>
          </div>
        </div>

        <div className="bg-[#7AD5D5] lg:w-[45%]  rounded-md m">
          <div className="flex items-center text-lg caret-transparent font-bold justify-center text-[#051A78] mt-3">
            Quick Job Search
            <FaMagnifyingGlass className="ml-2" size={20} />
          </div>
          <div className=" lg:text-xs text-sm text-white  lg:p-2 p-4 xl:pl-8">
            <div className="flex flex-wrap gap-3 ">
              <a className="" href="#">
                {" "}
                #Fresher
              </a>
              <a className="" href="#">
                #Work From Home
              </a>
              <a className="" href="#">
                #WFH
              </a>
              <a className="" href="#">
                #IT
              </a>
              <a className="" href="#">
                #HR
              </a>
              <a className="" href="#">
                #Back Office
              </a>
              <a className="" href="#">
                #BPO Jobs
              </a>
              <a className="" href="#">
                #ITES
              </a>
              <a className="" href="#">
                #Finance
              </a>
              <a className="" href="#">
                #Accounts
              </a>
              <a className="" href="#">
                #Medical
              </a>
              <a className="" href="#">
                #Pharma
              </a>
              <a className="" href="#">
                #Manager
              </a>
              <a className="" href="#">
                #Developer
              </a>
              <a className="" href="#">
                #Marketing
              </a>
              <a className="" href="#">
                #Engineering
              </a>
              <a className="" href="#">
                #Non Government Jobs
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSearch;
