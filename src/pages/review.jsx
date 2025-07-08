import React from 'react';
import { Container, Typography, Card,Paper, CardContent, CardHeader, Avatar, Grid, Rating } from '@mui/material';

const clientReviews = [
  {
    id: 1,
    name:' JESSIE',
    avatar: 'https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/IQ-Accountants-managing-partner-Kyelie-Baxter-Slack-customer-story.jpg',
    rating: 5,
    review:
      'Great experience,happy to shop again! % 15 discount whaveas encouraging too.I received all the products that I ordered in 2 days,well wrapped to prevent leakage, supported with ice packs and bubble wrapped for the jars.They were all fresh qnd good quality. I just expected to see the delivery day/time before I completed the transaction or tge order confirmation. However,DHL contacted with a message about the delivery and kept it updated. I believe it improves next time.Thanks',
  },
  {
    id: 2,
    name: 'JHANSI',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH1HMRHMOLHS_OhVihk9dF1O3uMS6Jj-qfCA&usqp=CAU',
    rating: 4,
    review:
      'Very fast dispatch, I was really surprised at how fast it came. The glass products were packaged very safely in bubble wrap and arrived intact. Perishable goods also packed very well and were still cold on arrival. They offer high quality products with a good selection of different products and varieties. Very reasonable prices as well compared to other similar stores. Highly recommend this store for all your Turkish goods :) I certainly will be back for more in the near future.',
  },
  {
    id: 3,
    name: 'MAX',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPq37fPoV9H2SBe-B_VJcaOf4HDK4HjhuyiwplJ6eDpwat27xkFats-z9qEGYP6sOOmeo&usqp=CAU',
    rating: 4,
    review:
      'Great products and service.I have made several purchases from this store.Great products, customer service is very good too . If would be great products were more described as to how to prepare them, like for example my favourite Tarhana soup - it would be great if product describtion featured some kind recipe or how to prepare it? There are many products on their site which are unknown to me and I would like to try them.Thank you.'
  },
  {
    id: 4,
    name: 'RUHI',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH1HMRHMOLHS_OhVihk9dF1O3uMS6Jj-qfCA&usqp=CAU',
    rating: 4,
    review:
      'Excellence in packaging is evident in every aspect. Despite concerns about maintaining the cold chain for dairy products like cheese, I was pleasantly surprised to find them well-insulated with two ice packs. Furthermore, it is important to note that the prices offered in the UK are incredibly competitive and budget-friendly. Great, authentic products at good prices. Prompt delivery.It was our second order from them and will become a regular.'
  },
];

const ClientReview = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 2 }}>
         <Paper elevation={10} sx={{ p: 5, textAlign: 'center', backgroundColor: '#444' }}>
      <Typography variant="h4" align="center" color={'white'} gutterBottom>
        Client Reviews
      </Typography>
      <Grid container spacing={3}>
        {clientReviews.map((review) => (
          <Grid item key={review.id} xs={12} md={6} lg={3}>
            <Card>
              <CardHeader
                avatar= {<Avatar style={{ fontSize: "100PX", width: "100PX", height: "80PX" }} src={review.avatar} alt={review.name}  />}
                title={<span style={{ fontSize: '30px' }}>{review.name}</span>}
                subheader={<Rating name={`rating-${review.id}`} value={review.rating} readOnly   style={{ fontSize: '2rem', color: 'gold' }} />}
              />
              <CardContent>
                <Typography variant="body1" color="textSecondary">
                  {review.review}
                </Typography>
              </CardContent>
            </Card>
            
          </Grid>
        ))}
      </Grid>
      </Paper>
    </Container>
  );
};

export default ClientReview;
