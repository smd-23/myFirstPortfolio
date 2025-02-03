import React from "react";
import Separator from "../components/Separator";

const education = [
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "Foundation University Islamabad, Pakistan",
    year: "2020 - 2024",
    description:
      "Specialized in software engineering, web development, databases, cloud computing, and workflow automation.",
  },
  {
    degree: "Higher Secondary School Certificate (Pre-Engineering)",
    institution: "Punjab College, Pakistan",
    year: "2018 - 2020",
    description:
      "Studied mathematics, physics, and computer science to build a strong technical foundation.",
  },
  {
    degree: "Matriculation (Science)",
    institution: "Radiant Secondary School, Pakistan",
    year: "2016 - 2018",
    description:
      "Completed secondary education with a focus on science and technology subjects.",
  },
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20  text-white text-center">
      <h2 className="text-3xl font-bold mb-8">Education</h2>
      <div className="max-w-3xl mx-auto">
        {education.map((edu, index) => (
          <div
            key={index}
            className="p-6 bg-gray-800 rounded-lg shadow-lg mb-6"
          >
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-gray-400">{edu.institution}</p>
            <p className="text-gray-500 italic">{edu.year}</p>
            <p className="mt-3 text-gray-300">{edu.description}</p>
          </div>
        ))}
      </div>
      <Separator />
    </section>
  );
};

export default Education;
