import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import projectPicture from "../../Assets/img/rose.jpg";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3  pt-4">
        {/* First Project Card */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Link to="/project/project-slug-1">
            <img src={projectPicture} alt="Project" className="h-100 w-full" />
          </Link>
          <div className="px-6 py-4">
            <div className="flex items-center justify-between mb-2">
              <div className="font-bold text-xl">Project Name 1</div>
              <div className="text-gray-600 text-sm">Date</div>
            </div>
            <p className="text-gray-700 text-base mb-4">
              Project description goes here. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
            </p>
            <div className="flex flex-wrap mb-2">
              <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Tool 1
              </div>
              <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Tool 2
              </div>
              <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Tool 3
              </div>
            </div>
            <div className="flex justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <FontAwesomeIcon icon={faGithub} className="text-xl mr-4" />
                Source Code
              </button>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Demo
              </button>
            </div>
          </div>
        </div>
        {/* End of First Project Card */}

        {/* Second Project Card */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Link to="/project/project-slug-2">
            <img src={projectPicture} alt="Project" className="h-100 w-full" />
          </Link>
          <div className="px-6 py-4">
            <div className="flex items-center justify-between mb-2">
              <div className="font-bold text-xl">Project Name 2</div>
              <div className="text-gray-600 text-sm">Date</div>
            </div>
            <p className="text-gray-700 text-base mb-4">
              Project description goes here. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
            </p>
            <div className="flex flex-wrap mb-2">
              <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Tool 1
              </div>
              <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Tool 2
              </div>
              <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Tool 3
              </div>
            </div>
            <div className="flex justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <FontAwesomeIcon icon={faGithub} className="text-xl mr-4" />
                Source Code
              </button>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Demo
              </button>
            </div>
          </div>
        </div>
        {/* End of Second Project Card */}

        {/* Third Project Card */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Link to="/project/project-slug-3">
            <img src={projectPicture} alt="Project" className="h-100 w-full" />
          </Link>
          <div className="px-6 py-4">
            <div className="flex items-center justify-between mb-2">
              <div className="font-bold text-xl">Project Name 3</div>
              <div className="text-gray-600 text-sm">Date</div>
            </div>
            <p className="text-gray-700 text-base mb-4">
              Project description goes here. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
            </p>
            <div className="flex flex-wrap mb-2">
              <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Tool 1
              </div>
              <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Tool 2
              </div>
              <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Tool 3
              </div>
            </div>
            <div className="flex justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <FontAwesomeIcon icon={faGithub} className="text-xl mr-4" />
                Source Code
              </button>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Demo
              </button>
            </div>
          </div>
        </div>
        {/* End of Third Project Card */}
      </div>
    </div>
  );
};

export default Projects;
