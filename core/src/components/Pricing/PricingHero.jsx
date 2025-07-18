import { Box, Typography, Grid, Container, Chip, Button } from "@mui/material";
import "./PricingHero.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import checkcircle from "../../assets/icons/check-circle-g.png"; 

export default function PricingHero() {
  return (
    <Box className="pricing-hero-wrapper">
      <section className="pricing-hero">
        <Container maxWidth="lg">
          <Box className="hero-content">
            <Chip
              label="Simple, Transparent Pricing"
              className="hero-badge"
              size="small"
            />
            <Typography variant="h4" className="hero-heading-prs">
              Choose the Perfect Plan{" "}
              <span className="highlight"> For Your AI Journey </span>{" "}
            </Typography>
            <Typography variant="body1" className="hero-subheading-prs">
              Start free and scale as you grow. All plans include our core AI
              agent features with transparent pricing and no hidden fees.
            </Typography>
            <Box className="cta-buttons" mt={4}>
          <Button variant="contained" className="btn-primary-ctap">
            Start Free Trial
          </Button>
          <Button variant="outlined" className="btn-outlines-ps">
            Schedule Demo
          </Button>
        </Box>

        <Box className="cta-features" mt={4}>
          {["14-day free trial", "No credit card required", "Cancel anytime"].map((text, index) => (
            <Box className="cta-feature-item" key={index}>
              <span className="check-circle-ic">
                <img src={checkcircle} alt="check" />
              </span>
              {text}
            </Box>
          ))}
        </Box>
          </Box>
        </Container>
      </section>
    </Box>
  );
}
