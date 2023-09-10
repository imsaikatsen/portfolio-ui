// components/PrivateLayout.js
import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const PrivateLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      {children}
    </div>
  );
};

export default PrivateLayout;
