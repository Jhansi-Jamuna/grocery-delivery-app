
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Paper, Button, Card, Typography, Grid, CardMedia, CardContent, Box, TextField, Container } from '@mui/material';
import { ArrowForward, CheckCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ProductDetails = ({ addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  
  const navigate = useNavigate();
 
  const categoriesData = [
    // Your category and product data here...
    {
      title: 'Fruits & Vegetables',
      products: [
        {
              id: 1,
              name: "Apple",
              price: "200",
              quantity:"6",
              image: "images/apple.jpeg",
            },
            {
              id: 2,
              name: "Water Melon",
              price: "250",
              quantity:"1Kg",
              image: "images/watermelon.jpeg",
            },
            {
              id: 3,
              name: "Orange",
              price: "150",
              quantity:"10",
              image: "images/orange.jpeg",
            },
            {
              id: 4,
              name: "Tomato",
              price: "50",
              quantity:"1Kg",
              image: "images/tomato.jpeg",
             },
            {
              id: 5,
              name: "Potato",
              price: "70",
              quantity:"1Kg",
              image: "images/potato.jpeg",
            },
            {
              id: 6,
              name: "Ladies Finger",
              price: "60",
              quantity:"1Kg",
              image: "images/ladiesfinger.jpeg",
            },
      ],
    },
    {
      title: 'Dals & Oils - Ghee & Oils',
      products: [
        {
              id: 7,
             name: "Toor Dal",
              price: "300",
              quantity:"1Kg",
             image: "images/toordal.jpeg", // Replace with actual image URL
            },
            
            {
              id: 8,
              name: "Green Moong Dal",
              price: "350",
              quantity:"1Kg",
              image: "images/moong.webp",
            },
            {
              id: 9,
              name: "Urad Dal",
              price: "400",
              quantity:"1Kg",
              image: "images/uraddal.jpeg",
            },
            {
              id: 10,
              name: "Ghee",
              price: "700",
              quantity:"1Kg",
              image: "images/ghee.jpeg",
            },
             {
              id: 11,
              name: "Sunflower Oil",
              price: "850",
              quantity:"5L",
              image: "images/oil.jpeg",
            },
          
            {
              id: 12,
              name: "Dabour Honey",
              price: "500",
              quantity:"1Kg",
              image: "images/honey.jpeg",
            },
      ],
    },
    {
    title: 'Masala & Species - Atta & Flour',
    products: [
      {
            id: 13,
            name: "Ashirvad Cilli Powder",
            price: "200",
            quantity:"1Kg",
            image: "images/chiili.jpeg",
          },
          {
            id: 14,
            name: "Garam Masala",
            price: "150",
            quantity:"500g",
            image: "images/garam.png",
          },
          {
            id: 15,
            name: "Meat Masala",
            price: "150",
            quantity:"500g",
            image: "images/MEAT.jpg",
          },
          {
            id: 16,
            name: "Maida Flour",
            price: "50",
            quantity:"1Kg",
            image: "images/maida.jpeg",
          },
          {
            id: 17,
            name: "Ashirvad  Atta",
            price: "250",
            quantity:"5Kgs",
            image: "images/atta.jpeg",
          },
          {
            id: 18,
            name: "Wheat Flour",
            price: "70",
            quantity:"1Kg",
            image: "images/wheat.jpeg",
          },
    ],
    },
    {
    title: 'Sugar& Jaggery- Rice Prooducts ',
    products: [
      {
            id: 19,
            name: "Sugar",
            price: "100",
            quantity:"2Kg",
            image: "images/sugarr.jpg",
          },
          {
            id: 20,
            name: "Jaggery",
            price: "60",
            quantity:"500g",
            image: "images/jaggery.webp",
          },
          {
            id: 21,
            name: "Salt",
            price: "50",
            quantity:"1Kg",
            image: "images/salt.jpeg",
          },
          {
            id: 22,
            name: "Kohinoor Basmati",
            price: "750",
            quantity:"5Kgs",
            image: "images/basmatirice.jpeg",
          },
          {
            id: 23,
            name: "Fortune Basmati Rice",
            price: "1000",
            quantity:"5Kgs",
            image: "images/fortunerice.jpeg",
          },
          {
            id: 24,
            name: "Sona Masoori Rice",
            price: "1200",
            quantity:"5Kgs",
            image: "images/sonarice.webp",
          },
    ],
    },
    {
    title: 'Dairy & Eggs - Dry Fruits',
    products: [
      {
            id: 25,
            name: "Eggs",
            price: "200",
            quantity:"30",
            image: "images/eggs.webp",
          },
          {
            id: 26,
            name: "Country Delight Milk",
            price: "100",
            quantity:"1L",
            image: "images/milk.webp",
          },
          {
            id: 27,
            name: "Brown Bread",
            price: "70",
            quantity:"1",
            image: "images/brownbread.jpeg",
          },
          {
            id: 28,
            name: "Almond",
            price: "700",
            quantity:"1Kg",
            image: "images/almond.webp",
          },
          {
            id: 29,
            name: "Sprouts Mix",
            price: "70",
            quantity:"250g",
            image: "images/sprouts.jpeg",
          },
          {
            id: 30,
            name: "Raw Meat",
            price: "1200",
            quantity:"1+1Kg",
            image: "images/chicken.jpg",
          },
    ],
    },
  ];

  

  const handleAddToCart = (product) => {
    const productToAdd = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: parseInt(quantity, 10),
      img: product.image, 
    };

    // Assuming addToCart is a function you've defined to add the product to the cart
    addToCart(productToAdd);
    window.alert(`${product.name} added to the cart!`);
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800, // 800 pixels and above
        settings: { 
          slidesToShow: 2,
        },
      },
    ],
  };
  
  
  return (
    <div>
   
      {categoriesData.map((category, i) => (
        <Container key={i} maxWidth="xl " sx={{ marginTop: 3 }}>
          <Typography variant="h4" gutterBottom>
            {category.title}
          </Typography>
          <Slider {...settings}>
            {category.products.map((product) => (
              <Grid item xs={6} sm={2} md={3} key={product.id}>
                <Paper elevation={10} sx={{ p: 3, textAlign: 'center', backgroundColor: 'lightgreen' }}>
                  <Card sx={{ maxWidth: 350, height: 500, margin: 'auto' }}>
                    <CardMedia
                      component="img"
                      alt={product.name}
                      height="300"
                        maxWidth="100%"
                      image={product.image}
                      sx={{
                        objectFit: 'contain',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    />
                    <CardContent>
                      <Typography variant="h5" gutterBottom>
                        {product.name}
                      </Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <TextField
                          variant="filled"
                          value={product.quantity}
                          label={`Qty`}
                          InputProps={{ readOnly: true }}
                          sx={{ width: '100px', height: '10px', marginTop: 1 }}
                        />
                        <TextField
                          variant="outlined"
                          value={product.price}
                          label={`Rs`}
                          InputProps={{ readOnly: true }}
                          sx={{ width: '100px', height: '10px', marginTop: 1 }}
                        />
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 8 }}>
                        <Button
                          color="primary"
                          variant="contained"
                          endIcon={<ArrowForward />}
                          onClick={() => handleAddToCart(product)}
                          component={Link}
                          to="/Cart"
                        >
                          Add to Cart
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Paper>
              </Grid>
            ))}
          </Slider>
        </Container>
       ))}
    </div>
  );
};

export default ProductDetails;

