import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="p-4 md:p-6 lg:p-10">
      {/* Heading */}
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-color mb-6"
        animate={{ x: [-10, 10], y: [0, -5, 0] }}
        transition={{
          x: { repeat: Infinity, repeatType: "reverse", duration: 1 },
          y: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 1.5,
            ease: "easeInOut",
          },
        }}
      >
        About Me
      </motion.h2>

      {/* Intro text */}
      <motion.div
        className="text-base sm:text-lg md:text-xl leading-relaxed font-mono text-gray-500 mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        <p className="text-center lg:text-start text-md">
          I'm{" "}
          <span className="text-text-color font-semibold ">
            Inaolaji Ridwan
          </span>
          , a Frontend Software Engineer passionate about crafting interactive
          and accessible web experiences with clean code and modern frameworks.
          With a strong focus on performance and design, I aim to build
          user-friendly, visually appealing, and scalable applications.
        </p>
      </motion.div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[70vh] overflow-y-auto">
        {/* Left column */}
        <div className="space-y-4">
          <div className="flex justify-between sm:justify-start sm:gap-6 text-sm sm:text-base md:text-lg">
            <p className="text-gray-600">Name</p>
            <p className="font-momo italic">Ridwan</p>
          </div>
          <div className="flex justify-between sm:justify-start sm:gap-6 text-sm sm:text-base md:text-lg">
            <p className="text-gray-600">Phone</p>
            <p className="font-momo italic">+2347061366051</p>
          </div>
          <div className="flex justify-between sm:justify-start sm:gap-6 text-sm sm:text-base md:text-lg">
            <p className="text-gray-600">Experience</p>
            <p className="font-momo italic">2+ years</p>
          </div>
          <div className="flex justify-between sm:justify-start sm:gap-6 text-sm sm:text-base md:text-lg">
            <p className="text-gray-600">Freelance</p>
            <p className="font-momo italic">Available</p>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-4">
          <div className="flex justify-between sm:justify-start sm:gap-6 text-sm sm:text-base md:text-lg">
            <p className="text-gray-600">Email</p>
            <p className="font-momo italic">ridwaninaolaji@gmail.com</p>
          </div>
          <div className="flex justify-between sm:justify-start sm:gap-6 text-sm sm:text-base md:text-lg">
            <p className="text-gray-600">Location</p>
            <p className="font-momo italic">Ibadan, Nigeria</p>
          </div>
          <div className="flex justify-between sm:justify-start sm:gap-6 text-sm sm:text-base md:text-lg">
            <p className="text-gray-600">Education</p>
            <p className="font-momo italic">Frontend Engineering</p>
          </div>
          <div className="flex justify-between sm:justify-start sm:gap-6 text-sm sm:text-base md:text-lg">
            <p className="text-gray-600">Languages</p>
            <p className="font-momo italic">English</p>
          </div>
        </div>
      </div>
    </section>
  );
}
