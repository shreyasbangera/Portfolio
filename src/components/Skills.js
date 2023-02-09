import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/data";

const Skills = () => {
  return (
    <section
      id="skills"
      className="text-white bg-[#0F0C0C] p-10 font-semibold text-xl lg:px-20 md:px-10"
    >
      <p className="text-4xl text-center">Skills</p>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-10"
      >
        <div className="flex lg:gap-24 gap-12 mx-auto lg:max-w-[600px] sm:max-w-[400px] justify-around flex-wrap pt-10 ">
          {skills.map(({ id, name, image }) => (
            <div
              key={id}
              className="group relative flex justify-center cursor-pointer"
            >
              <img className="w-16" src={image} />
              <span className="absolute top-14 left-5 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                {name}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
