import { motion } from "framer-motion";
import React from "react";
import Separator from "../components/Separator";

const Home: React.FC = () => {
  return (
    <>
      <motion.section
        id="home"
        className="h-screen flex flex-col md:flex-row justify-center items-center text-white text-center md:text-left px-8 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        {/* Left Side: Profile Picture & Buttons */}
        <motion.div
          className="flex flex-col items-center md:items-start w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img
            src="/images/profilepicture.jpg"
            alt="Abdul Samad"
            className="rounded-full w-40 h-40 md:w-56 md:h-56 border-4 border-white shadow-lg mb-4 translate-x-4"
          />

          {/* Buttons Below the Profile Picture */}
          <div className="mt-4 flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition rounded-md text-white font-semibold shadow-md transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-green-500 hover:bg-green-600 transition rounded-md text-white font-semibold shadow-md transform hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right Side: About Me Section */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center md:pl-12 mt-6 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
            Hi, I'm Abdul Samad 👋
          </h1>
          <h2 className="text-lg md:text-xl font-semibold text-blue-400 mt-2">
            Software Engineer | Full-Stack Developer
          </h2>

          {/* Wrapped Text in a Background Box */}
          <div className="mt-4 bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="text-md md:text-lg text-gray-300 leading-relaxed">
              Hi! I'm Abdul Samad, a passionate{" "}
              <strong>Software Engineer</strong> with a strong background in{" "}
              <strong>frontend & backend development</strong>. I specialize in
              building <strong>scalable web applications</strong> using{" "}
              <strong>React, TypeScript, Node.js, and PostgreSQL</strong>. My
              goal is to create high-quality digital experiences through{" "}
              <strong>clean and efficient code</strong>. I am always eager to
              <strong> learn new technologies</strong> and{" "}
              <strong>embrace challenges</strong>. I believe in continuous
              learning and strive to improve my skills every day. Whether it's
              working on a new framework, enhancing my problem-solving skills,
              or exploring innovative solutions, I am always up for learning and
              growing.
            </p>
          </div>
        </motion.div>
      </motion.section>
      <Separator />
    </>
  );
};

export default Home;
