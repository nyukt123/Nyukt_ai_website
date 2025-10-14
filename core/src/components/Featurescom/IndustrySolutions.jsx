import { Box, Container, Grid, Typography, Button, Chip } from "@mui/material";
import "./IndustrySolutions.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Icons (use your real icons here)
import healthcare from "../../assets/icons/industrysol/healthcare.png";
import finance from "../../assets/icons/industrysol/building.png";
import ecommerce from "../../assets/icons/industrysol/cart.png";
import manufacturing from "../../assets/icons/industrysol/manufacturing.png";
import education from "../../assets/icons/industrysol/education.png";
import realestate from "../../assets/icons/industrysol/building.png";
import users from "../../assets/icons/industrysol/users.png";

const industries = [
  // {
  //   icon: healthcare,
  //   title: "Healthcare",
  //   desc: "HIPAA-compliant AI agents for patient engagement and healthcare automation.",
  //   growthtext: "High",
  //   growth: "+23%",
  //   features: [
  //     "Patient appointment scheduling ",
  //     " Symptom assessment and triage",
  //     "Medication reminders",
  //     "Insurance verification ",
  //     "HIPAA compliance built in",
  //   ],
  //   useCase:
  //     "Patient Support, Claims Processing,Medical Records Management, +2",
  // },
  {
    icon: users,
    title: "HR",
    desc: "AI solutions for hiring, talent management, and workforce optimization",
    growth: "+35%",
    growthtext: "Growing",
    features: [
      " Automated resume screening ",
      " Candidate matching & ranking ",
      " Interview scheduling assistance ",
      " Employee performance insights ",
      " Onboarding & training support ",
    ],
    useCase:

      "Smart Recruiter,Resume Screener,Interview Assistant,HR Analytics,+3",

    link: "https://smarthireai.nyukt.ai/"
  },
  {
    icon: healthcare,
    title: "Healthcare",
    desc: "HIPAA-compliant AI agents for patient engagement and healthcare automation.",
    growthtext: "High",
    growth: "+23%",
    features: [
      "Patient appointment scheduling ",
      " Symptom assessment and triage",
      "Medication reminders",
      "Insurance verification ",
      "HIPAA compliance built in",
    ],
    useCase:
      "Patient Support, Claims Processing,Medical Records Management, +2",
    link: "https://smarthireai.nyukt.ai/"
  },
  {
    icon: finance,
    title: "Financial Services",
    desc: "Secure AI solutions for banking, insurance, and fintech applications",
    growth: "+18%",
    growthtext: "Very High",
    features: [
      "Fraud detection and prevention",
      "ustomer onboarding automation ",
      "Loan application processing",
      "Investment advisory support",
      "Regulatory compliance tools",
    ],
    useCase:
      "Banking Chatbot, Insurance Claims,Wealth Management,Risk Assessment,+3",
  },

  {
    icon: manufacturing,
    title: "Manufacturing",
    desc: "Industrial AI agents for operations, quality control, and supply chain",
    growth: "15%",
    growthtext: "Medium",
    features: [
      "Quality control automation",
      " Predictive maintenance alerts ",
      " Supply chain optimization",
      "Safety compliance monitoring",
      " Production planning assistance",
    ],
    useCase:
      "Quality Inspector, Maintenance Scheduler ,Supply Chain Monitor,Safety Compliance,+3",
  },
  {
    icon: education,
    title: "Education",
    desc: "Educational AI agents for learning support and administrative tasks",
    growth: "+14%",
    growthtext: "Growing",
    features: [
      "Student enrollment assistance",
      "Personalized learning paths",
      "Grade and attendance tracking",
      "Course recommendation engine",
      "Administrative task automation",
    ],
    useCase:
      "Student Advisor, Learning Assistant,Administrative Helper,Course Planner,+3",
  },
  {
    icon: realestate,
    title: "Real Estate",
    desc: "AI solutions for property management and real estate transactions",
    growth: "+22%",
    growthtext: "Medium",
    features: [
      "Property listing automation",
      "Lead qualification and nurturing",
      "Market analysis and reporting",
      "Tenant screening assistance",
      "Contract management support",
    ],
    useCase: "Site Visits, Lease Management",
  },
];

