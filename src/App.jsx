import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";
import About from "./components/About";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Education /> 
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
