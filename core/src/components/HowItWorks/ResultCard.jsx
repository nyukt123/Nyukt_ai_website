import React from "react";
import { Box, Paper, Typography, Chip, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./ResultCard.css";

export default function ResultCard({ tags, title, desc, metric, cta }) {
  return (
    <Paper elevation={1} className="result-card">
      <Box className="card-image-placeholder" />

      <Box className="card-content">
        <Stack direction="row" spacing={1} flexWrap="wrap" mb={1}>
          {tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              size="small"
              className="result-tag"
            />
          ))}
        </Stack>

        <Typography variant="subtitle1" className="result-title">
          {title}
        </Typography>
        <Typography variant="body2" className="result-desc" gutterBottom>
          {desc}
        </Typography>

        <Box className="card-footer">
          <Box className="footer-metric">
            <CheckCircleIcon sx={{ color: "#10b981", fontSize: 18 }} />
            <Typography variant="caption" sx={{ color: "#10b981", ml: 0.5 }}>
              {metric}
            </Typography>
          </Box>
          <Box className="footer-link">
            <Typography variant="caption" sx={{ color: "#7b3fe4", fontWeight: 500 }}>
              {cta}
            </Typography>
            <ArrowForwardIcon sx={{ fontSize: 14, color: "#7b3fe4", ml: 0.5 }} />
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
