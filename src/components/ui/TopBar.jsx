import React from "react";

const TopBar = () => {
  return (
    <nav className="p-4">
      <div className="container mx-auto">
        <ul className="flex items-center">
          <li>
            <a
              href="/about"
              className="text-black font-bold hover:text-orange-300"
            >
              Saikat Sen
            </a>
          </li>
          <li className="ml-5">
            <a href="/about" className="text-black hover:text-orange-300">
              About
            </a>
          </li>
          <li className="ml-5">
            <a href="/projects" className="text-black hover:text-orange-300">
              Projects
            </a>
          </li>
          <li className="ml-5">
            <a href="/blog" className="text-black hover:text-orange-300">
              Blog
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopBar;
