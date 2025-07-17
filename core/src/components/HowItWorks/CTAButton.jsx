import { Button } from "@mui/material";

export default function CTAButton({ text }) {
  return (
    <Button variant="contained" color="primary" sx={{ mt: 4 }}>
      {text}
    </Button>
  );
}
