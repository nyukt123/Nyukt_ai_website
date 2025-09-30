import React from "react";
import { Button, Grid, Typography, Chip, Box, Card, Container } from "@mui/material";
import "./ProductCard.css";
import smarthire from "../../assets/images/Smarthire.png";
import chikitai from "../../assets/images/chikitai.png";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
// import "./ProductHero.css";
import nyuktworkss from "../../assets/images/nyuktworkss.png";
import nyuktacts from "../../assets/images/Nyuktacts1.png";


const products = [
    {
        id: 'nyuktwork',
        title: "Nyuktwork",
        subtitle: "The Collaborative AI Ecosystem",
        color: "#4F46E5", // Indigo
        description:
            "Nyuktwork is the dynamic and collaborative multi-agent network at the core of the Nyukt.AI ecosystem. It empowers NyukTRONs—intelligent AI agents—to seamlessly coordinate, share knowledge, exchange resources, and divide tasks in real time. By working together as a connected network, NyukTRONs can solve complex, multi-layered problems with speed and precision that go far beyond the capacity of individual agents. Designed for scalability and adaptability, Nyuktwork enables organizations to orchestrate intelligent workflows, unlock collective intelligence, and achieve mission-critical goals with unparalleled efficiency and resilience.",
        image: nyuktworkss,
    },
    {
        id: 'Quantum-Aware ML Simulator',
        title: "Quantum-Aware ML Simulator",
        subtitle: "Next-Gen Hybrid Intelligence",
        color: "#10B981", // Emerald
        description:
            "Bring quantum into your ML stack—safely. Our simulator lets teams model qubits, gates, and decoherence; compose hybrid pipelines with classical learners; and benchmark against baselines. Features include QPU-agnostic execution, noise/latency modeling, auto-differentiation for VQCs, explainability artifacts, and CI-friendly reproducibility. When you’re ready, deploy the exact circuit to supported quantum backends with one click.",

        image: nyuktacts,
    }
];

const ResearchandDev = ({ onProductSelect }) => {
    return (
        <Box sx={{ width: '100%'}}>
            <Box className="product-hero-wrapper" >
                <Container maxWidth="lg">
                    <Box className="hero-content" >
                        <Typography variant="h4" className="hero-heading-p" sx={{ marginTop: '150px',fontWeight:'600'}}>
                        Research &  <span className="highlights">Development</span>
                        </Typography>
                        <Typography variant="body1" className="hero-subheading-p" sx={{ marginBottom: '70px',marginTop: '50px'}}>
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
                                        {/* <Box className="nyuktron-buttons">
                                            <Button
                                                variant="contained"
                                                className="nyuktron-buttons-primarys"
                                                onClick={() => {
                                                    const urls = {
                                                        'smarthireai': 'https://smarthireai.nyukt.ai/',
                                                        'Chikit.AI': 'https://chikithainew3-474045188621.europe-west1.run.app/'
                                                    };
                                                    window.open(urls[product.id] || '#', '_blank', 'noopener,noreferrer');
                                                }}
                                            >
                                                Try it Now
                                            </Button>
                                        </Box> */}
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
