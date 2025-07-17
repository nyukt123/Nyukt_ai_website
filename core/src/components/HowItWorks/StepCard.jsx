import { Paper, Typography, Box } from "@mui/material";
import "./StepCard.css";

function StepCard({ step }) {
  return (
    <Paper
      elevation={0}
      className="step-card"
    >
      <Box
        className="step-number"
        style={{
          backgroundColor: step.color,
        }}
      >
        {step.id}
      </Box>
      <Typography variant="h6" className="step-title">
        {step.title}
      </Typography>
      <Typography variant="body2" className="step-subdesc">
        {step.subdesc}
      </Typography>
    </Paper>
  );
}

export default StepCard;
