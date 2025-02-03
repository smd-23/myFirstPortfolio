import React from "react";
import Separator from "../components/Separator";

const workExperience = [
  {
    position: "Junior Software Engineer / IT Support",
    company: "GoodieBox, Copenhagen, Denmark",
    year: "May 2024 - Present",
    description: [
      "Developed and maintained web applications and internal tools using React.js, Node.js, TypeScript, and PostgreSQL, improving functionality and user experience.",
      "Provided technical support to the customer care team, resolving issues related to payment refunds, account logins, and other technical needs.",
      "Automated email campaigns and daily operations using n8n workflow automation and Klaviyo, boosting team productivity.",
      "Managed Google Workspace for user access, security settings, and tool integrations to improve collaboration.",
      "Leveraged Google Cloud for scalable deployment, storage, and infrastructure solutions.",
      "Collaborated with teams via Jira to address system bugs, integrations, and platform enhancements.",
      "Integrated third-party tools and APIs to enhance payment processes and improve the customer experience.",
    ],
  },
  {
    position: "Customer Support Executive",
    company: "The Communitech",
    year: "2022 - 2023",
    description: [
      "Handled customer queries and provided technical assistance for troubleshooting issues.",
      "Ensured smooth operation of CRM systems and managed payment-related concerns.",
      "Collaborated with internal teams to improve support efficiency and user experience.",
    ],
  },
];

const WorkExperience: React.FC = () => {
  return (
    <section id="work" className="py-20  text-white text-center">
      <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
      <div className="max-w-3xl mx-auto space-y-8">
        {workExperience.map((job, index) => (
          <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">{job.position}</h3>
            <p className="text-gray-400">{job.company}</p>
            <p className="text-gray-500 italic">{job.year}</p>
            <ul className="mt-3 text-gray-300 text-left space-y-2">
              {job.description.map((item, i) => (
                <li key={i} className="list-disc ml-6">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Separator />
    </section>
  );
};

export default WorkExperience;
