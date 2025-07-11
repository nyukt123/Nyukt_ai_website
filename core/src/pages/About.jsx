import React from "react";
import { Grid, Typography, Button, Box, Paper } from "@mui/material";
// import heroimg from "../../src/assets/hero-image.jpeg";
import "./About.css";

export const About = () => {
  return (
    <>
      <Grid>
        <Grid>
          <Box
            className="about-hero"
            sx={{ textAlign: "center", padding: "2rem" }}
          >
            <Typography variant="h4" component="h1" className="about-heading">
              About Nyukt
            </Typography>
            <Typography variant="body1" className="about-description">
              Nyukt is a no-code platform that empowers enterprises to build,
              deploy, and manage custom AI agents. Our mission is to simplify AI
              integration into business workflows, enabling teams to automate
              processes, analyze data, and enhance user experiences without the
              need for coding expertise.
            </Typography>
          </Box>
        </Grid>
        <Grid>
          <Grid container spacing={4} className="about-grid">
            <Grid item xs={12} md={6}>
              <Paper className="about-card">
                <Typography variant="h5" className="about-card-title">
                  Our Vision
                </Typography>
                <Typography variant="body1" className="about-card-text">
                  To democratize AI technology, making it accessible to all
                  businesses, regardless of their technical expertise.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper className="about-card">
                <Typography variant="h5" className="about-card-title">
                  Our Mission
                </Typography>
                <Typography variant="body1" className="about-card-text">
                  To provide a user-friendly platform that enables enterprises
                  to leverage AI for operational efficiency and innovation.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