const IndustrySolutions = () => {
  return (
    <section className="industry-section">
      <Container maxWidth="xl">
        <Box className="industry-chip-wrap">
          <Chip label="Industry Solutions" className="industry-chip" />
        </Box>
        <Typography variant="h4" className="industry-title">
          Tailored for Your Industry
        </Typography>
        <Typography className="industry-subtitle">
          Discover how Nyukt’s AI agents are specifically designed to solve the
          unique challenges in your industry.
        </Typography>

        {/* <Grid container spacing={2}>
          {industries.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box className="industry-card">
                <Box className="industry-header">
                  <img src={item.icon} alt={item.title} />
                </Box>

                <Typography className="industry-card-title">
                  {item.title}
                </Typography>
                <Typography className="industry-desc">{item.desc}</Typography>
                <Box className="industry-metrics">
                  <Box className="industry-metric-item">
                    <Typography className="industry-metric-value">
                      {item.growthtext}
                    </Typography>
                    <Typography className="industry-metric-label">
                      Adoption Rate
                    </Typography>
                  </Box>
                  <Box className="industry-metric-item">
                    <Typography className="industry-metric-value industry-growth">
                      {item.growth}
                    </Typography>
                    <Typography className="industry-metric-label">
                      YoY Growth
                    </Typography>
                  </Box>
                </Box>
                <Box className="industry-list">
                  <Typography className="industry-subhead">
                    Key Features
                  </Typography>
                  <ul>
                    {item.features.map((feat, i) => (
                      <li key={i} className="key-features-list">
                        {feat}
                      </li>
                    ))}
                  </ul>
                </Box>

                <Box className="industry-use">
                  {item.useCase.split(",").map((use, idx) => (
                    <Box key={idx} className="industry-use-tag">
                      {use.trim()}
                    </Box>
                  ))}
                </Box>

                <Button className="industry-cta" endIcon={<ArrowForwardIcon />}>Explore Solutions </Button>
              </Box>
            </Grid>
          ))}
        </Grid> */}

        <Grid container spacing={2}>
          {industries.map((item, index) => (
            <Grid
              item
              xs={12}   // 1 per row on very small mobile
              sm={6}    // 2 per row on tablets
              md={4}    // 3 per row on desktops
              key={index}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Box className="industry-card">
                <Box className="industry-header">
                  <img src={item.icon} alt={item.title} />
                </Box>

                <Typography className="industry-card-title">
                  {item.title}
                </Typography>
                <Typography className="industry-desc">{item.desc}</Typography>

                <Box className="industry-metrics">
                  <Box className="industry-metric-item">
                    <Typography className="industry-metric-value">
                      {item.growthtext}
                    </Typography>
                    <Typography className="industry-metric-label">
                      Adoption Rate
                    </Typography>
                  </Box>
                  <Box className="industry-metric-item">
                    <Typography className="industry-metric-value industry-growth">
                      {item.growth}
                    </Typography>
                    <Typography className="industry-metric-label">YoY Growth</Typography>
                  </Box>
                </Box>

                <Box className="industry-list">
                  <Typography className="industry-subhead">Key Features</Typography>
                  <ul>
                    {item.features.map((feat, i) => (
                      <li key={i} className="key-features-list">{feat}</li>
                    ))}
                  </ul>
                </Box>

                <Box className="industry-use">
                  {item.useCase.split(",").map((use, idx) => (
                    <Box key={idx} className="industry-use-tag">{use.trim()}</Box>
                  ))}
                </Box>

                <Button className="industry-cta" endIcon={<ArrowForwardIcon />}>
                  Explore Solutions
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>

      </Container>
    </section>
  );
};

export default IndustrySolutions;