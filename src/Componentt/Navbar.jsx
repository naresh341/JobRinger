import React from "react";
import { PiSuitcaseSimpleDuotone } from "react-icons/pi";
import { SlActionUndo } from "react-icons/sl";
import home from "../assets/logos/home.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import { BsPersonPlus } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <nav className=" sticky top-0 w-full   z-50   bg-white shadow-md border-b-2 border-gray-300">
        <div className="list-none flex  h-20  justify-between  items-center  ">
          <div className="flex pointer-cursor">
            <img
              src="https://www.jobringer.com/images/logonew.svg"
              alt="jobRinger"
              width="180"
            />
          </div>
          <div className="  block lg:hidden text-transparent  lg:-mb-10 whitespace-nowrap bg-clip-text bg-gradient-to-r  from-[#001360] via-[#e2dbdb] to-[#001360] animate-gradient-text text-lg font-extrabold bg-[length:200%_100%] ">
            <p>
              11000+ <br /> Active Jobs{" "}
            </p>
          </div>

          <div className="flex  items-center">
            <div className="relative text-sm font-medium px-3 py-3 group hover:text-white hidden sm:block">
              Jobs
              <span className="absolute inset-0 bg-[#1375AE] scale-y-0 origin-bottom-right transform transition-transform duration-300 ease-in-out group-hover:scale-y-100 group-hover:origin-top-left -z-10 "></span>
            </div>
            <div className=" relative text-sm px-2 py-2 hover:text-white font-medium grou hidden sm:block">
              Active Employers
              <span className="absolute inset-0 bg-[#1375AE] scale-y-0 origin-bottom-right transform transition-transform duration-300 ease-in-out group-hover:scale-y-100 group-hover:origin-top-left -z-10"></span>
            </div>

            <div className=" relative px-2 py-2 text-sm font-medium hover:text-white  group hidden sm:block ">
              Job Blogs
              <span className=" absolute bg-[#1275AE] scale-y-0 inset-0 origin-bottom-right transform transition-transform duration-300 group-hover:scale-y-100 group-hover:origin-top-left -z-10 "></span>
            </div>

            <div className=" relative px-2 py-2 text-sm font-medium hover:text-white group hidden sm:block ">
              Pricing
              <span className=" absolute bg-[#1275AE] scale-y-0 inset-0 origin-bottom-right transform transition-transform duration-300 group-hover:scale-y-100 group-hover:origin-top-left -z-10"></span>
            </div>

            <button className="border-2 border-gray-300 w-32 h-10 mr-2 font-medium text-sm rounded-md  hover:bg-[#FFD52C]  hover:border-none hidden sm:block ">
              Jobseeker Login
            </button>
            <button className="border-2 mr-3 w-32 h-10 font-medium text-sm rounded-md outline-none bg-[#FFD52C] hover:bg-[#323E6B] hover:text-white transition-all duration-300 hidden sm:block ">
              Employer Login
            </button>
          </div>
        </div>
      </nav>
      <nav className=" fixed bottom-0  z-50 left-0 w-full bg-white p-3 shoadow flex justify-center items-center space-x-10  lg:hidden cursor-pointer ">
        <div>
          <div>
            <HiOutlineBars3 size={40} />
          </div>
        </div>

        <div className="flex items-center flex-col ">
          <div className="items-center ">
            <BsPersonPlus className="text-center ml-[7px]" size={24} />
            <span className="text-center items-center hover:text-gray-700  ">
              login
            </span>
          </div>
        </div>

        <div className="flex items-center flex-col">
          <img src={home} alt="home" className="w-5 h-5 text-center  " />
          <span className="text-center items-center hover:text-gray-700 ">
            Home
          </span>
        </div>

        <div className="flex items-center flex-col">
          <div>
            {" "}
            <PiSuitcaseSimpleDuotone
              className="text-center ml=[7px]"
              size={24}
            />
          </div>
          <span className="text-center items-center hover:text-gray-700 ">
            Jobs
          </span>
        </div>

        <div className="flex items-center flex-col">
          <div>
            <SlActionUndo className="text-center ml-[7px]" size={24} />
          </div>
          <span className="text-center items-center hover:text-gray-700 ">
            Back
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
