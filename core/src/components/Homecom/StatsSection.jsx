import { Grid, Box, Typography, Chip } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import GppGoodIcon from "@mui/icons-material/GppGood";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import "./StatsSecion.css";
import key from "../../assets/icons/key.png";
import shield from "../../assets/icons/shield.png";
import time from "../../assets/icons/time.png";
const stats = [
  {
    value: "500+",
    title: "Companies Trusted Us",
    subtitle: "Leading organisation worldwide",
  },
  {
    value: "75%",
    title: "Average Time Saved",
    subtitle: "Reduction in manual tasks",
  },
  {
    value: "98%",
    title: "Customer Satisfaction",
    subtitle: "Based on user feedback",
  },
  {
    value: "24/7",
    title: "AI Agent Uptime",
    subtitle: "Reliable automation",
  },
];

const tags = [
  {
    label: "SOC 2 Compliant",
    icon: shield,
    color: "#16A34A",
    backgroundColor: "#DCFCE7",
  },
  {
    label: "GDPR Ready",
    icon: key,
    color: "#1364FE",
    backgroundColor: "#EDE9FE",
  },
  {
    label: "99.9% Uptime",
    icon: time,
    color: "#7C3AED",
    backgroundColor: "#EDE9FE",
  },
];

export const StatSection = () => {
  return (
    <Box className="stat-section-container">
      <Grid container spacing={2} justifyContent="center">
        {stats.map((stat, idx) => (
          <Grid item xs={6} sm={3} key={idx}>
            <Box className="stat-box">
              <Typography variant="h5" className="stat-number">
                {stat.value.split(/(\+|%|\/7)/).map((part, i) =>
                  ["+", "%", "/7"].includes(part) ? (
                    <span key={i} className="stat-symbol">
                      {part}
                    </span>
                  ) : (
                    <span key={i}>{part}</span>
                  )
                )}
              </Typography>

              <Typography className="stat-title">{stat.title}</Typography>
              <Typography className="stat-subtitle">{stat.subtitle}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box className="stat-tags ">
        {tags.map((tag, index) => (
          <Chip
            key={index}
            icon={<img src={tag.icon} alt={tag.label} className="chip-icon" />}
            label={tag.label}
            style={{
              backgroundColor: tag.backgroundColor,
              color: tag.color,
              fontWeight: 500,
              fontSize: "0.875rem",
            }}
            className="stat-chip"
          />
        ))}
      </Box>
    </Box>
  );
};

export default StatSection;
