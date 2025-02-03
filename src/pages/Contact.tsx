import { motion } from "framer-motion";
import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <motion.section
      id="contact"
      className="py-20  text-white px-6 md:px-12 lg:px-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <h2 className="text-4xl font-bold text-center mb-10">Get In Touch</h2>

      <div className="flex flex-col md:flex-row justify-between gap-12">
        {/* Left Side: Contact Details */}
        <motion.div
          className="md:w-1/2 flex flex-col gap-6 bg-gray-800 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-400 text-2xl" />
            <p className="text-lg">abdulsamad@example.com</p>
          </div>

          <div className="flex items-center gap-4">
            <FaPhone className="text-green-400 text-2xl" />
            <p className="text-lg">+45 1234 5678</p>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-red-400 text-2xl" />
            <p className="text-lg">Copenhagen, Denmark</p>
          </div>

          <div className="flex items-center gap-4">
            <FaLinkedin className="text-blue-600 text-2xl" />
            <a
              href="https://www.linkedin.com/in/abdulsamad"
              className="text-lg hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/abdulsamad
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaGithub className="text-gray-400 text-2xl" />
            <a
              href="https://github.com/abdulsamad"
              className="text-lg hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/abdulsamad
            </a>
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/2 bg-gray-800 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition rounded-md text-white font-semibold shadow-md transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
