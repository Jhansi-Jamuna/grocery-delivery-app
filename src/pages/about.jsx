
import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Container,
  Paper,
} from '@mui/material';

const SectionContainer = ({ title, description, imageSrc }) => (
  <Grid item xs={12} md={6} lg={4}>
    <Card>
      <CardMedia component="img" alt={title} height="400" width="200px" image={imageSrc} />
      <CardContent>
        <Typography variant="caption">{title}</Typography>
        <Typography variant="body1" paragraph>
          {description}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);

const TeamMemberCard = ({ name, role, description, imageSrc }) => (
  <Grid item xs={12} md={6} lg={4}>
    <Card height="300" width="150px" >
      <CardMedia component="img" alt={name} height="300" image={imageSrc} width="150px" />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {role}
        </Typography>
        <Typography variant="body2" color="textSecondary" paragraph>
          {description}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);

const AboutUs = () => (
  <Container maxWidth="xl" style={{ marginTop: '50px' }}>
    <Paper elevation={5} style={{ padding: '20px', textAlign: 'center',backgroundColor:'lightcyan' }}>
      <Typography variant="h4" gutterBottom>
        About Our Grocery Store
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        <SectionContainer
          title="Our Friendly Team Members"
          description="Welcome to Our Grocery Store, your one-stop destination for high-quality and fresh groceries. We are committed to providing our customers with a diverse range of products to meet their everyday needs."
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX7C1IGWkNBxkpOV9TqFjqPKt_f9bA4agkug&usqp=CA"
        />

        <SectionContainer
          title="Mission and Values"
          description="Our mission is to make your shopping experience convenient and enjoyable. Whether you're looking for fresh produce, pantry staples, or household essentials, we have you covered."
          imageSrc="https://slidetodoc.com/presentation_image_h/8a3ef2dbb82cc39e996e6a0794e2af3e/image-2.jpg"
        />

        <SectionContainer
          title="Quality and Sustainability"
          description="At Our Grocery Store, we source our products from trusted suppliers to ensure the highest quality. We take pride in offering a selection of locally sourced items, supporting our community and promoting sustainability."
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_yP9zCS9dMPpELVtzfyIgMLc2cQI5C_INJ9H3VOcdhuEhH8Jyyjg5EXJdyH0Ap60GDRk&usqp=CAU"
        />

        <SectionContainer
          title="Thank You!"
          description="Thank you for choosing Our Grocery Store. We look forward to serving you and providing you with the best shopping experience."
          imageSrc="https://i.etsystatic.com/23254044/r/il/157a48/3017109326/il_fullxfull.3017109326_61k6.jpg"
        />
      </Grid>

      <Grid container spacing={2} justifyContent="center">
        <SectionContainer
          title="Our Storefront"
          description=""
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-A-4CH0qpyk8CiBUUEGQepvWdGwvJDKihWqmSfM9gCaB-WIgimm9gx6o1av9docU8xHY&usqp=CAU"
        />

        <SectionContainer
          title="Fresh Produce Section"
          description=""
          imageSrc="https://lh3.googleusercontent.com/p/AF1QipOqnBiiL08GHmrWWfYEguNn7mzNc6Q4RllR743N=w1080-h608-p-no-v0"
        />

        <SectionContainer
          title="Our Friendly Team Members"
          description=""
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcq11oGXr0Ho0BNjh3syNjfTj3Aq51r-ty6LK2P3kmnUnBMAhX3lYss0a-E4ygiP5ybnk&usqp=CAU"
        />
      </Grid>
    </Paper>
  </Container>
);



