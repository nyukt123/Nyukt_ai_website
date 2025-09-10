import { Box, Typography, Grid, Container, Chip, Button } from "@mui/material";
import "./ProductHero.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function ProductHero() {
  return (
    <Box className="product-hero-wrapper">
      <section className="product-hero">
        <Container maxWidth="lg">
          <Box className="hero-content">
            <Chip
              label="Revolutionary Product Suite"
              className="hero-badge"
              size="small"
            />
            <Typography variant="h4" className="hero-heading-pr">
              Unveiling Nyukt.AI's <span className="highlights"> Arsenal</span>{" "}
            </Typography>
            <Typography variant="body1" className="hero-subheading-pr">
              Discover our comprehensive suite of AI products designed to
              transform your business operations with intelligent, autonomous
              solutions powered by cutting-edge technologies.
            </Typography>
            {/* <Button
              variant="contained"
              className="btn-primary"
              sx={{ mt: 4 }}
              endIcon={<ArrowForwardIcon />}
            >
             Start Building Your AI Agent
            </Button> */}
          </Box>
        </Container>
      </section>
    </Box>
  );
}
