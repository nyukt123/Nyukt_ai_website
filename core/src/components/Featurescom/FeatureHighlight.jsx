import {
  Box,
  Grid,
  Container,
  Typography,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./FeatureHighlight.css";
import f2ic1 from "../../assets/icons/f2i1.png";
import featureImage from "../../assets/images/placeholderimage.png";
import chkcircle from "../../assets/icons/chkcircle-f.png";

// image
import dcvimage from "../../assets/images/dcvimage.png";


const FeatureHighlight = () => {
  return (
    <section className="feature-highlight-section">
      <Container>
        
        <Grid container spacing={10} alignItems="center" className="f-main-grid">
          {/* Left Content */}
          <Grid item xs={12} md={6} className="feature-right">
            <Stack spacing={3}>
              <Box className="icon-chip-row">
                <Box className="feature-icon-box">
                  <img src={f2ic1} alt="icon" className="feature-icon-img" />
                </Box>
                <Chip label="Featured Capability" className="feature-chip" />
              </Box>

              <Typography variant="h5" className="feature-title">
                Design Conversations Visually
              </Typography>

              <Typography variant="body2" className="feature-description">
                Create powerful agents with a drag-and-drop interface. Build
                logic, conditions, and flows without a single line of code.
              </Typography>

              <Typography >
                <Box className="feature-list">
                {[
                  {
                    title: "Drag-and-Drop Builder",
                    description: "Intuitive interface that anyone can use",
                  },
                  {
                    title: "Real-Time Preview",
                    description: "See your agent in action as you build",
                  },
                  {
                    title: "Logic Conditions",
                    description: "Create complex decision trees visually",
                  },
                ].map((item, idx) => (
                  <Box key={idx} className="feature-list-item">
                    <Box className="feature-list-icon">
                      <img src={chkcircle} className="chkcircleicon"/>
                    </Box>
                    <Box className="feature-list-text">
                      <Typography variant="body1" className="feature-main-text">
                        {item.title}
                      </Typography>
                      <Typography variant="body2" className="feature-sub-text">
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>

              <Button
                variant="contained"
                className="feature-cta-btn"
                endIcon={<ArrowForwardIcon />}
              >
                Try the Builder
              </Button>
              </Typography>
            </Stack>
          </Grid>

          {/* Right Image */}
          <Grid item xs={12} md={6} className="feature-right">
            <Box className="feature-img-wrap">
              <img
                src={dcvimage}
                alt="Builder preview"
                className="feature-img"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default FeatureHighlight;
