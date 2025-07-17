import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemText,
  Chip,
} from "@mui/material";
import "./SupportResourcesSection.css";

// Image icons
import brainw from "../../assets/icons/howitworksic/brain-w.png";
import usersw from "../../assets/icons/howitworksic/users-w.png";
import smsw from "../../assets/icons/howitworksic/sms-w.png";
import bookw from "../../assets/icons/howitworksic/book-w.png";

const supportItems = [
  {
    icon: bookw,
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
    icon: usersw,
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
    icon: smsw,
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
    icon: brainw,
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
      <Chip
        label="Support & Resources"
        className="hero-badge"
        size="small"
      />

      <Typography variant="h4" className="special-head-text">
        We're Here to Help You Succeed
      </Typography>
      <Typography variant="body1" className="special-head-sub-text">
        Comprehensive resources and support to ensure your success with Nyukt
        and achieve your automation goals
      </Typography>

      <Grid container spacing={3} className="support-grid">
        {supportItems.map((item, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <Card elevation={1} className="support-card">
              <CardContent>
                <Box>
                  <img
                    src={item.icon}
                    alt={`${item.title} Icon`}
                    className="support-icon"
                  />
                </Box>
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
                <Button variant="outlined" className="btn-outline-sc">
                  Explore
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
