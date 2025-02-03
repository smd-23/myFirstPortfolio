import { motion } from "framer-motion";
import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaServer,
  FaCloud,
} from "react-icons/fa";
import { SiExpress, SiN8N, SiJira, SiTailwindcss } from "react-icons/si";
import Separator from "../components/Separator";

const skills = [
  { name: "React.js", icon: <FaReact className="text-blue-400 text-4xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-400 text-4xl" /> },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-300 text-4xl" />,
  },
  {
    name: "PostgreSQL",
    icon: <FaDatabase className="text-blue-300 text-4xl" />,
  },
  {
    name: "CSS & Tailwind",
    icon: <SiTailwindcss className="text-blue-500 text-4xl" />,
  },
  {
    name: "Git & GitHub",
    icon: <FaGitAlt className="text-orange-400 text-4xl" />,
  },
  {
    name: "n8n Automation",
    icon: <SiN8N className="text-purple-400 text-4xl" />,
  },
  {
    name: "Cloud Services",
    icon: <FaCloud className="text-blue-400 text-4xl" />,
  },
  {
    name: "Jira & Project Management",
    icon: <SiJira className="text-blue-600 text-4xl" />,
  },
  {
    name: "Backend Services",
    icon: <FaServer className="text-gray-400 text-4xl" />,
  },
];

const Skills: React.FC = () => {
  return (
    <>
      <motion.section
        id="skills"
        className="py-20 text-white text-center flex flex-col items-center"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold">Technical Skills</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-800 rounded-lg shadow-md flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
            >
              {skill.icon}
              <h3 className="mt-2 text-lg">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>
      <Separator />
    </>
  );
};

export default Skills;
