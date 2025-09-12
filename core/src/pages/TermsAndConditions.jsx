import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const TermsAndConditions = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8, minHeight: '80vh' }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Terms & Conditions
      </Typography>
      
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>1. Terms</Typography>
        <Typography paragraph>
          By accessing this Website, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>2. Use License</Typography>
        <Typography paragraph>
          Permission is granted to temporarily download one copy of the materials on Nyukt AI's Website for personal, non-commercial transitory viewing only.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>3. Disclaimer</Typography>
        <Typography paragraph>
          All the materials on Nyukt AI's Website are provided "as is". Nyukt AI makes no warranties, may it be expressed or implied, therefore negates all other warranties.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>4. Limitations</Typography>
        <Typography paragraph>
          Nyukt AI or its suppliers will not be held accountable for any damages that will arise with the use or inability to use the materials on Nyukt AI's Website.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>5. Revisions and Errata</Typography>
        <Typography paragraph>
          The materials appearing on Nyukt AI's Website may include technical, typographical, or photographic errors.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>6. Governing Law</Typography>
        <Typography paragraph>
          Any claim related to Nyukt AI's Website shall be governed by the laws of the United Arab Emirates without regard to its conflict of law provisions.
        </Typography>
      </Box>
    </Container>
  );
};

export default TermsAndConditions;
