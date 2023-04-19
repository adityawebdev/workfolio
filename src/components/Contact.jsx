import React from "react";
import { motion } from "framer-motion";
import linkedin from "../assets/icons/linkedin.png";
import github from "../assets/icons/githubicon.png";
import instagram from "../assets/icons/instagram.png";

import { SectionWrapper } from "../components/hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div
      className={` flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      id="contact"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex flex-col bg-primary p-8 rounded-2xl w-full"
      >
        <h1 className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          contact
        </h1>
        <h1 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Get In Touch.
        </h1>
        <a
          href="mailto:adityasinha3201@gmail.com"
          className="text-lg text-white flex flex-wrap"
        >
          adityasinha3201@gmail.com
        </a>

        <a
          href="tel:+91 6399468359"
          className="text-lg text-white flex flex-wrap"
        >
          +91 6399468359
        </a>
        <div className="flex justify-start items-center gap-6 mt-8">
          <a href="https://www.instagram.com/law.here/">
            <img height={30} width={30} src={instagram} />
          </a>
          <a href="https://github.com/adityawebdev">
            <img height={30} width={30} src={github} />
          </a>
          <a href="https://www.linkedin.com/in/aditya-sinha-05776b254/">
            <img height={30} width={30} src={linkedin} />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
