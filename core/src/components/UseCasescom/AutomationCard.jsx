import React from "react";
import { Box, Typography, Paper, Chip } from "@mui/material";
import "./AutomationLevels.css";

const AutomationCard = ({
  title,
  description,
  complexity,
  duration,
  examples,
  bestFor,
  color,
}) => {
  return (
    <Paper className="automation-card" elevation={2}>
      <Typography variant="h6" className="card-title">{title}</Typography>
      <Typography className="card-description">{description}</Typography>

      <Box className="automation-meta">
        <Typography variant="body2">Complexity: <Chip label={complexity} color={color} size="small" /></Typography>
        <Typography variant="body2" sx={{ mt: 0.5 }}>
          Time to implement: {duration}
        </Typography>
      </Box>

      <Typography className="card-subheading">Examples:</Typography>
      <ul className="automation-list">
        {examples.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <Typography className="card-subheading">Best For:</Typography>
      <Typography variant="body2" className="card-bestfor">
        {bestFor}
      </Typography>
    </Paper>
  );
};

export default AutomationCard;
