import React from "react";
import { Typography, Button, Paper, Grid } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import "./SupportHelpBox.css";

const SupportHelpBox = () => {
  return (
    <Grid className="main-hiw-h">
      <Paper
        elevation={0}
        className="support-box"
        sx={{
          border: "1px solid #e2e8f0",
          borderRadius: "12px",
          p: 3,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Still have questions?
        </Typography>

        <Typography variant="body2" sx={{ mb: 2 }}>
          Our support team is here to help you get the most out of Nyukt
        </Typography>

        <Grid className="support-buttons">
          {/* ✅ EMAIL SUPPORT — THIS TRIGGERS THE POPUP */}
          <Button
            variant="outlined"
            startIcon={<MailOutlineIcon />}
            className="support-btn-outlined"
            component="a"
            href="mailto:tech@nyukt.ai?subject=Nyukt Support Request&body=Hello Nyukt Team,%0D%0A%0D%0A"
          >
            Email Support
          </Button>

          {/* Schedule Call */}
          <Button
            variant="outlined"
            startIcon={<CallIcon />}
            className="support-btn-outlined"
            component="a"
            target="_blank"
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Nyukt+Support+Call&details=Support+discussion+with+Nyukt+team&add=tech@nyukt.ai"
            
          >
            Schedule Call
          </Button>


        </Grid>
      </Paper>
    </Grid>
  );
};

export default SupportHelpBox;
