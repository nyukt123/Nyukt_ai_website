import {
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Slide,
} from "@mui/material";
// import heroimg from "../../src/assets/hero-image.jpeg";
import homeheroside from "../../src/assets/homeheroside.png";
// import StatsSection from "../components/Homecom/StatsSection";
import agentImg from "../../src/assets/agentv2.jpg";
import ChatIcon from "@mui/icons-material/Chat";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import GroupsIcon from "@mui/icons-material/Groups";
import SecurityIcon from "@mui/icons-material/Security";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import "./Home.css";

import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import DescriptionIcon from "@mui/icons-material/Description";
import InsightsIcon from "@mui/icons-material/Insights";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
// benifits
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CheckIcon from "@mui/icons-material/Check";
import PlayCircleOutlineSharpIcon from "@mui/icons-material/PlayCircleOutlineSharp";
import drive from "../assets/icons/drive.png";
import feather from "../assets/icons/feather.png";
import table from "../assets/icons/table.png";
import dmlogo from "../assets/dmlogo.jpg";

export const Home = () => {
  const features = [
    {
      title: "Customer Support Automation",
      description:
        "AI agents that handle customer inquiries 24/7, resolving up to 85% of tickets without human intervention while maintaining high satisfaction rates.",
      icon: <SupportAgentIcon sx={{ fontSize: 40, color: "#7f22fe" }} />,
    },
    {
      title: "Intelligent Document Processing",
      description:
        "Extract, classify, and process information from invoices, contracts, and forms with 99% accuracy, reducing manual data entry by over 90%.",
      icon: <DescriptionIcon sx={{ fontSize: 40, color: "#7f22fe" }} />,
    },
    {
      title: "Automated Data Analysis",
      description:
        "AI agents that continuously analyze business data to identify trends, anomalies, and opportunities, delivering actionable insights in real-time.",
      icon: <InsightsIcon sx={{ fontSize: 40, color: "#7f22fe" }} />,
    },
  ];

  const benefits = [
    {
      title: "Time Savings",
      description:
        "Reduce task completion time by up to 80% with automated AI agents handling repetitive processes.",
      icon: <AccessTimeIcon sx={{ color: "#7f22fe", fontSize: 28 }} />,
    },
    {
      title: "Cost Efficiency",
      description:
        "Our clients typically see a 60% reduction in operational costs within the first six months of implementation.",
      icon: <MonetizationOnIcon sx={{ color: "#7f22fe", fontSize: 28 }} />,
    },
    {
      title: "Scalability",
      description:
        "Scale your AI operations effortlessly from a single department to enterprise-wide deployment.",
      icon: <TrendingUpIcon sx={{ color: "#7f22fe", fontSize: 28 }} />,
    },
    {
      title: "Enterprise Security",
      description:
        "Military-grade encryption and compliance with industry regulations like GDPR, HIPAA, and SOC 2.",
      icon: <SecurityIcon sx={{ color: "#7f22fe", fontSize: 28 }} />,
    },
    {
      title: "Team Empowerment",
      description:
        "Free your team from mundane tasks to focus on creative and strategic initiatives that drive growth.",
      icon: <PeopleAltIcon sx={{ color: "#7f22fe", fontSize: 28 }} />,
    },
    {
      title: "Rapid Deployment",
      description:
        "Go from concept to production in days instead of months with our pre-built templates and connectors.",
      icon: <RocketLaunchIcon sx={{ color: "#7f22fe", fontSize: 28 }} />,
    },
    {
      title: "24/7 Support",
      description:
        "Access to our dedicated support team and comprehensive resources to ensure your success.",
      icon: <SupportAgentIcon sx={{ color: "#7f22fe", fontSize: 28 }} />,
    },
    {
      title: "Continuous Innovation",
      description:
        "Regular platform updates with the latest AI advancements to keep your business ahead of the competition.",
      icon: <AutoAwesomeIcon sx={{ color: "#7f22fe", fontSize: 28 }} />,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="home-hero">
        <Box className="award-badge">
          <CheckIcon className="check-icon" />
          <Typography variant="body2" className="badge-text">
            Enterprise AI Platform of the Year - 2025 Tech Awards
          </Typography>
        </Box>
        <Grid
          container
          spacing={4}
          alignItems="center"
          item
          xs={12}
          md={6}
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          <Grid item xs={12} md={6} className="hero-text-container">
            <Typography variant="h3" className="hero-heading">
              Transform Ideas into <br /> Intelligent AI Agents <br /> — No Code{" "}
              <br />
              Required
            </Typography>
            <Typography variant="body1" className="hero-text">
              Nyukt empowers enterprises to create, deploy, and manage custom AI
              agents that automate workflows, analyze data, and deliver
              exceptional experiences—all without writing a single line of code.
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

              {/* New stats section */}
            </Box>
            <Box mt={4} className="stats-section">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Box className="stat-item">
                    <img src={drive} alt="Drive Icon" className="stat-icon" />
                    <Box>
                      <Typography variant="subtitle2" className="subtitle2">
                        Used by 500+
                      </Typography>
                      <Typography variant="caption" className="captions-hero">
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
                      <Typography variant="caption" className="captions-hero">
                        AI agents <br /> created
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <Box className="stat-item">
                    <img src={table} alt="Table Icon" className="stat-icon" />
                    <Box>
                      <Typography variant="subtitle2" className="subtitle2">
                        50+
                      </Typography>
                      <Typography variant="caption" className="captions-hero">
                        Pre-built <br /> templates
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid item xs={12} md={6} className="hero-img-container">
              <Box
                sx={{
                  width: "100%",
                  maxWidth: { xs: "100%", sm: 600, md: 600 },
                  margin: "0 auto",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    maxHeight: 700,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={homeheroside}
                    alt="Hero"
                    className="hero-img"
                    style={{
                      width: "90%",
                      height: "auto",
                      borderRadius: "12px",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Typography
                  variant="caption"
                  display="block"
                  className="img-caption"
                  sx={{ mt: 2, textAlign: "center" }}
                >
                  Our no-code platform in action
                </Typography>
              </Box>
            </Grid>
          </Grid>

          
        </Grid>
        {/* trusted industrey section */}
          <Grid className="trusted-sections" item xs={12}>
           
              <Typography align="center" className="trusted-title">
                TRUSTED BY INDUSTRY LEADERS
              </Typography>
            
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
              className="trusted-section"
            >
              <Grid item xs={6} sm={3}>
                <Box className="trusted-logo-group">
                  <img src={dmlogo} alt="Logo 1" />
                </Box>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Box className="trusted-logo-group">
                  <img src={dmlogo} alt="Logo 2" />
                </Box>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Box className="trusted-logo-group">
                  <img src={dmlogo} alt="Logo 3" />
                </Box>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Box className="trusted-logo-group">
                  <img src={dmlogo} alt="Logo 4" />
                </Box>
              </Grid>
            </Grid>
          </Grid>
      </section>

      {/* Section 2 start */}
      <section className="home-info">
        {/* Section Heading & Intro */}
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" className="info-heading" gutterBottom>
            Discover the Power of No-Code AI
          </Typography>
          <Typography variant="body1" className="info-intro">
            From natural conversations to enterprise-grade integration, Nyukt
            empowers your business to do more—with less.
          </Typography>
        </Box>

        {/* Main Grid Content */}
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <img src={agentImg} alt="Agent Feature" className="info-img" />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Why Choose Our Platform?
            </Typography>
            <Typography variant="body1" className="info-description">
              Nyukt offers a comprehensive platform to create, customize, and
              manage AI agents seamlessly.
            </Typography>

            {/* Info Points */}
            <Box className="info-point" mt={3}>
              <ChatIcon color="primary" sx={{ mr: 1 }} />
              <div>
                <Typography variant="subtitle1">
                  Natural Conversations
                </Typography>
                <Typography variant="body2">
                  Enable smooth, human-like interactions through our advanced
                  NLP engine.
                </Typography>
              </div>
            </Box>

            <Box className="info-point" mt={2}>
              <AccessTimeFilledIcon color="primary" sx={{ mr: 1 }} />
              <div>
                <Typography variant="subtitle1">24/7 Availability</Typography>
                <Typography variant="body2">
                  Your agents are always ready to respond, anytime, anywhere.
                </Typography>
              </div>
            </Box>

            <Box className="info-point" mt={2}>
              <GroupsIcon color="primary" sx={{ mr: 1 }} />
              <div>
                <Typography variant="subtitle1">Team Collaboration</Typography>
                <Typography variant="body2">
                  Work together with your team to build and refine agents
                  faster.
                </Typography>
              </div>
            </Box>

            <Box className="info-point" mt={2}>
              <SecurityIcon color="primary" sx={{ mr: 1 }} />
              <div>
                <Typography variant="subtitle1">Enterprise Security</Typography>
                <Typography variant="body2">
                  Data protection and compliance are built-in from the ground
                  up.
                </Typography>
              </div>
            </Box>

            <Box className="info-point" mt={2}>
              <CheckCircleOutlineIcon color="primary" sx={{ mr: 1 }} />
              <div>
                <Typography variant="subtitle1">Easy Integration</Typography>
                <Typography variant="body2">
                  Connect with your existing systems and apps effortlessly.
                </Typography>
              </div>
            </Box>

            <Box mt={4}>
              <Button variant="contained" className="btn-primary">
                Explore Features
              </Button>
            </Box>
          </Grid>
        </Grid>
      </section>
      {/* Section 2 end */}

      {/* section 3 start */}
      <section className="features-section">
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" className="features-heading" gutterBottom>
            Transform Your Business Processes
          </Typography>
          <Typography variant="body1" className="features-subheading">
            See how Nyukt's AI agents can revolutionize operations across
            departments
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card className="feature-card" elevation={4}>
                <CardContent className="feature-card-content">
                  <Box mb={2}>{feature.icon}</Box>
                  <Typography variant="h6" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="feature-description"
                    gutterBottom
                  >
                    {feature.description}
                  </Typography>
                  <Box mt={2}>
                    <Button className="btn-learn">
                      Learn more <ArrowRightAltIcon />
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}

          {/* Centered "View all use cases" */}
          {/* <Box mt={4} textAlign="center">
            <Box
              display="inline-flex"
              alignItems="center"
              sx={{
                color: "#7f22fe",
                fontWeight: 700,
                cursor: "pointer",
                marginLeft: "500px",
              }}
            >
              <Typography variant="caption" sx={{ fontWeight: 700 }}>
                View all use cases
              </Typography>
              <ArrowRightAltIcon sx={{ fontSize: 18, ml: 0.5 }} />
            </Box>
          </Box> */}
        </Grid>
      </section>
      {/* section 3 end */}

      {/* section 4 start */}
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
              lg={3}
              key={index}
              className="benefit-grid-item"
            >
              <Box className="why-benefit-box">
                <Box display="flex" alignItems="flex-start" mb={2}>
                  <Box className="why-icon">{benefit.icon}</Box>
                  <Typography variant="subtitle1" className="why-title" ml={1}>
                    {benefit.title}
                  </Typography>
                </Box>
                <Typography variant="body2" className="why-description">
                  {benefit.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </section>
      {/* section 4 end */}

      {/* section 5 start */}

      <section className="cta-section">
        <Box className="cta-container">
          <Typography variant="h4" className="cta-heading" gutterBottom>
            Ready to Transform Your Business with AI Agents?
          </Typography>
          <Typography variant="body1" className="cta-subheading">
            Join hundreds of forward-thinking companies that are already
            leveraging Nyukt to automate processes, reduce costs, and drive
            innovation.
          </Typography>

          <Box className="cta-buttons" mt={4}>
            <Button variant="contained" className="btn-primarys">
              Start Free Trial
            </Button>
            <Button variant="outlined" className="btn-outlines">
              Schedule Demo
            </Button>
          </Box>

          <Box className="cta-features" mt={4}>
            <Box className="cta-feature-item">
              <span>✔</span> 14-day free trial
            </Box>
            <Box className="cta-feature-item">
              <span>✔</span> No credit card required
            </Box>
            <Box className="cta-feature-item">
              <span>✔</span> Cancel anytime
            </Box>
          </Box>
        </Box>
      </section>

      {/* section 5 end */}
    </>
  );
};

export default Home;
