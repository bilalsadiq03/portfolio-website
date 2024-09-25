import React from "react";
import ecomm from "../assets/ecomm-landing.jpg";
import profilepic2 from '../assets/profilepic2.jpg'
import portfolio from "../assets/portfoilo-landing.jpg";


const About = () => {
  return (
    <div
      className="min-h-screen border md:flex-col p-4 mx-auto flex items-center "
      id="about"
    >

      <div className="flex justify-center w-1/2 border p-14 ">
        <div>
          <img src={profilepic2} alt="" className="rounded-3xl" />  
        </div>
      </div>
      

      <div className="w-1/2">

        <div className="p-6">
          <h2 className="text-gray-200 text-3xl font-bold mb-4 ">About</h2>
          <p className="text-gray-300 mb-4">
            Passionate MERN stack developer with a strong foundation in building
            dynamic, responsive web applications. Experienced in creating
            seamless user experiences and robust backend solutions using
            MongoDB, Express, React, and Node.js.
          </p>

          <p className="text-gray-300 mb-4">
          Dedicated data structures and algorithms programmer with a keen eye for optimizing performance and solving complex problems. Skilled in developing efficient, scalable solutions through deep understanding of algorithmic principles and data management.
          </p>

        </div>
      </div>
    </div>
  );
};

export default About;
