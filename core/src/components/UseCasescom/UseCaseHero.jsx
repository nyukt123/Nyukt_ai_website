import { Box, Typography, Grid, Container, Chip, Button } from "@mui/material";
import "./UseCasesHero.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function UseCasesHero() {
  return (
    <Box className="usecases-hero-wrapper">
      <section className="usecases-hero">
        <Container maxWidth="lg">
          <Box className="hero-content">
            <Chip
              label="AI Agent Use Cases"
              className="hero-badge"
              size="small"
            />
            <Typography variant="h4" className="hero-heading-u">
              Discover How{" "}
              <span className="highlight"> AI Agents Transform</span>{" "}
               Your Work
            </Typography>
            <Typography variant="body1" className="hero-subheading-u">
              Explore practical applications across industries and departments.
              Find the perfect AI agent solution for your specific business
              challenges and workflow needs.
            </Typography>
            <Button
              variant="contained"
              className="btn-primary"
              sx={{ mt: 4 }}
              endIcon={<ArrowForwardIcon />}
            >
              Explore Applications
            </Button>
          </Box>
        </Container>
      </section>
    </Box>
  );
}
