import React from "react";
import { MdCall, MdEmail, MdLocationPin } from "react-icons/md";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#0F0C0C] text-white font-semibold p-5 py-10 lg:px-20 md:px-10"
    >
      <h1 className="text-center text-4xl">Contact Me</h1>
      <div className="flex justify-center lg:justify-between  mt-10 pt-10 flex-wrap gap-10 text-center">
        <div className="p-4">
          <MdCall size={30} className="mx-auto" />
          <p className="mt-4 text-xl">Phone</p>
          <a href="tel:9901037133">
            <p className="mt-4 text-lg  text-blue-500">+91 9901037133</p>
          </a>
        </div>
        <div className="p-4">
          <MdEmail size={30} className="mx-auto" />
          <p className="mt-4 text-xl">Email</p>
          <a href="mailto:shreyasybangera1@gmail.com">
            <p className="mt-4 text-lg text-blue-500 ">
              shreyasybangera1@gmail.com
            </p>
          </a>
        </div>
        <div className="p-4">
          <MdLocationPin size={30} className="mx-auto" />
          <p className="mt-4 text-xl">Location</p>
          <p className="mt-4 text-lg  text-blue-500">Mangalore</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
