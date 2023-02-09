import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <section className="text-white h-24 items-center px-10 lg:px-20 flex md:space-x-72 md:justify-start justify-between font-semibold md:text-xl text-lg fixed top-0 bg-gray-900 w-full z-30">
      <div>
        <Link to="hero" spy={true} smooth={true} offset={-100} duration={600}>
          <p className="cursor-pointer">Portfolio</p>
        </Link>
      </div>
      <ul className="lg:space-x-12 space-x-6 hidden md:flex">
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
    </section>
  );
};

export default Navbar;
