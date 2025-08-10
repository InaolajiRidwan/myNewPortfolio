// src/components/ProjectCards.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards({
  title,
  image,
  description,
  techStack = [],
  githubLink,
  liveLink,
}) {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      initial={{ x: -500 }}
      animate={{ x: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="bg-zinc-800 rounded-lg relative overflow-hidden shadow-lg"
      role="group"
      aria-label={`${title} project card`}
    >
      {/* Image */}
      <img
        src={image}
        alt={`${title} Project`}
        loading="lazy"
        className="w-full h-auto object-cover"
      />

      {/* Title */}
      <div className="p-8">
        <p className="font-semibold text-lg">{title}</p>
      </div>

      {/* Hover Overlay */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{
          y: hover ? 0 : 20,
          opacity: hover ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className={`absolute left-0 bottom-0 w-full bg-black/95 p-4 md:p-6 min-h-[8rem] md:min-h-[13rem] space-y-2 pointer-events-auto`}
        aria-hidden={!hover}
      >
        <p className="font-bold uppercase text-text-color">{title}</p>
        <p className="text-gray-300 text-sm md:text-base lg:text-lg">{description}</p>

        <div className="flex justify-between items-center">
          {/* Tech stack */}
          <ul className="grid grid-cols-2 md:flex md:flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <li
                key={index}
                className="bg-text-color text-black text-center px-3 py-1 rounded-lg text-xs md:text-sm"
              >
                {tech}
              </li>
            ))}
          </ul>

          {/* Links */}
          <div className="flex gap-4 items-center">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub repository for ${title}`}
              >
                <FaGithub size={20} className="text-text-color" />
              </a>
            )}
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live demo for ${title}`}
              >
                <BiLinkExternal size={20} className="text-text-color" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProjectCards;
