import React from "react";
import { Box, Typography, Button, Stack, Paper } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";

const SupportHelpBox = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: "#f5f3ff",
        padding: "40px",
        borderRadius: "16px",
        textAlign: "center",
        maxWidth: "800px",
        mx: "auto",
      }}
    >
      <Typography variant="h6" fontWeight={600} gutterBottom>
        Still have questions?
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={3}>
        Our support team is here to help you get the most out of nyukt
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        justifyContent="center"
      >
        <Button
          variant="contained"
          startIcon={<ChatBubbleOutlineIcon />}
          sx={{
            backgroundColor: "#7B61FF",
            color: "#fff",
            textTransform: "none",
            px: 3,
            "&:hover": { backgroundColor: "#684de6" },
          }}
        >
          Live Chat
        </Button>

        <Button
          variant="outlined"
          startIcon={<MailOutlineIcon />}
          sx={{
            textTransform: "none",
            px: 3,
          }}
        >
          Email Supports
        </Button>

        <Button
          variant="outlined"
          startIcon={<CallIcon />}
          sx={{
            textTransform: "none",
            px: 3,
          }}
        >
          Schedule Call
        </Button>
      </Stack>
    </Paper>
  );
};

export default SupportHelpBox;
