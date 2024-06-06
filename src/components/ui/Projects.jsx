import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { getProjects } from "../../utils/Api";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = () => {
    getProjects()
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toISOString().split("T")[0];
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
        {projects.map((project) => (
          <div
            className="max-w-sm rounded overflow-hidden shadow-lg"
            key={project._id}
          >
            <div>
              <img
                src={`${process.env.REACT_APP_API_BASE_URL}/${project.projectImage}`}
                alt={project.projectTitle}
                className="w-16 h-16 object-cover"
              />
            </div>
            <div className="px-6 py-4">
              <div className="flex items-center justify-between mb-2">
                <div className="font-bold text-xl">{project.projectTitle}</div>
                <div className="text-gray-600 text-sm">
                  {formatDate(project.date)}
                </div>
              </div>
              <p className="text-gray-700 text-base mb-4">
                {project.projectDescription}
              </p>
              <div className="flex flex-wrap mb-2">
                <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {project.projectTools.join(", ")}
                </div>
              </div>
              <div className="flex justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <FontAwesomeIcon icon={faGithub} className="text-xl mr-4" />
                  <a
                    href={`https://${project.projectGithubLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.projectGithubLink}
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
