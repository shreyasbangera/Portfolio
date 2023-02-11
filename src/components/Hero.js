import React from "react";
import { Link } from "react-scroll";
import heroimg from "../assets/undraw_programming_re_kg9v.svg";
import { BsDownload } from "react-icons/bs";
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
      id="hero"
      className="p-5 lg:px-20 md:px-10  md:pt-40 pt-32 text-white font-semibold text-lg leading-10 pb-20 flex md:flex-row items-center md:justify-between flex-col gap-24"
    >
      <div className="md:max-w-[40vw] text-center md:text-left">
        <p className="md:text-2xl text-lg">Hello, I'm</p>
        <h1 className="md:text-5xl text-3xl gradient font-bold pb-3 mt-4 inline-block text-transparent bg-clip-text">
          Shreyas Y Bangera
        </h1>
        <p className="md:text-2xl text-xl mt-2">Frontend Developer</p>
        <p className="mt-5 md:text-lg text-sm mr-0 font-thin text-gray-400">
          Passionate web developer specializing in frontend development with
          React and JavaScript. Creating visually appealing and user-friendly
          websites. Explore my portfolio to see my work.
        </p>
        <div className="gap-2 md:gap-8 flex justify-center md:justify-start">
          <div>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={600}
            >
              <button className="mt-10 bg-[#FF8473] py-1 px-4 rounded">
                Contact me
              </button>
            </Link>
          </div>
          <a
            href="https://drive.google.com/file/d/1u59dQz0FEtUFLJWcv_yDbCBUgXsPmU1X/view?usp=sharing"
            className="mt-10 py-1 px-4 rounded border flex items-center"
          >
            Resume
            <BsDownload className="ml-2" />
          </a>
        </div>
      </div>
      <div className="md:w-[35vw]  items-center">
        <img className="w-full" src={heroimg}></img>
      </div>
    </motion.div>
  );
};

export default Hero;
