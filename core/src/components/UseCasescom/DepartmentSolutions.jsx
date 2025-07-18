import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import DepartmentCard from "./DepartmentCard";
import "./DepartmentSolutions.css";

// Mock data (simplified)
const departments = [
  {
    title: "Customer Service",
    icon: "🎧",
    items: [
      { title: "Support Ticket Automation", time: "1-2 weeks", level: "Low" },
      { title: "Live Chat Assistance", time: "2-3 weeks", level: "Medium" },
      { title: "Customer Feedback Analysis", time: "3-4 weeks", level: "Medium" },
      { title: "Knowledge Base Management", time: "1-2 weeks", level: "Low" },
    ],
  },
  {
    title: "Sales & Marketing",
    icon: "📈",
    items: [
      { title: "Lead Qualification", time: "2-4 weeks", level: "Medium" },
      { title: "Email Campaign Automation", time: "1-2 weeks", level: "Low" },
      { title: "Social Media Management", time: "2-3 weeks", level: "Medium" },
      { title: "Content Generation", time: "4-6 weeks", level: "High" },
    ],
  },
  {
    title: "Human Resources",
    icon: "🧑‍💼",
    items: [
      { title: "Resume Screening", time: "3-4 weeks", level: "Medium" },
      { title: "Employee Onboarding", time: "1-2 weeks", level: "Low" },
      { title: "Benefits Q&A Assistant", time: "1-2 weeks", level: "Low" },
      { title: "Performance Review Automation", time: "4-6 weeks", level: "High" },
    ],
  },
  // Add rest: Operations, Finance, IT & Technology...
];

const DepartmentSolutions = () => {
  return (
    <Box className="department-solutions-section">
      <Typography variant="subtitle2" className="section-chip">
        Department Solutions
      </Typography>
      <Typography variant="h4" className="section-title">
        AI Agents by Business Function
      </Typography>
      <Typography variant="body1" className="section-subtitle">
        Discover specific use cases tailored to each department with implementation complexity and time-to-value estimates.
      </Typography>

      <Grid container spacing={3} mt={4}>
        {departments.map((dept, idx) => (
          <Grid key={idx} item xs={12} sm={6} md={4}>
            <DepartmentCard {...dept} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DepartmentSolutions;
