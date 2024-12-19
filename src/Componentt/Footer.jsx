import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-[#E8F5F5]">
        <div className="flex  justify-between items-start p-6 space-y-4 sm:space-y-0">
          <div className="lg:text-sm text-lg  w-1/2 lg:w-2/3 lg:h-auto  h-20 overflow-y-scroll lg:overflow-hidden">
            <span className="font-extrabold">Disclaimer</span>: All Trademarks
            and Logos are the property of their respective owners, depicted here
            purely for representation purpose. | Jobringer.com has taken all
            reasonable steps to ensure that information on this site is genuine.
            Job Applicants are advised to evaluate independently. Jobringer.com
            shall not have any responsibility in this regard. All Jobseeker
            services are strictly designed & meant only for job search
            assistance and to maximize the chances for the jobseekers to get
            their dream job. All Job Seeker Credentials and Employment
            Opportunities are subject to individual merit & evaluation. We do
            not guarantee any job to any jobseeker.
          </div>

          <div className="w-1/2 lg:w-1/3 flex justify-center">
            <div className="text-center">
              <div className="mb-2">Recognized By</div>
              <img
                src="https://www.jobringer.com/images/startuplogo.png"
                alt="Startup Logo"
                className="h-10  lg:w-56 lg:h-16  object-cover object-center "
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:space-y-4 items-center sm:items-end ">
          <div className="flex space-x-2 lg:mr-24 justify-center sm:justify-end items-center">
            <span className="lg:text-md text-lg  p-5  font-bold text-[#323E6B]">
              Follow us on
            </span>
            <a
              href="#"
              className="w-8 h-8 rounded-full flex items-center bg-[#323E6B] p-2"
            >
              <FaWhatsapp size={18} color="white" />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full flex items-center bg-[#323E6B] p-2"
            >
              <FaFacebook size={18} color="white" />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full flex items-center bg-[#323E6B] p-2"
            >
              <AiFillTwitterCircle size={18} color="white" />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full flex items-center bg-[#323E6B] p-2"
            >
              <FaInstagram size={18} color="white" />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full flex items-center bg-[#323E6B] p-2"
            >
              <FaLinkedinIn size={18} color="white" />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full flex items-center bg-[#323E6B] p-2"
            >
              <FaYoutube size={18} color="white" />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full flex items-center bg-[#323E68] p-2"
            >
              <FaTelegram size={18} color="white" />
            </a>
          </div>
        </div>
        <hr className="border-1 mt-3 border-[#323E6B] w-full " />
        <div>
          <div className=" fixed  z-50 lg:w-20 lg:h-20 w-18 h-18 bg-[#25D366] flex lg:p-3 p-2  xl:p-4 justify-center item-center rounded-full right-[3rem] lg:bottom-[2rem] bottom-[5rem]">
            <FaWhatsapp size={45} color="white" />
          </div>
        </div>
        <div className="flex flex-col items-center mt-6 space-y-2">
          <div className="flex flex-wrap justify-center lg:text-sm  text-lg space-x-4">
            <a href="#" className="hover:underline mb-3 ">
              Terms and conditions <span className="mr-2 ml-2">|</span>
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy <span className="mr-2 ml-2">|</span>
            </a>
            <a href="#" className="hover:underline mb-3">
              Refund /Cancellation Policy <span className="mr-2 ml-2">|</span>
            </a>
            <a href="#" className="hover:underline">
              About Us <span className="mr-2 ml-2">|</span>
            </a>
            <a href="#" className="hover:underline mb-3">
              Contact Us <span className="mr-2 ml-2">|</span>
            </a>
            <a href="#" className="hover:underline">
              FAQ <span className="mr-2 ml-2">|</span>
            </a>
            <a href="#" className="hover:underline">
              Blogs
            </a>
          </div>

          <div className="text-center lg:text-sm text-lg ">
            &copy;All Rights Reserved @ 2024 Jobtech Ventures Private Limited
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
