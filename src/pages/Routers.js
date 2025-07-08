
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Logout from "./logout";
import Signin from './sign_in';
import Signup from './sign_up';
import Forgotpassword from './forgot_password';
import ProductDetails from './product_details';
import Checkout from './check_out';
 import Index1 from  './index1';
import HomePage from './homepage';
 import Categories from './category';
 import Footer from './footer';
 import ClientReview from './review';
 import Cart from './cart';
 import About from "./about";

const Routers = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    
      <Routes>
      <Route path="/Signin" element={<Signin/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/Forgotpassword" element={<Forgotpassword/>} />
      <Route path="/Checkout" element={<Checkout/>} />
       <Route path="/Index1" element={<Index1/>} />  
      <Route path="/" element={<HomePage  />}/>
       <Route path="/Categories" element={< Categories/>}/> 
       <Route path="/Footer" element={< Footer/>}/> 
       <Route path="/About" element={< About/>}/> 
       <Route path="/ClientReview" element={< ClientReview/>}/> 
       <Route path="/Logout" element={< Logout/>}/> 
        <Route
          path="/ProductDetails"
          element={<ProductDetails addToCart={addToCart} />}
        />
        <Route path="/Cart" element={<Cart cart={cart} />} />
      </Routes>
   
  );
};

export default Routers;
