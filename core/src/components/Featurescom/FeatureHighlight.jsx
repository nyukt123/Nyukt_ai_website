import { Box, Grid, Typography, Button, Chip, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./FeatureHighlight.css";
import f2ic1 from "../../assets/icons/f2i1.png"; 
import featureImage from "../../assets/images/placeholderimage.png"; 

const FeatureHighlight = () => {
  return (
    <section className="feature-highlight-section">
      <Grid container spacing={4} alignItems="center">
        {/* Left Side */}
        <Grid item xs={12} md={6}>
          <Stack spacing={2}>
            <Box className="feature-icon-box">
              <img src={f2ic1} alt="icon" className="feature-icon-img" />
            </Box>

            <Chip label="Featured Capability" className="feature-chip" />

            <Typography variant="h5" className="feature-title">
              Design Conversations Visually
            </Typography>

            <Typography variant="body2" className="feature-description">
              Create powerful agents with a drag-and-drop interface. Build logic, conditions, and flows without a single line of code.
            </Typography>

            {/* Feature List */}
            <Box className="feature-list">
              {[
                "Drag-and-Drop Builder",
                "Real-Time Preview",
                "Logic Conditions",
              ].map((text, idx) => (
                <Box key={idx} className="feature-list-item">
                  <CheckCircleIcon sx={{ fontSize: 18, color: "#7c3aed" }} />
                  <Typography variant="body2">{text}</Typography>
                </Box>
              ))}
            </Box>

            <Button variant="contained" className="feature-cta-btn" endIcon={<ArrowForwardIcon />}>
              Try the Builder
            </Button>
          </Stack>
        </Grid>

        {/* Right Side (Image) */}
        <Grid item xs={12} md={6}>
          <Box className="feature-img-wrap">
            <img src={featureImage} alt="Builder preview" className="feature-img" />
          </Box>
        </Grid>
      </Grid>
    </section>
  );
};

export default FeatureHighlight;
