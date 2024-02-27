import { getBlogs, createBlog, updateBlog, deleteBlog } from "../utils/Api";
import React, { useState, useEffect } from "react";
import CreateBlogModal from "./CreateBlogModal";
import EditBlogModal from "./EditBlogModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = () => {
    getBlogs()
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  };

  const handleCreateBlog = (blogData) => {
    createBlog(blogData)
      .then((response) => {
        console.log("Blog created:", response.data);
        fetchBlogs(); // Refresh blogs after creation
        setIsCreateModalOpen(false);
      })
      .catch((error) => {
        console.error("Error creating blog:", error);
      });
  };

  const handleEditBlog = (updatedData) => {
    updateBlog(selectedBlog._id, updatedData)
      .then((response) => {
        console.log("Blog updated:", response.data);
        fetchBlogs(); // Refresh blogs after update
        setIsEditModalOpen(false);
      })
      .catch((error) => {
        console.error("Error updating blog:", error);
      });
  };

  const handleDeleteBlog = (blogId) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      deleteBlog(blogId)
        .then(() => {
          console.log("Blog deleted successfully");
          fetchBlogs(); // Refresh blogs after deletion
        })
        .catch((error) => {
          console.error("Error deleting blog:", error);
        });
    }
  };

  return (
    <div className="overflow-hidden border border-gray-200 rounded-lg">
      <div className="flex justify-between items-center px-4 py-2 bg-gray-100 border-b border-gray-200">
        <h1 className="text-3xl font-bold">Blogs List</h1>
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
          New Blog
        </button>
        <CreateBlogModal
          isOpen={isCreateModalOpen}
          onRequestClose={() => setIsCreateModalOpen(false)}
          onSubmit={handleCreateBlog}
        />
        <EditBlogModal
          isOpen={isEditModalOpen}
          onRequestClose={() => setIsEditModalOpen(false)}
          onSubmit={handleEditBlog}
          selectedBlog={selectedBlog}
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
                Title
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Description
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
            {blogs.map((blog) => (
              <tr key={blog._id} className="hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">
                  <div className="text-sm font-medium text-gray-900">
                    {blog.title}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">
                  <div className="text-sm text-gray-900">
                    {blog.description}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    className="mr-2 text-gray-600 hover:text-gray-900 "
                    onClick={() => {
                      setSelectedBlog(blog); // Select the blog to edit
                      setIsEditModalOpen(true);
                    }}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900"
                    onClick={() => handleDeleteBlog(blog._id)}
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

export default BlogList;
