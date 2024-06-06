import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBlog } from "../../utils/Api"; // Adjust the import path as needed

const ViewBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await getBlog(id);
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchBlog();
  }, [id]);

  return (
    <div className="flex justify-center items-center min-h-screen p-6 bg-gray-100">
      {blog ? (
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            {blog.title}
          </h1>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            {blog.description}
          </p>
          {blog.blogImage && (
            <div className="flex justify-center items-center mt-6">
              <img
                src={`${process.env.REACT_APP_API_BASE_URL}/${blog.blogImage}`}
                alt={blog.title}
                className="max-w-full h-auto rounded-lg"
              />
            </div>
          )}
        </div>
      ) : (
        <p className="text-2xl text-gray-600">Loading...</p>
      )}
    </div>
  );
};

export default ViewBlog;
