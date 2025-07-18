import React, { useState } from "react";
import { Box, Typography, Tabs, Tab } from "@mui/material";
import FeatureTable from "./FeatureTable";
import "./FeatureComparison.css";

const tabLabels = [
  "Core Feature",
  "Voice & Speech",
  "Integrations & APIs",
  "Analytics & Monitoring",
  "Collaboration & Security",
  "Support & Training",
];

// Example table data per tab
const featureData = {
  "Core Feature": [
    ["Monthly Credits Included", "10,000 credits", "Unlimited", "Unlimited", "Unlimited"],
    ["AI Agents", "3 agents", "Unlimited", "Unlimited", "Unlimited"],
    ["Workflow Complexity", "Basic", "Advanced", "Advanced", "Enterprise"],
    ["API Access", "✕", "✔", "✔", "✔"],
    ["Webhooks", "✕", "✔", "✔", "✔"],
  ],
  "Voice & Speech": [
    ["Text-to-Speech", "Limited", "Unlimited", "Unlimited", "Unlimited"],
    ["Language Support", "3", "10", "25+", "50+"],
    ["Voice Customization", "✕", "✔", "✔", "✔"],
    ["Voice Analytics", "✕", "✕", "✔", "✔"],
  ],
  // Additional mock data for other tabs
  "Integrations & APIs": [
    ["CRM Integration", "✕", "✔", "✔", "✔"],
    ["Slack Integration", "✕", "✔", "✔", "✔"],
    ["Zapier Access", "✕", "✕", "✔", "✔"],
  ],
  "Analytics & Monitoring": [
    ["Basic Analytics", "✔", "✔", "✔", "✔"],
    ["Advanced Reports", "✕", "✕", "✔", "✔"],
    ["Real-time Monitoring", "✕", "✕", "✕", "✔"],
  ],
  "Collaboration & Security": [
    ["Role-based Access", "✕", "✔", "✔", "✔"],
    ["Team Collaboration", "✕", "✔", "✔", "✔"],
    ["Audit Logs", "✕", "✕", "✔", "✔"],
  ],
  "Support & Training": [
    ["Email Support", "✔", "✔", "✔", "✔"],
    ["Chat Support", "✕", "✔", "✔", "✔"],
    ["Dedicated CSM", "✕", "✕", "✕", "✔"],
  ],
};

const FeatureComparison = () => {
  const [activeTab, setActiveTab] = useState("Core Feature");

  return (
    <Box className="feature-comparison-section">
      <Typography variant="h4" className="section-title">
        Feature Comparison
      </Typography>
      <Typography className="section-subtitle">
        Compare all features across our pricing plans to find the perfect fit for your needs.
      </Typography>

      <Box sx={{ mt: 4, mb: 2 }}>
        <Tabs
          value={activeTab}
          onChange={(e, val) => setActiveTab(val)}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          className="comparison-tabs"
        >
          {tabLabels.map((label) => (
            <Tab key={label} label={label} value={label} />
          ))}
        </Tabs>
      </Box>

      <FeatureTable data={featureData[activeTab]} />
    </Box>
  );
};

export default FeatureComparison;
