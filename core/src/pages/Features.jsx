import { Grid, Typography, Button, Box, Paper, Container } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BuildIcon from "@mui/icons-material/Build";
import TranslateIcon from "@mui/icons-material/Translate";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import TimelineIcon from "@mui/icons-material/Timeline";
import ForumIcon from "@mui/icons-material/Forum";
import InsightsIcon from "@mui/icons-material/Insights";
import "./Features.css";

// import play from "../assets/icons/play.png";
// componentes
import FeatureGrid from "../components/Featurescom/FeaturesGrid";
import FeatureHighlight from "../components/Featurescom/FeatureHighlight";
import IntegrationSection from "../components/Featurescom/IntegrationSection";


export const Features = () => {
  return (
    <>
      {/* Section 1: Hero - start*/}
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
                  <PlayArrowOutlinedIcon
                    sx={{ fontSize: "40px", marginRight: "8px" }}
                  />
                }
              >
                Watch Demo
              </Button>
            </Box>
          </Box>
        </Container>
      </section>
      {/* Section 1: Hero - end */}

      {/* Section 2: Features Grid - start*/}
      <section>
        <FeatureGrid />
      </section>
      {/* Section 2: Features Grid - end */}

      {/* section 3: Featureshihglight - start */}
      <section>
        <FeatureHighlight />
      </section>
      {/* section 3: Featureshihglight - end */}

      {/* section 4:  - start */}
      <section>
       <IntegrationSection/>
      </section>
      {/* section 3:  - end */}
    </>
  );
};

export default Features;