const HelpSupportContainer = () => (
  <Container maxWidth="xl" style={{ marginTop: '50px' }}>
    <Paper elevation={5} style={{ padding: '20px', textAlign: 'center', backgroundColor: 'lightcyan'}}>
      <Typography variant="h4" gutterBottom>
        Help and Support
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        <SectionContainer
          title="24/7 Customer Support"
          description="Our dedicated support team is available 24/7 to assist you with any questions or concerns you may have. Your satisfaction is our top priority."
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXJiBotXNnFGIaI9WbyDi-Vk6KTh5ZbGcp8Q&usqp=CAU"
        />

        <SectionContainer
          title="Free Delivery"
          description="Enjoy the convenience of free delivery on all your orders. We ensure that your groceries reach you without any additional cost, providing a seamless shopping experience."
          imageSrc="https://img.freepik.com/free-vector/free-delivery-logo-with-bike-man-courier_1308-49835.jpg"
        />

        <SectionContainer
          title="Advanced Scanner Technology"
          description="Experience hassle-free shopping with our advanced scanner technology. Easily find and purchase your favorite products in-store, enhancing your overall shopping experience."
          imageSrc="https://img.freepik.com/premium-vector/qr-code-scan-pay-concept-illustration_270158-499.jpg"
        />
      </Grid>
    </Paper>
  </Container>
);


const About = () => (
  <>
    <AppBar position="sticky" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 ,backgroundColor:'seagreen'}}>
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          About Page
        </Typography>
        <Link to="/about" style={{ color: 'inherit', textDecoration: 'none', marginRight: '20px' }}>
          <Typography variant="button">About Us</Typography>
        </Link>
        <Link to="/team" style={{ color: 'inherit', textDecoration: 'none' }}>
          <Typography variant="button">Our Team</Typography>
        </Link>
      </Toolbar>
    </AppBar>

    <Grid container>
      <Grid item xs={12}>
        <AboutUs />
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={5} style={{ padding: '20px', textAlign: 'center', marginTop: '20px',backgroundColor:'lightcyan' }}>
          <Typography variant="h4" gutterBottom>
            Our Team Members
          </Typography>

          <Grid container spacing={2} justifyContent="center">
            <TeamMemberCard
              name="John Doe"
              role="Executive Offier"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8AmL29xmJp39tdBfQrEGUzorGMwjCiKz7W-r30XzE5AAnSBp1iZfpBOLr5ue5xAP_71g&usqp=CAU"
            />

            <TeamMemberCard
              name="Samantha"
              role="CEO"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              imageSrc="https://media.licdn.com/dms/image/C4E03AQHYDPp6Vb5_RQ/profile-displayphoto-shrink_400_400/0/1573854531300?e=2147483647&v=beta&t=mmyt5jLK63In9mmgqMPk8RzaDOfoPd3IfSZpvM4NAqU"
            />
            <TeamMemberCard
              name="David"
              role="Head of Group"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              imageSrc="https://media.licdn.com/dms/image/C4D03AQF4nPoSHvn-1Q/profile-displayphoto-shrink_400_400/0/1578551028623?e=2147483647&v=beta&t=LeS5g0DHmZaVh40kwhEHH-PdUirtUGoMfsWSESieMEY"
            />
            <TeamMemberCard
              name="Kenin"
              role="Directive"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              imageSrc="https://media.licdn.com/dms/image/C4E03AQHYDPp6Vb5_RQ/profile-displayphoto-shrink_400_400/0/1573854531300?e=2147483647&v=beta&t=mmyt5jLK63In9mmgqMPk8RzaDOfoPd3IfSZpvM4NAqU"
            />
            <TeamMemberCard
              name="Lessie "
              role="Manager"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              imageSrc="https://simpactful.com/wp-content/uploads/2018/11/Leslie-Jacobs-scaled.jpg"
            />
            <TeamMemberCard
              name=" Savrov"
              role="Ass. manager"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVt2qXx3KVxidC3irLG1TYHQTtWuS5tZDj2swoOsniaEXpEqJCt9BpjlxkJolLfmFh&usqp=CAU"
            />
          
          </Grid>
        </Paper>
      </Grid>
    </Grid>
    <Grid container>
      <Grid item xs={12}>
        <HelpSupportContainer  />
      </Grid>
    </Grid>
  </>
);

export default About;
