import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Box,
  CardMedia,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./ResultCard.css";
import star from "../../assets/icons/howitworksic/star.png";

export default function ResultCard({ tags, title, desc, metric, cta, image }) {
  return (
    <Card elevation={1} className="result-card">
      {/* ✅ Image Section */}
      <CardMedia
        component="img"
        image={image}
        alt={title}
        className="card-image"
      />

      <CardContent className="card-content">
        {/* Tags */}
        <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
          {tags.map((tag, index) => (
            <Chip key={index} label={tag} size="small" className="result-tag" />
          ))}
        </Stack>

        {/* Title & Description */}
        <Typography variant="subtitle1" className="result-title">
          {title}
        </Typography>
        <Typography variant="body2" className="result-desc" gutterBottom>
          {desc}
        </Typography>

        {/* Footer */}
        <Box className="card-footer">
          <Box className="footer-metric">
            <img src={star} className="rc-star" alt="metric" />
            <Typography variant="caption" sx={{ color: "#16A34A", ml: 0.5 }}>
              {metric}
            </Typography>
          </Box>

          <Box className="footer-link">
            <Typography
              variant="caption"
              sx={{ color: "#7C3AED", fontWeight: 500 }}
            >
              {cta}
            </Typography>
            <ArrowForwardIcon sx={{ fontSize: 14, color: "#7C3AED", ml: 0.5 }} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
