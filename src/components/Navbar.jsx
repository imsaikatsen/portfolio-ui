import React from "react";
import { useHistory, Link } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/dashboard/signin");
    console.log("Logout Successfull");
  };
  return (
    <nav style={styles.navbar}>
      <Link to="/admin/dashboard/" style={styles.link}>
        Dashboard
      </Link>
      <div style={styles.logoutButton}>
        <button style={styles.button} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#34B1AA",
    color: "#fff",
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between", // Align items to the start and end of the navbar
    alignItems: "center", // Vertically center items in the navbar
  },
  logo: {
    margin: "0",
  },
  logoutButton: {
    marginRight: "1rem", // Add some margin between the logo and the logout button
  },
  button: {
    backgroundColor: "transparent",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontSize: "1rem",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
  },
};

export default Navbar;
