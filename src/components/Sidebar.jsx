// components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside style={styles.sidebar}>
      <ul style={styles.sidebarList}>
        <li style={styles.sidebarItem}>
          <Link to="/dashboard/users" style={styles.link}>
            Users
          </Link>
        </li>
        <li style={styles.sidebarItem}>
          <Link to="/dashboard/products" style={styles.link}>
            Products
          </Link>
        </li>
      </ul>
    </aside>
  );
};

const styles = {
  sidebar: {
    width: '250px',
    backgroundColor: '#333',
    color: '#fff',
    height: '100vh', // Set the sidebar height to 100% of the viewport height
    position: 'fixed', // Fixed position to keep it always visible
  },
  sidebarList: {
    listStyle: 'none',
    padding: '0',
  },
  sidebarItem: {
    padding: '10px',
    borderBottom: '1px solid #444',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
  },
};

export default Sidebar;
