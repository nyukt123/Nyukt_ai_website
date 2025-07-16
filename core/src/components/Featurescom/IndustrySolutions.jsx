import { Box, Container, Grid, Typography, Button, Chip } from "@mui/material";
import "./IndustrySolutions.css";

// Icons (use your real icons here)
import healthcare from "../../assets/icons/industrysol/healthcare.png";
import finance from "../../assets/icons/industrysol/building.png";
import ecommerce from "../../assets/icons/industrysol/cart.png";
import manufacturing from "../../assets/icons/industrysol/manufacturing.png";
import education from "../../assets/icons/industrysol/education.png";
import realestate from "../../assets/icons/industrysol/building.png";

const industries = [
  {
    icon: healthcare,
    title: "Healthcare",
    desc: "HIPAA-compliant AI agents for patient engagement and healthcare automation.",
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
  },
  {
    icon: finance,
    title: "Financial Services",
    desc: "Secure AI solutions for banking, insurance, and fintech applications",
    growth: "+18%",
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
    icon: ecommerce,
    title: "E-Commerce & Retail",
    desc: "AI-powered shopping experiences and inventory management solutions",
    growth: "+31%",
    features: [
      "Personalized product recommendations",
      "Inventory management automation",
      " Customer service optimization ",
      " Order tracking and updates",
      "Return and refund processing",
    ],
    useCase:
      "Shopping Assistant, Inventory Alerts,Customer Support,Sales Analytics,+1",
  },
  {
    icon: manufacturing,
    title: "Manufacturing",
    desc: "Industrial AI agents for operations, quality control, and supply chain",
    growth: "15%",
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

        <Grid container spacing={3}>
          {industries.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box className="industry-card">
                <Box className="industry-header">
                  <img src={item.icon} alt={item.title} />
                  {/* <Typography className="industry-growth">{item.growth}</Typography> */}
                </Box>
                <Typography className="industry-card-title">
                  {item.title}
                </Typography>
                <Typography className="industry-desc">{item.desc}</Typography>

                <Box className="industry-list">
                  <Typography className="industry-subhead">
                    Key Features
                  </Typography>
                  <ul>
                    {item.features.map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </Box>

                <Box className="industry-usecase">
                  <Typography className="industry-subhead">
                    Popular Use Cases
                  </Typography>
                  <Typography className="industry-use">
                    {item.useCase}
                  </Typography>
                </Box>

                <Button className="industry-cta">Explore Solutions</Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default IndustrySolutions;
