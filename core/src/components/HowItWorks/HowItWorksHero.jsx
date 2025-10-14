import { Box, Typography, Grid, Container, Chip } from "@mui/material";
import StatItem from "./StatItem";
import zap from "../../assets/icons/howitworksic/zap.png";
import "./HowItWorksHero.css";

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
              icon={<img src={zap} alt="Lightning" className="chip-icon" />}
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
              spacing={4}
              className="stats-grid"
            >
              {stats.map((stat) => (
                <Grid
                  item
                  key={stat.label}
                  xs={6}
                  sm={3}
                  className="statsitem-h"
                >
                  <StatItem
                    label={stat.label}
                    value={stat.value}
                    color={stat.color}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </section>
    </Box>
  );
}
