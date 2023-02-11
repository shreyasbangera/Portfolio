import React, { useRef } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/data.js";

const Projects = () => {
  return (
    <section
      id="projects"
      className="p-5 py-10 text-white font-semibold lg:px-20"
    >
      <h1 className=" text-center text-4xl">Projects</h1>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        viewport={{ once: true }}
        className="justify-center mt-10 flex pt-10 flex-wrap gap-10"
      >
        {" "}
        {projects.map(({ title, image, description, github, live }) => (
          <div className="shadow-2xl bg-black lg:w-[30vw] xl:w-[20vw] md:w-[40vw] rounded-b-2xl">
            <img src={image} />
            <div className="p-6">
              <h1 className="text-xl">{title}</h1>
              <p className="font-light mt-2 text-gray-400 text-sm">
                {description}
              </p>
              <div className="flex mt-7 justify-around">
                <a href={github} className="p-1 hover:text-[#FF8473]">
                  🔗Github
                </a>
                <a
                  href={live}
                  className="p-1 bg-[#FF8473] rounded-2xl px-8 hover:bg-gray-900"
                >
                  Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
