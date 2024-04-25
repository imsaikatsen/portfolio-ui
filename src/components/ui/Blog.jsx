import React from "react";
import { Link } from "react-router-dom"; // Assuming you'll navigate to a detailed blog page
import blogImage from "../../Assets/img/rose.jpg";

const Blog = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols gap-4 pt-4">
        <div className="border border-gray-200 rounded-md shadow-md mb-4 flex">
          <Link to="/blog/post-slug">
            <img
              src={blogImage}
              alt="Blog Title"
              className="w-100 h-auto rounded-l-md"
            />
          </Link>
          <div className="p-4 flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-bold mb-2">Blog Title</h2>
              <p className="text-gray-600 text-sm mb-2">Date</p>
              <p className="text-gray-700">
                Blog Description goes here. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>
            {/* <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Read More
              </button>
            </div> */}
          </div>
        </div>
      </div>
      <div className="grid grid-cols gap-4 pt-4">
        <div className="border border-gray-200 rounded-md shadow-md mb-4 flex">
          <Link to="/blog/post-slug">
            <img
              src={blogImage}
              alt="Blog Title"
              className="w-100 h-auto rounded-l-md"
            />
          </Link>
          <div className="p-4 flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-bold mb-2">Blog Title</h2>
              <p className="text-gray-600 text-sm mb-2">Date</p>
              <p className="text-gray-700">
                Blog Description goes here. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>
            {/* <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Read More
              </button>
            </div> */}
          </div>
        </div>
      </div>
      <div className="grid grid-cols gap-4 pt-4">
        <div className="border border-gray-200 rounded-md shadow-md mb-4 flex">
          <Link to="/blog/post-slug">
            <img
              src={blogImage}
              alt="Blog Title"
              className="w-100 h-auto rounded-l-md"
            />
          </Link>
          <div className="p-4 flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-bold mb-2">Blog Title</h2>
              <p className="text-gray-600 text-sm mb-2">Date</p>
              <p className="text-gray-700">
                Blog Description goes here. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>
            {/* <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Read More
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
