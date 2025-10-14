import { Box, Typography, Grid, Chip, Container, Paper } from "@mui/material";
import "./StepperProcess.css";

const steps = [
  { id: 1, title: "Describe Your Vision", subdesc: "2 min", color: "#7C3AED" },
  { id: 2, title: "Build Visually", subdesc: "10 min", color: "#1364FE" },
  { id: 3, title: "Connect Everything", subdesc: "5 min", color: "#16A34A" },
  { id: 4, title: "Deploy & Scale", subdesc: "3 min", color: "#FB923C" },
];

export default function StepperProcess() {
  return (
    <Box
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        px: { xs: 2, sm: 4, md: 6 },
        textAlign: "center",
        backgroundColor: "#fff",
      }}
    >
      <Container maxWidth="xl">
        {/* Badge */}
        <Chip
          label="Simple Four Step Process"
          size="small"
          sx={{
            backgroundColor: "#7C3AED",
            color: "#fff",
            fontWeight: 600,
            fontSize: { xs: "11px", sm: "12px" },
            borderRadius: "4px",
            px: { xs: 1.5, sm: 2 },
            py: { xs: 0.5, sm: 0.75 },
            mb: { xs: 2, sm: 3 },
          }}
        />

        {/* Heading */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: "#1d293d",
            fontSize: { xs: "22px", sm: "28px", md: "32px" },
            mb: 1,
          }}
        >
          From Idea to AI Agent in Minutes
        </Typography>

        {/* Subheading */}
        <Typography
          variant="body2"
          sx={{
            my: 2,
            color: "#374151",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "14px", sm: "15px", md: "16px" },
            lineHeight: 1.6,
            maxWidth: "700px",
            mx: "auto",
            px: { xs: 2, sm: 0 },
          }}
        >
          Our intuitive process makes it easy for anyone to create powerful AI
          automation, no matter their technical background.
        </Typography>

        {/* Steps */}
        <Grid
          container
          spacing={{ xs: 2, sm: 3 }}
          justifyContent="center"
          alignItems="stretch"
          sx={{
            mt: { xs: 3, sm: 5 },
            "@media (min-width: 1024px)": {
              gap: "32px 0",
            },
          }}
        >
          {steps.map((step) => (
            <Grid
              item
              key={step.id}
              xs={12}   // mobile
              sm={6}    // tablet
              md={3}    // >=900px
              lg={3}    // >=1200px
              sx={{
                display: "flex",
                justifyContent: "center",
                "@media (min-width: 1024px)": {
                  flexBasis: "25%",   // ✅ Force 4 per row starting 1024px
                  maxWidth: "25%",
                },
              }}
            >
              <Paper elevation={0} className="step-card">
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
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
