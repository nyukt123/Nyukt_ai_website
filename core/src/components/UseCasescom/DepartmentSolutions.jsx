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
    title: "Customer Service",
    icon:deic1,
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
    title: "Sales & Marketing",
    icon: deic2,
    items: [
      { title: "Lead Qualification", time: "2-4 weeks", level: "Medium" },
      { title: "Email Campaign Automation", time: "1-2 weeks", level: "Low" },
      { title: "Social Media Management", time: "2-3 weeks", level: "Medium" },
      { title: "Content Generation", time: "4-6 weeks", level: "High" },
    ],
  },
  {
    title: "Human Resources",
    icon: deic3,
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
    title: "Customer Service",
    icon: deic4,
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
    icon: deic5,
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
    title: "Human Resources",
    icon: deic6,
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

      <Grid className="department-grid-container" container spacing={3} mt={4}>
        {departments.map((dept, idx) => (
          <Grid key={idx} item xs={12} sm={6} md={4} >
            <DepartmentCard {...dept}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DepartmentSolutions;
