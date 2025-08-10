import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards({
  title,
  image,
  description,
  techStack = [], // ✅ Default array so map never fails
  githubLink,
  liveLink,
}) {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      initial={{ x: -500 }}
      animate={{ x: 0 }}
      transition={{ delay: 0.2, duration: 3 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="bg-zinc-800 rounded-lg relative overflow-hidden"
    >
      {/* Image */}
      <img
        src={image}
        alt={`${title} Project`}
        className="w-full h-auto object-cover"
      />

      {/* Title */}
      <div className="p-8">
        <p className="">{title}</p>
      </div>

      {/* Hover Overlay */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{
          y: hover ? 0 : 20,
          opacity: hover ? 1 : 0,
        }}
        transition={{ duration: 0.4 }}
        className={`absolute left-0 bottom-0 w-full bg-black/95 p-4 md:p-6 h-auto min-h-[8rem] md:min-h-[13rem] space-y-2 ${
          !hover ? "pointer-events-none" : ""
        }`}
      >
        <p className="p-2 items-center text-lg md:text-xl uppercase">{title}</p>
        <p className="text-gray-300 text-sm md:text-base lg:text-lg">
          {description}
        </p>

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
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <FaGithub size={20} className="text-text-color" />
              </a>
            )}
            {liveLink && (
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
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
