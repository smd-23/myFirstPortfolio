import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";
import Experience from "./pages/Experience";
import Certifications from "./pages/Certifications";
import Volunteer from "./pages/Volunteer-experience"; // Keep only one instance
import Education from "./pages/Education";
import AnimatedBackground from "./components/AnimatedBackground";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="relative">
      <AnimatedBackground />
      <Navbar />
      <div className="relative z-10">
        <Home />
        <Education />
        <Experience />
        <Certifications />
        <Skills />
        <Projects />
        <Reviews />
        <Volunteer />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
