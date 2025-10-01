import React from "react";
import { Button, Grid, Typography, Chip, Box, Card } from "@mui/material";
import "./ProductCard.css";
import prd1 from "../../assets/images/prd1.png";
import prd2 from "../../assets/images/prd2.png";
import prd3 from "../../assets/images/prd3.png";
import prd4 from "../../assets/images/prd4.png";
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 'nyuktron',
    title: "NyukTRON",
    subtitle: "Single Function Agentic AI",
    color: "#4F46E5", // Indigo
    description:
      "NyukTRONs are the most advanced Agentic AIs in the industry, powered by state-of-the-art technologies like Large Language Models (LLMs), Reinforcement Learning (RL), Retrieval-Augmented Generation (RAG), and Generative AI. These intelligent AI agents are capable of dynamic adaptability, multi-modal processing, and real-time decision-making.",
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
    image:  prd1,
    tryItLink: '/DataExtraction',
  },
  {
    id: 'nyuktact',
    title: "MAAS",
    subtitle: "AI Infra as a Service",
    color: "#10B981", // Emerald
    description:
      "NyukTACT is more than just a no-code platform for building NyukTRONs—it's the next step in revolutionizing human-machine interaction. Seamlessly integrating with state-of-the-art technologies like Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and advanced AI frameworks.",
    features: ["No-Code Platform", "LLM Integration", "RAG Framework", "Workflow Orchestration", "Human-Machine Interface", "Advanced AI Frameworks"],
    metrics: [
      { value: "5 Min Setup", label: "Deployment" },
      { value: "100+ APIs", label: "Reliability" },
      { value: "80% Faster", label: "Efficiency" }
    ],
    image:  prd2,
    tryItLink: '/product/mass',
  },
  {
    id: 'nyuktics',
    title: "Research & Development",
    // subtitle: "Modular Skills Empowering Agentic AIs",
    color: "#F59E0B", // Amber
    description:
      "Nyuktics are the foundational building blocks of intelligence within Nyukt.AI, enabling seamless execution of specialized tasks by NyukTRONs (Agentic AIs). Each Nyuktic is a preconfigured, modular skill designed to handle specific actions such as data analysis, decision-making, automation, or creative generation.",
    features: ["Data Analysis", "Automation", "Creative Generation", "Explainable AI", "Proprietary IP", "System Architecture", "Trustworthy AI", "Advanced Automation", "Future-Ready OS"],
   
    image:  prd3,
    tryItLink: '/product/researchanddev',
  },
  {
    id: 'nyuktwork',
    title: "Upcoming Products",
    subtitle: "Nyuktrium",
    sub_subtitle:"Agent Discovery Network",
    color: "#8B5CF6", // Purple
    description:
      "Nyuktwork is the collaborative multi-agent network within the Nyukt.AI ecosystem. It enables NyukTRONs to share resources, insights, and tasks seamlessly. Designed to manage complex workflows and cross-functional operations, Nyuktwork ensures AI agents work as a unified system.",
    features: ["Multi-Agent Collaboration", "Resource Sharing", "Efficiency", "Pre-Built Agentic AIs", "Tailored Deployment", "AI Democratization", "Developer-Friendly", "Business Acceleration", "Innovator Ecosystem"],
    
    image:  prd4,
    // tryItLink: '/DataExtraction',
  },
  
];

const ProductCards = ({ onProductSelect }) => {
  const navigate = useNavigate();
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
              <Typography 
                variant="subtitle1" 
                className="nyuktron-subtitle"
                sx={{ color: product.color }}
              >
                {product.subtitle}
              </Typography>
              <Typography 
                variant="subtitle1" 
                // className="nyuktron-subtitle"
                sx={{color:"#B87333"}}
                // sx={{ color: product.color }}
              >
                {product.sub_subtitle}
              </Typography>
              <Typography className="nyuktron-description">
                {product.description}
              </Typography>

              {/* Metrics */}
              {product.metrics && product.metrics.length > 0 && (
                <Box className="nyuktron-metrics">
                  {product.metrics.map((metric, i) => (
                    <div className="metric-box" key={i}>
                      <strong>{metric.value}</strong>
                      <br />
                      {metric.label}
                    </div>
                  ))}
                </Box>
              )}

              {/* Feature Chips */}
              <Box className="nyuktron-chips">
                {product.features.map((feature, i) => (
                  <Chip key={i} label={feature} className="nyuktron-chip" />
                ))}
              </Box>

              {/* Buttons - Only show Learn More for non-nyuktwork products */}
              {product.id !== 'nyuktwork' && product.tryItLink && (
                <Box className="nyuktron-buttons">
                  <Button 
                    variant="outlined" 
                    component="a"
                    href={product.tryItLink}
                    className="nyuktron-buttons-outlined"
                  >
                    Learn More
                  </Button>
                </Box>
              )}
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
