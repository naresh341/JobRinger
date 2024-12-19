import React, { useRef } from "react"; // Importing useRef
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md"; // Importing icons for navigation

import logo1 from "../assets/logos/1.png";
import logo2 from "../assets/logos/2.png";
import logo3 from "../assets/logos/3.png";
import logo4 from "../assets/logos/4.png";
import logo5 from "../assets/logos/5.png";
import logo6 from "../assets/logos/6.png";
import logo7 from "../assets/logos/7.png";
import logo8 from "../assets/logos/8.png";
import logo9 from "../assets/logos/9.png";
import logo10 from "../assets/logos/10.png";
import logo11 from "../assets/logos/11.png";
import logo12 from "../assets/logos/12.png";
import logo13 from "../assets/logos/13.png";
import logo14 from "../assets/logos/14.png";
import logo15 from "../assets/logos/15.png";
import logo17 from "../assets/logos/17.png";
import logo18 from "../assets/logos/18.png";
import logo20 from "../assets/logos/20.png";

const Features = () => {
  const companies = [
    logo1,logo2,logo3,logo4,logo5,logo6,logo7,logo8,logo9,logo10,logo11,logo12,logo13,logo14,logo15,logo17,logo18,logo20,
  ];

  const swiperRef = useRef(null);

  return (
    <>
      <div className="flex justify-center items-center mt-5">
        <div className="text-xl font-bold text-black">
          FEATURED{" "}
          <span className="text-xl font-bold text-gray-500">EMPLOYERS</span>
        </div>
      </div>

      <div className=" mt-5 ml-24 mr-24">
        <Swiper
          ref={swiperRef}
          spaceBetween={20}
          slidesPerView={8}
          loop={true}
          autoplay={{ delay: 2000 }}
          modules={[Autoplay]}
          navigation={false}
          breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 8 },
          }}
        >
          {companies.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="border-[3px] rounded-md items-center">
                <img
                  src={logo}
                  alt={`company-logo-${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="absolute top-[91rem] left-0 right-0 z-10 flex justify-between items-center">
        <div
          className="swiper-button-prev-custom flex justify-center items-center"
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          <span className="text-[2rem] ml-4 text-[white] font-light">
            <MdOutlineArrowBackIosNew />
          </span>
        </div>
        <div
          className="swiper-button-next-custom flex justify-center items-center"
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
          <span className="text-[2rem] font-light text-[white]">
            <MdOutlineArrowForwardIos />
          </span>
        </div>
      </div>
    </>
  );
};

export default Features;
