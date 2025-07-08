
// import React from "react";
// import { TextField, Button, Container, Paper} from "@mui/material";


// function Forgotpassword() {
//   return (
    // <Container maxWidth="false" style={{ 
    //   display: "grid",
    //   padding:'300px',
    //   paddingRight: '300px',
    //   flexDirection: "center",
    //   alignItems: "center",
    //   justifyContent: "flex-end",
    //   height: "100vh",
    //   backgroundImage: `url(https://t3.ftcdn.net/jpg/03/14/27/32/360_F_314273279_isVcyAZTDbcbBTjGeDC8mepN3Gmdt2mS.jpg)`,
    //   backgroundSize:"cover", 
    //   backgroundPosition: "center", 
    // }}
// >
//       <Paper elevation={3} style={{ padding: "20px" }}>
//       <h1 style={{color:"red"}} align="center">Forgot Password</h1>
//         <form>
//           <TextField required label="Email" fullWidth margin="normal" type="email" />
//           <Button variant="contained" color="primary" padding='20px' size="large">
//            Reset my password
//           </Button> 
//         </form>
//       </Paper>
//     </Container>
//   );
// }

// export default Forgotpassword;

// import React, { useState } from "react";
// import { TextField, Button, Container, Link,Grid, Paper, Typography, CircularProgress } from "@mui/material";
// import axios from "axios";

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleForgotPassword = async () => {
//     try {
//       setLoading(true);

//       // Send a request to your server's forgot password endpoint
//       const response = await axios.post("http://localhost:5000/Forgotpassword", { email });

//       setSuccessMessage(response.data.message);
//       setErrorMessage("");
//     } catch (error) {
//       setSuccessMessage("");
//       // setErrorMessage("Failed to initiate password reset. Please check your email and try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container  component="main" maxWidth="false" style={{ 
//       display: "grid",
//       padding:'300px',
//       paddingRight: '300px',
//       flexDirection: "center",
//       alignItems: "center",
//       justifyContent: "flex-end",
//       height: "100vh",
//       backgroundImage: `url(https://t3.ftcdn.net/jpg/03/14/27/32/360_F_314273279_isVcyAZTDbcbBTjGeDC8mepN3Gmdt2mS.jpg)`,
//       backgroundSize:"cover", 
//       backgroundPosition: "center", 
//     }}>
//       <Paper elevation={3} style={{ padding: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
//         <Typography component="h1" variant="h5"  style={{color:"red",paddingBottom :'30px'}} align="center">
//           Forgot Password
//         </Typography>
//         <TextField
//           variant="outlined"
//           margin="normal"
//           sx={{width:'400px'}}
//           id="email"
//           label="Email Address"
//           name="email"
//           autoComplete="email"
//           autoFocus
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         {successMessage && (
//           <Typography style={{ color: "green", marginTop: "10px" }}>{successMessage}</Typography>
//         )}
//         {errorMessage && (
//           <Typography style={{ color: "red", marginTop: "10px" }}>{errorMessage}</Typography>
//         )}
//         <Button
//           type="button"
//           fullWidth
//           variant="contained"
//           color="primary"
//           style={{ marginTop: "20px" }}
//           onClick={handleForgotPassword}
//           disabled={loading}
//         >
//           {loading ? <CircularProgress size={24} /> : "Reset Password"}
//         </Button>
//         <Grid container justifyContent="flex-end" style={{ marginTop: "10px" }}>
//           <Grid item>
//             <Link href="/signin" variant="body2">
//               Back to Sign In
//             </Link>
//           </Grid>
//         </Grid>
//       </Paper>
//     </Container>
//   );
// };

// export default ForgotPassword;


import React, { useState } from "react";
import { TextField, Button, Container, Link, Grid, Paper, Typography, CircularProgress } from "@mui/material";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleForgotPassword = async () => {
    try {
      setLoading(true);

      // Client-side validation
      if (!email) {
        throw new Error("Please enter your email address.");
      }

      // Send a request to your server's forgot password endpoint
      const response = await axios.post("http://localhost:5000/Forgotpassword", { email });

      // Check the server response status code
      if (response.status === 200) {
        setSuccessMessage(response.data.message);
        setErrorMessage(""); // Clear any previous error messages
      } else {
        setSuccessMessage("");
        setErrorMessage("Invalid Credentials");
      }
    } catch (error) {
      setSuccessMessage("");
      setErrorMessage(error.response?.data.message || "Failed to initiate password reset. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container component="main" style={{ display: "grid", padding: '2rem', flexDirection: "center", alignItems: "center", justifyContent: "flex-end", height: "100vh" }}>
      <Paper elevation={3} style={{ padding: "2rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography component="h1" variant="h5" style={{ color: "red", paddingBottom: '1.5rem' }} align="center">
          Forgot Password
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {successMessage && (
          <Typography style={{ color: "green", marginTop: "1rem" }}>{successMessage}</Typography>
        )}
        {errorMessage && (
          <Typography style={{ color: "red", marginTop: "1rem" }}>{errorMessage}</Typography>
        )}
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          style={{ marginTop: "2rem" }}
          onClick={handleForgotPassword}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : "Reset Password"}
        </Button>
        <Grid container justifyContent="flex-end" style={{ marginTop: "1rem" }}>
          <Grid item>
            <Link href="/signin" variant="body2">
              Back to Sign In
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ForgotPassword;
