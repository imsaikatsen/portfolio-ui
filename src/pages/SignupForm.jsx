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
import { useState } from "react";
import { registerUser } from "../utils/Api";

import { useHistory } from 'react-router-dom';


const SignupForm = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    setErrorMessage('');
    registerUser(userData)
      .then((response) => {
        // console.log("I am here after then call");
        // Handle successful registration
        setSuccessMessage('Registration successful!');
        history.push('/login');
        console.log("Registration successful:", response.data);
      })
      .catch((error) => {
        console.error("Registration error:", error);
        // Handle registration error

        console.log(error.response.data)
        if(error.response && error.response.data && error.response.data.error) {
          setErrorMessage(error.response.data.error)
        } else {
          setErrorMessage("AN error occured during registration");
        }
      });
  }
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
                Sign Up
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="name"
                label="Name"
                value={userData.name}
                onChange={handleChange}
                style={{ width: 400 }}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                label="Email"
                value={userData.email}
                onChange={handleChange}
                style={{ width: 400 }}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="phone"
                label="Phone"
                value={userData.phone}
                onChange={handleChange}
                style={{ width: 400 }}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="password"
                label="Password"
                type={"password"}
                value={userData.password}
                style={{ width: 400 }}
                onChange={handleChange}
              ></TextField>
            </Grid>
            {errorMessage && <p sx={{ color: 'red' }}>{errorMessage}</p>}
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    //   checked={checked}
                    //   onChange={handleChange}
                    label={"Keep me logged in"}
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                }
                label="Keep me logged in"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Are you already Sign Up?{" "}
                <Link exact to="/login">
                  Log In
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} style={{ paddingBottom: 30 }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                {" "}
                Sign Up{" "}
              </Button>
              {successMessage && <p>{successMessage}</p>}
            </Grid>
          </Grid>
        </Paper>
      </div>
    </form>
  );
};

export default SignupForm;
