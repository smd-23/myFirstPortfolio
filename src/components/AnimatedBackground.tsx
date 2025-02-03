import React from "react";
import { motion } from "framer-motion";

const AnimatedBackground: React.FC = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full"
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"], // Moves the gradient smoothly
      }}
      transition={{
        duration: 10, // Adjust speed of animation
        repeat: Infinity, // Loops the animation
        ease: "linear",
      }}
      style={{
        zIndex: -1, // Keeps background behind content
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(120deg, #141E30, #243B55, #2C5364)", // Midnight Blue Theme
        backgroundSize: "300% 300%", // Smooth movement
        overflow: "hidden",
      }}
    />
  );
};

export default AnimatedBackground;
