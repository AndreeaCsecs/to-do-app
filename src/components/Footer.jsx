import React from "react";
import logo from "./images/github.png";

const Footer = () => {
  return (
    <div className="Footer">
      <img src={logo} alt="" />
      <a
        href="https://github.com/AndreeaCsecs/to-do-app"
        target="_blank"
        rel="noreferrer"
      >
        View Code in GitHub
      </a>
    </div>
  );
};

export default Footer;
