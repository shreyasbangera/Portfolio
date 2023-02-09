import React, { useRef } from "react";
import EvolutionFitness from "../assets/Evolutionfitness.png";
import Stylecraft from "../assets/Stylecraft.png";
import todolist from "../assets/todolist.png";
import cryptoxchange from "../assets/cryptoxchange.png";
import { motion } from "framer-motion";

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
        <div className="shadow-2xl bg-black lg:w-[30vw] xl:w-[20vw] md:w-[40vw] rounded-b-2xl">
          <img src={EvolutionFitness} />
          <div className="p-6">
            <h1 className="text-xl">Evolution Fitness</h1>
            <p className="font-light mt-2 text-gray-400 text-sm">
              A fitness website that offers a wide range of exercises.
            </p>
            <div className="flex mt-7 justify-around">
              <a
                href="https://github.com/shreyasbangera/Evolution-fitness"
                className="p-1 hover:text-[#FF8473]"
              >
                🔗Github
              </a>
              <a
                href="http://evolutionfitness.vercel.app"
                className="p-1 bg-[#FF8473] rounded-2xl px-8 hover:bg-gray-900"
              >
                Live
              </a>
            </div>
          </div>
        </div>
        <div className="shadow-2xl bg-black  lg:w-[30vw] xl:w-[20vw] md:w-[40vw] rounded-b-2xl">
          <img src={Stylecraft} />
          <div className="p-6">
            <h1 className="text-xl">Stylecraft</h1>
            <p className="font-light mt-2 text-gray-400 text-sm">
              E-commerce website, featuring a user-friendly interface.
            </p>
            <div className="flex mt-7 justify-around">
              <a
                href="https://github.com/shreyasbangera/Stylecraft"
                className="p-1 hover:text-[#FF8473]"
              >
                🔗Github
              </a>
              <a
                href="https://stylecraft-one.vercel.app/"
                className="p-1 bg-[#FF8473] rounded-2xl px-8 hover:bg-gray-900"
              >
                Live
              </a>
            </div>
          </div>
        </div>
        <div className="shadow-2xl bg-black  lg:w-[30vw] xl:w-[20vw] md:w-[40vw] rounded-b-2xl">
          <img src={cryptoxchange} />
          <div className="p-6">
            <h1 className="text-xl">CryptoXchange</h1>
            <p className="font-light mt-2 text-gray-400 text-sm">
              A website that fetches Cryptocurrency exchange rates.
            </p>
            <div className="flex mt-7 justify-around">
              <a
                href="https://github.com/shreyasbangera/CryptoXchange"
                className="p-1 hover:text-[#FF8473]"
              >
                🔗Github
              </a>
              <a
                href="https://cryptoxchangeshreyas.netlify.app/"
                className="p-1 bg-[#FF8473] rounded-2xl px-8 hover:bg-gray-900"
              >
                Live
              </a>
            </div>
          </div>
        </div>
        <div className="shadow-2xl bg-black  lg:w-[30vw] xl:w-[20vw] md:w-[40vw] rounded-b-2xl">
          <img src={todolist} />
          <div className="p-6">
            <h1 className="text-xl">To-do list</h1>
            <p className="font-light mt-2 text-gray-400 text-sm">
              A simple to-do list app for managing daily tasks.
            </p>
            <div className="flex mt-7 justify-around">
              <a
                href="https://github.com/shreyasbangera/Todo-list-app"
                className="p-1 hover:text-[#FF8473]"
              >
                🔗Github
              </a>
              <a
                href="https://todo-app-shreyas.vercel.app/"
                className="p-1 bg-[#FF8473] rounded-2xl px-8 hover:bg-gray-900"
              >
                Live
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
