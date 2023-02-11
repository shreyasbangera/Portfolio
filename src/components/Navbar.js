import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion } from 'framer-motion'
import { RxHamburgerMenu } from 'react-icons/rx';
import { RxCross2 } from 'react-icons/rx';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="text-white h-24 items-center px-10 lg:px-20 flex md:space-x-72 md:justify-start justify-between font-semibold md:text-xl text-lg fixed top-0 bg-gray-900 w-full z-30 shadow-lg md:shadow-none">
      <div>
        <Link to="hero" spy={true} smooth={true} offset={-100} duration={600}>
          <p className="cursor-pointer">Portfolio</p>
        </Link>
      </div>
        <span
          className="md:hidden cursor-pointer hover:text-[#FF8473]"
          onClick={() => setOpen(true)}
        >
          <RxHamburgerMenu/>
        </span>
      <ul className="lg:space-x-12 hidden space-x-6 md:flex">
        <Link to="hero" spy={true} smooth={true} offset={-100} duration={600}>
          <li className="hover:text-[#FF8473] cursor-pointer">Home</li>
        </Link>
        <Link to="skills" spy={true} smooth={true} offset={-100} duration={600}>
          <li className="hover:text-[#FF8473] cursor-pointer">Skills</li>
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={600}
        >
          <li className="hover:text-[#FF8473] cursor-pointer">Projects</li>
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={600}
        >
          <li className="hover:text-[#FF8473] cursor-pointer">Contact</li>
        </Link>
      </ul>

      <motion.ul
        initial={{ opacity: 0, y: -200 }}
        whileInView={ open? {opacity: 1, y: 0 }: {opacity: 0}}
        transition={{ type: "spring", duration: 0.5 }}
        className={
          open
            ? "absolute top-0 left-0 text-center w-full md:hidden bg-gray-900 flex flex-col gap-10 p-10"
            : "hidden"
        }
      >
        <span
          className="absolute right-0 p-4 top-0 cursor-pointer hover:text-[#FF8473]"
          onClick={() => setOpen(false)}
        >
          <RxCross2 size={30}/>
        </span>
        <Link to="hero" spy={true} smooth={true} offset={-100} duration={600}>
          <li className="hover:text-[#FF8473] cursor-pointer">Home</li>
        </Link>
        <Link to="skills" spy={true} smooth={true} offset={-100} duration={600}>
          <li className="hover:text-[#FF8473] cursor-pointer">Skills</li>
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={600}
        >
          <li className="hover:text-[#FF8473] cursor-pointer">Projects</li>
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={600}
        >
          <li className="hover:text-[#FF8473] cursor-pointer">Contact</li>
        </Link>
      </motion.ul>
    </section>
  );
};

export default Navbar;
