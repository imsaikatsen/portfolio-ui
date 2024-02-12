import React from "react";
import Typography from "@mui/material/Typography";

const styles = {
  dashboardContainer: {
    display: "flex",
    flexDirection: "column",
  },
  contentContainer: {
    flex: 1,
  },
  welcomeText: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#F3797E",
  },
};

const Dashboard = () => {
  return (
    <div>
      <Typography variant="h3" gutterBottom style={styles.welcomeText}>
        WELCOME TO MY DASHBOARD
      </Typography>
    </div>
  );
};

export default Dashboard;
