
import React, { useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  Button,
  Container,
  CssBaseline,
  Grid,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Toolbar,
  AppBar,
  IconButton,
} from '@mui/material';
import { Link } from 'react-router-dom';

function ShippingStep({ formData, setFormData }) {
  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, shipping: { ...prevData.shipping, [field]: value } }));
  };

  return (
   
    <Container maxWidth='sm' >
           <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  label="First name"
                  autoComplete="given-name"
                  variant="standard"
                  sx={{ width: '80%' }}
                  value={formData.shipping.firstName}
                   onChange={(e) => handleChange('firstName', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  label="Last name"
                  autoComplete="family-name"
                  variant="standard"
                  sx={{ width: '80%' }}
                  value={formData.shipping.lastName}
                      onChange={(e) => handleChange('lastName', e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="address1"
                  label="Address line 1"
                  autoComplete="shipping address-line1"
                  variant="standard"
                  sx={{ width: '80%' }}
                  value={formData.shipping.address1}
                      onChange={(e) => handleChange('address1', e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="address2"
                  label="Address line 2"
                  autoComplete="shipping address-line2"
                  variant="standard"
                  sx={{ width: '80%' }}
                  value={formData.shipping.address2}
                   onChange={(e) => handleChange('address2', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="city"
                  label="City"
                  autoComplete="shipping address-level2"
                  variant="standard"
                  sx={{ width: '80%' }}
                  value={formData.shipping.city}
                 onChange={(e) => handleChange('city', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="state"
                  label="State/Province/Region"
                  variant="standard"
                  sx={{ width: '80%' }}
                  value={formData.shipping.state}
                onChange={(e) => handleChange('state', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="zip"
                  label="Zip / Postal code"
                  autoComplete="shipping postal-code"
                  variant="standard"
                  sx={{ width: '80%' }}
                  value={formData.shipping.zip}
                  onChange={(e) => handleChange('zip', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="country"
                  label="Country"
                  autoComplete="shipping country"
                  variant="standard"
                  sx={{ width: '80%' }}
                  value={formData.shipping.country}
                 onChange={(e) => handleChange('country', e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                  label="Use this address for payment details"
                />
              </Grid>
            </Grid>
          </Container>
  
  );
}

function PaymentStep({ formData, setFormData }) {
  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, payment: { ...prevData.payment, [field]: value } }));
  };

  return (
  
    <Container maxWidth='sm'> 
     <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
           <TextField
            required
            id="cardName"
            label="Name on card"
            autoComplete="cc-name"
            variant="standard"
            sx={{ width: '80%' }}
            value={formData.payment.cardName}
           onChange={(e) => handleChange('cardName', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            autoComplete="cc-number"
            variant="standard"
            sx={{ width: '80%' }}
            value={formData.payment.cardNumber}
            onChange={(e) => handleChange('cardNumber', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            autoComplete="cc-exp"
            variant="standard"
            sx={{ width: '80%' }}
            value={formData.payment.expDate}
             onChange={(e) => handleChange('expDate', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            autoComplete="cc-csc"
            variant="standard"
            sx={{ width: '80%' }}
            value={formData.payment.cvv}
            onChange={(e) => handleChange('cvv', e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="proceedToPay" value="yes" />}
            label="Proceed to Pay"
          />
        </Grid>
      </Grid>
      </Container> 
   );
}

function ReviewStep({ formData }) {
  return (
   
      <Container maxWidth='xl'>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5">Shipping Address:</Typography>
          <Typography variant="body1">First Name: {formData.shipping.firstName}</Typography>
          <Typography variant="body1">Last Name: {formData.shipping.lastName}</Typography>
          <Typography variant="body1">Address: {formData.shipping.address1}</Typography>
          <Typography variant="body1">Contact Number: {formData.shipping.contactNumber}</Typography>
          <Typography variant="body1">State: {formData.shipping.state}</Typography>
          <Typography variant="body1">Pincode: {formData.shipping.pincode}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5">Payment Details:</Typography>
          <Typography variant="body1">Card Name: {formData.payment.cardName}</Typography>
          <Typography variant="body1">Card Number: {formData.payment.cardNumber}</Typography>
          <Typography variant="body1">Expiry Date: {formData.payment.expDate}</Typography>
          <Typography variant="body1">CVV: {formData.payment.cvv}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    shipping: {
      firstName: '',
      lastName: '',
      address1:'',
      address2:'',
      city:'',
      state:'',
      country:'',
      zip:'',
    },
    payment: {
      cardName: '',
      cardNumber: '',
     expDate:'',
     cvv:'',
    },
  });

  const steps = ['Shipping Address', 'Payment Details', 'Review Your Order'];

  const handleNext = () => {
    if (activeStep === 2) {
      // If on the Review step (step index 2), submit the order
      submitOrder();
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const submitOrder = () => {
    // Additional logic to submit the order
    // For now, you can console log the submitted data
    console.log('Submitted Order:', formData);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <ShippingStep formData={formData} setFormData={setFormData} />;
      case 1:
        return <PaymentStep formData={formData} setFormData={setFormData} />;
      case 2:
        return <ReviewStep formData={formData} />;
      default:
        return (
          <Container maxWidth='sm'>
            <Typography variant="subtitle1">
              Your order number is #2001539. We have emailed your order
              confirmation, and will send you an update when your order has
              shipped.
            </Typography>
          </Container>
        );
    }
  };
  const stepLabelColor = 'white';

  return (
    <Container
      maxWidth="false"
      style={{
        display: 'grid',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
         backgroundImage: `url(https://images.pexels.com/photos/7621136/pexels-photo-7621136.jpeg?cs=srgb&dl=pexels-ivan-samkov-7621136.jpg&fm=jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'left',
      }}
    >
        
      <CssBaseline />
      <AppBar position="fixed" color="primary" style={{backgroundColor:'seagreen'}}>
        <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="back" component={Link} to="/Cart">
            <ArrowBackIcon fontSize='large' />
          </IconButton>
          <Typography variant="h4" component="div" style={{ marginLeft: '30px', flexGrow: 1 }}>
            Checkout
          </Typography>
          {activeStep !== 2 && (
           <IconButton color="inherit" onClick={handleNext} component={Link} to="/logout">
           <ArrowForwardIcon fontSize='large' />
         </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Paper elevation={3} style={{ padding: 20, marginTop: 20 ,marginLeft:700,backgroundColor:'lavender'}}>
        
        <Stepper activeStep={activeStep} style={{ margin: '20px 0' }}>
          {steps.map((label, index) => (
            <Step key={index}>
               <StepLabel
        style={{
          color: index === activeStep ? stepLabelColor : 'green', // Active step label color
        }}
      >
             {label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Typography variant="h6" gutterBottom>
          {getStepContent(activeStep)}
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          {activeStep === 0 && (
            <Button
              variant="contained"
              onClick={handleNext}
              color="success"
            >
              Next
            </Button>
          )}
          {activeStep === 1 && (
            <>
              <Button variant="outlined" color="success" onClick={handleBack} style={{ marginRight: 10 }}>
                Back
              </Button>
              <Button
                variant="contained"
                color="success"
                onClick={handleNext}
              >
                Next
              </Button>
            </>
          )}
          {activeStep === 2 && (
            <>
              <Button variant="outlined" color="success" onClick={handleBack} style={{ marginRight: 10 }}>
                Back
              </Button>
              <Button
                variant="contained"
                color="success"
                onClick={handleNext}
              >
                Next
              </Button>
            </>
          )}
        </div>
      </Paper>
    </Container>
  );
}

export default Checkout;