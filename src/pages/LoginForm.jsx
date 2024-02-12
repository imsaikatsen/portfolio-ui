import {
  TextField,
  Button,
  Paper,
  Grid,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { loginUser } from "../utils/Api";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem("rememberedEmail");
    if (storedEmail) {
      setEmail(storedEmail);
    }
    const storedPassword = localStorage.getItem("rememberedPassword");
    if (storedPassword) {
      // Decrypt the password if it's encrypted
      // Here we are assuming the password is stored in plain text for simplicity
      setPassword(storedPassword);
    }
  }, []);

  const handleCheckboxChange = (event) => {
    setKeepLoggedIn(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage(""); // Reset error message

    // Create an object with the user credentials
    const userData = {
      email,
      password,
      keepLoggedIn,
    };

    // Call the API endpoint to sign in the user
    loginUser(userData)
      .then((response) => {
        // Handle successful sign-in
        const token = response.data.token;
        if (token) {
          if (keepLoggedIn) {
            localStorage.setItem("rememberedEmail", email);
            localStorage.setItem("rememberedPassword", password);
          } else {
            localStorage.removeItem("rememberedEmail");
            localStorage.removeItem("rememberedPassword");
          }
          localStorage.setItem("token", token);
          setIsAuthenticated(true); // Update authentication state
          history.push("/dashboard");
        }
      })
      .catch((error) => {
        if (error.response.data) {
          setErrorMessage(error.response.data);
        } else {
          setErrorMessage("An error occurred during login");
        }
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ padding: 100 }}>
        <Paper>
          <Grid
            container
            spacing={3}
            direction={"column"}
            justify={"center"}
            alignItems={"center"}
          >
            <Grid item xs={12}>
              <Typography variant="h4" fontWeight="bold">
                Log In
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: 400 }}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: 400 }}
              ></TextField>
            </Grid>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={keepLoggedIn}
                    onChange={handleCheckboxChange}
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                }
                label="Keep me logged in"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Didn't Sign Up Yet ? <Link to="/signup">Sign Up</Link>
              </Typography>
            </Grid>
            <Grid item xs={12} style={{ paddingBottom: 30 }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </form>
  );
};

export default LoginForm;
