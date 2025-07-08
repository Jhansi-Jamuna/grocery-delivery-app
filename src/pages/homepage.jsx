import React, { useState } from 'react';
import {useTheme } from '@mui/material/styles';

import {Paper,Button, AppBar, Box,Toolbar,Typography,InputBase,IconButton,ListItemButton, ListItemIcon,ListItemText, List,Drawer,Container,Avatar,} from '@mui/material';
import { Link } from 'react-router-dom';
import SimpleImageSlider from "react-simple-image-slider";
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Badge from '@mui/material/Badge';
import HomeIcon from '@mui/icons-material/Home';
import { styled, alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MuiAppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import Categories from './category';
import Hidden from '@mui/material/Hidden';
import Footer from './footer';
import ClientReview from './review';
import ProductDetails from './product_details';
import Index1 from './index1';


const drawerWidth = 240;
const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  maxHeight:'15px'
});

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor:'black',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(20),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color:'azure',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '30ch',
    },
  },
}));
const StyledAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));
export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

 
const MainContent = () => (

  <Box flex={1} p={2} sx={{ display:{xs:"block",md:"block"}}}>
   <List>    
       <ListItemButton component="a" href="/HomePage">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary=" Menu " />
          </ListItemButton>
          <ListItemButton component="a" href="/Cart">
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary=" Cart" />
          </ListItemButton>
          <ListItemButton component="a" href="/Categories">
            <ListItemIcon>
              <FastfoodIcon />
            </ListItemIcon>
            <ListItemText primary="Fresh Produce" />
          </ListItemButton>
          <ListItemButton component="a" href="/ProductDetails">
            <ListItemIcon>
              <LocalGroceryStoreIcon />
            </ListItemIcon>
            <ListItemText primary="Groceries" />
          </ListItemButton>
          <ListItemButton component="a" href="/ClientReview">
            <ListItemIcon>
              <ListAltIcon />
            </ListItemIcon>
            <ListItemText primary="Feedbacks" />
          </ListItemButton>
        </List>
        <ListItemButton component="a" href="/About">
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="About Us " />
          </ListItemButton>
          <ListItemButton component="a" href="/Logout">
            <ListItemIcon>
              <LogoutIcon/>
            </ListItemIcon>
            <ListItemText primary=" Logout"/>
          </ListItemButton>
      </Box>
);


const images =[
  { url: "images/grocery1.jpg" },
  { url: "images/grocery2.jpg" },
  { url: "images/grocery3.jpeg" },
  { url: "images/grocery4.jpg" },
  { url: "images/grocery5.jpg" },
  { url: "images/grocery6.jpg" },
  
];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" open={open}  sx={{ height: 70 ,backgroundColor:'seagreen' }}>
       <StyledToolbar>
          <IconButton
            fontsize="large"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ marginLeft: 2 }} 
            
          >
            <MenuIcon  fontSize='large'/>
         
          </IconButton>
          <Typography>
          <img src="./images/logo.png" height={60} width={100} 
           style={{ marginLeft: '10px', marginRight: '10px' ,marginTop:'10px'}}
           alt="Logo"></img>
          </Typography>

          <Typography
            variant="h4"
            color={'whitesmoke'}
            noWrap
            sx={{ display: { xs: 'none', md: 'none' }, marginLeft: '40px' }}
          >
            GROCERY
          </Typography>
          <ShoppingBasketIcon sx={{ display: { xs: 'none', sm: 'none' }}} />
        
        <Search >
          <SearchIconWrapper >
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            justifyContent="center"
            placeholder="Search…"
            
            inputProps={{ 'aria-label': 'search' }}
            sx={{ marginLeft: '30px' }} 
          />
        </Search>
  
        <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit" component={Link}  to="/Cart" >
              <Badge  color="error">
                <ShoppingCartIcon fontSize='large' />
              </Badge>
            </IconButton>
           
            {/* <IconButton
              size="large"
              edge="end"
             color="red"
            >
              <Avatar  sx={{ backgroundColor: 'red' }}>J</Avatar>
            </IconButton>  */}
          </Box>
     
          <div>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button variant="contained" color='success' component={Link} to="/Signup" style={{marginLeft:'20px',marginRight:'20px'}}>
       SIGN UP
      </Button>
      <Button variant="contained"  color='success'component={Link} to="/Signin" style={{marginRight:'10px'}} >
        SIGN IN
      </Button>
     
      {/* <Button variant="contained" component={Link} to="/About" style={{marginRight:'10px'}} >
        ABOUT US
      </Button>
      <Button variant="contained" component={Link} to="/ProductDetails" style={{marginRight:'10px'}} >
       PRODUCTS
      </Button> */}
      </Box>
          </div>
        </StyledToolbar>
      </AppBar>
  
      <Drawer
        sx={{ 
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor:'lightgrey'
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <MainContent/>
      </Drawer>

      <Box>
      <Index1/>
      <div style={{ marginBottom: '30px' }} /> 
     </Box>
     <Box
         sx={{
         display: { xs: 'flex', md: 'none' },
         width: { xs: 'auto' },
          justifyContent: 'center', 
          alignItems: 'center',    
         }}
         display="flex"
         height="100vh"
       >
 

      <Container maxWidth="md">
         <SimpleImageSlider
            width={650}  // Adjust the width as needed for small screens
            height={400}
            images={images}
            showBullets={true}
            showNavs={true}
          />
        </Container>
        </Box>
        <Categories/>
        <ProductDetails  /> 
      <div style={{ marginBottom: '30px' }} />
      
      <ClientReview/>
      <div style={{ marginBottom: '30px' }} />
      <Footer/>
     </Box>      
  );
};

