import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, Outlet } from "react-router-dom";

export default function Resume() {
  const [active, setActive] = useState("about");

  const links = [
    { id: 1, to: "about", label: "About" },
    { id: 2, to: "experience", label: "Experience" },
    { id: 3, to: "education", label: "Education" },
    { id: 4, to: "skills", label: "Skills" },
  ];

  return (
    <section className="p-5 lg:p-25 h-screen overflow-y-auto">
      {/* Heading (sticky) */}
      <div className="mb-10 bg-white dark:bg-black z-10 pb-5">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-text-color underline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Resume
        </motion.h2>
      </div>

      {/* Grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] xl:grid-cols-[550px_1fr] gap-5">
        {/* Sidebar */}
        <aside className="p-5">
          <nav>
            <div className="flex flex-col items-center lg:items-start gap-5">
              {links.map((item) => (
                <Link
                  key={item.id}
                  to={item.to}
                  onClick={() => setActive(item.to)}
                  className="w-full md:w-3/4 sm:w-4/5 lg:w-full flex justify-center lg:justify-start"
                >
                  <button
                    className={`w-full lg:w-full px-6 py-2 lg:py-7 rounded-md font-medium text-lg transition-colors duration-300 cursor-pointer ${
                      active === item.to
                        ? "bg-text-color text-black"
                        : "bg-gray-800 hover:border-2 hover:border-white text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                </Link>
              ))}
            </div>
          </nav>
        </aside>

        {/* Main content */}
        <div>
          <Outlet />
        </div>
      </div>
    </section>
  );
}
