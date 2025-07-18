import React from "react";
import { Box, Typography, Stack, Chip, Grid } from "@mui/material";
import ChallengeItem from "./ChallengeItem";
import "./BusinessChallenges.css";

// Icons
import bc1 from "../../assets/icons/usecases/bc1.png";
import bc2 from "../../assets/icons/usecases/bc2.png";
import bc3 from "../../assets/icons/usecases/bc3.png";

const challenges = [
  {
    problem: {
      icon: bc1,
      title: "High Volume of Repetitive Inquiries",
      points: ["Team burden", "Slow response times", "Missed support SLAs"],
    },
    solution: {
      icon: bc2,
      title: "Deploy AI agents to handle common questions automatically",
      points: ["24/7 availability", "Reduced resolution time", "Free up human agents for complex issues"],
    },
    useCases: {
      icon: bc3,
      useCasesdetai: ["Customer Support Bot", "IT Helpdesk", "HR Q&A Assistant"],
    },
  },
  {
    problem: {
      icon: bc1,
      title: "Manual Data Entry and Processing",
      points: ["Human errors", "Slow results", "Delayed decision-making"],
    },
    solution: {
      icon: bc2,
      title: "Automate data extraction, validation, and entry processes",
      points: ["99%+ accuracy", "Faster data processing", "Real-time insights"],
    },
    useCases: {
      icon: bc3,
      useCasesdetai: ["Document Processing", "Expense Tracker", "Policy Management"],
    },
  },
  {
    problem: {
      icon: bc1,
      title: "Inconsistent Lead Follow-up",
      points: ["Lost opportunities", "Poor conversion rates", "Lower sales team morale"],
    },
    solution: {
      icon: bc2,
      title: "Intelligent lead scoring and automated marketing workflows",
      points: ["Faster responses", "Higher conversion rates", "Reduced manual tasks"],
    },
    useCases: {
      icon: bc3,
      useCasesdetai: ["Sales AI Assistant", "CRM Integration", "Email Nurturing"],
    },
  },
  {
    problem: {
      icon: bc1,
      title: "Knowledge Silos and Information Access",
      points: ["Decentralized data", "Slow re-routing", "Decision delays"],
    },
    solution: {
      icon: bc2,
      title: "Centralized AI-powered knowledge base with instant access",
      points: ["Faster & immediate access", "Reduced rework", "Better decision-making"],
    },
    useCases: {
      icon: bc3,
      useCasesdetai: ["Knowledge Assistant", "Company Wiki", "Onboarding Assistant"],
    },
  },
  {
    problem: {
      icon: bc1,
      title: "Complex Escalation and Casework Management",
      points: ["Multiple handoffs", "Inconsistent experiences", "Long resolution cycles"],
    },
    solution: {
      icon: bc2,
      title: "Intelligent case routing with conflict resolution and escalation handling",
      points: ["Automated triaging", "Faster resolution", "Conflict de-escalation"],
    },
    useCases: {
      icon: bc3,
      useCasesdetai: ["Knowledge Assistant", "Meeting Coordinator", "Case Tracker"],
    },
  },
];

const BusinessChallenges = () => {
  return (
    <Box className="business-challenges-container">
      <Grid className="bc-main">
        <Chip label=" Business Challenges" className="hero-badge-dep" size="small" />
        <Typography variant="h4" className="section-title">
          Common Business Challenges
        </Typography>
        <Typography variant="body1" className="section-subtitle">
          Identify your specific business challenge and discover how AI agents can provide effective solutions.
        </Typography>
      </Grid>

      <Stack spacing={4} mt={6}>
        {challenges.map((challenge, index) => (
          <ChallengeItem key={index} {...challenge} />
        ))}
      </Stack>
    </Box>
  );
};

export default BusinessChallenges;
