import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/profile-pic.png";

const Footer = () => {
  return (
    <div>
      <div className="w-full py-20 h-auto border-b-black grid grid-cols-1 md:grid-cols-2  gap-8">
        <div className="w-full h-full flex flex-col items-center justify-center gap-8">
          <img className="w-44" src={logo} alt="logo" />
          <div className="flex gap-4">
            <span className="bannerIcon text-gray-200">
              <FaGithub />
            </span>
            <span className="bannerIcon text-gray-200 hover:text-[#0A66C2]">
              <FaLinkedinIn />
            </span>
            <span className="bannerIcon text-gray-200 hover:text-pink-600">
              <FaInstagram />
            </span>
          </div>
        </div>


        <div className="w-full h-full ">
          <h3 className="text-xl uppercase text-sky-600 tracking-wider">
            Quick Link
          </h3>
          <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
            <li>
              <span className="w-full text-gray-200 text-lg relative hover:text-sky-600 duration-300 group cursor-pointer">
                About
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </span>
            </li>
            <li>
              <span className="w-full text-gray-200 text-lg relative hover:text-sky-600 duration-300 group cursor-pointer">
                Portfolio
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </span>
            </li>
            <li>
              <span className="w-full text-gray-200 text-lg relative hover:text-sky-600 duration-300 group cursor-pointer">
                Services
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </span>
            </li>
            <li>
              <span className="w-full text-gray-200 text-lg relative hover:text-sky-600 duration-300 group cursor-pointer">
                Contact
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Footer;
