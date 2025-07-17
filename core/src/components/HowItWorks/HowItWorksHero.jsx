import { Box, Typography, Grid, Container, Chip, Button } from "@mui/material";
// import CTAButton from "./CTAButton";
import StatItem from "./StatItem";
// import FlashOnIcon from "@mui/icons-material/FlashOn";
import "./HowItWorksHero.css";
import zap from "../../assets/icons/howitworksic/zap.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


const stats = [
  { label: "Setup Time", value: "15min", color: "#7C3AED" },
  { label: "AI Agents Built", value: "15K+", color: "#1364FE" },
  { label: "Uptime", value: "99.9%", color: "#16A34A" },
  { label: "Companies", value: "500+", color: "#FB923C" },
];

export default function HowItWorksHero() {
  return (
    <Box className="howitworks-hero-wrapper">
      <section className="howitworks-hero">
        <Container maxWidth="lg">
          <Box className="hero-content">
            <Chip
              icon={
                <img
                  src={zap}
                  alt="Lightning"
                  style={{ width: 16, height: 16 }}
                />
              }
              label="The Complete Guide"
              className="hero-badge"
              size="small"
            />
            <Typography variant="h4" className="hero-heading-h">
              How <span className="highlight">Nyukt</span>{" "}
              <span className="highlight">Actually</span> Works
            </Typography>
            <Typography variant="body1" className="hero-subheading">
              The complete behind-the-scenes look at how we transform your
              business ideas into intelligent AI agents that work 24/7.
            </Typography>

            <Grid
              container
              justifyContent="center"
              spacing={10}
              className="statsitem-h"
            >
              {stats.map((stat) => (
                <Grid item key={stat.label}>
                  <StatItem
                    label={stat.label}
                    value={stat.value}
                    color={stat.color}
                  />
                </Grid>
              ))}
            </Grid>

            {/* <CTAButton text="Start Building Your AI Agent"  /> */}
            <Button 
            variant="contained"
             className="btn-primary" 
             sx={{ mt: 4 }}
              endIcon={<ArrowForwardIcon />}
             >
              Start Building Your AI Agent 
            </Button>
          </Box>
        </Container>
      </section>
    </Box>
  );
}
