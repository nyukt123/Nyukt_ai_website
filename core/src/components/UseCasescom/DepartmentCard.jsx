import React from "react";
import { Box, Paper, Typography, Stack, Chip } from "@mui/material";
import "./DepartmentSolutions.css";

const getColor = (level) => {
  switch (level) {
    case "Low":
      return "success";
    case "Medium":
      return "warning";
    case "High":
      return "error";
    default:
      return "default";
  }
};

const DepartmentCard = ({ title, icon, items }) => {
  return (
    <Paper elevation={2} className="department-card">
      <Stack direction="row" spacing={1} alignItems="center" className="card-header">
        <span className="card-icon">{icon}</span>
        <Typography variant="h6" className="card-title">{title}</Typography>
      </Stack>

      <Box mt={2}>
        {items.map((item, idx) => (
          <Box key={idx} className="card-item">
            <Typography variant="body2" className="card-item-title">{item.title}</Typography>
            <Stack direction="row" spacing={1} mt={0.5}>
              <Chip label={item.time} size="small" variant="outlined" />
              <Chip label={item.level} color={getColor(item.level)} size="small" />
            </Stack>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default DepartmentCard;
