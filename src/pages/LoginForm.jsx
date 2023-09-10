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
import { loginUser } from "../utils/Api"
import { useState } from "react";
import { useHistory } from 'react-router-dom';
const LoginForm = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault(); 
    setErrorMessage(''); // Reset error message

    //create an object with the user credentioals 

    const userData = {
      email,
      password
    }

    //Call the API endpoint to sign in the user 
    loginUser(userData)
    .then((response) => {

      //Handle successfull sign-in
      const token = response.data.token 
      if(token){
        setSuccessMessage('LogIn successful!',token);
        setIsAuthenticated(true);
        history.push('/dashboard');
      }
      
    })
    .catch((error) => {
      console.log(error.response.data)
      if(error.response.data) {
        setErrorMessage(error.response.data)
      } else {
        setErrorMessage("AN error occured during registration");
      }
    })

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
              <Typography variant="h4" fontWeight="bold">Log In</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField label="Email" onChange={(e) => setEmail(e.target.value)} style={{width:400}}></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField label="Password" type={"password"} onChange={(e) => setPassword(e.target.value)} style={{width:400}}></TextField>
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
                Didn't Sign Up Yet ? 
                <Link exact to="/signup">
                   Sign Up
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} style={{paddingBottom:30}}>
              <Button type="submit" fullWidth variant="contained" color="primary"> Login </Button>
              {successMessage && <p>{successMessage}</p>}
            </Grid>
          </Grid>
        </Paper>
      </div>
    </form>
  );
};

export default LoginForm;
