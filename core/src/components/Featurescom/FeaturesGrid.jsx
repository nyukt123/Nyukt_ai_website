import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import "./FeatureCard.css";
// image-icons
import fiic1 from "../assets/icons/fciii3.png";
import fci2 from "../assets/icons/fci2.png";
import fci3 from "../assets/icons/fci3.png";
import fci4 from "../assets/icons/fci4.png";
import fci5 from "../assets/icons/fci5.png";
import fci6 from "../assets/icons/fci6.png";

const features = [
  {
    icon: fiic1,
    title: "No-Code Agent Builder",
    description:
      "Create intelligent AI agents with our intuitive drag-and-drop interface. No programming knowledge required.",
  },
  {
    icon: fci2,
    title: "Natural Language Understanding",
    description:
      "Advanced AI that understands context, intent, and nuance in human communication across multiple languages.",
  },
  {
    icon: fci3,
    title: "Ready-Made Templates",
    description:
      "Professionally designed templates for common business processes to get started quickly.",
  },
   {
      icon: fci4,
      title: "Workflow Automation",
      description:
        "Automate complex business processes with intelligent decision-making and seamless integrations.",
    },
    {
      icon: fci5,
      title: "Multi-Channel Deployment",
      description:
        "Deploy your agents across web, mobile, chat platforms, and integrate with existing systems.",
    },
    {
      icon: fci6,
      title: "Agent Analytics",
      description:
        "Deep insights into agent performance, user interactions, and business impact with real-time dashboards.",
    },
];

const FeatureGrid = ({ icon, title, description }) => {
  return (
    <Paper elevation={0} className="feature-card">
      <Box className="feature-icon">
        <img src={icon} alt={title} className="feature-img-icon" />
      </Box>
      <Typography variant="h6" className="feature-title">
        {title}
      </Typography>
      <Typography variant="body2" className="feature-desc">
        {description}
      </Typography>
    </Paper>
  );
};

export default FeatureGrid;
