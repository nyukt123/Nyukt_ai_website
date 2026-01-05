import React from "react";
import { Box, Typography, Grid, Chip } from "@mui/material";
import DepartmentCard from "./DepartmentCard";
import "./DepartmentSolutions.css";
// imageicon
import deic1 from "../../assets/icons/usecases/deic1.png";
import deic2 from "../../assets/icons/usecases/deic2.png";
import deic3 from "../../assets/icons/usecases/deic3.png";
import deic4 from "../../assets/icons/usecases/deic4.png";
import deic5 from "../../assets/icons/usecases/deic5.png";
import deic6 from "../../assets/icons/usecases/deic6.png";

// Mock data (simplified)
const departments = [
  {
    title: "Finance",
    icon: deic1,
    items: [
      { title: "Invoice Management", time: "1-2 weeks", level: "Low" },
      { title: "Expense Processing", time: "2-3 weeks", level: "Medium" },
      { title: "Financial Reporting", time: "4-6 weeks", level: "High" },
      { title: "Budget Planning Assistance", time: "6-8 weeks", level: "High" },
    ],
  },
  {
    title: "Human Resources",
    icon: deic2,
    items: [
      { title: "Resume Screening", time: "3-4 weeks", level: "Medium" },
      { title: "Employee Onboarding", time: "1-2 weeks", level: "Low" },
      { title: "Benefits Q&A Assistant", time: "1-2 weeks", level: "Low" },
      {
        title: "Performance Review Automation",
        time: "4-6 weeks",
        level: "High",
      },
    ],
  },
  {
    title: "Sales & Marketing",
    icon: deic3,
    items: [
      { title: "Lead Qualification", time: "2-4 weeks", level: "Medium" },
      { title: "Email Campaign Automation", time: "1-2 weeks", level: "Low" },
      { title: "Social Media Management", time: "2-3 weeks", level: "Medium" },
      { title: "Content Generation", time: "4-6 weeks", level: "High" },
    ],
  },
  {
    title: "Operations",
    icon: deic4,
    items: [
      { title: "Inventory Management", time: "2-4 weeks", level: "Medium" },
      { title: "Process Documentation", time: "1-2 weeks", level: "Low" },
      { title: "Quality Assurance", time: "4-8 weeks", level: "High" },
      { title: "Vendor Communication", time: "2-3 weeks", level: "Medium" },
    ],
  },
  {
    title: "Customer Service",
    icon: deic5,
    items: [
      { title: "Support Ticket Automation", time: "1-2 weeks", level: "Low" },
      { title: "Live Chat Assistance", time: "2-3 weeks", level: "Medium" },
      {
        title: "Customer Feedback Analysis",
        time: "3-4 weeks",
        level: "Medium",
      },
      { title: "Knowledge Base Management", time: "1-2 weeks", level: "Low" },
    ],
  },
  {
    title: "IT & Technology",
    icon: deic6,
    items: [
      { title: "Helpdesk Automation", time: "1-2 weeks", level: "Low" },
      { title: "System Monitoring", time: "3-4 weeks", level: "Medium" },
      { title: "Code Review Assistant", time: "4-6 weeks", level: "High" },
      { title: "Documentation Generation", time: "2-3 weeks", level: "Medium" },
    ],
  },
];

const DepartmentSolutions = () => {
  return (
    <Box className="department-solutions-section">
      <Grid className="dept-sol-main">
        <Chip
          label="Department Solutions"
          className="hero-badge-dep"
          size="small"
        />
        <Typography variant="h4" className="special-head-text ">
          AI Agents by Business Function
        </Typography>
        <Typography variant="body1" className="special-head-sub-text">
          Discover specific use cases tailored to each department with
          implementation complexity and time-to-value estimates.
        </Typography>
      </Grid>

      <Box sx={{ px: { xs: 2, md: 8 }, maxWidth: '1400px', mx: 'auto' }}>
        <Grid container spacing={4} className="department-grid-container" alignItems="stretch">
          {departments.map((dept, idx) => (
            <Grid item key={idx} xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
              <DepartmentCard {...dept} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default DepartmentSolutions;
