import React from "react";

const Banner = () => {
  return (
    <>
      <div className="bg-gradient-125 xl:h-20 flex-wrap lg:h-28 m-3 h-32 rounded-md">
        <div className="flex flex-col xl:flex-row justify-between xl:items-center ml-2">
          <div className="xl:ml-5 xl:mt-5 flex ml-5 xl:items-center  ">
            <div className="text-[1.5rem] font-bold text-white mb-1">
              EMPLOYEES
            </div>
          </div>

          <div className=" xl:relative lg:relative  flex justify-center  lg:justify-end xl:-mt-2 xl:ml-[15rem] w-full">
            <div className="text-transparent  lg:absolute lg:-top-8 lg:right-2 xl:top-0 whitespace-nowrap bg-clip-text bg-gradient-to-r hidden sm:block from-[#FACC15] via-[#F5F5F5] to-[#FACC15] animate-gradient-text text-lg font-extrabold bg-[length:200%_100%]">
              WELCOME OFFER - FREE JOB POSTING AND MUCH MORE.
            </div>
          </div>

          <div className="  xl:mt-5 flex ml-5 mt-3 items-center  lg:space-x-5  xl:flex-row xl:items-end xl:space-x-3  item-center ">
            <button className="xl:w-[8rem] text-sm font-medium w-[8rem]   h-8  mr-3 xl:ml-[5rem] xl:mr-[rem] items-center xl:h-10 bg-[#FFD52C] rounded-md hover:text-white">
              Register for Free
            </button>
            <button className="bg-white xl:w-[8rem] text-sm  h-8 p-2 w-[8rem]   items-center  font-medium xl:h-10 rounded-md">
              Post A Job
            </button>
            <span className="text-white mt-3 ml-2  whitespace-nowrap   xl:text-sm xl:whitespace-nowrap xl:pl-4 xl:pr-4  xl:mr-10 xl:mt-5 text-[17px] underline hover:text-[#0048DF]  hover:no-underline hidden sm:block ">
              Sales Enquiry
            </span>
          </div>
          <span className="text-white mt-5 ml-5 text-xs   whitespace-nowrap xl:text-sm xl:whitespace-nowrap xl:mr-4 xl:mt-5 text-[17px] underline hover:text-[#0048DF]  hover:no-underline block sm:hidden ">
            Sales Enquiry
          </span>
        </div>
      </div>
    </>
  );
};

export default Banner;
