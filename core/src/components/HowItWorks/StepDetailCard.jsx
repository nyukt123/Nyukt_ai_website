import { Box, Typography, Button, Paper, Grid } from "@mui/material";
import "./StepDetailCard.css";
import visionic from "../../assets/icons/visionic.png";

function StepDetailCard() {
  return (
    <Grid className="outer-most-ico">
      <Paper className="step-detail-card">
        {/* Text Section */}
        <Box className="step-text-section step-detail-cards">
          <Typography>
            <img src={visionic} className="visionicon-s" />
          </Typography>
          <Typography variant="h6" fontWeight={700} gutterBottom>
            Describe Your Vision
          </Typography>
          <Typography fontWeight={400} gutterBottom>
            Tell us what you want to achieve
          </Typography>
          <Typography variant="body2" className="step-description">
            Simply describe your business process in natural language. Our AI
            understands context and helps you map out the perfect automation
            strategy.
          </Typography>
          <ul className="step-list">
            <li>Natural language processing</li>
            <li>Semantic mapping</li>
            <li>Insightful suggestions</li>
          </ul>
          <Box className="step-buttons">
            <Button variant="outlined" size="small">
              Try this Step →
            </Button>
            <Button variant="text" size="small">
              Watch Demo
            </Button>
          </Box>
        </Box>

        {/* Visual/Media Section */}
        <Box className="step-visual-placeholder" />
      </Paper>
    </Grid>
  );
}

export default StepDetailCard;
