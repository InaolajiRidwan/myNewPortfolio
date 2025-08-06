import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { BiHomeAlt } from "react-icons/bi";
import { FaFolderOpen, FaWrench } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaUser } from "react-icons/fa";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  const navMobileVariant = {
    hidden: {
      y: -200,
      opacity: 0,
      scale: 0.9,
      rotateX: -15,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        delay: 0.2,
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    },
  };

  return (
    <div>
      {/* Mobile Top Bar */}
      <motion.nav className="flex justify-between p-5 text-white lg:hidden">
        <motion.div
          variants={navMobileVariant}
          initial="hidden"
          animate="visible"
        >
          <Link to="/"><p className="italic">A<span className="text-text-color text-2xl">iR</span></p> </Link>
        </motion.div>
        <motion.div
          variants={navMobileVariant}
          initial="hidden"
          animate="visible"
        >
          <motion.button
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="focus:outline-none"
          >
            {isOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
          </motion.button>
        </motion.div>
      </motion.nav>

      {/* Mobile Navigation Links */}
      {isOpen && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed top-12 left-0 w-full h-[calc(100vh-4rem)] bg-black/90 backdrop-blur-lg flex flex-col items-center justify-center gap-6 text-xl text-white z-40"
        >
          <Link onClick={toggleMenu} to="/" className="hover:text-gray-300">
            <motion.div
              initial={{ x: -500 }}
              animate={{ x: 0 }}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
              className="flex items-center gap-2"
            >
              <BiHomeAlt size={15} />
              <span>Home</span>
            </motion.div>
          </Link>

          <Link onClick={toggleMenu} to="/about" className="hover:text-gray-300">
            <motion.div
              initial={{ x: 500 }}
              animate={{ x: 0 }}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
              className="flex items-center gap-2"
            >
              <FaUser  size={15} />
              <span>About</span>
            </motion.div>
          </Link>

          <Link onClick={toggleMenu} to="/projects" className="hover:text-gray-300">
            <motion.div
              initial={{ x: -500 }}
              animate={{ x: 0 }}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              className="flex items-center gap-2"
            >
              <FaFolderOpen size={15} />
              <span>Projects</span>
            </motion.div>
          </Link>

          <Link onClick={toggleMenu} to="/contact" className="hover:text-gray-300">
            <motion.div
              initial={{ x: 500 }}
              animate={{ x: 0 }}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
              className="flex items-center gap-2"
            >
              <HiOutlineMail size={15} />
              <span>Contact</span>
            </motion.div>
          </Link>
        </motion.section>
      )}

     
    </div>
  );
}
