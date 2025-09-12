import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import ScrollToTopButton from "../components/Homecom/ScrollToTopButton";

const PrivacyPolicy = () => {
  return (
    <Box sx={{ minHeight: '100vh', pt: 15, pb: 10 }}>
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          Privacy Policy
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>1. Introduction</Typography>
          <Typography paragraph>
            Welcome to Nyukt AI. We respect your privacy and are committed to protecting your personal data.
            This privacy policy will inform you about how we look after your personal data when you visit our website.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>2. Information We Collect</Typography>
          <Typography paragraph>
            We may collect, use, store, and transfer different kinds of personal data about you, including:
          </Typography>
          <ul>
            <li>Identity Data (name, username, etc.)</li>
            <li>Contact Data (email address, phone number, etc.)</li>
            <li>Technical Data (IP address, browser type, etc.)</li>
            <li>Usage Data (how you use our website)</li>
          </ul>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>3. How We Use Your Data</Typography>
          <Typography paragraph>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data:
          </Typography>
          <ul>
            <li>To provide and maintain our service</li>
            <li>To notify you about changes to our service</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information</li>
          </ul>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>4. Data Security</Typography>
          <Typography paragraph>
            We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>5. Your Legal Rights</Typography>
          <Typography paragraph>
            Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
          </Typography>
          <ul>
            <li>Request access to your personal data</li>
            <li>Request correction of your personal data</li>
            <li>Request erasure of your personal data</li>
            <li>Object to processing of your personal data</li>
            <li>Request restriction of processing your personal data</li>
            <li>Request transfer of your personal data</li>
            <li>Right to withdraw consent</li>
          </ul>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>6. Contact Us</Typography>
          <Typography paragraph>
            If you have any questions about this Privacy Policy, please contact us at info@nyukt.ai
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 4, fontStyle: 'italic' }}>
            Last updated: September 12, 2024
          </Typography>
        </Box>
      </Container>
      <ScrollToTopButton />
    </Box>
  );
};

export default PrivacyPolicy;
