import React from "react";
import { motion } from "framer-motion";
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

export default function Education() {
  const techSkills = [
    { icon: <FaHtml5 className="hover:text-[#E44D26]" />, name: "HTML" },
    { icon: <FaCss3Alt className="hover:text-[#264de4]" />, name: "CSS" },
    {
      icon: <RiTailwindCssFill className="hover:text-[#38BDF8]" />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaBootstrap className="hover:text-[#7910f2]" />,
      name: "Bootstrap",
    },
    { icon: <FaSass className="hover:text-[#CD6799]" />, name: "Sass" },
    {
      icon: <SiCssmodules className="hover:text-[#264de4]" />,
      name: "CSS Module",
    },
    {
      icon: <IoLogoJavascript className="hover:text-[#F7DF1E]" />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript className="hover:text-[#3178c6]" />,
      name: "TypeScript",
    },
    { icon: <FaReact className="hover:text-[#61DBFB]" />, name: "React" },
    {
      icon: <FaPiedPiper className="hover:text-orange-400" />,
      name: "REST API",
    },
    { icon: <FaGitAlt className="hover:text-red-500" />, name: "Git" },
    { icon: <FaGithub className="hover:text-[#181717]" />, name: "GitHub" },
    {
      icon: <SiChakraui className="hover:text-[#319795]" />,
      name: "Chakra UI",
    },
    {
      icon: <SiFramer className="hover:text-[#0055FF]" />,
      name: "Framer Motion",
    },
    { icon: <SiVite className="hover:text-[#646CFF]" />, name: "Vite" },
    { icon: <SiNextdotjs className="hover:text-black" />, name: "Next.js" },
    { icon: <SiPostman className="hover:text-[#FF6C37]" />, name: "Postman" },
    {
      icon: <SiChartdotjs className="hover:text-[#FF6384]" />,
      name: "Chart.js",
    },
  ];

  return (
    <section className="p-4 md:p-6 lg:p-5 ">
      {/* Heading */}
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-color mb-6 "
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
        Technical Skills
      </motion.h2>

      {/* Intro text */}
      <motion.div
        className="text-base sm:text-lg md:text-xl leading-relaxed font-mono text-gray-500 mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        <p className="text-center lg:text-start text-md">
          I possess a strong front-end skill set and remain committed to
          continuous learning and growth in my craft.
        </p>
      </motion.div>

      {
        <div className="space-y-8 overflow-y-auto max-h-[50vh]">
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-xl font-mono text-gray-300"
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
      }
    </section>
  );
}
