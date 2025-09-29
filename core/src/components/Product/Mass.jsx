import React from "react";
import { Button, Grid, Typography, Chip, Box, Card, Container } from "@mui/material";
import "./ProductCard.css";
import nyuktron from "../../assets/images/NyukTRON.png";
import nyuktact from "../../assets/images/Nyuktacts.png";
import nyuktics from "../../assets/images/Nyuktics.png";
import nyuktwork from "../../assets/images/Nyuktwork.png";
import nyuktrium from "../../assets/images/Nyuktrium.png";
import smarthire from "../../assets/images/Smarthire.png";
import chikitai from "../../assets/images/chikitai.png";

import { useNavigate } from 'react-router-dom';
// import "./ProductHero.css";


const products = [
    {
        id: 'smarthireai',
        title: "SmartHireAI",
        subtitle: "Smart Recruitment Platform",
        color: "#4F46E5", // Indigo
        description:
            "SmartHireAI delivers complete recruitment automation tailored for MSMEs and startups. Our AI-powered platform streamlines the entire hiring journey—from creating optimized job descriptions and screening candidates to conducting intelligent virtual interviews and generating personalized offer letters. By eliminating repetitive manual tasks, SmartHireAI helps growing businesses save time, reduce costs, and hire top talent faster with the efficiency of advanced artificial intelligence.",
        image: smarthire,
    },
    {
        id: 'Chikit.AI',
        title: "Chikit.AI",
        subtitle: "Smarter Symptom Assessment",
        color: "#10B981", // Emerald
        description:
            "Chikit.ai is an AI-powered self-symptom assessment platform that transforms healthcare delivery by offering enterprises a clinical-grade, multilingual, and quantum-secure automation system, while providing individuals with intuitive AI-guided tools for simplified self-assessment, personalized health insights, and proactive decision-making—bridging enterprise-grade automation with patient-friendly solutions to ensure accessible, secure, and reliable healthcare experiences.",

        image: chikitai
    }
];

const Mass = ({ onProductSelect }) => {
    return (
        <Box sx={{ width: '100%'}}>
            <Box className="product-hero-wrapper" >
                <Container maxWidth="lg">
                    <Box className="hero-content" >
                        {/* <Chip
                            label="Revolutionary Product Suite"
                            className="hero-badge"
                            size="small"
                            sx={{ marginTop: '150px'}}
                        /> */}
                        <Typography variant="h4" className="hero-heading-pr" sx={{ marginTop: '150px'}}>
                        Multi-Agent <span className="highlights">AI System</span>
                        </Typography>
                        <Typography variant="body1" className="hero-subheading-pr" sx={{ marginBottom: '70px'}}>
                        Our Multi-Agent AI system combines specialized AI agents that collaborate seamlessly to handle complex workflows—optimizing decisions, automating tasks, and ensuring intelligent coordination across every process in real time.
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

export default Mass;
