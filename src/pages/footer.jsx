
import React from "react";
import {
  Container,
  Typography,
  Grid,
  Divider,
  Box,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import SellIcon from '@mui/icons-material/Sell';
import { faCreditCard, faMoneyCheckAlt, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const containerStyle = {
    position: 'absolute',
    bottom: '20px',
    right: '0',
    left: '0',
  };

  return (
    <Box bgcolor="gray" p={2} sx={{ position: 'relative' }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="h5" sx={{ margin: "10px" }}>
              ABOUT
            </Typography>
            <Typography variant="h6" sx={{ margin: "5px" }}>
              Contact Us
            </Typography>
            <Typography variant="h6" sx={{ margin: "5px" }}>
              About Us
            </Typography>
            <Typography variant="h6" sx={{ margin: "5px" }}>
              Wholesale
            </Typography>
            <Typography variant="h6" sx={{ margin: "5px" }}>
              Careers
            </Typography>
            <Typography variant="h6" sx={{ margin: "5px" }}>
              Offers
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="h5" sx={{ margin: "10px" }}>
              HELP
            </Typography>
            <Typography variant="h6" sx={{ margin: "5px" }}>
              Payment
            </Typography>
            <Typography variant="h6" sx={{ margin: "5px" }}>
              Shipping
            </Typography>
            <Typography variant="h6" sx={{ margin: "5px" }}>
              Cancellation
            </Typography>
            <Typography variant="h6" sx={{ margin: "5px" }}>
              FAQ
            </Typography>
            <Typography variant="h6" sx={{ margin: "5px" }}>
              Report
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="h5" sx={{ margin: "10px" }}>
              SOCIAL
            </Typography>
            <Grid container spacing={1}>
              <Grid item>
                <FacebookIcon fontSize="large" sx={{ color: "#3b5998" }} />
              </Grid>
              <Grid item>
                <Typography variant="h6" sx={{ margin: "0px" }}>
                  Facebook
                </Typography>
              </Grid>
            </Grid>
            
       <Grid container spacing={1}>
                 <Grid item>
          <TwitterIcon fontSize="large"  sx={{ color:'#3b5998'}}/>
       </Grid>
           <Grid item>
          <Typography variant="h6" sx={{ margin: "0px" }}>Twitter</Typography>
        </Grid>
      </Grid>

       <Grid container spacing={1}>
         <Grid item>
             <InstagramIcon fontSize="large" sx={{ color:'#c13584'}}/>
         </Grid>
         <Grid item>
           <Typography variant="h6" sx={{ margin: "0px" }}>Instagram</Typography>
         </Grid>
      </Grid>

     <Grid container spacing={1}>
       <Grid item>
          <YouTubeIcon fontSize="large"  sx={{color: '#ff0000' }}/>
         </Grid>
         <Grid item>
           <Typography variant="h6" sx={{ margin: "0px" }}>YouTube</Typography>
         </Grid>
      </Grid>
     </Grid>

            {/* (Repeat similar structure for other social media icons) */}
          
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="h5" sx={{ margin: "5px" }}> Mail Us  </Typography>
            <Typography variant="body1" sx={{margin:"10px"}}>Grocery private Limited</Typography>
      <Typography variant="body1" sx={{margin:"10px"}}> Vishala Nilayam</Typography>     
               <Typography variant="body1" sx={{margin:"10px"}}>Benguluru </Typography>
      <Typography variant="body1" sx={{margin:"10px"}}>  Karnataka</Typography>
        <Typography variant="body1" sx={{margin:"10px"}}> 500034</Typography>
       <Typography variant="body1" sx={{margin:"10px"}}>contact:040-27206128</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Divider sx={{ backgroundColor: "white", marginTop: -2, marginLeft: -15 }} />
          </Grid>
        </Grid>
      </Container>

   

      <Container>
      <Grid container spacing={3}>
        <Grid container alignItems="center" item xs={6} sm={3}>
      <SellIcon fontSize="large" sx={{color: 'white' }}  />
      <Typography variant="h6" sx={{ marginLeft: 2}}>Become a Seller</Typography>
    </Grid>
    <Grid container alignItems="center" item xs={6} sm={3}>
      <HelpCenterIcon fontSize="large" sx={{color: 'white' }} />
      <Typography variant="h6" sx={{ marginLeft: 2 }}>HelpCenter</Typography>
    </Grid>

    <Grid container alignItems="center" item xs={6} sm={3}>
      <CardGiftcardIcon fontSize="large" sx={{color: 'white' }} />
      <Typography variant="h6" sx={{ marginLeft: 2 }}>Gift Card</Typography>
    </Grid>
      </Grid></Container>
    
      <Box
  sx={{
    position: 'absolute',
    bottom: '5px',
    marginLeft: {  md: '1000px' },
    display: 'flex',
    marginTop: '8px',
    width: '100%',
  }}
>



        <IconButton color="white">
          <FontAwesomeIcon icon={faCreditCard} size="2x" />
        </IconButton>
        <IconButton color="white">
          <FontAwesomeIcon icon={faMoneyCheckAlt} size="2x" />
        </IconButton>
        <IconButton color="white">
          <FontAwesomeIcon icon={faCcVisa} size="2x" />
        </IconButton>
        <IconButton color="white">
          <FontAwesomeIcon icon={faMoneyBill} size="2x" />
        </IconButton>
      </Box>
    </Box>
  
     
  );
};

export default Footer;
