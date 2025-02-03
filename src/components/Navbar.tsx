import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setVisible(false); // Hide navbar when scrolling down
      } else {
        setVisible(true); // Show navbar when scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full p-4 z-50 backdrop-blur-lg bg-white/10 border-b border-white/10 shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Abdul Samad</h1>
        <ul className="flex space-x-6">
          {[
            "Home",
            "Education",
            "Work",
            "Projects",
            "Certifications",
            "Volunteer",
            "Reviews",
            "Skills",
            "Contact",
          ].map((section, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                href={`#${section.toLowerCase()}`}
                className="hover:text-blue-400 text-white"
              >
                {section}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
