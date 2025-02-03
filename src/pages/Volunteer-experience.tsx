import React from "react";
import Separator from "../components/Separator";

const volunteerExperience = [
  {
    role: "Member",
    organization: "Copenhagen Cricket Club (CCC)",
    location: "Copenhagen, Denmark",
    year: "May 2024 - Present",
    description:
      "Actively participating in the Danish Cricket League under (DCF) and club social activities.",
  },
  {
    role: "Member",
    organization: "Niazi Cricket Club (NCC)",
    location: "Rawalpindi, Pakistan",
    year: "2019 - 2024",
    description:
      "Played in the Junior Cricket League under PCB and was an active club member.",
  },
];

const languages = [
  { name: "English", level: "Fluent" },
  { name: "Urdu", level: "Native" },
];

const Volunteer: React.FC = () => {
  return (
    <section id="volunteer" className="py-20 text-white text-center">
      <h2 className="text-3xl font-bold mb-12">
        Volunteer Experience & Languages
      </h2>

      {/* Wrapper to Make Both Sections Side by Side */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Volunteer Experience Section */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-bold mb-6">Volunteer Experience</h3>
          <div className="space-y-6">
            {volunteerExperience.map((volunteer, index) => (
              <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold">{volunteer.role}</h4>
                <p className="text-gray-400">{volunteer.organization}</p>
                <p className="text-gray-500 italic">{volunteer.year}</p>
                <p className="mt-3 text-gray-300">{volunteer.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Languages Section */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-bold mb-6">Languages</h3>
          <div className="space-y-6">
            {languages.map((language, index) => (
              <div key={index} className="p-4 bg-gray-800 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold">{language.name}</h4>
                <p className="text-gray-400">{language.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Separator />
    </section>
  );
};

export default Volunteer;
