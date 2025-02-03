import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Separator from "../components/Separator";

const Reviews = [
  {
    name: "Fowad",
    role: "Tech Lead, Goodiebox",
    feedback:
      "Abdul is a quick learner and enthusiastic Full-Stack Developer, eager to expand skills and tackle new challenges with a growth mindset.",
  },
  {
    name: "Muhammad",
    role: "Senior Full Stack Developer, Goodiebox",
    feedback:
      "Working with Abdul was a fantastic experience. He is proactive, communicates well, and delivers high-quality code.",
  },
];

const reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20  text-white text-center">
      <h2 className="text-3xl font-bold">What People Say</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {Reviews.map((Reviews, index) => (
          <div
            key={index}
            className="p-6 bg-gray-800 rounded-lg shadow-md flex flex-col items-center text-center w-full"
          >
            <FaQuoteLeft className="text-blue-400 text-3xl mb-3" />
            <p className="text-gray-300 italic text-lg leading-relaxed">
              "{Reviews.feedback}"
            </p>
            <h3 className="mt-4 text-lg font-semibold">{Reviews.name}</h3>
            <p className="text-gray-400">{Reviews.role}</p>
          </div>
        ))}
      </div>
      <Separator />
    </section>
  );
};

export default reviews;
