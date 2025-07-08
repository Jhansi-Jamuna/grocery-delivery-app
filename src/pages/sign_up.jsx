import React from "react";
import {TextField,RadioGroup, Radio,Button,Container, Paper,FormControl,FormLabel,FormControlLabel, InputLabel,OutlinedInput, InputAdornment,} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";

export default function Signup() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [formData, setFormData] = useState({
    userName: "",
    gender: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: "", // Add confirmPassword field
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your backend API
      const response = await axios.post("http://localhost:5000/Signup", formData).then((response) => {
        console.log(JSON.stringify(response.data));
        // Check if the response contains an 'id'
        if (response.data.id) { 
          // Set a session token in localStorage
          localStorage.setItem("token", response.data.id);
          // Redirect to the index page (or any other page)
          console.log("Authentication successful", response.data);
          navigate("/Signin");
        } else {
          // If there is no 'id' in the response, throw an error
          console.error("API Error:", response.data);
          alert("Authentication failed. Please check your credentials.");
          alert(response.data);
        }
      }).catch((error) => {
        console.log("API Error: inside catch", error.response.data);
        alert(error.response.data);
      });
      console.log("after response#######", response);
    } catch (error) {
      // Handle error
      console.error("API Error:", error.message);
    }
  };

  return (
    <Container
      maxWidth="string"
      style={{
        display: "grid",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "left",
        paddingLeft: "300px",
        height: "100vh",
        backgroundImage: `url(images/bglogin.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Paper elevation={24} style={{ padding: "20px", backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
        <h1 style={{ color: "black" }} align="center">
          Register{" "}
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <TextField
              required
              id="input-with-icon-textfield"
              margin="dense"
              name="userName"
              value={formData.userName}
              label="User Name"
              onChange={handleChange}
              sx={{width:'400px'}}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon fontSize="large" />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              required
              id="input-with-icon-textfield"
              label="Email "
              margin="normal"
              name="email"
              value={formData.email}
              onChange={handleChange}
              sx={{width:'400px'}}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon fontSize="large" />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
          </div>
          <TextField 
             label="Age"
             name="age"
             type="number"
             value={formData.age}
             onChange={handleChange}
             InputLabelProps={{
                shrink: true,
               }}
              variant="outlined"
               margin="normal"
             />
          <div>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label" margin="dense" required>
                Gender
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue=""
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                sx={{width:'400px'}}
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
              </RadioGroup>
            </FormControl>
          </div>
          <div>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                name="password"
                sx={{width:'400px'}}
                value={formData.password}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </div>
          <div>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                sx={{width:'400px'}}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Confirm Password"
              />
            </FormControl>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Button variant="contained" color="secondary"  type="submit">
              Register
            </Button>
          </div>
        </form>
      </Paper>
    </Container>
  );
}
