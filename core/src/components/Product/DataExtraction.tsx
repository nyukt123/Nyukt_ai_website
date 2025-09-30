import React from "react";
import { Button, Grid, Typography, Chip, Box, Card, Container } from "@mui/material";
import "./ProductCard.css";
import dataextraction from "../../assets/images/dataextraction.png";

import { useNavigate, Link } from 'react-router-dom';
import { color } from "framer-motion";
// import "./ProductHero.css";


const products = [
    {
        id: 'dataextraction',
        title: "Data Extraction Agent",
        subtitle: "Accurate & Scalable Extraction",
        color: "#4F46E5", // Indigo
        description:
            "Nyuktwork is the dynamic and collaborative multi-agent network at the core of the Nyukt.AI ecosystem. It empowers NyukTRONs—intelligent AI agents—to seamlessly coordinate, share knowledge, exchange resources, and divide tasks in real time. By working together as a connected network, NyukTRONs can solve complex, multi-layered problems with speed and precision that go far beyond the capacity of individual agents. Designed for scalability and adaptability, Nyuktwork enables organizations to orchestrate intelligent workflows, unlock collective intelligence, and achieve mission-critical goals with unparalleled efficiency and resilience.",
        image: dataextraction,
    },
   
];

interface ResearchandDevProps {
    onProductSelect: (productId: string) => void;
}

const ResearchandDev: React.FC<ResearchandDevProps> = ({ onProductSelect }) => {
    return (
        <Box sx={{ width: '100%'}}>
            <Box className="product-hero-wrapper" >
                <Container maxWidth="lg">
                    <Box className="hero-content" >
                        <Typography variant="h4" className="hero-heading-p" sx={{ marginTop: '150px'}}>
                        Research &  <span className="highlights">Development</span>
                        </Typography>
                        <Typography variant="body1" className="hero-subheading-p" sx={{ marginBottom: '70px',marginTop: '30px'}}>
                        Nyukt.AI’s R&D drives persistent memory, federated learning, explainable AI, and quantum-aware ML for a future-ready OS.
                        </Typography>
                    </Box>
                </Container>
            </Box>
            <Box className="products-container" sx={{ padding: 4 }}>
                <Grid container spacing={4}>
                    {products.map((product, idx) => (
                        <Grid item xs={12} key={idx}>
                            <Card className="nyuktron-card">
                                <Grid container spacing={4} className="nyuktron-grid">
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
                                        <Typography className="nyuktron-description">
                                            {product.description}
                                        </Typography>
                                        <Box className="nyuktron-buttons">
                                            <Button
                                                variant="contained"
                                                className="nyuktron-buttons-primarys"
                                            >
                                                <Link to="https://datacomp-frontend-474045188621.us-central1.run.app/login" style={{ color: 'white', textDecoration: 'none' }}>Try it Now</Link>
                                            </Button>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} className="nyuktron-right">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="product-image"
                                        />
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default ResearchandDev;
