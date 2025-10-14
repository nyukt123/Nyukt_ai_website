import { Box, Typography, Button, Paper, Grid } from "@mui/material";
import "./StepDetailCard.css";
import visionic from "../../assets/icons/visionic.png";
import checkg from "../../assets/icons/check-circle-g.png";
import playb from "../../assets/icons/playb.png";

function StepDetailCard() {
  return (
    <Grid className="outer-most-ico">
      <Paper className="step-detail-card">
        {/* Text + Image Section */}
        <Box className="step-text-section">
          {/* Heading with Icon */}
          <Box className="step-heading-group">
            <img src={visionic} className="visionicon-s" alt="Vision Icon" />
            <Box>
              <Typography variant="h6" className="step-title">
                Describe Your Vision
              </Typography>
              <Typography className="step-subtitle">
                Tell us what you want to achieve
              </Typography>
            </Box>
          </Box>

          {/* Description */}
          <Typography variant="body2" className="step-description">
            Simply describe your business process in natural language. Our AI
            understands context and helps you map out the perfect automation
            strategy.
          </Typography>

          {/* List */}
          <ul className="step-list">
            <li>
              <img src={checkg} className="check-icon" />
              <span>Natural language processing</span>
            </li>
            <li>
              <img src={checkg} className="check-icon" />
              <span>Semantic mapping</span>
            </li>
            <li>
              <img src={checkg} className="check-icon" />
              <span>Insightful suggestions</span>
            </li>
            <li>
              <img src={checkg} className="check-icon" />
              <span>Context understanding</span>
            </li>
          </ul>

          {/* Buttons */}
          <Box className="step-buttons">
            <Button variant="contained" className="btn-primary-sc">
              Try this Step →
            </Button>
            <Button variant="text" size="small" className="btn-outline-sc">
              <img src={playb} className="playb-ico" /> Watch Demo
            </Button>
          </Box>
        </Box>

        {/* Visual Placeholder */}
        <Box className="step-visual-placeholder" />
      </Paper>
    </Grid>
  );
}

export default StepDetailCard;
