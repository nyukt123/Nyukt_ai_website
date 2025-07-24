import {
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Slide,
} from "@mui/material";
// external css
import "./Home.css";
// import heroimg from "../../src/assets/hero-image.jpeg";
// import homeheroside from "../../src/assets/homeheroside.png";
import homehero2 from "../../src/assets/images/homehero-2.png";
import StatsSection from "../components/Homecom/StatsSection";
import PriceSection from "../components/Homecom/PriceSection";
import TestimonialSection from "../components/Homecom/TestimonialSection";
import section2image from "../../src/assets/images/sec-2-img.png";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";



// benefits
import CheckIcon from "@mui/icons-material/Check";
import PlayCircleOutlineSharpIcon from "@mui/icons-material/PlayCircleOutlineSharp";
import drive from "../assets/icons/drive.png";
import feather from "../assets/icons/feather.png";
import table from "../assets/icons/table.png";

// why nyukt icons
import info from "../assets/icons/info.png";
import droplets from "../assets/icons/droplet.png";
import harddrive from "../assets/icons/hard-drive.png";
import shield2 from "../assets/icons/shield-2.png";
import users from "../assets/icons/users.png";
import helpcircle from "../assets/icons/help-circle.png";
import chk2 from "../assets/icons/chk-2ad.png";
import briefcase from "../assets/icons/brfc2.png";
import box from "../assets/icons/box2.png";

import chkf from "../assets/icons/chkcircle-f.png";

