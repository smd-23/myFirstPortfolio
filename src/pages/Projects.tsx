import React from "react";
import { motion } from "framer-motion";
import Separator from "../components/Separator";

const projects = [
  {
    title: "MEDI-TRACK",
    description: "A medicine authentication system to verify legitimacy.",
    img: "/images/project.jpg",
    link: "https://github.com/smd-23/medi-track",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React, TypeScript, and Tailwind CSS.",
    img: "/images/project1.jpg",
    link: "https://github.com/smd-23/portfolio",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 text-white text-center">
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
            <a
              href={project.link}
              className="text-blue-400 hover:underline mt-4 inline-block"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
      <Separator />
    </section>
  );
};

export default Projects;
