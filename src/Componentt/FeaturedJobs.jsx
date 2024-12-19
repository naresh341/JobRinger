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

const FeaturedJobs = () => {
  const swiperRef = useRef(null);
  const jobs = [
    {
      title: "Recruiter",
      company: "Hr Yaar",
      jobTime: "Full-Time - Permanent",
      experience: "2-4 Years",
      location: "Mumbai (All Areas)/India",
      JobType: "In Office Job",
    },
    {
      title: "Quality Control Analyst",
      company: "GRNconnect.com",
      jobTime: "Full-Time",
      experience: "2-3 Years",
      location: "New Delhi/India",
      JobType: "In Office Job",
    },
    {
      title: "Front End Angular Developer",
      company: "YellowStone Xps BPM",
      jobTime: "Full-Time - Permanent",
      experience: "3-5 Years",
      location: "Sahibzada Ajit Singh Nagar/India",
      JobType: "In Office Job",
    },
    {
      title: "Data Science Engineer",
      company: "HINDCO Consulting Services",
      jobTime: "Full-Time",
      experience: "3-8 Years",
      location: "Bangalore/India",
      JobType: "In Office Job",
    },
    {
      title: "Digital Marketing Specialist",
      company: "Hr Yaar",
      jobTime: "Full-Time - Permanent",
      experience: "2-4 Years",
      location: "Mumbai (All Areas)/India",
      JobType: "In Office Job",
    },
    {
      title: "Software Engineer",
      company: "Tech Innovators",
      jobTime: "Full-Time - Contract",
      experience: "1-3 Years",
      location: "Pune/India",
      JobType: "Hybrid Job",
    },
    {
      title: "Product Manager",
      company: "Startup Studio",
      jobTime: "Part-Time",
      experience: "5-7 Years",
      location: "Hyderabad/India",
      JobType: "In Office Job",
    },
    {
      title: "Graphic Designer",
      company: "Creative Labs",
      jobTime: "Full-Time",
      experience: "1-2 Years",
      location: "Chennai/India",
      JobType: "In Office Job",
    },
    {
      title: "Customer Support Executive",
      company: "HelpDesk Inc.",
      jobTime: "Full-Time - Permanent",
      experience: "0-2 Years",
      location: "Jaipur/India",
      JobType: "In Office Job",
    },
    {
      title: "Business Analyst",
      company: "Enterprise Solutions",
      jobTime: "Full-Time",
      experience: "3-6 Years",
      location: "Kolkata/India",
      JobType: "Hybrid Job",
    },
    {
      title: "Back-End Developer (Node.js)",
      company: "CodeMonks",
      jobTime: "Full-Time - Permanent",
      experience: "2-5 Years",
      location: "Noida/India",
      JobType: "In Office Job",
    },
    {
      title: "DevOps Engineer",
      company: "CloudTech",
      jobTime: "Full-Time - Contract",
      experience: "4-8 Years",
      location: "Mumbai (All Areas)/India",
      JobType: "In Office Job",
    },
    {
      title: "Content Writer",
      company: "WriteWell",
      jobTime: "Part-Time",
      experience: "0-2 Years",
      location: "Ahmedabad/India",
      JobType: "In Office Job",
    },
    {
      title: "Mobile App Developer (React Native)",
      company: "Appify Solutions",
      jobTime: "Full-Time - Permanent",
      experience: "3-5 Years",
      location: "Bangalore/India",
      JobType: "Hybrid Job",
    },
    {
      title: "SEO Specialist",
      company: "Digital Horizons",
      jobTime: "Full-Time",
      experience: "2-4 Years",
      location: "Delhi NCR/India",
      JobType: "In Office Job",
    },
    {
      title: "HR Manager",
      company: "PeoplePro",
      jobTime: "Full-Time",
      experience: "5-7 Years",
      location: "Pune/India",
      JobType: "In Office Job",
    },
    {
      title: "Data Analyst",
      company: "Analytics Co.",
      jobTime: "Full-Time - Permanent",
      experience: "2-5 Years",
      location: "Gurgaon/India",
      JobType: "In Office Job",
    },
    {
      title: "Machine Learning Engineer",
      company: "AI Labs",
      jobTime: "Full-Time - Contract",
      experience: "3-6 Years",
      location: "Chennai/India",
      JobType: "In Office Job",
    },
    {
      title: "UI/UX Designer",
      company: "DesignMasters",
      jobTime: "Full-Time",
      experience: "1-3 Years",
      location: "Hyderabad/India",
      JobType: "Hybrid Job",
    },
    {
      title: "Tech Support Specialist",
      company: "SupportPlus",
      jobTime: "Full-Time - Permanent",
      experience: "0-1 Years",
      location: "Kochi/India",
      JobType: "In Office Job",
    },
    {
      title: "Project Manager",
      company: "AgileWorks",
      jobTime: "Full-Time",
      experience: "5-10 Years",
      location: "Mumbai/India",
      JobType: "Hybrid Job",
    },
  ];

  return (
    <>
      <div className="relative overflow-x-hidden">
        <div className="flex justify-center ">
          <h2 className="text-2xl font-bold text-[#384A9A]">Featured Jobs</h2>
        </div>

        <div className="mt-5 ml-14 mr-14 flex flex-wrap">
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
                <div className="bg-white border-[1px] border-gray-400 flex flex-col justify-between lg:w-full lg:h-full    p-3 ">
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
            <span className="text-[2rem] ml-3 text-[#007AFF] font-light items-center">
              <MdOutlineArrowBackIosNew />
            </span>
          </div>
          <div
            className="swiper-button-next-custom flex justify-center items-center"
            onClick={() => swiperRef.current.swiper.slideNext()}
          >
            <span className="text-[2rem] mr-3 font-light text-[#007AFF] items-center">
              <MdOutlineArrowForwardIos />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedJobs;
