import React from "react";
import { FaGithub, FaLinkedin, FaBehance, FaTwitter } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50">
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-pink transition-colors duration-300 text-2xl"
      >
        <FaGithub className="text-pink" size={35} />
      </a>
      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-pink transition-colors duration-300 text-2xl"
      >
        <FaLinkedin className="text-pink" size={35} />
      </a>
      <a
        href="https://behance.net/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-pink transition-colors duration-300 text-2xl"
      >
        <FaTwitter className="text-pink" size={35} />
      </a>
      {/* <a
        href="https://behance.net/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-pink transition-colors duration-300 text-2xl"
      >
        <FaTwitter size={35} />
      </a> */}
    </div>
  );
};

export default Socials;
