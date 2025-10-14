import { Box, Typography, Grid, Container, Chip, Button } from "@mui/material";
import "./AboutusHero.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import calendar from "../../assets/icons/calendar.png";


export default function AboutusHero() {
    return (
        <Box className="pricing-hero-wrapper">
            <section className="pricing-hero">
                <Container maxWidth="lg">
                    <Box className="hero-content">
                        <Chip
                            label="About Nyukt"
                            className="hero-badge"
                            size="small"
                        />
                        <Typography variant="h4" className="hero-heading-prs">

                            Building the Future of {" "}
                            <span className="highlight"> AI Agent Technology </span>{" "}
                        </Typography>
                        <Typography variant="body1" className="hero-subheading-prs">
                            We're a passionate team of AI researchers, engineers, and visionaries dedicated to democratising artificial intelligence and
                            empowering businesses to achieve more with intelligent automation.
                        </Typography>
                        

                        <Box className="cta-features" mt={4}>
                            {[ "Last updated: January 15, 2025"].map((text, index) => (
                                <Box className="cta-feature-item" key={index}>
                                    <span className="check-circle-ic">
                                        <img src={calendar} alt="check" />
                                    </span>
                                    {text}
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Container>
            </section>
        </Box>
    );
}
