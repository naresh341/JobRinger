import React, { useRef } from "react";
import { CiClock1 } from "react-icons/ci";
import { PiSuitcaseSimpleDuotone } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { TbArrowBigRight } from "react-icons/tb";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const RemoteJobs = () => {
  const swiperRef = useRef(null);
  const jobs = [
    {
      title: "Software Developer",
      company: "Tech Innovations",
      jobTime: "Full-Time - Permanent",
      experience: "2-4 Years",
      location: "Bangalore/India",
      JobType: "Hybrid",
    },
    {
      title: "Data Analyst",
      company: "DataInsight",
      jobTime: "Full-Time",
      experience: "1-3 Years",
      location: "Delhi/India",
      JobType: "Remote",
    },
    {
      title: "Front-End Developer",
      company: "WebWorks",
      jobTime: "Full-Time - Permanent",
      experience: "3-5 Years",
      location: "Mumbai/India",
      JobType: "WFH",
    },
    {
      title: "Product Designer",
      company: "DesignHub",
      jobTime: "Full-Time",
      experience: "2-4 Years",
      location: "Chennai/India",
      JobType: "Hybrid",
    },
    {
      title: "SEO Specialist",
      company: "Digital Marketing Co.",
      jobTime: "Part-Time",
      experience: "1-2 Years",
      location: "Pune/India",
      JobType: "Remote",
    },
    {
      title: "UI/UX Designer",
      company: "Creative Minds",
      jobTime: "Full-Time - Permanent",
      experience: "2-3 Years",
      location: "Hyderabad/India",
      JobType: "Hybrid",
    },
    {
      title: "Mobile App Developer",
      company: "Tech Solutions",
      jobTime: "Full-Time - Contract",
      experience: "3-5 Years",
      location: "Kochi/India",
      JobType: "WFH",
    },
    {
      title: "Cloud Engineer",
      company: "CloudXperts",
      jobTime: "Full-Time",
      experience: "4-6 Years",
      location: "Noida/India",
      JobType: "Hybrid",
    },
    {
      title: "Content Manager",
      company: "WriteNow",
      jobTime: "Full-Time",
      experience: "2-3 Years",
      location: "Mumbai/India",
      JobType: "Remote",
    },
    {
      title: "Business Analyst",
      company: "Consultify",
      jobTime: "Full-Time",
      experience: "3-5 Years",
      location: "Kolkata/India",
      JobType: "WFH",
    },
    {
      title: "Cybersecurity Analyst",
      company: "SecureTech",
      jobTime: "Full-Time - Contract",
      experience: "3-5 Years",
      location: "Bangalore/India",
      JobType: "Remote",
    },
    {
      title: "Digital Marketing Specialist",
      company: "MarketX",
      jobTime: "Full-Time",
      experience: "2-4 Years",
      location: "Gurgaon/India",
      JobType: "Hybrid",
    },
    {
      title: "DevOps Engineer",
      company: "CloudTech",
      jobTime: "Full-Time - Permanent",
      experience: "4-6 Years",
      location: "Chennai/India",
      JobType: "WFH",
    },
    {
      title: "Machine Learning Engineer",
      company: "AI Labs",
      jobTime: "Full-Time - Contract",
      experience: "3-5 Years",
      location: "Bangalore/India",
      JobType: "Hybrid",
    },
    {
      title: "Graphic Designer",
      company: "DesignPro",
      jobTime: "Full-Time",
      experience: "1-3 Years",
      location: "Pune/India",
      JobType: "Remote",
    },
    {
      title: "Backend Developer",
      company: "TechX Solutions",
      jobTime: "Full-Time - Permanent",
      experience: "3-5 Years",
      location: "Mumbai/India",
      JobType: "WFH",
    },
    {
      title: "Project Manager",
      company: "ProjectWise",
      jobTime: "Full-Time",
      experience: "5-7 Years",
      location: "Delhi/India",
      JobType: "Hybrid",
    },
    {
      title: "Customer Support Executive",
      company: "SupportPlus",
      jobTime: "Full-Time - Permanent",
      experience: "0-2 Years",
      location: "Jaipur/India",
      JobType: "Remote",
    },
    {
      title: "HR Manager",
      company: "People Solutions",
      jobTime: "Full-Time",
      experience: "4-6 Years",
      location: "Pune/India",
      JobType: "WFH",
    },
    {
      title: "Tech Support Specialist",
      company: "SupportTech",
      jobTime: "Full-Time - Permanent",
      experience: "1-3 Years",
      location: "Chennai/India",
      JobType: "Hybrid",
    },
  ];

  return (
    <>
      <div className="relative overflow-hidden ">
        <div className="flex justify-center  ">
          <h2 className="text-2xl font-bold mt-8 text-[#384A9A]">
            Remote Jobs
          </h2>
        </div>

        <div className="mt-5 ml-14 mr-14 flex flex-wrap overflow-x-auto">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Autoplay]}
            spaceBetween={50}
            slidesPerView={4}
            loop={true}
            autoplay={{ delay: 3000 }}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {jobs.map((job, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white border-[1px] border-gray-400 flex flex-col justify-between lg:w-full lg:h-full  p-3 ">
                  <div className="flex justify-end bg-[#FFD52C] ml-[48%]  font-medium rounded-bl-3xl">
                    <div className="mr-1 text-sm ">{job.JobType}</div>
                  </div>
                  <div className="mt-3 ml-3 ">
                    <div className="font-bold text-[#384A9A]  ">
                      {job.title}
                    </div>
                  </div>
                  <div className="mt-2 ml-3">
                    <div className="font-medium text-md hover:text-gray-500 ">
                      {job.company}
                    </div>
                    <div className="text-sm mt-2 text-gray-400 items-center flex gap-2">
                      <CiClock1 />
                      {job.jobTime}
                    </div>
                    <div className="mt-2 text-sm text-gray-400 flex items-center gap-2">
                      <PiSuitcaseSimpleDuotone />
                      {job.experience}
                    </div>
                    <div className="mt-4 text-sm text-gray-400 flex items-center gap-2">
                      <IoLocationOutline />
                      {job.location}
                    </div>
                  </div>
                  <div className="mt-10 ml-3 mr-3">
                    <button className="text-white w-full h-8 text-bold text-xl flex  justify-center items-center gap-2  bg-[#7AD5D5]">
                      Apply <TbArrowBigRight color="white" />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="absolute top-[55%] left-0 right-0 z-10 flex justify-between items-center cursor-pointer">
          <div
            className="swiper-button-prev-custom flex justify-center items-center"
            onClick={() => swiperRef.current.swiper.slidePrev()}
          >
            <span className="text-[2rem] ml-4 text-[#007AFF] font-light items-center">
              <MdOutlineArrowBackIosNew />
            </span>
          </div>
          <div
            className="swiper-button-next-custom flex justify-center items-center"
            onClick={() => swiperRef.current.swiper.slideNext()}
          >
            <span className="text-[2rem] font-light mr-3 text-[#007AFF] items-center">
              <MdOutlineArrowForwardIos />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default RemoteJobs;
