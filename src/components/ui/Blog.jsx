import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Assuming you'll navigate to a detailed blog page
// import blogImage from "../../Assets/img/rose.jpg";
import { getBlogs } from "../../utils/Api";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

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
  return (
    <div className="container mx-auto">
      {blogs.map((blog) => (
        <div className="grid grid-cols gap-4 pt-4" key={blog._id}>
          <div className="border border-gray-200 rounded-md shadow-md mb-4 flex">
            {/* <Link to={`/blog/${blog.slug}`}>
              <img
                src={blogImage}
                alt={blog.title}
                className="w-100 h-auto rounded-l-md"
              />
            </Link> */}
            <div className="p-4 flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-bold mb-2">{blog.title}</h2>
                <p className="text-gray-700">{blog.description}</p>
              </div>
              {/* <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Read More
                </button>
              </div> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
