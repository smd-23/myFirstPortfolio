import React from "react";
import Separator from "../components/Separator";

const certifications = [
  {
    name: "Fullstack Web Development Bootcamp",
    issuedBy: "Udemy",
    year: "2023",
    description:
      "Covered React.js, Node.js, API integration, database connectivity, and full-stack deployment.",
  },
  {
    name: "React & TypeScript - The Practical Guide",
    issuedBy: "Udemy",
    year: "2024",
    description:
      "Built type-safe React applications and improved state management using TypeScript.",
  },
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 text-white text-center">
      <h2 className="text-3xl font-bold mb-8">Certifications</h2>
      <div className="max-w-3xl mx-auto">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="p-6 bg-gray-800 rounded-lg shadow-lg mb-6"
          >
            <h3 className="text-xl font-semibold">{cert.name}</h3>
            <p className="text-gray-400">{cert.issuedBy}</p>
            <p className="text-gray-500 italic">{cert.year}</p>
            <p className="mt-3 text-gray-300">{cert.description}</p>
          </div>
        ))}
      </div>
      <Separator />
    </section>
  );
};

export default Certifications;
