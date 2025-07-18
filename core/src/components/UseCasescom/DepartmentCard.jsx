import React from "react";
import { Box, Paper, Typography, Stack, Chip } from "@mui/material";
import "./DepartmentSolutions.css";
import clock from "../../assets/icons/usecases/clock.png";

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
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        className="card-header"
      >
        <span><img src={icon} className="card-icon-de"/></span>
        <Typography variant="h6" className="card-title-de">
          {title}
        </Typography>
      </Stack>

      <Box mt={2}>
        {items.map((item, idx) => (
          <Box key={idx} className="card-item-de">
            <Typography variant="body2" className="card-item-title-de">
              {item.title}
            </Typography>
            <Stack direction="row" spacing={1} mt={0.5}>
            <img src={clock} className="de-clock"/>
              <Chip label={item.time} size="small" />
              <Chip
                label={item.level}
                color={getColor(item.level)}
                size="small"
                className="de-chip"
              />
            </Stack>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default DepartmentCard;
