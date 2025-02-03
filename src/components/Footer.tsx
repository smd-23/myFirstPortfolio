import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Copyright Text */}
        <p className="text-sm">
          © {new Date().getFullYear()} Abdul Samad. All Rights Reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="https://www.linkedin.com/in/abdulsamad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://github.com/abdulsamad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaGithub size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