//components
import Ctasection from "../components/Homecom/CtaSection";
import ProductSuite from "../components/Homecom/ProductSuite";
import FeatureCarousel from "../components/Homecom/FeatureCarousel";
import ScrollToTopButton from "../components/Homecom/ScrollToTopButton";
export const Home = () => {
  const benefits = [
    {
      title: "Time Savings",
      description:
        "Reduce task completion time by up to  80% with automated AI agents handling repetitive processes.",
      icon: info,
    },
    {
      title: "Cost Efficiency",
      description:
        "Our clients typically see a 60% reduction in operational costs within the first six months of implementation.",
      icon: droplets,
    },
    {
      title: "Scalability",
      description:
        "Scale your AI operations effortlessly from a single department to enterprise-wide deployment.",
      icon: harddrive,
    },
    {
      title: "Enterprise Security",
      description:
        "Military-grade encryption and compliance with industry regulations like GDPR, HIPAA, and SOC 2.",
      icon: shield2,
    },
    {
      title: "Team Empowerment",
      description:
        "Free your team from mundane tasks to focus on creative and strategic initiatives that drive growth.",
      icon: users,
    },
    {
      title: "Rapid Deployment",
      description:
        "Go from concept to production in days instead of months with our pre-built templates and connectors.",
      icon: briefcase,
    },
    {
      title: "24/7 Support",
      description:
        "Access to our dedicated support team and comprehensive resources to ensure your success.",
      icon: helpcircle,
    },
    {
      title: "Continuous Innovation",
      description:
        "Regular platform updates with the latest AI advancements to keep your business ahead of the competition.",
      icon: box,
    },
  ];

  return (
    <>
      {/* Hero Section start */}
      <section className="home-hero">
        <Grid className="home-hero-second-cont">
          <Box className="award-badge">
            {/* <CheckIcon className="check-icon" /> */}
            <img src={chk2} className="chkad-ico" />
            <Typography variant="body2" className="badge-text">
              Enterprise AI Platform of the Year - 2025 Tech Awards
            </Typography>
          </Box>

          <Grid container spacing={4} alignItems="center">
            {/* Left Content: Text */}
            <Grid
              item
              xs={12}
              md={6}
              className="hero-text-wrapper animate-left"
            >
              <Box className="hero-text-container">
                <Typography variant="h1" className="hero-heading-home">
                  Empower Your Business
                  <br />
                  With Autonomous,
                  <br />
                  <span className="highlight-text">Intelligent AI Agents</span>
                </Typography>

                <Typography variant="body1" className="hero-text">
                  Drive your organization forward with a next-generation
                  artificial intelligence agency. Unlock transformative
                  efficiency and productivity by deploying intelligent,
                  multi-agent AI solutions designed for every business function.
                </Typography>

                <Box mt={4}>
                  <Button
                    variant="contained"
                    className="btn-primary"
                    sx={{ mr: 2 }}
                  >
                    Start Free Trial
                  </Button>
                  <Button variant="outlined" className="btn-outline">
                    <PlayCircleOutlineSharpIcon /> Watch Demo
                  </Button>
                </Box>

                {/* Stats */}
                <Box mt={4} className="stats-section">
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                      <Box className="stat-item">
                        <img
                          src={drive}
                          alt="Drive Icon"
                          className="stat-icon"
                        />
                        <Box>
                          <Typography variant="subtitle2" className="subtitle2">
                            Used by 500+
                          </Typography>
                          <Typography
                            variant="caption"
                            className="captions-hero"
                          >
                            Enterprise <br /> Companies
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                      <Box className="stat-item">
                        <img
                          src={feather}
                          alt="Feather Icon"
                          className="stat-icon"
                        />
                        <Box>
                          <Typography variant="subtitle2" className="subtitle2">
                            10,000+
                          </Typography>
                          <Typography
                            variant="caption"
                            className="captions-hero"
                          >
                            AI agents <br /> created
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                      <Box className="stat-item">
                        <img
                          src={table}
                          alt="Table Icon"
                          className="stat-icon"
                        />
                        <Box>
                          <Typography variant="subtitle2" className="subtitle2">
                            50+
                          </Typography>
                          <Typography
                            variant="caption"
                            className="captions-hero"
                          >
                            Pre-built <br /> templates
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>

            {/* Right Content: Image */}
            <Grid
              item
              xs={12}
              md={6}
              className="hero-img-wrapper animate-right"
            >
              <Box className="hero-img-box">
                <img src={homehero2} alt="Hero" className="hero-img" />
                {/* <Typography variant="caption" className="img-caption">
                Our no-code platform in action
              </Typography> */}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </section>
      {/* Hero section end */}

      {/* product section start*/}
      <section>
        <ProductSuite />
      </section>
      {/* product section end*/}

      {/* Section 2 start */}
      <section 
       className="home-info"
       data-aos="fade-up" 
       data-scroll-section
       data-aos-offset="200" 
       >
        {/* Section Heading & Intro */}
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" className="info-heading" gutterBottom>
            Meet Nyukt: The Enterprise No-Code AI Agent Platform
          </Typography>
          <Typography variant="body1" className="info-intro">
            Unlock the power of intelligent automation with fully customizable
            AI agents that evolve with your unique business needs.
          </Typography>
        </Box>

        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6} data-aos="fade-right" data-aos-offset="200">
            <img src={section2image} alt="Agent Feature" className="info-img" />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom data-aos="fade-left" className="info-heading-home">
              The Future of Work here
            </Typography>
            <Typography
              variant="body1"
              className="info-description"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              Nyukt empowers enterprises to harness AI like never
              before—enabling anyone to effortlessly create, deploy, and manage
              smart agents without writing a single line of code.
              
            </Typography>
           
            <Typography
              variant="body1"
              className="info-description"
              data-aos="fade-left"
              data-aos-delay="50"
              sx={{mt:1}}>
              Our visual
              workflow builder simplifies designing AI agents capable of
              handling complex tasks across your entire organization.
            </Typography>

            {/* Info Points */}
            <Box
              className="info-point"
              mt={3}
              data-aos="fade-up"
              data-aos-delay="200"
            >
            
              <img src={chkf} sx={{ mr: 1 }} className="checkcircle"/>
              <div>
                <Typography variant="subtitle1" className="subtitle1">
                  Visual Workflow Builder
                </Typography>
                <Typography variant="body2" className="subtitle2s">
                  Build sophisticated AI workflows easily using a user-friendly
                  drag-and-drop <br /> interface—no coding required.
                </Typography>
              </div>
            </Box>

            <Box
              className="info-point"
              mt={2}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <img src={chkf} sx={{ mr: 1 }} className="checkcircle"/>
              <div>
                <Typography variant="subtitle1" className="subtitle1">
                  Enterprise-Ready
                </Typography>
                <Typography variant="body2" className="subtitle2s">
                 Designed for the enterprise with robust security, compliance, and governance<br/> features to safeguard your data and operations
                </Typography>
              </div>
            </Box>

            <Box
              className="info-point"
              mt={2}
              data-aos="fade-up"
              data-aos-delay="400"
            >
             <img src={chkf} sx={{ mr: 1 }} className="checkcircle"/>
              <div>
                <Typography variant="subtitle1" className="subtitle1">
                  Seamless Integration
                </Typography>
                <Typography variant="body2" className="subtitle2s">
                  Easily connect Nyukt with your existing tools, platforms, and data <br/> sources—ensuring smooth, frictionless adoption.
                </Typography>
              </div>
            </Box>

            <Box mt={4} data-aos="zoom-in" data-aos-delay="500">
              <Button variant="contained" className="btn-primary">
                Explore Platform
              </Button>
            </Box>
          </Grid>
        </Grid>

      </section>

      {/* Section 2 end */}
      {/* section 3 start */}
      <section 
      className="stats-sec-cont"
       data-scroll-section
       data-aos-offset="200"
      >
        <StatsSection/>
      </section>
      {/* section 3 end */}
      {/* section 4 start */}
      <section>
        <FeatureCarousel />
      </section>
      {/* section 4 end */}

      {/* section 5 start */}
      <section className="why-nyukt-section">
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" className="why-heading" gutterBottom>
            Why Choose Nyukt
          </Typography>
          <Typography variant="body1" className="why-subheading">
            Our platform delivers significant advantages that empower your
            organization
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {benefits.map((benefit, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              key={index}
              className="benefit-grid-item"
            >
              <Box className="why-benefit-box">
                <Box className="why-content-wrapper">
                  <Box className="why-icon">
                    <img
                      src={benefit.icon}
                      alt={benefit.title}
                      className="why-icon-img"
                    />
                  </Box>
                  <Box className="why-text-content">
                    <Typography variant="subtitle1" className="why-title">
                      {benefit.title}
                    </Typography>
                    <Typography variant="body2" className="why-description">
                      {benefit.description}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </section>
      {/* section 5 end */}

      {/* price tag section-6 start */}
      <section>
        <PriceSection />
      </section>
      {/* price tag section-6 end */}

      {/* Testimonial section-7 start */}
      <section>
        <TestimonialSection />
      </section>
      {/* Testimonial section-7 end */}

      {/* section 8 start */}
      <section>
        <Ctasection />
      </section>
      {/* section 8 end */}

      {/* scroll-to-page btn start */}
      <section>
        <ScrollToTopButton />
      </section>
      {/* scroll-to-page btn start */}
    </>
  );
};

export default Home;
