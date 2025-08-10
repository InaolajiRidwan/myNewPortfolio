import React from "react";
import { motion } from "framer-motion";
import omnifoodImg from "../assets/IMAGES/omnifood.png";
import eatNsplit from "../assets/IMAGES/eat-n-split.png";
import cryptoDashBoard from "../assets/IMAGES/cryptoDashBoard.png";
import freelanceDashBoard from "../assets/IMAGES/freelanceDashBoard.png";
import agricon from "../assets/IMAGES/agricon.png";
import adviceGen from "../assets/IMAGES/adviceGen.png";
import conferenceSpeaker from "../assets/IMAGES/conferenceSpeaker.png";
import recentPortofolio from "../assets/IMAGES/mylatestPortfolio.png";
import ProjectCards from "../components/ProjectCards";

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Projects() {
  const projects = [
    {
      title: "OmniFood",
      image: omnifoodImg,
      description:
        "A modern, responsive food delivery website designed with HTML, CSS, and JavaScript. Fully optimized for performance, SEO, and accessibility.",
      techStack: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/yourusername/omnifood",
      live: "https://your-omnifood-demo.com",
    },
    {
      title: "Eat-N-Split",
      image: eatNsplit,
      description:
        "A bill-splitting web app that helps friends divide costs easily. Built with React and Tailwind for speed and simplicity.",
      techStack: ["React", "TailwindCSS", "JavaScript"],
      github: "https://github.com/InaolajiRidwan/eat-n-split",
      live: "https://eat-n-split-mocha-nu.vercel.app/",
    },
    {
      title: "Crypto Dashboard",
      image: cryptoDashBoard,
      description:
        "An interactive cryptocurrency tracking dashboard featuring live market data, charts, and portfolio insights.",
      techStack: ["React", "CSS", "JavaScript", "Chart.js", "API"],
      github: "https://github.com/InaolajiRidwan/cryptocurrency-dashboard",
      live: "https://cryptocurrency-dashboard-rosy.vercel.app/",
    },
    {
      title: "Freelance Dashboard",
      image: freelanceDashBoard,
      description:
        "A personal freelance dashboard showcasing client projects, statistics, and real-time analytics.",
      techStack: ["React", "CSS", "JavaScript", "Chart.js", "API"],
      github: "https://github.com/InaolajiRidwan/freelanceDasboard",
      live: "https://freelance-dasboard.vercel.app/",
    },
    {
      title: "Agricon",
      image: agricon,
      description:
        "A platform connecting smallholder farmers to postharvest services like storage, transport, and processing facilities.",
      techStack: ["React", "TailwindCSS", "JavaScript", "Git & GitHub"],
      github: "https://github.com/yourusername/agricon",
      live: "https://agricon.com.ng/",
    },
    {
      title: "Advice Generator",
      image: adviceGen,
      description:
        "A fun app that generates random pieces of advice using the Advice Slip API, styled with TailwindCSS.",
      techStack: ["HTML", "TailwindCSS", "JavaScript", "API"],
      github: "https://github.com/InaolajiRidwan/Advice-generator-app",
      live: "https://advice-generator-app-phi-pearl.vercel.app/",
    },
    {
      title: "Conference Speaker Landing Page",
      image: conferenceSpeaker,
      description:
        "A sleek, responsive landing page for a conference speaker, featuring event details, biography, and contact links.",
      techStack: ["React", "TailwindCSS", "JavaScript"],
      github: "https://github.com/InaolajiRidwan/conference-speaker-list",
      live: "https://conference-speaker-demo.vercel.app/",
    },
    {
      title: "Portfolio",
      image: recentPortofolio,
      description:
        "A sleek, responsive landing page for a conference speaker, featuring event details, biography, and contact links.",
      techStack: ["React", "TailwindCSS", "Vite", "Motion"],
      github: "https://github.com/InaolajiRidwan/myNewPortfolio",
      live: "https://inaolajiadewaleridwan.vercel.app/",
    },
  ];

  return (
    <section
      className="p-5 md:p-10 lg:p-40 space-y-10 lg:justify-center lg:h-screen lg:overflow-y-auto"
      id="projects"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-4 text-yellow-700 text-lg"
      >
        <h4 className="text-center uppercase text-sm md:text-base">
          Featured Work
        </h4>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-text-color">
          Latest Projects
        </h2>
        <div className="flex items-center justify-center gap-2">
          <hr className="w-10" />
          <div className="w-2 h-2 bg-text-color rounded-full" />
          <hr className="w-10" />
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <ProjectCards
              title={project.title}
              image={project.image}
              description={project.description}
              techStack={project.techStack}
              githubLink={project.github}
              liveLink={project.live}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
