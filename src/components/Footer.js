import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <section className=" text-white font-semibold p-5 pt-10 lg:px-20 md:px-10 ">
      <p className="text-center text-xl font-bold">Shreyas Y Bangera</p>
      <ul className="flex justify-center gap-10 mt-10">
        <li>
          <a href="https://github.com/shreyasbangera">
            <BsGithub size={40} className="border p-1 rounded-full" />
          </a>
        </li>

        <li>
        <a href="https://www.linkedin.com/in/shreyas-y-bangera">
          <BsLinkedin size={40} className="border p-1 rounded-full" />
          </a>
        </li>
        <li>
        <a href="https://twitter.com/0xShreyass">
          <BsTwitter size={40} className="border p-1 rounded-full" />
          </a>
        </li>
      </ul>
      <p className="text-center text-gray-600 mt-20">©️2023 Made by Shreyas</p>
    </section>
  );
};

export default Footer;
