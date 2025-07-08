 
import React from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";

const Categories = () => {
  return (
    <Container maxWidth="xl" style={{paddingBottom:'30px',backgroundColor:'grey',paddingTop:'10px' }} >
      <Typography variant="h4"  gutterBottom style={{ textAlign: 'center',padding:'10px' }}>
       Category Products
      </Typography>

      <Grid container spacing={2}>
        
        <Grid item xs={12} sm={4} md={2}>
         
          <Paper elevation={3} style={{ padding: "10px", minHeight: "100px",width:"130px" }}>
            <img
              src="./images/category1.jpeg"
             alt="Item 3"
            style={{ width: "120px", height: "130px", marginBottom: "5px" }}
           />
             <Typography variant="h5" gutterBottom>
               Vegetables
             </Typography>
          </Paper>
        </Grid>

        
        <Grid item xs={12} sm={4} md={2}>
         
          <Paper elevation={3} style={{ padding: "10px", minHeight: "100px",width:"130px" }}>
            <img
              src="./images/category2.jpeg"
             alt="Item 3"
            style={{ width: "120px", height: "130px", marginBottom: "5px" }}
           />
             <Typography variant="h5" gutterBottom>
             Fresh Fruits
             </Typography>
          </Paper>
     
        </Grid>

        {/* Item 3 */}
        <Grid item xs={12} sm={4} md={2}>
          {/* ... content for Item 3 ... */}
          <Paper elevation={3} style={{ padding: "10px", minHeight: "100px",width:"130px" }}>
            <img
              src="./images/category3.jpeg"
             alt="Item 3"
            style={{ width: "120px", height: "130px", marginBottom: "5px" }}
           />
             <Typography variant="h5" gutterBottom>
               Dairy item
             </Typography>
          </Paper>
        
        </Grid>

        <Grid item xs={12} sm={4} md={2}>
         
          <Paper elevation={3} style={{ padding: "10px", minHeight: "100px",width:"130px" }}>
            <img
              src="./images/category4.webp"
             alt="Item 3"
            style={{ width: "120px", height: "130px", marginBottom: "5px" }}
           />
             <Typography variant="h5" gutterBottom>
              variety Dals
             </Typography>
          </Paper>
        </Grid>

        {/* Item 5 */}
        <Grid item xs={12} sm={4} md={2}>
          {/* ... content for Item 5 ... */}
          <Paper elevation={3} style={{ padding: "10px", minHeight: "100px",width:"130px" }}>
            <img
              src="./images/category5.jpeg"
             alt="Item 3"
            style={{ width: "120px", height: "130px", marginBottom: "5px" }}
           />
             <Typography variant="h5" gutterBottom>
               Masala Mix
             </Typography>
          </Paper>
        </Grid>

        {/* Item 6 */}
        <Grid item xs={12} sm={4} md={2}>
          {/* ... content for Item 6 ... */}
          <Paper elevation={3} style={{ padding: "10px", minHeight: "100px",width:"130px" }}>
            <img
              src="./images/category6.webp"
             alt="Item 3"
            style={{ width: "120px", height: "130px", marginBottom: "5px" }}
           />
             <Typography variant="h5" gutterBottom>
               Dry Fruits
             </Typography>
          </Paper>
        </Grid>
       
      </Grid>
    </Container>
  );
};

export default  Categories;



