import React from 'react'
import { PiCloudSlash } from 'react-icons/pi'
import { TypeAnimation } from 'react-type-animation'
import profilepic from '../assets/profile-pic.png'
import { FaGithub, FaInstagram, FaLinkedin, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { SiCodechef } from 'react-icons/si'


const Hero = () => {
  return (
    <div className="border-b-[1px] border-b-black grid md:min-h-screen md:grid-cols-2 place-items-center max-w-[1250px] mx-auto mb-8 md:mb-32 ">
      <div className="max-w-[800px]">
        <p className="text-gray-200 md:text-4xl text-3xl tracking-tight">
          HEY, I AM <br />
          <span>BILAL SADIQ</span> <br />
          <TypeAnimation
            sequence={["MERN Developer", 1000, "FUL STACK DEVELOPER", 1000, "PROGRAMMER", 1000]}
            speed={50}
            repeat={Infinity}
            className="font-bold italic"
          />
        </p>
        <h2 className="text-gray-300">with 1+ year of experience</h2>

        <div className='flex flex-row gap-4 mb-4'>
              <button className='transform transition-transform hover:scale-105 hover:shadow-lg z-1 cursor-pointer font-bold text-gray-200 w-1/2 mt-6 p-2 bg-gradient-to-r from-[#50a7c7] via-[#1f7c8f] to-[#3d6ca4] rounded-xl'>Download CV</button>

              <button className='transform transition-transform hover:scale-105 hover:shadow-lg z-10 cursor-pointer font-bold text-gray-200 w-1/2 mt-6 p-2 border border-gray-400 rounded-xl'>
                <Link to='projects' smooth={true} offset={50} duration={500}>
                  View Work
                </Link>
              </button>
            </div>

        <div className="mb-4 mt-3 flex gap-4">
          <Link 
            to="https://github.com/bilalsadiq03" 
            target="blank"
            className='bannerIcon text-gray-200'
          >
            <FaGithub />
          </Link>

          <Link
            to="https://www.linkedin.com/in/bilal-sadiq-a77a67253/"
            target="blank"
            className='bannerIcon text-gray-200 hover:text-[#0A66C2]'
          >
            <FaLinkedin />
          </Link>

          <Link
            to="https://www.instagram.com/bilalsadiq03/"
            target='blank'
            className='bannerIcon text-gray-200 hover:text-pink-600'
          >
            <FaInstagram />
          </Link>

        </div>
      </div>

      <div className='m-8 w-1/2 rounded-full blur-effect'>
        <img src={profilepic} className='rounded-full cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out'  />
      </div>
    </div>
  );
}

export default Hero