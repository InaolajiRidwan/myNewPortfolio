import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section className=" p-4  md:p-30 md:flex md:flex-col md:justify-center  md:h-screen ">
      <div className="grid grid-col-1 md:grid-cols-2 gap-20 ">
        <motion.div
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{ duration: 2 }}
          className="bg-gray-900 p-10 rounded-lg space-y-8 shadow-2xl"
        >
          <div className="flex justify-between">
            <div>
              <h1 className="text-6xl">01</h1>
            </div>
            <div>
              <button className="bg-white rounded-full p-1">
                <FaArrowRight size={28} className="text-black " />
              </button>
            </div>
          </div>
          <div>
            <h1 className="md:text-2xl lg:text-4xl font-mono">
              Frontend <span className="text-text-color">Development</span>
            </h1>
          </div>
          <div></div>
        </motion.div>
        <motion.div
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          transition={{ duration: 2 }}
          className="bg-gray-900 p-10 rounded-lg space-y-8 shadow-2xl"
        >
          <div className="flex justify-between">
            <div>
              <h1 className="text-6xl">02</h1>
            </div>
            <div>
              <button className="bg-white rounded-full p-1">
                <FaArrowRight size={28} className="text-black " />
              </button>
            </div>
          </div>
          <div>
            <h1 className="md:text-2xl lg:text-4xl font-mono">
              Backend <span className="text-text-color">Development</span>
            </h1>
          </div>
          <div></div>
        </motion.div>

        <motion.div
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{ duration: 2 }}
          className="bg-gray-900 p-10 rounded-lg space-y-8 shadow-2xl"
        >
          <div className="flex justify-between">
            <div>
              <h1 className="text-6xl">03</h1>
            </div>
            <div>
             <button className="bg-white rounded-full p-1">
                <FaArrowRight size={28} className="text-black " />
              </button>
            </div>
          </div>
          <div>
            <h1 className="md:text-2xl lg:text-4xl font-mono">
              Product <span className="text-text-color">Design</span>
            </h1>
          </div>
          <div></div>
        </motion.div>

        <motion.div
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          transition={{ duration: 2 }}
          className="bg-gray-900 p-10 rounded-lg space-y-8 shadow-2xl"
        >
          <div className="flex justify-between">
            <div>
              <h1 className="text-6xl">04</h1>
            </div>
            <div>
              <button className="bg-white rounded-full p-1">
                <FaArrowRight size={28} className="text-black " />
              </button>
            </div>
          </div>
          <div>
            <h1 className="md:text-2xl lg:text-4xl font-mono">
              Video <span className="text-text-color">Editing</span>
            </h1>
          </div>
          <div></div>
        </motion.div>

        {/* <div className='bg-red-500'>g</div>
        <div className='bg-yellow-800'>d</div>
        <div className='bg-blue-400'></div>
        <div className='bg-gray-500'>d</div> */}
      </div>
    </section>
  );
}
