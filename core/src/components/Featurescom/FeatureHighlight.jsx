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
import "./FeatureHighlight.css";

import f2ic1 from "../../assets/icons/f2i1.png";
import chkcircle from "../../assets/icons/chkcircle-f.png";
import dcvimage from "../../assets/images/dcvimage.png";

const FeatureHighlight = () => {
  return (
    <section className="feature-highlight-section">
      <Container maxWidth="lg">
        <Grid
          container
          spacing={6}
          alignItems="center"
          justifyContent="space-between"
          className="feature-grid"
        >
          {/* Left Content */}
          <Grid item xs={12} md={6} className="feature-left">
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

              <Typography variant="body2" className="feature-all-list">
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
                    <img src={chkcircle} className="chkcircleicon" />
                    <Box>
                      <Typography
                        variant="body1"
                        className="feature-main-text"
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="feature-sub-text"
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
              </Typography>

              <Button
                variant="contained"
                className="feature-cta-btn"
                endIcon={<ArrowForwardIcon />}
              >
                Try the Builder
              </Button>
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
