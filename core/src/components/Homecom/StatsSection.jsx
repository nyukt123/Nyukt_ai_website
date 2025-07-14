import { Grid, Box, Typography, Slide } from "@mui/material";
import { useEffect, useState } from "react";
import drive from "../../assets/icons/drive.png";
import feather from "../../assets/icons/feather.png";
import table from "../../assets/icons/table.png";
import "../Homecom/StatsSecion.css";

const stats = [
  {
    icon: drive,
    title: "Used by 500+",
    subtitle: "Enterprise Companies",
  },
  {
    icon: feather,
    title: "10,000+",
    subtitle: "AI agents created",
  },
  {
    icon: table,
    title: "50+",
    subtitle: "Pre-built templates",
  },
];

export default function StatsSection() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <Grid spacing={2} mt={2} className="stats-container">
      {stats.map((stat, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <Slide
            direction="up"
            in={animate}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <Box className="stat-box">
              <img src={stat.icon} alt="Icon" className="stat-icon" />
              <Box>
                <Typography variant="subtitle2" fontWeight={600}>
                  {stat.title}
                </Typography>
                <Typography variant="caption">{stat.subtitle}</Typography>
              </Box>
            </Box>
          </Slide>
        </Grid>
      ))}
    </Grid>
  );
}
