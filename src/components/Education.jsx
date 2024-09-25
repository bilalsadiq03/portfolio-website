import React from "react";
import bennett from "../assets/bennett.jpg";
import school from '../assets/school.jpg'
import { motion } from 'framer-motion'
import { ResumeCard } from "./ResumeCard";

const Education = () => {
  return (

    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.5 } }}
    className="mx-6 min-h-fit z-10 mb-16"
    id="education"
  >
    <div className="text-center lg:py-6 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl text-gray-200 md:text-4xl font-bold">EDUCATION</h2>
    </div>
    <div className="flex justify-center items-center my-4">
      <div className="lg:mt-14 lg:w-1/2  h-[1000px] border-l-[6px] border-l-black border-opacity-30  flex-col gap-10">
        <ResumeCard
          title="B.Tech in Computer Science"
          subTitle="Bennett University (2023 - 2027)"
          result="_ /_"
          des="Pursuing my Bachelor's in Computer Science at Bennett University, I'm honing my skills in programming, problem-solving, and technology innovation to build impactful digital solutions for the future."
        />
        <ResumeCard
          title="Senior Secondary School Examination"
          subTitle="St. Anthony's Senior Secondary School (2021 - 2022)"
          result="88%"
          des="I have successfully completed my senior secondary education, building a strong foundation in mathematics, science, and technology, which fuels my passion for computer science and problem-solving."
        />
        <ResumeCard
          title="Secondary School Education"
          subTitle="St. Anthony's Senior Secondary School (2019 - 2020)"
          result="86%"
          des="I have completed my secondary school examination, laying the groundwork in core subjects that sparked my interest in technology and set the stage for my journey in computer science."
        />
      </div>
    </div>
  </motion.div>

  );
};

export default Education;
