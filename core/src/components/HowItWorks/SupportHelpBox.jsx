import React from "react";
import { Box, Typography, Button, Stack, Paper,Grid } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import "./SupportHelpBox.css"; // Import the CSS file

const SupportHelpBox = () => {
  return (
   <Grid className="main-hiw-h">
     <Paper elevation={0} className="support-box">
      <Typography variant="h6" className="support-title" gutterBottom>
        Still have questions?
      </Typography>
      <Typography variant="body2" className="support-subtitle">
        Our support team is here to help you get the most out of nyukt
      </Typography>

      <Grid className="support-buttons">
        <Button
          variant="contained"
          startIcon={<ChatBubbleOutlineIcon />}
          className="support-btn-contained"
        >
          Live Chat
        </Button>

        <Button
          variant="outlined"
          startIcon={<MailOutlineIcon />}
          className="support-btn-outlined"
        >
          Email Supports
        </Button>

        <Button
          variant="outlined"
          startIcon={<CallIcon />}
          className="support-btn-outlined"
        >
          Schedule Call
        </Button>
      </Grid>
    </Paper>
   </Grid>
  );
};

export default SupportHelpBox;
