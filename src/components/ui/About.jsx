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
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex justify-center md:justify-start">
            <img
              src={profilePicture}
              alt="Profile"
              className="rounded-full w-48 h-48 object-cover"
            />
          </div>
          <div className="pb-2">
            <h1 style={headingStyle} className="font-bold text-black pb-2">
              SAIKAT SEN
            </h1>
            <div className="pt-2 text-xl font-thin flex items-center">
              <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
              Software Engineer @ BEXIMCO GROUP
            </div>
            <div className="pt-2 text-xl font-thin flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              Dhaka, Bangladesh
            </div>
            <div className="pt-2 text-xl font-thin flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              sensaikatcse@gmail.com
            </div>
            <div className="pt-4 pb-2 flex flex-wrap">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-normal text-gray-700 mr-2 mb-2">
                JavaScript
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-normal text-gray-700 mr-2 mb-2">
                Node.js
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-normal text-gray-700 mr-2 mb-2">
                React.js
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-normal text-gray-700 mr-2 mb-2">
                Full Stack
              </span>
            </div>
            <div className="pt-4 pb-2">
              <a
                href="https://www.linkedin.com/in/iamsaikatsen/"
                className="text-3xl mr-4"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://github.com/imsaikatsen"
                className="text-3xl mr-4"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://twitter.com/dev_saikat_sen"
                className="text-3xl mr-4"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5">
        <p className="font-normal text-base font-roboto tracking-wide">
          Hi there! I'm Saikat. I work as a full-time software engineer with
          over 3 years of experience. At BEXIMCO Limited, I work as a Full Stack
          Software Engineer, focusing on delivering high-quality web
          applications. I am dedicated to writing clean, maintainable code and
          implementing robust software design patterns and database
          architectures. My passion lies in crafting user interfaces that are
          fresh, clean, and visually appealing, ensuring user satisfaction and a
          seamless experience.
        </p>

        <p className="font-normal text-base font-roboto tracking-wide pt-5">
          Skills: ☑ JavaScript ☑Node.js ☑React.js ☑PHP ☑Laravel ☑MySQL ☑MongoDB
        </p>
        <p className="font-normal text-base font-roboto tracking-wide pt-5">
          I continuously strive to enhance the user experience and take pride in
          my ability to transform complex requirements into intuitive and
          attractive interfaces.
        </p>
      </div>
    </div>
  );
};

export default About;
