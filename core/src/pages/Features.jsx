import { Grid, Typography, Button, Box, Paper, Container } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import BuildIcon from "@mui/icons-material/Build";
import TranslateIcon from "@mui/icons-material/Translate";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import TimelineIcon from "@mui/icons-material/Timeline";
import ForumIcon from "@mui/icons-material/Forum";
import InsightsIcon from "@mui/icons-material/Insights";
import "./Features.css";
import play from "../assets/icons/play.png";

const features = [
  {
    icon: <BuildIcon sx={{ color: "#7c3aed" }} />,
    title: "No-Code Agent Builder",
    description:
      "Create intelligent AI agents with our intuitive drag-and-drop interface. No programming knowledge required.",
  },
  {
    icon: <TranslateIcon sx={{ color: "#2563eb" }} />,
    title: "Natural Language Understanding",
    description:
      "Advanced AI that understands context, intent, and nuance in human communication across multiple languages.",
  },
  {
    icon: <InsertDriveFileIcon sx={{ color: "#10b981" }} />,
    title: "Ready-Made Templates",
    description:
      "Professionally designed templates for common business processes to get started quickly.",
  },
  {
    icon: <TimelineIcon sx={{ color: "#10b981" }} />,
    title: "Workflow Automation",
    description:
      "Automate complex business processes with decision-making and seamless integrations.",
  },
  {
    icon: <ForumIcon sx={{ color: "#f97316" }} />,
    title: "Multi-Channel Deployment",
    description:
      "Deploy your agents across web, mobile, chat platforms, and more.",
  },
  {
    icon: <InsightsIcon sx={{ color: "#7c3aed" }} />,
    title: "Agent Analytics",
    description:
      "Deep insights into agent performance, interactions, and business impact with real-time dashboards.",
  },
];

export const Features = () => {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="features-hero-section">
        <Container>
          <Box className="hero-content">
            <Typography variant="h3" className="hero-heading">
              What Makes <span className="highlight-text">Nyukt</span>
              <br /> Work for You
            </Typography>
            <Typography variant="body1" className="hero-subheading">
              From no-code building to multi-channel deployment — explore the
              powerful features that help you create, launch, and manage AI
              agents with ease.
            </Typography>
            <Box className="hero-buttons">
              <Button
                variant="contained"
                className="btn-primary"
                endIcon={<ArrowForwardIcon />}
              >
                Start Building Free
              </Button>

              <Button
                variant="outlined"
                className="btn-outline"
                startIcon={
                  <Box
                    component="img"
                    src={play}
                    alt="Play"
                    sx={{
                      width: 24,
                      height: 24,
                      marginRight: "4px", // spacing between icon and text
                    }}
                  />
                }
              >
                Watch Demo
              </Button>
            </Box>
          </Box>
        </Container>
      </section>

      {/* Section 2: Features Grid */}
      <section className="features-list-section">
        <Container>
          <Typography variant="h4" className="section-title" gutterBottom>
            Powerful Features to Empower Your Workflow
          </Typography>
          <Typography variant="body1" className="section-subtitle">
            Everything you need to build, deploy, and manage intelligent AI
            agents that transform how your business operates.
          </Typography>

          <Grid container spacing={4} mt={4}>
            {features.map((feature, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Paper elevation={0} className="feature-card">
                  <Box className="feature-icon">{feature.icon}</Box>
                  <Typography variant="h6" className="feature-title">
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" className="feature-desc">
                    {feature.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Features;
