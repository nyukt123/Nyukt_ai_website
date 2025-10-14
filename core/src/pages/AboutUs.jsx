import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import ScrollToTopButton from "../components/Homecom/ScrollToTopButton";
import AboutusHero from '../components/AboutUs/AboutusHero';



export const AboutUs = () => {
  return (
    <>
    <section>
      <AboutusHero/>
    </section>
      {/* <Box sx={{ pt: 15, pb: 10, minHeight: '100vh' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 600, mb: 4, textAlign: 'center' }}>
            About Nyukt AI
          </Typography>

          <Box sx={{ maxWidth: '800px', mx: 'auto', lineHeight: 1.8 }}>
            <Typography variant="h5" gutterBottom sx={{ mt: 4, fontWeight: 600, color: 'primary.main' }}>
              Our Mission
            </Typography>
            <Typography variant="body1" paragraph>
              At Nyukt AI, we're on a mission to revolutionize the way businesses leverage artificial intelligence.
              We believe in creating intuitive, powerful AI solutions that drive real business value and transform industries.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 4, fontWeight: 600, color: 'primary.main' }}>
              Our Story
            </Typography>
            <Typography variant="body1" paragraph>
              Founded in 2024, Nyukt AI was born out of a passion for creating AI solutions that are both powerful and accessible.
              Our team of experts in machine learning, data science, and software engineering work tirelessly to push the
              boundaries of what's possible with artificial intelligence.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 4, fontWeight: 600, color: 'primary.main' }}>
              Our Values
            </Typography>
            <Typography variant="body1" paragraph>
              • <strong>Innovation:</strong> We're constantly exploring new ideas and technologies to stay at the forefront of AI.
            </Typography>
            <Typography variant="body1" paragraph>
              • <strong>Excellence:</strong> We're committed to delivering the highest quality solutions to our clients.
            </Typography>
            <Typography variant="body1" paragraph>
              • <strong>Integrity:</strong> We believe in transparency, honesty, and ethical AI practices.
            </Typography>
            <Typography variant="body1" paragraph>
              • <strong>Customer Focus:</strong> Your success is our success. We're dedicated to helping you achieve your goals.
            </Typography>
          </Box>
        </Container>
      </Box> */}
      {/* scroll-to-page btn start */}
      <section>
        <ScrollToTopButton />
      </section>
      {/* scroll-to-page btn start */}
    </>


  );
};

export default AboutUs;
