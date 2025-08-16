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
    <section className="p-4 md:p-6 lg:p-5">
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
        <p className="text-center lg:text-start">
          I possess a strong front-end skill set and remain committed to
          continuous learning and growth in my craft.
        </p>
      </motion.div>

      {/* Details Grid */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-h-[70vh] overflow-y-auto ">
        {educationalBackground.map((item) => {
          return (
            <div
              key={item.year}
              className="space-y-5 bg-gray-800 p-10 rounded-lg"
            >
              <h2 className="text-text-color text-xl font-bold">
                {item.school}
              </h2>
              <p className="font-mono">{item.award}</p>
              <div className="flex gap-3 items-center">
                <span className="block bg-text-color rounded-full w-2 h-2"></span>
                <p className="text-gray-400">{item.year}</p>
              </div>
            </div>
          );
        })}
      </div> */}

      {
        <div className="space-y-8">
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

{
  /* <motion.div
            initial={{ opacity: 0, x: -1000 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 3 }}
          >
            <a href="/cv.pdf" download>
              <button className="text-xl p-4 bg-text-color text-black rounded-xl cursor-pointer">
                Check My Resume
              </button>
            </a>
          </motion.div> */
}

{
  /* Right Column - Skills */
}

{
  /* <div className="space-y-8">
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
        </div> */
}
