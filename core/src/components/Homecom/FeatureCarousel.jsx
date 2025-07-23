import React from "react";
import Slider from "react-slick";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import msgbox from "../../assets/icons/msg-box.png";
import textfile from "../../assets/icons/text-file.png";
import monitor from "../../assets/icons/monitor.png";
import "./FeatureCarousel.css";

const features = [
  {
    icon: msgbox,
    title: "Customer Support Automation",
    description:
      "Automate repetitive support tasks and accelerate issue resolution by deploying intelligent AI agents that manage ticketing, routing, responses, and agent assistance without human intervention.",
  },
  {
    icon: textfile,
    title: "Intelligent Document Processing",
    description:
      "Transform unstructured data into actionable insights by automating extraction, validation, and classification of documents using AI workflows.",
  },
  {
    icon: monitor,
    title: "Automated Data Analysis",
    description:
      "Utilize AI-driven workflows to gather, analyze, and report on data from multiple sources—enabling faster decision-making and business intelligence.",
  },
  {
    icon: monitor,
    title: "Multimedia Content Creation",
    description:
      "AI agents autonomously research, generate, and assemble rich multimedia content to accelerate creative workflows.",
  },
  {
    icon: monitor,
    title: "Supply Chain & Inventory Optimization",
    description:
      "Autonomous AI monitors inventory levels and demand, coordinating proactive supply chain management.",
  },
  {
    icon: monitor,
    title: "Autonomous Recruitment and Talent Management",
    description:
      "Streamline hiring by automating resume screening, interview scheduling, and candidate engagement.",
  },
];

const FeatureCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="features-section">
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" className="features-heading" gutterBottom>
         Industry-Focused Agentic AI Solutions

        </Typography>
        <Typography variant="body1" className="features-subheading">
          Empower your business with intelligent, no-code AI agents that automate workflows, enhance decision-making, and drive innovation—tailored to your industry’s unique needs.

        </Typography>
      </Box>

      <Slider {...settings}>
        {features.map((feature, index) => (
          <Box key={index} className="carousel-item">
            <Card className="feature-cards" elevation={4}>
              <CardContent className="feature-card-content">
                <Box mb={2}>
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="feature-icon"
                  />
                </Box>
                <Typography variant="h6" className="feature-heading">
                  {feature.title}
                </Typography>
                <Typography variant="body2" className="feature-description">
                  {feature.description}
                </Typography>
                <Box mt={2}>
                  <Button className="btn-learn">
                    Learn more <ArrowRightAltIcon />
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </section>
  );
};

export default FeatureCarousel;
