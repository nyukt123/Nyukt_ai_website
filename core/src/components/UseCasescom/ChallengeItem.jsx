import React from "react";
import { Paper, Grid, Typography, Box, Stack, Chip } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import RoomIcon from "@mui/icons-material/Room";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import "./BusinessChallenges.css";

const ChallengeItem = ({ problem, solution, useCases }) => {
  return (
    <Paper elevation={1} className="challenge-card">
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Box className="challenge-block">
            <Stack direction="row" alignItems="center" spacing={1}>
              <ErrorOutlineIcon color="error" />
              <Typography variant="subtitle1" className="block-title">Problem</Typography>
            </Stack>
            <Typography className="block-subtitle">{problem.title}</Typography>
            <ul className="challenge-list">
              {problem.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box className="challenge-block">
            <Stack direction="row" alignItems="center" spacing={1}>
              <RoomIcon color="primary" />
              <Typography variant="subtitle1" className="block-title">Solution</Typography>
            </Stack>
            <Typography className="block-subtitle">{solution.title}</Typography>
            <ul className="challenge-list">
              {solution.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box className="challenge-block">
            <Stack direction="row" alignItems="center" spacing={1}>
              <AutoAwesomeIcon color="success" />
              <Typography variant="subtitle1" className="block-title">Use Cases</Typography>
            </Stack>
            <Stack direction="row" flexWrap="wrap" spacing={1} mt={1}>
              {useCases.map((tag, i) => (
                <Chip key={i} label={tag} className="usecase-chip" />
              ))}
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ChallengeItem;
