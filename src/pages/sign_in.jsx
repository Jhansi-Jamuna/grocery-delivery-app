
import React, { useState } from "react";
import { TextField, Button, Container, Link, Paper, InputAdornment, Checkbox, FormControlLabel, Grid, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  
  const navigate = useNavigate();

  const handleSignIn = async () => {
    // Basic validation (you may want to add more robust validation)
    if (!email || !password) {
      alert("Please provide both email and password.");
      return;
    }

    try {
      // Assuming there is a fictional authentication API endpoint
      const response = await axios.post("http://localhost:5000/Signin", { email, password });
      alert("Authentication successful");
      // Handle successful authentication (customize based on your needs)
      console.log("Authentication successful", response.data);
      navigate("/HomePage");
    } catch (error) {
      // Handle authentication failure (customize based on your needs)
      alert("Authentication failed. Please check your credentials.");
      console.error("Authentication failed", error.message);
    }
  };


  return (
    <Container
      maxWidth="false"
      style={{
        display: "grid",
        padding: '150px',
        paddingRight: '300px',
        flexDirection: "center",
        alignItems: "center",
        justifyContent: "flex-end",
        height: "100vh",
        backgroundImage: `url(https://thumbs.dreamstime.com/b/vegetables-fruits-over-grocery-store-background-organic-dieting-80689477.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Paper elevation={24} style={{ padding: "20px", width: "600px", backgroundColor: "lightyellow" }}>
        <Typography variant="h3" style={{ color: "purple", textAlign: "center" }}>
          Login In
        </Typography>
        <form>
          {/* Email TextField */}
          <TextField
            required
            id="email-input"
            label="Email Address"
            fullWidth
            margin="normal"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon fontSize="large" />
                </InputAdornment>
              ),
            }}
          />
          {/* Password TextField */}
          <TextField
            required
            id="password-input"
            label="Password"
            fullWidth
            margin="normal"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon fontSize="large" />
                </InputAdornment>
              ),
            }}
          />
          <FormControlLabel
            control={<Checkbox checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} value={"remember"} color="primary" />}
            label="Remember me?"
          />
          <div style={{ textAlign: "center" }}>
            <Button variant="contained" color="secondary" style={{ width: "40%" }} onClick={handleSignIn}>
              SIGN IN
            </Button>
          </div>

          <div style={{ marginTop: "20px" }}>
            <Grid container justifyContent="space-between">
              <Link href="/Forgotpassword" variant="body1">
                {"Forgot Password"}
              </Link>
              <Link href="/Signup" variant="body1">
                {"Don't have an account? Register"}
              </Link>
            </Grid>
          </div>
        </form>
      </Paper>
    </Container>
  );
}

export default Signin;


















// import React, { useState } from "react";
// import { TextField, Button, Container, Link, Paper, InputAdornment, Checkbox, FormControlLabel, Grid, CircularProgress } from "@mui/material";
// import EmailIcon from '@mui/icons-material/Email';
// import LockIcon from '@mui/icons-material/Lock';
// import axios from "axios";

// function Signin() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleSignIn = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.post('http://localhost:5000/signin', { email, password });
//       alert(response.data.message); // Consider using a more user-friendly notification system
//     } catch (error) {
//       setError('Sign in failed. Please check your credentials and try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container maxWidth="false" style={{
//       display: "grid",
//       padding: '150px',
//       paddingRight: '300px',
//       flexDirection: "center",
//       alignItems: "center",
//       justifyContent: "flex-end",
//       height: "100vh",
//       backgroundImage: `url(https://thumbs.dreamstime.com/b/vegetables-fruits-over-grocery-store-background-organic-dieting-80689477.jpg)`,
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//     }}>
//       <Paper elevation={24} style={{ padding: "20px", width: "600px", backgroundColor: "lightyellow" }}>
//         <h1 style={{ color: "purple" }} align="center ">Login In</h1>
//         <form>
//           <TextField
//             required
//             id="input-with-icon-textfield"
//             aria-multiline
//             label="Email Address"
//             fullWidth
//             margin="normal"
//             onChange={(e) => setEmail(e.target.value)}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <EmailIcon fontSize="large" />
//                 </InputAdornment>
//               ),
//             }}
//             variant="outlined"
//           />
//           <TextField
//             required
//             id="input-with-icon-textfield"
//             label="Password"
//             fullWidth
//             margin="normal"
//             onChange={(e) => setPassword(e.target.value)}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <LockIcon fontSize="large" />
//                 </InputAdornment>
//               ),
//             }}
//             variant="outlined"
//           />
//           <FormControlLabel control={<Checkbox value={"remember"} color="primary" />}
//             label="Remember me?" />
//           <div style={{ textAlign: "center" }}>
//             <Button
//               variant="contained"
//               color="secondary"
//               style={{ width: "40%" }}
//               onClick={handleSignIn}
//               disabled={loading}
//             >
//               {loading ? <CircularProgress size={24} /> : 'Sign In'}
//             </Button>
//           </div>

//           {error && (
//             <div style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>
//               {error}
//             </div>
//           )}

//           <div style={{ marginTop: "20px" }}>
//             <Grid container justifyContent="space-between">
//               <Link href="/Forgotpassword" variant="body1">
//                 {"Forgot Password"}
//               </Link>
//               <Link href="/Signup" variant="body1">
//                 {"Don't have an account? Register"}
//               </Link>
//             </Grid>
//           </div>
//         </form>
//       </Paper>
//     </Container>
//   );
// }

// export default Signin;
