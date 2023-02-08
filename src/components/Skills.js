import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div
      id="skills"
      className="text-white bg-[#0F0C0C] p-10 font-semibold text-xl lg:px-20 md:px-10"
    >
      <p className="text-4xl text-center">Skills</p>
      <motion.div
        initial={{ opacity: 0, x:-200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8}}
        className="mt-10"
      >
        <div className="flex lg:gap-24 gap-12 mx-auto lg:max-w-[600px] sm:max-w-[400px] justify-around flex-wrap pt-10 ">
          <motion.img whileHover={{ scale: 1.1 }}
            className="w-16"
            src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png"
          />
          <img
            className="w-16"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          />
          <img
            className="w-16"
            src="https://upload.wikimedia.org/wikipedia/commons/8/82/Devicon-html5-plain.svg"
          />
          <img
            className="w-16"
            src="https://upload.wikimedia.org/wikipedia/commons/7/70/Devicon-css3-plain.svg"
          />
          <img
            className="w-16"
            src="https://cdn.worldvectorlogo.com/logos/redux.svg"
          />
          <img
            className="w-16"
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
          />
          <img className="w-16" src="https://mui.com/static/logo.png" />
          <img
            className="w-16"
            src="https://icones.pro/wp-content/uploads/2021/06/icone-github-violet.png"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
