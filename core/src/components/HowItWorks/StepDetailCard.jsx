import { Box, Typography, Button } from "@mui/material";

function StepDetailCard() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 4,
        justifyContent: "space-between",
        alignItems: "flex-start",
        mt: 6,
        px: 4,
        py: 6,
        borderRadius: 3,
        backgroundColor: "#f9f9f9",
      }}
    >
      <Box flex={1}>
        <Typography variant="h6" fontWeight={700} gutterBottom>
          Describe Your Vision
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Simply describe your business process in natural language. Our AI understands context and helps you map out the perfect automation strategy.
        </Typography>
        <ul style={{ paddingLeft: 16 }}>
          <li>Natural language processing</li>
          <li>Semantic mapping</li>
          <li>Insightful suggestions</li>
        </ul>
        <Box mt={2}>
          <Button variant="outlined" size="small" sx={{ mr: 2 }}>
            Try this Step →
          </Button>
          <Button variant="text" size="small">
            Watch Demo
          </Button>
        </Box>
      </Box>
      <Box flex={1}>
        <Box sx={{ width: "100%", height: 200, background: "#ddd", borderRadius: 2 }} />
      </Box>
    </Box>
  );
}
export default StepDetailCard;