import { Box, Typography, Container, Grid, Chip } from "@mui/material";
import ResultCard from "./ResultCard";
import "./RealResultsSection.css";

const cardData = [
  {
    tags: ["Zen desk", "Email", "Slack"],
    title: "Customer Support",
    desc: "Automate ticket routing and response",
    metric: "75% faster response times",
    cta: "View Details",
  },
  {
    tags: ["Salesforce", "HubSpot", "CRM"],
    title: "Lead Qualification",
    desc: "Score and route leads automatically",
    metric: "3X more qualified leads",
    cta: "View Details",
  },
  {
    tags: ["PDF", "Excel", "APIs"],
    title: "Data Processing",
    desc: "Extract insights from documents",
    metric: "30% time savings",
    cta: "View Details",
  },
];

export default function RealResultsSection() {
  return (
    <Box className="real-results-wrapper">
      <Container maxWidth="lg">
        <Box className="results-header">
          <Chip label="Real Results" className="results-badge" />
          <Typography variant="h4" className="results-title">
            See What’s Possible
          </Typography>
          <Typography variant="body1" className="results-subtitle">
            Real examples of AI Agents built by our customers
          </Typography>
        </Box>

        <Grid
          container
          spacing={4}
          justifyContent="center"
          className="cards-grid"
        >
          {cardData.map((card, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <ResultCard {...card} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
