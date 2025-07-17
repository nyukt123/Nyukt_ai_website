import { Box, Typography, Grid, Chip } from "@mui/material";
import StepCard from "./StepCard";
const steps = [
  { id: 1, title: "Describe Your Vision", subdesc: "2 min", color: "#7C3AED" },
  { id: 2, title: "Build Visually", subdesc: "10 min", color: "#1364FE" },
  { id: 3, title: "Connect Everything", subdesc: "5 min", color: "#16A34A" },
  { id: 4, title: "Deploy & Scale", subdesc: "3 min", color: "#FB923C" },
];

export default function StepperProcess() {
  return (
    <Box sx={{ py: 10, textAlign: "center" }}>
      <Chip
        label=" Simple Four Step Process"
        className="hero-badge"
        size="small"
      />
      <Typography variant="h5" className="special-head-text">
        From Idea to AI Agent in Minutes
      </Typography>
      <Typography
        variant="body2"
        sx={{ my: 2 }}
        className="special-head-sub-text"
      >
        Our intuitive process makes it easy for anyone to create powerful AI automation, no matter their technical background
      </Typography>

      <Grid container spacing={2} justifyContent="center" sx={{ mt: 4 }}>
        {steps.map((step) => (
          <StepCard key={step.id} step={step} />
        ))}
      </Grid>
    </Box>
  );
}
