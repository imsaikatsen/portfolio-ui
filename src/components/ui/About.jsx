import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import profilePicture from "../../Assets/img/saikat_formal_2024.png";

const About = () => {
  const headingStyle = {
    fontWeight: 800,
    fontSize: "2.00rem",
    lineHeight: "2.25rem",
  };
  return (
    <div className="container mx-auto">
      <div class=" grid grid-cols-2 gap-3 pt-4">
        <div class=" grid grid-cols-2 gap-5">
          <div>
            <img src={profilePicture} alt="Profile" />
          </div>
          <div class=" pb-2">
            <h1 style={headingStyle} className="font-bold text-black pb-2">
              SAIKAT SEN
            </h1>
            <FontAwesomeIcon icon={faBriefcase} />{" "}
            <span className="pt-2 text-xl font-thin">
              Software Engineer @ BEXIMCO GROUP
            </span>
            <div className="pt-2 text-xl font-thin">
              <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
              <span>Dhaka,Bangladesh</span>
            </div>
            <div className="pt-2 text-xl font-thin">
              <FontAwesomeIcon icon={faEnvelope} />{" "}
              <span>sensaikatcse@gmail.com</span>
            </div>
            <div class="pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-normal text-gray-700 mr-2 mb-2">
                Java Script
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-normal text-gray-700 mr-2 mb-2">
                Node Js
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-normal text-gray-700 mr-2 mb-2">
                React Js
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-normal text-gray-700 mr-2 mb-2">
                Full Stack
              </span>
            </div>
            <div class="pt-4 pb-2">
              <a href="https://www.linkedin.com/in/iamsaikatsen/">
                <FontAwesomeIcon icon={faLinkedin} className="text-3xl mr-4" />
              </a>
              <a href="https://github.com/imsaikatsen">
                <FontAwesomeIcon icon={faGithub} className="text-3xl mr-4" />
              </a>
              <a href="https://twitter.com/dev_saikat_sen">
                <FontAwesomeIcon icon={faTwitter} className="text-3xl mr-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5">
        <p className="font-normal text-base font-roboto tracking-wide">
          Hi there! I'm Saikat. I work as a full-time software engineer over 3
          years+ experience. In my spare time I do open-sourcing. Most of my
          open-source projects are focused on one thing – to help people learn.
          You may use these projects to learn about algorithms in JavaScript and
          get prepared for technical interviews, or to learn Python syntax and
          start experimenting with machine learning algorithms and math behind
          them, etc. I also write articles about life, web-development and
          machine learning.
        </p>
      </div>
    </div>
  );
};

export default About;
