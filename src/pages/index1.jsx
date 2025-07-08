
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Button, Grid, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Index1 = () => {
  const theme = useTheme();
  const isXSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isXLargeScreen = useMediaQuery(theme.breakpoints.up('xl'));

  const backgroundImage = isXLargeScreen
  ? 'url("https://img.freepik.com/premium-photo/diet-food-concept-fresh-vegetables-fruits-white-wooden-background-free-space-your-text_187166-31177.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703289600&semt=ais")'
  : isMediumScreen
  ? 'url("https://lowincomerelief.com/wp-content/uploads/2022/05/AdobeStock_100546416-720x405.jpeg.webp")'
  : isXSmallScreen
  ? 'url("https://static1.bigstockphoto.com/5/9/1/large2/195711016.jpg")'
  : 'url("https://img.freepik.com/free-photo/flat-lay-vegetables-frame_23-2148516769.jpg")';

  return (
    <Paper
      elevation={10}
      style={{
        // backgroundImage: 'url("https://t3.ftcdn.net/jpg/04/34/19/08/360_F_434190838_3FCCIiag1LYlL1IA6pb0WPEEqxiZVfPO.jpg")',
        backgroundImage: backgroundImage,
         backgroundSize: 'cover',
        backgroundPosition: 'right',
        minHeight: '570px',
        width: isXLargeScreen ? '1480px' : (isMediumScreen ? '950px' : (isXSmallScreen ? '100%' : 'auto')), // Adjust the width as needed
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'start',
        color: '#444', // Text color
        padding: '20px',
      }}
    >
      <Grid container spacing={2} justify="center">
      <Grid item xs={12} align="center">
        <Typography variant="h3" gutterBottom>
          Welcome to Our Grocery Store
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <Typography variant="subtitle1" paragraph>
          Explore our fresh and high-quality products at great prices.
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <Button variant="contained" color="primary" component={Link} to="/ProductDetails">
          Shop Now
        </Button>
      </Grid>
    </Grid>
    </Paper>
  );
};

export default Index1;


