import React from 'react';
import { Button, Grid, Typography, Chip, Box, Card } from '@mui/material';
import './NyukTRON.css';
import nyuktron from '../../assets/images/NyukTRON.png'; 

const features = [
  "LLM Integration",
  "RAG Technology",
  "Explainable AI",
  "Reinforcement Learning",
  "Multi-Modal Processing",
  "Real-time Decision Making"
];

const NyukTRON = () => {
  return (
    <Box className="nyuktron-container">
      <Card className="nyuktron-card">
        <Grid container spacing={4} className="nyuktron-grid">
          {/* Left Section */}
          <Grid item xs={12} md={6} className="nyuktron-left">
            <Typography variant="h4" className="nyuktron-title">NyukTRON</Typography>
            <Typography variant="subtitle1" className="nyuktron-subtitle">Agentic AI as a Service</Typography>
            <Typography className="nyuktron-description">
              NyukTRONs are the most advanced Agentic AIs in the industry, powered by state-of-the-art technologies
              like Large Language Models (LLMs), Reinforcement Learning (RL), Retrieval-Augmented Generation (RAG),
              and Generative AI. These intelligent AI agents are capable of dynamic adaptability, multi-modal
              processing, and real-time decision-making.
            </Typography>

            {/* Metrics */}
            <Box className="nyuktron-metrics">
              <div className="metric-box"><strong>99.9%</strong><br />Accuracy</div>
              <div className="metric-box"><strong>10x Faster</strong><br />Speed</div>
              <div className="metric-box"><strong>50+</strong><br />Models</div>
            </Box>

            {/* Feature Chips */}
            <Box className="nyuktron-chips">
              {features.map((feature, idx) => (
                <Chip key={idx} label={feature} className="nyuktron-chip" />
              ))}
            </Box>

            {/* Buttons */}
            <Box className="nyuktron-buttons">
              <Button variant="contained" className="nyuktron-buttons-primarys">Try it Now</Button>
              <Button variant="outlined" className="nyuktron-buttons-learnmore">Learn More</Button>
            </Box>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={6} className="nyuktron-right">
            <img src={nyuktron} alt="AI Interface" className="nyuktron-image" />
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default NyukTRON;
