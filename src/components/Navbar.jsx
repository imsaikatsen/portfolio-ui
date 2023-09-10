// components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>Dashboard</h1>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#2196F3',
    color: '#fff',
    padding: '1rem',
  },
  logo: {
    margin: '0',
  },
};

export default Navbar;
