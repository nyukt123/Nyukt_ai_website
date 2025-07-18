import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import AutomationCard from "./AutomationCard";
import "./AutomationLevels.css";

const automationLevels = [
  {
    title: "Basic Automation",
    description: "Simple, rule-based responses and actions",
    complexity: "Low",
    duration: "1-2 weeks",
    examples: [
      "FAQ responses",
      "Form submissions",
      "Status updates",
      "Simple notifications",
    ],
    bestFor: "Teams new to AI automation, high-volume simple tasks",
    color: "success",
  },
  {
    title: "Intelligent Automation",
    description: "Context-aware responses with decision making",
    complexity: "Medium",
    duration: "2-4 weeks",
    examples: [
      "Lead qualification",
      "Ticket routing",
      "Content recommendations",
      "Smart scheduling",
    ],
    bestFor: "Teams ready for AI-driven decisions, personalized interactions",
    color: "warning",
  },
  {
    title: "Advanced Automation",
    description: "Complex workflows with multi-step processes",
    complexity: "High",
    duration: "4-8 weeks",
    examples: [
      "End-to-end onboarding",
      "Complex approval workflows",
      "Predictive analytics",
      "Multi-system integration",
    ],
    bestFor: "Mature teams, complex business processes, high-value use cases",
    color: "error",
  },
];

const AutomationLevels = () => {
  return (
    <Box className="automation-section">
      <Typography variant="subtitle2" className="section-chip">
        Automation Complexity
      </Typography>
      <Typography variant="h4" className="section-title">
        Choose Your Automation Level
      </Typography>
      <Typography variant="body1" className="section-subtitle">
        Start simple and scale up. Choose the right level of automation based on your team’s readiness and use case complexity.
      </Typography>

      <Grid container spacing={4} mt={6}>
        {automationLevels.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <AutomationCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AutomationLevels;
