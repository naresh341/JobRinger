import React from "react";

const Hired_jobs_Details = () => {
  return (
    <>
      <div className="relative -mt-16 border-t-2 border-b-2 border-[#2B438D] bg-[#E8F5F5] w-full h-28 flex sm:flex-col lg:flex-row items-center justify-center lg:space-x-16 p-4">
        <div className="flex flex-col items-center">
          <div className="whitespace-nowrap font-bold mr-3 text-xs lg:text-md">
            Jobs Posted
          </div>
          <div className="mt-1 text-md lg:text-4xl font-bold text-[#0023B5]">
            32330
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="whitespace-nowrap font-bold text-xs  mr-3 lg:text-md">
            Jobs Filled
          </div>
          <div className="mt-1 text-md lg:text-4xl font-bold text-[#0023B5]">
            15153
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="font-bold text-xs mr-3 lg:text-md">Employers</div>
          <div className="mt-1 text-md lg:text-4xl font-bold text-[#0023B5]">
            20450
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="whitespace-nowrap font-bold text-xs mr-3 lg:text-md">
            Active Users
          </div>
          <div className="mt-1 text-md lg:text-4xl font-bold text-[#0023B5]">
            1297124
          </div>
        </div>

        <div className="absolute top-0 right-5 w-[35rem] hidden sm:block">
          <img
            src="https://www.jobringer.com/images/rec-right.png"
            alt="rec-right"
            className=""
          />
        </div>
      </div>
    </>
  );
};

export default Hired_jobs_Details;
