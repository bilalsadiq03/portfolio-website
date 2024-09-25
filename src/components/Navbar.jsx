import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-scroll'
import profilepic from '../assets/profilepic.jpg'

const Navbar = () => {


    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }


  return (
    <div className="z-0 glass sticky top-0 flex text-xl justify-between text-gray-200 items-center px-6 mx-auto h-24">
      <a href="">Bilal Sadiq</a>

      <ul className="hidden md:flex gap-12 z-10 cursor-pointer">
        <li className="relative group">
          <Link to="about" smooth={true} offset={50} duration={500}>
            About
          </Link>
          <span className="absolute bottom-0 left-0 w-full h-[1px] bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </li>

        <li className="relative group">
          <Link to="education" smooth={true} offset={50} duration={500}>
            Education
          </Link>
          <span className="absolute bottom-0 left-0 w-full h-[1px] bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </li>

        <li className="relative group">
          <Link to="skills" smooth={true} offset={50} duration={500}>
            Skills
          </Link>
          <span className="absolute bottom-0 left-0 w-full h-[1px] bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </li>

        <li className="relative group">
          <Link to="projects" smooth={true} offset={50} duration={500}>
            Projects
          </Link>
          <span className="absolute bottom-0 left-0 w-full h-[1px] bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </li>

        <li className="relative group">
          <Link to="contact" smooth={true} offset={50} duration={500}>
            Contact
          </Link>
          <span className="absolute bottom-0 left-0 w-full h-[1px] bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </li>

      </ul>

      <div onClick={toggleNav} className="md:hidden z-30">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      <div
        className={
          nav
            ? "pl-4 mb-4 z-20 fixed h-auto w-full left-0 top-0 bg-[#1d1d1d]"
            : "fixed left-[-100%]"
        }
      >
        <ul className="font-medium text-md space-y-2 mt-20">
          <li>
            <Link
              to="about"
              onClick={closeNav}
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="education"
              onClick={closeNav}
              smooth={true}
              offset={50}
              duration={500}
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              onClick={closeNav}
              smooth={true}
              offset={50}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              onClick={closeNav}
              smooth={true}
              offset={50}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              onClick={closeNav}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
    


  );
}

export default Navbar