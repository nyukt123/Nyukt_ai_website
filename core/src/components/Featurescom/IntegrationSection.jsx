import { Box, Typography, Container, Grid, Button, Chip } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./IntegrationSection.css";

// Integration icons
import slack from "../../assets/icons/techstack/slack.png";
import salesforce from "../../assets/icons/techstack/salesforce.png";
import hubspot from "../../assets/icons/techstack/hubspot.png";
import shopify from "../../assets/icons/techstack/shopify.png";
import google from "../../assets/icons/techstack/google_workspace.png";
import msTeams from "../../assets/icons/techstack/teams.png";
import zendesk from "../../assets/icons/techstack/zendesk.png";
import stripe from "../../assets/icons/techstack/stripe.png";
import notion from "../../assets/icons/techstack/notion.png";
import airtable from "../../assets/icons/techstack/airtable.png";
import zapier from "../../assets/icons/techstack/zapier.png";
import github from "../../assets/icons/techstack/github.png";

const integrations = [
  { icon: slack, title: "Slack", desc: "Communication" },
  { icon: salesforce, title: "Salesforce", desc: "CRM" },
  { icon: hubspot, title: "HubSpot", desc: "Marketing" },
  { icon: shopify, title: "Shopify", desc: "E-Commerce" },
  { icon: google, title: "Google Workspace", desc: "Productivity" },
  { icon: msTeams, title: "Microsoft Teams", desc: "Communication" },
  { icon: zendesk, title: "Zendesk", desc: "Support" },
  { icon: stripe, title: "Stripe", desc: "Payment" },
  { icon: notion, title: "Notion", desc: "Productivity" },
  { icon: airtable, title: "Airtable", desc: "Database" },
  { icon: zapier, title: "Zapier", desc: "Automation" },
  { icon: github, title: "Github", desc: "Development" },
];

const IntegrationSection = () => {
  return (
    <section className="integration-section">
      <Container>
        <Box className="integration-chip-wrap">
          <Chip label="100+ Integrations" className="integration-chip" />
        </Box>

        <Typography variant="h4" className="integration-title">
          Connect Your Entire Tech Stack
        </Typography>

        <Typography variant="body1" className="integration-subtitle">
          Seamlessly integrate with the tools you already use and love. <br />
          No complex setup required.
        </Typography>

        <Grid container spacing={4} className="integration-grid">
          {integrations.map((item, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <Box className="integration-box">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="integration-icon"
                />
                <Typography className="integration-name">{item.title}</Typography>
                <Typography className="integration-desc">{item.desc}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box className="integration-btn-wrap">
          <Button
            variant="contained"
            className="integration-btn"
            endIcon={<ArrowForwardIcon />}
          >
            View All Integrations
          </Button>
        </Box>
      </Container>
    </section>
  );
};

export default IntegrationSection;
