import React from "react";
import { NavLink } from "react-router-dom";

const TopBar = () => {
  return (
    <nav className="p-4">
      <div className="container mx-auto">
        <ul className="flex items-center">
          <li>
            <NavLink
              exact
              to="/about"
              activeClassName="font-bold"
              className="text-black hover:text-orange-300"
            >
              Saikat Sen
            </NavLink>
          </li>
          <li className="ml-5">
            <NavLink
              exact
              to="/about"
              activeClassName="font-bold"
              className="text-black hover:text-orange-300"
            >
              About
            </NavLink>
          </li>
          <li className="ml-5">
            <NavLink
              exact
              to="/projects"
              activeClassName="font-bold"
              className="text-black hover:text-orange-300"
            >
              Projects
            </NavLink>
          </li>
          <li className="ml-5">
            <NavLink
              exact
              to="/blog"
              activeClassName="font-bold"
              className="text-black hover:text-orange-300"
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopBar;
