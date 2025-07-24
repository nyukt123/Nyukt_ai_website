import { Grid, Box, Typography, Chip } from "@mui/material";
import CountUp from "react-countup";
import { useEffect, useState, useRef } from "react";

import key from "../../assets/icons/key.png";
import shield from "../../assets/icons/shield.png";
import time from "../../assets/icons/time.png";

import "./StatsSecion.css";

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

const getCountUpProps = (value) => {
  const match = value.match(/^([\d.]+)(.*)$/);
  const number = parseFloat(match?.[1] || "0");
  const suffix = match?.[2] || "";
  return { end: number, suffix };
};

export const StatSection = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStartAnimation(true);
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, []);

  return (
    <Box className="stat-section-container" data-aos-offset="200" ref={ref}>
      <Grid container spacing={2} justifyContent="center">
        {stats.map((stat, idx) => {
          const { end, suffix } = getCountUpProps(stat.value);
          return (
            <Grid item xs={6} sm={3} key={idx}>
              <Box className="stat-box">
                <Typography variant="h5" className="stat-number">
                  {startAnimation ? (
                    <>
                      <CountUp start={1} end={end} duration={2} />
                      {suffix && (
                        <span className="stat-symbol">{suffix}</span>
                      )}
                    </>
                  ) : (
                    <>
                      1
                      {suffix && (
                        <span className="stat-symbol">{suffix}</span>
                      )}
                    </>
                  )}
                </Typography>
                <Typography className="stat-title">{stat.title}</Typography>
                <Typography className="stat-subtitle">
                  {stat.subtitle}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>

      <Box className="stat-tags">
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
              padding: "14px 18px",
            }}
            className="stat-chip"
          />
        ))}
      </Box>
    </Box>
  );
};

export default StatSection;
