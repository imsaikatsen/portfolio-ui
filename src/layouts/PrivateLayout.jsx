// components/PrivateLayout.js
import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Redirect } from "react-router-dom";

const PrivateLayout = ({ isAuthenticated, children }) => {
  // if (!isAuthenticated) {
  //   // Redirect to the login page if not authenticated
  //   return <Redirect to="/login" />;
  // }
  return (
    <div>
      <Navbar />
      <Sidebar />
      {children}
    </div>
  );
};

export default PrivateLayout;
