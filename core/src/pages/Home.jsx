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
import homehero2 from "../../src/assets/images/homerightt.png";
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
      <section className="home-hero-sec">
        
        <div className="home-hero">
        <Box className="award-badge" >
            {/* <CheckIcon className="check-icon" /> */}
            <img src={chk2} className="chkad-ico" />
            <Typography variant="body2" className="badge-text" >
              Start up the of month June 2025 - Dubai AI Campus
            </Typography>
          </Box>
          <Grid container spacing={0} className="hero-container">
            {/* Left Content: Text */}
            <Grid item xs={12} md={6} className="hero-text-wrapper">
            <Box>
              <Typography variant="h1" className="hero-heading-home">
                Empower Your Business 
                <br/>
                With Autonomous,{" "}
                <Box component="span" style={{color:"#7C3AED"}}>Intelligent AI Agents</Box>
              </Typography>

              <Typography variant="body1" className="hero-text" style={{ marginTop: "16px" ,maxWidth:"500px"}}>
                Drive your organization forward with a next-generation artificial
                intelligence agency. Unlock transformative efficiency and productivity
                by deploying intelligent, multi-agent AI solutions designed for every
                business function.
              </Typography>

              {/* Stats */}
              <Box className="stats-section">
                <Grid container spacing={{ xs: 2, md: 3 }}>
                  <Grid item xs={12} sm={6} md={4}>
                    <Box className="stat-item">
                      <img src={drive} alt="Uptime Icon" style={{ width: 24, height: 24 }} />
                      <Box>
                        <Typography variant="subtitle2">99.9% Uptime</Typography>
                        <Typography variant="caption">
                          Guaranteed <br /> Reliability
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4}>
                    <Box className="stat-item">
                      <img src={drive} alt="Support Icon" style={{ width: 24, height: 24 }} />
                      <Box>
                        <Typography variant="subtitle2">24/7 Support</Typography>
                        <Typography variant="caption">
                          Dedicated <br /> Assistance
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>

            {/* Right Content: Image */}
            <Grid item xs={12} md={6} className="hero-img-wrapper">
              <Box className="hero-img-box">
                <img
                  src={homehero2}
                  alt="AI Agent Platform Interface"
                  className="hero-image"
                />
              </Box>
            </Grid>
          </Grid>
        </div>



      </section>
      {/* Hero section end */}

      {/* product section start*/}
      <section>
        <ProductSuite />
      </section>
      {/* product section end*/}

      {/* Section 2 start */}
     {/* Section 2 start */}
     <section className="home-info" data-scroll-section>
        {/* Section Heading & Intro */}
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" className="info-heading" gutterBottom>
            Meet <i>Nyukt</i>: The Enterprise No-Code AI Agent Platform
          </Typography>
          <Typography variant="body1" className="info-intro">
            Unlock the power of intelligent automation with fully customizable
            AI agents that evolve with your unique business needs.
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center" justifyContent="center">
          {/* Left Image */}
          <Grid item xs={12} md={5} lg={4} className="info-img-container">
            <img 
              src={section2image} 
              alt="Agent Feature" 
              className="info-img"
              style={{
                width: '100%',
                maxWidth: '100%',
                height: 'auto',
                display: 'block',
                margin: '0 auto',
                maxHeight: '500px',
                objectFit: 'contain'
              }}
            />
          </Grid>

          {/* Right Content */}
          <Grid item xs={12} md={7} lg={8} className="info-content">
            <Typography
              variant="h4"
              gutterBottom
              className="info-heading-home"
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                fontSize: { xs: '1.8rem', sm: '2rem', md: '2.2rem' },
                lineHeight: 1.3,
                mb: 3
              }}
            >
              The Future of Work is Here
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Typography
                variant="body1"
                className="info-description"
                sx={{
                  textAlign: { xs: 'center', md: 'left' },
                  fontSize: { xs: '1rem', md: '1.05rem' },
                  lineHeight: 1.7,
                  mb: 2
                }}
              >
                <i>Nyukt</i> empowers enterprises to harness AI like never before—
                enabling anyone to effortlessly create, deploy, and manage smart
                agents without writing a single line of code.
              </Typography>

              <Typography
                variant="body1"
                className="info-description"
                sx={{
                  textAlign: { xs: 'center', md: 'left' },
                  fontSize: { xs: '1rem', md: '1.05rem' },
                  lineHeight: 1.7
                }}
              >
                Our visual workflow builder simplifies designing AI agents capable
                of handling complex tasks across your entire organization.
              </Typography>
            </Box>

            {/* Info Points */}
            <Box sx={{ maxWidth: '600px', mx: { xs: 'auto', md: 0 } }}>
              <Box 
                className="info-point" 
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 2,
                  p: 2,
                  mb: 2,
                  borderRadius: 2,
                  '&:hover': {
                    bgcolor: 'rgba(124, 58, 237, 0.05)'
                  }
                }}
              >
                <img 
                  src={chkf} 
                  className="checkcircle" 
                  style={{ width: '24px', height: '24px', flexShrink: 0, marginTop: '4px' }}
                />
                <Box>
                  <Typography 
                    variant="subtitle1" 
                    sx={{
                      color: 'primary.main',
                      fontWeight: 600,
                      fontSize: '1rem',
                      mb: 0.5
                    }}
                  >
                    Visual Workflow Builder
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{
                      color: 'text.secondary',
                      fontSize: '0.95rem',
                      lineHeight: 1.6
                    }}
                  >
                    Build sophisticated AI workflows easily using a user-friendly
                    drag-and-drop interface—no coding required.
                  </Typography>
                </Box>
              </Box>

              <Box 
                className="info-point"
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 2,
                  p: 2,
                  mb: 2,
                  borderRadius: 2,
                  '&:hover': {
                    bgcolor: 'rgba(124, 58, 237, 0.05)'
                  }
                }}
              >
                <img 
                  src={chkf} 
                  className="checkcircle" 
                  style={{ width: '24px', height: '24px', flexShrink: 0, marginTop: '4px' }}
                />
                <Box>
                  <Typography 
                    variant="subtitle1" 
                    sx={{
                      color: 'primary.main',
                      fontWeight: 600,
                      fontSize: '1rem',
                      mb: 0.5
                    }}
                  >
                    Enterprise-Ready
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{
                      color: 'text.secondary',
                      fontSize: '0.95rem',
                      lineHeight: 1.6
                    }}
                  >
                    Designed for the enterprise with robust security, compliance,
                    and governance features to safeguard your data and operations.
                  </Typography>
                </Box>
              </Box>

              <Box 
                className="info-point"
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 2,
                  p: 2,
                  borderRadius: 2,
                  '&:hover': {
                    bgcolor: 'rgba(124, 58, 237, 0.05)'
                  }
                }}
              >
                <img 
                  src={chkf} 
                  className="checkcircle" 
                  style={{ width: '24px', height: '24px', flexShrink: 0, marginTop: '4px' }}
                />
                <Box>
                  <Typography 
                    variant="subtitle1" 
                    sx={{
                      color: 'primary.main',
                      fontWeight: 600,
                      fontSize: '1rem',
                      mb: 0.5
                    }}
                  >
                    Seamless Integration
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{
                      color: 'text.secondary',
                      fontSize: '0.95rem',
                      lineHeight: 1.6
                    }}
                  >
                    Easily connect <i>Nyukt</i> with your existing tools, platforms, and
                    data sources—ensuring smooth, frictionless adoption.
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box mt={4}>
              {/* <Button variant="contained" className="btn-primary">
          Explore Platform
        </Button> */}
            </Box>
          </Grid>
        </Grid>
      </section>


      {/* Section 2 end */}


      {/* Section 2 end */}
      {/* section 3 start */}
      <section
        className="stats-sec-cont"
        data-scroll-section
        data-aos-offset="200"
      >
        <StatsSection />
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
            Why Choose , <i>Nyukt</i>
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
      {/* <section>
        <PriceSection />
      </section> */}
      {/* price tag section-6 end */}

      {/* Testimonial section-7 start */}
      {/* <section>
        <TestimonialSection />
      </section> */}
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