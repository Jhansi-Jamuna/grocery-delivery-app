import React from 'react';
import { Button, Container, CssBaseline, Typography, AppBar, Toolbar, Paper } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Your logout logic here
    console.log('Logout clicked');
    // For demonstration purposes, show an alert message
    alert('You have been logged out.');
    navigate('/');
    // You can navigate or perform any other necessary actions after logout
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" color="primary" style={{ backgroundColor: 'seagreen' }}>
        <Toolbar>
          <Typography variant="h4" component="div" style={{ flexGrow: 1 }}>
            Logout From Grofers
          </Typography>
        </Toolbar>
      </AppBar>
      <Container
  maxWidth="string"
  style={{
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundImage: 'url("https://bio-basket.com/cdn/shop/files/Frame_28.jpg?v=1696324061&width=3000")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', // Added to prevent image repetition
  }}
>
        <Paper elevation={3} style={{ padding: '20px', width: '420px', textAlign: 'center' ,marginTop:'450px',marginLeft:'0'}}>
          <Typography variant="h5" gutterBottom>
            Are you sure you want to logout?
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleLogout}
            style={{ marginTop: 20, fontSize: '20px' }}
            startIcon={<ExitToAppIcon />}
            endIcon={<ArrowForwardIcon />}
          >
            Logout
          </Button>
        </Paper>
      </Container>
    </>
  );
};

export default Logout;
