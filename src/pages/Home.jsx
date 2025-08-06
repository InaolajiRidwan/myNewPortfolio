// React core & hooks
import React, { useEffect, useRef } from "react";

// Typed.js library for typing animation
import Typed from "typed.js";

// Asset: Profile picture
import myProfileImg from "../assets/myProfileImg.png";

// React icons (socials)
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

// Framer Motion for animations
import { motion } from "framer-motion";

// React Router for navigation
import { Link } from "react-router-dom";

// Reusable component for large screen sidebar nav
import BigScreenNavbar from "../components/BigScreenNavbar";

export default function Home() {
  // Ref for typed.js span element
  const typedRef = useRef(null);

  // Initialize the typing effect on mount
  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Inaolaji Ridwan."],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    // Cleanup on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      {/* ===================== SMALL TO MEDIUM SCREENS ===================== */}
      <div className="grid grid-cols-1 place-items-center text-white p-6 space-y-6 md:space-y-10 lg:hidden">
        {/* Hero text and profile image */}
        <div className="flex flex-col items-center justify-center gap-6 md:gap-10 font-mono text-center">
          {/* Greeting + typed name */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.6, duration: 5 }}
            className="text-2xl md:text-4xl font-bold"
          >
            <h1>Hi there 👋, I'm</h1>
            <span
              className="typer"
              ref={typedRef}
              style={{ color: "var(--color-text-color)" }}
            ></span>
          </motion.div>

          {/* Short description */}
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 5 }}
            className="font-mono leading-relaxed"
          >
            A{" "}
            <span className="text-text-color">Frontend Software Engineer</span>{" "}
            passionate about crafting interactive, user-focused web applications
            with clean code, modern frameworks, and beautiful design.
          </motion.p>

          {/* Profile picture */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 5 }}
            className="border-r-8 border-text-color rounded-full overflow-hidden w-48 h-48 md:w-64 md:h-64 shadow-lg"
          >
            <img
              src={myProfileImg}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex gap-4 md:gap-6">
          {/* Download CV */}
          <motion.a
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.4, duration: 1.2 }}
            href="/cv.pdf"
            download
          >
            <button className="bg-text-color text-black font-mono px-2 py-2 rounded hover:bg-text-hover transition duration-300 cursor-pointer">
              Download CV
            </button>
          </motion.a>

          {/* View Work */}
          <motion.div
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.4, duration: 5 }}
          >
            <Link to="/projects">
              <button className="bg-text-color text-black font-mono px-2 py-2 rounded hover:bg-text-hover transition duration-300 cursor-pointer">
                View Work
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mt-4">
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.4, duration: 1.2 }}
            className="flex gap-4"
          >
            <a
              href="https://www.linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-color hover:text-text-hover transition"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-color hover:text-text-hover transition"
            >
              <FaGithub size={24} />
            </a>
          </motion.div>

          <motion.div
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.4, duration: 5 }}
            className="flex gap-4"
          >
            <a
              href="https://twitter.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-600 transition"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-color hover:text-text-hover transition"
            >
              <FaInstagram size={24} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* ===================== LARGE SCREEN VIEW ===================== */}
      <div className="hidden lg:grid grid-cols-2 items-center justify-center h-screen p-20 space-x-4 relative">
        {/* Left Section: text + buttons + socials */}
        <div className="space-y-10">
          {/* Typed heading */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 5 }}
            className="text-3xl md:text-5xl font-bold text-center space-y-4"
          >
            <h1>Hi there 👋, I'm</h1>
            <span
              ref={typedRef}
              className="typer"
              style={{ color: "var(--color-text-color)" }}
            ></span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 5 }}
            className="text-center font-mono text-lg leading-relaxed"
          >
            A{" "}
            <span className="text-text-color text-2xl">
              Frontend Software Engineer
            </span>{" "}
            passionate about crafting interactive, user-focused web applications
            with clean code, modern frameworks, and beautiful design.
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center items-center">
            <motion.a
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.4, duration: 5 }}
              href="/cv.pdf"
              download
            >
              <button className="bg-text-color text-black font-mono px-4 py-2 rounded hover:bg-text-hover transition duration-300 cursor-pointer">
                Download CV
              </button>
            </motion.a>

            <motion.div
              initial={{ x: 2000 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.4, duration: 5 }}
            >
              <Link to="/projects">
                <button className="bg-text-color text-black font-mono px-4 py-2 rounded hover:bg-text-hover transition duration-300 cursor-pointer">
                  View Work
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Socials */}
          <div className="flex justify-center gap-4 mt-4">
            <motion.div
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.4, duration: 5 }}
              className="flex gap-4"
            >
              <a
                href="https://www.linkedin.com/in/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-color hover:text-text-hover transition"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-color hover:text-text-hover transition"
              >
                <FaGithub size={24} />
              </a>
            </motion.div>

            <motion.div
              initial={{ x: 2000 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.4, duration: 5 }}
              className="flex gap-4"
            >
              <a
                href="https://twitter.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-600 transition"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-color hover:text-text-hover transition"
              >
                <FaInstagram size={24} />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Right Section: Profile image */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{scale: 1.05}}
            transition={{ delay: 0.6, duration: 5 }}
            className="border-4 border-text-color rounded-lg overflow-hidden"
          >
            <img src={myProfileImg} alt="Profile" className="w-full h-full object-cover hover:grayscale cursor-pointer" />
          </motion.div>
        </div>

       
      </div>

      {/* Optional: Large screen floating sidebar nav */}
      <BigScreenNavbar />
    </>
  );
}
