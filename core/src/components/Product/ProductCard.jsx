import React from "react";
import { Button, Grid, Typography, Chip, Box, Card } from "@mui/material";
import "./ProductCard.css";
import nyuktron from "../../assets/images/NyukTRON.png"; 
import nyuktact from "../../assets/images/Nyuktacts.png";
import nyuktics from "../../assets/images/Nyuktics.png";
import nyuktwork from "../../assets/images/Nyuktwork.png";
import nyuktrium from "../../assets/images/Nyuktrium.png";


const products = [
  {
    title: "NyukTRON",
    subtitle: "Agentic AI as a Service",
    description:
      "NyukTRONs are the most advanced Agentic AIs in the industry, powered by state-of-the-art technologies like Large Language Models (LLMs), Reinforcement Learning (RL), Retrieval-Augmented Generation (RAG), and Generative AI. These intelligent AI agents are capable of dynamic adaptability, multi-modal processing, and real-time decision-making, enabling them to autonomously handle complex tasks across industries. Their integration with advanced models and workflows ensures unmatched efficiency, scalability, and precision. With built-in Explainable AI (XAI) features and seamless collaboration through the Nyuktwork network, NyukTRONs redefine intelligence and innovation.",
    features: [
      "LLM Integration",
      "RAG Technology",
      "Explainable AI",
      "Reinforcement Learning",
      "Multi-Modal Processing",
      "Real-time Decision Making",
    ],
    metrics: [
      { value: "99.9%", label: "Accuracy" },
      { value: "10x Faster", label: "Speed" },
      { value: "50+", label: "Models" },
    ],
    image: nyuktron,
  },
  {
    title: "NyukTACT",
    subtitle: "AI Infra as a Service",
    description:
      "NyukTACT is more than just a no-code platform for building NyukTRONs—it's the next step in revolutionizing human-machine interaction. Seamlessly integrating with state-of-the-art technologies like Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and advanced AI frameworks.",
    features: ["No-Code Platform", "Workflow Builder", "LLM Integration"],
    metrics: [
      { value: "100+", label: "Workflows" },
      { value: "24/7", label: "Reliability" },
    ],
    image: nyuktact,
  },
  {
    title: "Nyuktics",
    subtitle: "Modular Skills Empowering Agentic AIs",
    description:
      "Nyuktics are the foundational building blocks of intelligence within Nyukt.AI, enabling seamless execution of specialized tasks by NyukTRONs (Agentic AIs). Each Nyuktic is a preconfigured, modular skill designed to handle specific actions such as data analysis, decision-making, automation, or creative generation.",
    features: ["Data Analysis", "Automation", "Creative Generation"],
    metrics: [
      { value: "500+", label: "Skills" },
      { value: "Modular", label: "Design" },
    ],
    image: nyuktics,
  },
  {
    title: "Nyuktwork",
    subtitle: "The Collaborative AI Ecosystem",
    description:
      "Nyuktwork is the collaborative multi-agent network within the Nyukt.AI ecosystem. It enables NyukTRONs to share resources, insights, and tasks seamlessly. Designed to manage complex workflows and cross-functional operations, Nyuktwork ensures AI agents work as a unified system.",
    features: ["Multi-Agent Collaboration", "Resource Sharing", "Efficiency"],
    metrics: [
      { value: "Global", label: "Network" },
      { value: "Seamless", label: "Integration" },
    ],
    image: nyuktwork,
  },
  {
    title: "Nyuktrium",
    subtitle: "The Marketplace for Agentic AI Excellence",
    description:
      "Nyuktrium is the innovative marketplace connecting businesses, developers, and innovators through pre-built Agentic AIs. It democratizes access to AI solutions and empowers developers to monetize their creations. A vibrant hub for collaboration, innovation, and growth.",
    features: ["AI Marketplace", "Collaboration", "Innovation"],
    metrics: [
      { value: "1000+", label: "Solutions" },
      { value: "Open", label: "Ecosystem" },
    ],
    image: nyuktrium,
  },
];

const ProductCards = () => {
  return (
    <Box className="products-container">
      {products.map((product, idx) => (
        <Card key={idx} className="nyuktron-card">
          <Grid container spacing={4} className="nyuktron-grid">
            {/* Left Section */}
            <Grid item xs={12} md={6} className="nyuktron-left">
              <Typography variant="h4" className="nyuktron-title">
                {product.title}
              </Typography>
              <Typography variant="subtitle1" className="nyuktron-subtitle">
                {product.subtitle}
              </Typography>
              <Typography className="nyuktron-description">
                {product.description}
              </Typography>

              {/* Metrics */}
              <Box className="nyuktron-metrics">
                {product.metrics.map((metric, i) => (
                  <div className="metric-box" key={i}>
                    <strong>{metric.value}</strong>
                    <br />
                    {metric.label}
                  </div>
                ))}
              </Box>

              {/* Feature Chips */}
              <Box className="nyuktron-chips">
                {product.features.map((feature, i) => (
                  <Chip key={i} label={feature} className="nyuktron-chip" />
                ))}
              </Box>

              {/* Buttons */}
              <Box className="nyuktron-buttons">
                {/* <Button variant="contained" className="nyuktron-buttons-primarys">
                  Try it Now
                </Button>
                <Button variant="outlined" className="nyuktron-buttons-learnmore">
                  Learn More
                </Button> */}
              </Box>
            </Grid>

            {/* Right Section */}
            <Grid item xs={12} md={6} className="nyuktron-right">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
            </Grid>
          </Grid>
        </Card>
      ))}
    </Box>
  );
};

export default ProductCards;
