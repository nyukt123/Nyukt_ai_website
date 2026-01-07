import React, { useState } from "react";
import { Typography, Button, Paper, Grid } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import ScheduleCallModal from "./ScheduleCallModal";
import "./SupportHelpBox.css";

const SupportHelpBox = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
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
            {/* Email */}
            <Button
              variant="outlined"
              startIcon={<MailOutlineIcon />}
              className="support-btn-outlined"
              component="a"
              href="mailto:tech@nyukt.ai"
            >
              Email Support
            </Button>

            {/* Schedule Call */}
            <Button
              variant="outlined"
              startIcon={<CallIcon />}
              className="support-btn-outlined"
              onClick={() => setOpen(true)}
            >
              Schedule Call
            </Button>
          </Grid>
        </Paper>
      </Grid>

      <ScheduleCallModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default SupportHelpBox;
