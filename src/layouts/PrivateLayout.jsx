import React from "react";
import { Redirect } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const PrivateLayout = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token");
  if (!isAuthenticated) {
    // Redirect to the login page if not authenticated
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <Navbar />
      <Sidebar />
      {children}
    </div>
  );
};

export default PrivateLayout;
