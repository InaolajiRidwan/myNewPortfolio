import React from "react";
import { motion } from "framer-motion";

export default function Education() {
  const educationalBackground = [
    {
      school: "Federal College of Agriculture, Ibadan",
      year: 2013,
      award: "National Diploma in Agricultural Engineering",
    },

    {
      school: "Federal College of Agriculture, Ibadan",
      year: 2017,
      award: "Higher National Diploma in Agricultural Engineering",
    },

    {
      school: "Lead City University, Ibadan",
      year: 2025,
      award: "B.eng in Mechanical Engineering",
    },

    {
      school: "Larva coding, academy",
      year: 2023,
      award: "Frontend Developer",
    },
  ];
  return (
    <section className="p-4 md:p-6 lg:p-5">
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
        Education
      </motion.h2>

      {/* Intro text */}
      <motion.div
        className="text-base sm:text-lg md:text-xl leading-relaxed font-mono text-gray-500 mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        <p className="text-center lg:text-start">My Academic Background</p>
      </motion.div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-h-[70vh] overflow-y-auto ">
        {educationalBackground.map((item) => {
          return (
            <div key={item.year} className="space-y-5 bg-gray-800 p-10 rounded-lg">
              <h2 className="text-text-color text-xl font-bold">{item.school}</h2>
              <p className="font-mono">{item.award}</p>
              <div className="flex gap-3 items-center">
                <span className="block bg-text-color rounded-full w-2 h-2"></span>
                <p className="text-gray-400">{item.year}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
