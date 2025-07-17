import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import "./SupportResourcesSection.css";

// Optional icons
import BookIcon from "@mui/icons-material/MenuBook";
import PeopleIcon from "@mui/icons-material/People";
import SupportIcon from "@mui/icons-material/SupportAgent";
import SchoolIcon from "@mui/icons-material/School";

const supportItems = [
  {
    icon: <BookIcon fontSize="large" sx={{ color: "#7b3fe4" }} />,
    title: "Documentation",
    desc: "Comprehensive guides and API references",
    bullets: [
      "Getting Started Guide",
      "API Documentation",
      "Best Practices",
      "Troubleshooting",
    ],
  },
  {
    icon: <PeopleIcon fontSize="large" sx={{ color: "#7b3fe4" }} />,
    title: "Community",
    desc: "Connect with other users and experts",
    bullets: [
      "Community Forum",
      "Slack Workspace",
      "User Groups",
      "Events and Webinar",
    ],
  },
  {
    icon: <SupportIcon fontSize="large" sx={{ color: "#7b3fe4" }} />,
    title: "Support",
    desc: "Get help when you need it most",
    bullets: [
      "Live Chat Support",
      "Email Support",
      "Phone Support",
      "Success Manager",
    ],
  },
  {
    icon: <SchoolIcon fontSize="large" sx={{ color: "#7b3fe4" }} />,
    title: "Learning",
    desc: "Master Nyukt with our training resources",
    bullets: [
      "Video Tutorials",
      "Certified Program",
      "Workshops",
      "Use Case Library",
    ],
  },
];

export default function SupportResourcesSection() {
  return (
    <Box className="support-section">
      <Typography className="support-badge">Support & Resources</Typography>

      <Typography variant="h4" className="support-heading">
        We're Here to Help You Succeed
      </Typography>
      <Typography variant="body1" className="support-subheading">
        Comprehensive resources and support to ensure your success with Nyukt
        and achieve your automation goals
      </Typography>

      <Grid container spacing={4} className="support-grid">
        {supportItems.map((item, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <Paper elevation={1} className="support-card">
              <Box className="support-icon">{item.icon}</Box>
              <Typography variant="subtitle1" className="support-title">
                {item.title}
              </Typography>
              <Typography variant="body2" className="support-desc">
                {item.desc}
              </Typography>
              <List dense className="support-list">
                {item.bullets.map((point, i) => (
                  <ListItem key={i} className="support-list-item">
                    <ListItemText primary={point} />
                  </ListItem>
                ))}
              </List>
              <Button variant="outlined" className="support-button">
                Explore
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
