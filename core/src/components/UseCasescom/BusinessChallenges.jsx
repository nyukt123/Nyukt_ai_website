import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import ChallengeItem from "./ChallengeItem";
import "./BusinessChallenges.css";

const challenges = [
  {
    problem: {
      title: "High Volume of Repetitive Inquiries",
      points: [
        "Team burden",
        "Slow response times",
        "Missed support SLAs",
      ],
    },
    solution: {
      title: "Deploy AI agents to handle common questions automatically",
      points: [
        "24/7 availability",
        "Reduced resolution time",
        "Free up human agents for complex issues",
      ],
    },
    useCases: ["Customer Support Bot", "IT Helpdesk", "HR Q&A Assistant"],
  },
  {
    problem: {
      title: "Manual Data Entry and Processing",
      points: [
        "Human errors",
        "Slow results",
        "Delayed decision-making",
      ],
    },
    solution: {
      title: "Automate data extraction, validation, and entry processes",
      points: [
        "99%+ accuracy",
        "Faster data processing",
        "Real-time insights",
      ],
    },
    useCases: ["Document Processing", "Expense Tracker", "Policy Management"],
  },
  {
    problem: {
      title: "Inconsistent Lead Follow-up",
      points: [
        "Lost opportunities",
        "Poor conversion rates",
        "Lower sales team morale",
      ],
    },
    solution: {
      title: "Intelligent lead scoring and automated marketing workflows",
      points: [
        "Faster responses",
        "Higher conversion rates",
        "Reduced manual tasks",
      ],
    },
    useCases: ["Sales AI Assistant", "CRM Integration", "Email Nurturing"],
  },
  {
    problem: {
      title: "Knowledge Silos and Information Access",
      points: [
        "Decentralized data",
        "Slow re-routing",
        "Decision delays",
      ],
    },
    solution: {
      title: "Centralized AI-powered knowledge base with instant access",
      points: [
        "Faster & immediate access",
        "Reduced rework",
        "Better decision-making",
      ],
    },
    useCases: ["Knowledge Assistant", "Company Wiki", "Onboarding Assistant"],
  },
  {
    problem: {
      title: "Complex Escalation and Casework Management",
      points: [
        "Multiple handoffs",
        "Inconsistent experiences",
        "Long resolution cycles",
      ],
    },
    solution: {
      title: "Intelligent case routing with conflict resolution and escalation handling",
      points: [
        "Automated triaging",
        "Faster resolution",
        "Conflict de-escalation",
      ],
    },
    useCases: ["Knowledge Assistant", "Meeting Coordinator", "Case Tracker"],
  },
];

const BusinessChallenges = () => {
  return (
    <Box className="business-challenges-container">
      <Typography variant="subtitle2" className="section-chip">
        Business Challenges
      </Typography>
      <Typography variant="h4" className="section-title">
        Common Business Challenges
      </Typography>
      <Typography variant="body1" className="section-subtitle">
        Identify your specific business challenge and discover how AI agents can provide effective solutions.
      </Typography>

      <Stack spacing={4} mt={6}>
        {challenges.map((challenge, index) => (
          <ChallengeItem key={index} {...challenge} />
        ))}
      </Stack>
    </Box>
  );
};

export default BusinessChallenges;
