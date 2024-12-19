import React from "react";
import play from "../assets/logos/plays.jpg";
const MobileDownload = () => {
  return (
    <div className="relative mt-2 mx-auto flex flex-col lg:flex-row items-center justify-between z-10 px-4 lg:px-16">
      <div className="flex flex-col lg:items-start space-y-5 text-center lg:text-left z-10 lg:w-1/2">
        <div className="text-2xl sm:text-3xl lg:text-4xl whitespace-nowrap font-medium text-black uppercase">
          Apply To Jobs On-The-Go
        </div>

        <div className="text-[#1554E8] text-lg sm:text-xl lg:text-2xl">
          Jobringer Mobile App
        </div>

        <div className="flex space-x-4 justify-center lg:justify-start">
          <img
            loading="lazy"
            src="https://www.jobringer.com/images/anroid.png"
            alt="Google Play Img"
            className="cursor-pointer w-24 sm:w-28 lg:w-32"
          />
          <img
            loading="lazy"
            src="https://www.jobringer.com/images/ios.png"
            alt="Apple Store Img"
            className="cursor-pointer w-24 sm:w-28 lg:w-32"
          />
        </div>

        <div>
          <div className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-500">
            Mobile App{" "}
            <span className="text-[#0000FF] font-bold cursor-pointer">
              Download
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8 mr-5 ml-5 lg:mt-0   lg:w-1/2 flex justify-center">
        <img
          src={play}
          alt="Play Store Image"
          className="w-full max-w-sm sm:max-w-md hidden sm:block lg:max-w-lg h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default MobileDownload;
