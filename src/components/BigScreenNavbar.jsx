// Import motion from Framer Motion for animations
import { motion } from "framer-motion";

// Import routing helpers from React Router
import { Link, useLocation } from "react-router-dom";

// Import icons for navigation items
import { BiHomeAlt } from "react-icons/bi";
import { FaFolderOpen, FaWrench } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { AiOutlineFileText } from "react-icons/ai";
import { FaCog } from "react-icons/fa";

// Component for displaying a vertical navbar on large screens
export default function BigScreenNavbar() {
  // Hook to get the current active route path
  const location = useLocation();

  // Define navigation items with route path, icon, and label
  const navItems = [
    { to: "/", icon: <BiHomeAlt size={28} />, label: "Home" },
    { to: "/resume", icon: <AiOutlineFileText size={28} />, label: "Resume" },
    { to: "/projects", icon: <FaFolderOpen size={28} />, label: "Projects" },
    { to: "/contact", icon: <HiOutlineMail size={28} />, label: "Contact" },
    { to: "/services", icon: <FaCog size={28} /> },
  ];

  return (
    // Animated container that slides in from the right with fade effect
    <motion.div
      initial={{ opacity: 0, x: 50 }} // start hidden and offset
      animate={{ opacity: 1, x: 0 }} // animate to visible and aligned
      transition={{ duration: 1 }} // duration of entrance animation
      className="hidden lg:flex fixed top-1/2 -translate-y-1/2 right-6 z-50  bg-black/70 "
    >
      {/* Navigation container with styling */}
      <nav className="flex flex-col space-y-8 p-4 rounded-2xl shadow-2xl backdrop-blur-md">
        {navItems.map((item, idx) => (
          // Each navigation link
          <Link
            key={idx}
            to={item.to}
            className={`group relative text-white hover:text-orange-400 transition-all duration-300 ${
              location.pathname === item.to ? "text-orange-400" : ""
            }`}
          >
            {/* Icon with hover animation */}
            {/* <motion.div
            animate={{x:[-20,20], y:[0,30]}}
            transition={{
                x:{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 0.5
                }
            }}
              whileHover={{ scale: 1.2 }} // icon enlarges on hover
              whileTap={{ scale: 0.95 }} // icon shrinks on click
              className="flex items-center justify-center"
            >
              {item.icon}
            </motion.div> */}

            <motion.div
              animate={{
                x: [-10, 10], // Smooth left-right oscillation
                y: [0, -5, 0], // Gentle up-down floating effect
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 1, // slower and smoother
                },
                y: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 1.5,
                  ease: "easeInOut",
                },
              }}
              whileHover={{ scale: 1.2 }} // Enlarge on hover
              whileTap={{ scale: 0.95 }} // Shrink slightly on tap/click
              className="flex items-center justify-center"
            >
              {item.icon}
            </motion.div>

            {/* Tooltip label that appears on hover */}
            <span className="absolute right-10 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition bg-gray-900 text-white px-3 py-1 rounded-md shadow-lg text-sm whitespace-nowrap">
              {item.label}
            </span>
          </Link>
        ))}
      </nav>
    </motion.div>
  );
}
