import React from 'react'
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiMongodb,
  DiMysql,
  DiNodejsSmall,
  DiReact,
  DiSass,
} from "react-icons/di";
import { RiTailwindCssFill } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { div } from 'framer-motion/client';


const Skills = () => {
  return (
    <>
    <div className="py-12 font-titleFont flex flex-col gap-4">
      <h2 className="text-center text-gray-200 text-3xl md:text-4xl font-bold">
        SKILLS
      </h2>
    </div>
    <div className="border grid md:min-h-screen md:grid-cols-2 place-items-center ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="border sm:w-full flex flex-col  gap-10 lg:gap-20 items-center justify-center"
        id="skills"
      >
        <div className="w-full">
          
          <div className="flex flex-col gap-6 mx-6">
            <div className="overflow-x-hidden">
              <p className="text-gray-200 text-sm uppercase font-medium">
                MERN Stack
              </p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[75%] h-full  bg-gradient-to-r from-[#50a7c7] via-[#1f7c8f] to-[#3d6ca4] rounded-md relative"
                >
                  <span className="text-gray-200 absolute -top-7 right-0">
                    75%
                  </span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-gray-200 text-sm uppercase font-medium">
                Javascript
              </p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[95%] h-full bg-gradient-to-r from-[#50a7c7] via-[#1f7c8f] to-[#3d6ca4] rounded-md relative"
                >
                  <span className="text-gray-200 absolute -top-7 right-0">
                    95%
                  </span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-gray-200 text-sm uppercase font-medium">
                CSS3
              </p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[80%] h-full bg-gradient-to-r from-[#50a7c7] via-[#1f7c8f] to-[#3d6ca4] rounded-md relative"
                >
                  <span className="text-gray-200 absolute -top-7 right-0">
                    80%
                  </span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-gray-200 text-sm uppercase font-medium">
                JAVASCRIPT
              </p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[75%] h-full bg-gradient-to-r from-[#50a7c7] via-[#1f7c8f] to-[#3d6ca4] rounded-md relative"
                >
                  <span className="text-gray-200 absolute -top-7 right-0">
                    75%
                  </span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-gray-200 text-sm uppercase font-medium">
                SOFTWARE
              </p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[90%] h-full bg-gradient-to-r from-[#50a7c7] via-[#1f7c8f] to-[#3d6ca4] rounded-md relative"
                >
                  <span className="text-gray-200 absolute -top-7 right-0">
                    90%
                  </span>
                </motion.span>
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* <div className="border w-1/2 md:flex flex-wrap gap-4 text-4xl justify-center ">
        <div className="bg-opacity-10 backdrop-blur-lg rounded-lg p-6 flex flex-wrap gap-4 text-4xl justify-center ">
          <DiHtml5 className="text-orange-700 skillIcon" size={50} />
          <DiCss3 className="text-blue-600 skillIcon" size={50} />
          <DiSass className="text-pink-600 skillIcon" size={50} />
          <DiJavascript1 className="text-yellow-500 skillIcon" size={50} />
          <DiReact className="text-blue-600 skillIcon" size={50} />
          <DiNodejsSmall className="text-green-500 skillIcon" size={50} />
          <DiMongodb className="text-green-700 skillIcon" size={50} />
          <DiMysql className="text-blue-900 skillIcon" size={50} />
        </div>
      </div> */}

  

    </div>
    </>
  );
}

export default Skills


