import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../../utils/Api";
import React, { useState, useEffect } from "react";
import CreateProjectModal from "../myprojects/CreateProjectModal";
import EditProjectModal from "../myprojects/EditProjectModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

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

  const handleCreateProject = (projectData) => {
    createProject(projectData)
      .then((response) => {
        console.log("Project created:", response.data);
        fetchProjects(); // Refresh projects after creation
        setIsCreateModalOpen(false);
      })
      .catch((error) => {
        console.error("Error creating project:", error);
      });
  };

  const handleEditProject = (updatedData) => {
    updateProject(selectedProject._id, updatedData)
      .then((response) => {
        console.log("Project updated:", response.data);
        fetchProjects(); // Refresh projects after update
        setIsEditModalOpen(false);
      })
      .catch((error) => {
        console.error("Error updating project:", error);
      });
  };

  const handleDeleteProject = (projectId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProject(projectId)
          .then(() => {
            console.log("Project deleted successfully");
            fetchProjects(); // Refresh projects after deletion
            Swal.fire("Deleted!", "Your project has been deleted.", "success");
          })
          .catch((error) => {
            console.error("Error deleting project:", error);
          });
      }
    });
  };

  return (
    <div className="overflow-hidden border border-gray-200 rounded-lg">
      <div className="flex justify-between items-center px-4 py-2 bg-gray-100 border-b border-gray-200">
        <h1 className="text-3xl font-bold">Projects List</h1>
        <button
          className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={() => setIsCreateModalOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          Create Project
        </button>
        <CreateProjectModal
          isOpen={isCreateModalOpen}
          onRequestClose={() => setIsCreateModalOpen(false)}
          onSubmit={handleCreateProject}
        />
        <EditProjectModal
          isOpen={isEditModalOpen}
          onRequestClose={() => setIsEditModalOpen(false)}
          onSubmit={handleEditProject}
          selectedProject={selectedProject}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200"
              >
                Project Title
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200"
              >
                Project Description
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200"
              >
                Project Image
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200"
              >
                Project Tools
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200"
              >
                Project Link
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200"
              >
                Project Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {projects.map((project) => (
              <tr key={project._id} className="hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">
                  <div className="text-sm font-medium text-gray-900">
                    {project.projectTitle}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">
                  <div className="text-sm text-gray-900">
                    {project.projectDescription}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">
                  <img
                    src={`${process.env.REACT_APP_API_BASE_URL}/${project.projectImage}`}
                    alt={project.projectTitle}
                    className="w-16 h-16 object-cover"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">
                  <div className="text-sm text-gray-900">
                    {project.projectTools.join(", ")}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">
                  <div className="text-sm text-gray-900">
                    <a
                      href={`https://${project.projectGithubLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.projectGithubLink}
                    </a>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">
                  <div className="text-sm text-gray-900">
                    {formatDate(project.date)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    className="mr-2 text-gray-600 hover:text-gray-900"
                    onClick={() => {
                      setSelectedProject(project); // Select the project to edit
                      setIsEditModalOpen(true);
                    }}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900"
                    onClick={() => handleDeleteProject(project._id)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectList;
