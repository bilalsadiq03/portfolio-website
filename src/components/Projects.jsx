import React from 'react'
import ecomm from '../assets/ecomm-landing.jpg'
import nexcent from '../assets/nexcent-landing.jpg'
import portfoiloLanding from '../assets/portfoiloBg.jpg'
import urlShortener from '../assets/url shortener landing.jpg'
import ProjectCard from './ProjectCard'

const Projects = () => {


  return (
    <section
      id="projects"
      className="w-full px-6 py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <h2 className='text-gray-200 text-5xl font-bold mb-6 text-center'>PROJECTS</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">

        <ProjectCard
          title="E-commerce Website"
          des="Developed a high-performance eCommerce website using the MERN stack, featuring seamless user authentication, dynamic product listings, secure payment integration, and an intuitive admin dashboard for managing inventory and orders."
          src={ecomm}
        />
        
        <ProjectCard
          title="Nexcent Agency landing page"
          des="Developed the Nexcent Agency landing page using React and Tailwind CSS, delivering a modern, responsive design with fast load times and a user-friendly interface. The project focused on clean, scalable code and seamless performance across devices."
          src={nexcent}
        />
        <ProjectCard
          title="Portfolio Website"
          des="Developed a personal portfolio website using React and Tailwind CSS, showcasing projects and skills with a sleek, responsive design. Focused on creating a seamless user experience with optimized performance and modern aesthetics across all devices."
          src={portfoiloLanding}
        />
        <ProjectCard
          title="URL Shortener"
          des="Developed a URL shortening application utilizing React.js with ShadCN components and Supabase as the database. The application features efficient URL generation, user authentication for personalized link management, and real-time analytics to monitor usage metrics, ensuring a seamless and scalable user experience."
          src={urlShortener}
        />
        
       
      </div>
    </section>
  )
}

export default Projects