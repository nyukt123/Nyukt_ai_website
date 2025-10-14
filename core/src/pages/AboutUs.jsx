import React from 'react';
import { Box, Container, Typography,Chip, } from '@mui/material';
import ScrollToTopButton from "../components/Homecom/ScrollToTopButton";
import AboutusHero from '../components/AboutUs/AboutusHero';
// import { Typography, Grid, Container, Chip, Button } from "@mui/material";


export const AboutUs = () => {
  return (
    <>
      <section>
        <AboutusHero />
      </section>

      <section style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <Chip
          label="About Nyukt"
          className="hero-badge"
          size="small"
          sx={{
            mb: 3,
            background: '#7c3aed',
            color: 'white',
            fontWeight: 600,
            '& .MuiChip-label': {
              px: 1.5,
              py: 0.5
            }
          }}
        />
        <Typography variant="h3" sx={{
          fontSize: { xs: '28px', sm: '36px' },
          fontWeight: 700,
          lineHeight: 1.3,
          mb: 3,
          color: '#1d293d'
        }}>
          Building the Ultimate AI Ecosystem
        </Typography>
        <Typography variant="body1" sx={{
          fontSize: '17px',
          lineHeight: 1.7,
          color: '#4a5568',
          mb: 3
        }}>
          In a digital age where businesses strive for agility and innovation, the tools they rely on often fall short. Fragmented systems, one-size-fits-all solutions, and isolated AI functionalities have left enterprises and SMEs yearning for a cohesive, transformative force to drive their ambitions.
        </Typography>
        <Typography variant="body1" sx={{
          fontSize: '17px',
          lineHeight: 1.7,
          color: '#4a5568',
          maxWidth: '800px',
          mx: 'auto'
        }}>
          Nyukt.AI was born to answer this call—a visionary enterprise dedicated to building the ultimate AI ecosystem, redefining the way organizations operate, innovate, and grow.
        </Typography>
      </section>






      <Box sx={{ pt: 15, pb: 10, minHeight: '100vh' }}>
        <Container maxWidth="lg">
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
      </Box>


      {/* scroll-to-page btn start */}
      <section>
        <ScrollToTopButton />
      </section>
      {/* scroll-to-page btn start */}
    </>


  );
};

export default AboutUs;
