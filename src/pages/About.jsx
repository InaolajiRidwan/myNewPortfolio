import React from "react";
import { motion } from "framer-motion";

// Icons
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaSass,
  FaReact,
  FaPiedPiper,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiCssmodules,
  SiTypescript,
  SiChakraui,
  SiFramer,
  SiVite,
  SiNextdotjs,
  SiPostman,
  SiChartdotjs,
} from "react-icons/si";

export default function About() {
  const techSkills = [
    { icon: <FaHtml5 className="hover:text-[#E44D26]" />, name: "HTML" },
    { icon: <FaCss3Alt className="hover:text-[#264de4]" />, name: "CSS" },
    { icon: <RiTailwindCssFill className="hover:text-[#38BDF8]" />, name: "Tailwind CSS" },
    { icon: <FaBootstrap className="hover:text-[#7910f2]" />, name: "Bootstrap" },
    { icon: <FaSass className="hover:text-[#CD6799]" />, name: "Sass" },
    { icon: <SiCssmodules className="hover:text-[#264de4]" />, name: "CSS Module" },
    { icon: <IoLogoJavascript className="hover:text-[#F7DF1E]" />, name: "JavaScript" },
    { icon: <SiTypescript className="hover:text-[#3178c6]" />, name: "TypeScript" },
    { icon: <FaReact className="hover:text-[#61DBFB]" />, name: "React" },
    { icon: <FaPiedPiper className="hover:text-orange-400" />, name: "REST API" },
    { icon: <FaGitAlt className="hover:text-red-500" />, name: "Git" },
    { icon: <FaGithub className="hover:text-[#181717]" />, name: "GitHub" },
    { icon: <SiChakraui className="hover:text-[#319795]" />, name: "Chakra UI" },
    { icon: <SiFramer className="hover:text-[#0055FF]" />, name: "Framer Motion" },
    { icon: <SiVite className="hover:text-[#646CFF]" />, name: "Vite" },
    { icon: <SiNextdotjs className="hover:text-black" />, name: "Next.js" },
    { icon: <SiPostman className="hover:text-[#FF6C37]" />, name: "Postman" },
    { icon: <SiChartdotjs className="hover:text-[#FF6384]" />, name: "Chart.js" },
  ];

  return (
    <section
      className="p-5 lg:p-40 flex flex-col space-y-10 lg:justify-center lg:h-screen"
      id="about"
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-text-color"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-16">
        {/* Left Column */}
        <div className="space-y-8">
          <motion.h2
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
            className="text-4xl underline underline-offset-4 text-orange-300"
          >
            Who am I?
          </motion.h2>

          <motion.div
            className="text-lg md:text-xl leading-loose font-mono text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 3 }}
          >
            <p>
              I'm{" "}
              <span className="text-text-color font-semibold">
                Inaolaji Ridwan
              </span>
              , a Frontend Software Engineer passionate about crafting
              interactive and accessible web experiences with clean code and
              modern frameworks.
            </p>
            <p className="mt-4">
              With a strong focus on performance and design, I aim to build
              user-friendly, visually appealing, and scalable applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -1000 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 3 }}
          >
            <a href="/cv.pdf" download>
              <button className="text-xl p-4 bg-text-color text-black rounded-xl cursor-pointer">
                Check My Resume
              </button>
            </a>
          </motion.div>
        </div>

        {/* Right Column - Skills */}
        <div className="space-y-8">
          <motion.h2
            animate={{ y: [0, -5, 0] }}
            transition={{
              y: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 1.5,
                ease: "easeInOut",
              },
            }}
            className="text-4xl underline underline-offset-4 text-orange-300 italic"
          >
            Technical Skills
          </motion.h2>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-xl font-mono text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 3 }}
          >
            {techSkills.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center gap-2 text-center bg-zinc-800 p-4 rounded-lg w-full cursor-pointer transition duration-300 hover:scale-105"
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-3xl">{item.icon}</span>
                <span className="text-sm">{item.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
