import { Container, Grid } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Dashboard = () => {
    return (
      <div>
      <Navbar />
      <Container maxWidth="xl">
        <Grid container>
          <Grid item md={4}>
            <Sidebar />
          </Grid>
          <Grid item md={8}>
          
            {/* <MainContent /> */}
          </Grid>
        </Grid>
      </Container>
    </div>
    );
  };
  
  export default Dashboard;
  