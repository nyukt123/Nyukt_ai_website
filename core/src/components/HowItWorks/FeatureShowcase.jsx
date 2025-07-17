import { Box, Typography, Tabs, Tab, Grid, Button, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion,AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./FeatureShowcase.css";

const featureTabs = [
  {
    label: "Visual Workflow Builder",
    title: "Visual Workflow Builder",
    desc: "Drag-and-drop interface that makes complex automation simple.",
    bullets: [
      "Intuitive drag-and-drop interface",
      "Multi-step workflow viewer",
      "Smart component suggestions",
      "Version control and rollback",
      "Collaborative editing",
    ],
    color: "#7C3AED",
  },
  {
    label: "Powerful Integration",
    title: "Powerful Integration",
    desc: "Connect to tools like Slack, Gmail, Notion and 200+ others seamlessly.",
    bullets: [
      "200+ integrations",
      "OAuth and API key support",
      "Webhook triggers",
      "Bi-directional sync",
      "Zero code setup",
    ],
    color: "#1364FE",
  },
  {
    label: "AI Powered Integration",
    title: "AI Powered Integration",
    desc: "Use AI to enhance workflows automatically and intelligently.",
    bullets: [
      "Context-aware automation",
      "Auto-tagging & classification",
      "Built-in GPT integration",
      "Predictive action suggestions",
      "Smart conflict resolution",
    ],
    color: "#16A34A",
  },
  {
    label: "Real-Time Monitoring",
    title: "Real-Time Monitoring",
    desc: "Monitor workflow execution and performance metrics in real-time.",
    bullets: [
      "Live logs and error tracking",
      "Custom alerts",
      "Execution timeline view",
      "Usage analytics",
      "Audit trail compliance",
    ],
    color: "#FB923C",
  },
];

const FeatureShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeFeature = featureTabs[activeTab];

  return (
    <Box className="feature-showcase-wrapper">
      <Typography variant="caption" className="badge">Interactive Product Tour</Typography>
      <Typography variant="h4" className="feature-heading">Explore Nyukt's Powerful Features</Typography>
      <Typography variant="body1" className="feature-subheading">
        Take a closer look at the features that make Nyukt the most powerful AI automation platform.
      </Typography>

      <Tabs
        value={activeTab}
        onChange={(e, newValue) => setActiveTab(newValue)}
        className="feature-tabs"
        variant="scrollable"
        scrollButtons="auto"
        sx={{ mb: 4 }}
      >
        {featureTabs.map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeFeature.label}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box className="feature-image-placeholder" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" fontWeight={600}>{activeFeature.title}</Typography>
              <Typography variant="body1" color="text.secondary" mb={2}>
                {activeFeature.desc}
              </Typography>
              <List dense>
                {activeFeature.bullets.map((item, i) => (
                  <ListItem key={i}>
                    <ListItemIcon>
                      <CheckCircleIcon sx={{ color: activeFeature.color }} />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
              <Box mt={2}>
                <Button variant="contained" sx={{ mr: 2, backgroundColor: activeFeature.color }}>
                  Try It Now
                </Button>
                <Button variant="outlined">Learn More</Button>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </AnimatePresence>
    </Box>
  );
};

export default FeatureShowcase;
