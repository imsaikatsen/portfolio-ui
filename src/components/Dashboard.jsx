// Dashboard.js
import { Container, Grid, Paper } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const styles = {
  dashboardContainer: {
    display: "flex",
    flexDirection: "column",
  },
  contentContainer: {
    flex: 1,
  },
};

const Dashboard = () => {
  return (
    <Paper elevation={0} style={styles.dashboardContainer}>
      <Navbar />
      <Container maxWidth="xl" style={styles.contentContainer}>
        <Grid container>
          <Grid item md={4}>
            <Sidebar />
          </Grid>
          <Grid item md={8}>
            {/* Content for the main section of your dashboard */}
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default Dashboard;
