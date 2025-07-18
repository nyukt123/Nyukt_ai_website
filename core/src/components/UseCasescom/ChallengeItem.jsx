import React from "react";
import { Paper, Grid, Typography, Box, Stack, Chip } from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import RoomIcon from "@mui/icons-material/Room";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import "./BusinessChallenges.css";

const ChallengeItem = ({ problem, solution, useCases }) => {
  return (
    <Paper elevation={1} className="challenge-card">
      <Grid container spacing={2}  className="challenge-grid">
        {/* Problem */}
        <Grid item xs={12} md={4}>
          <Box className="challenge-block">
            <Stack direction="row" alignItems="center" spacing={1}>
              {problem.icon ? (
                <img src={problem.icon} alt="Problem Icon" className="icon-img" />
              ) : (
                <WarningAmberIcon color="error" />
              )}
              <Typography variant="subtitle1" className="block-title-b">Problem</Typography>
            </Stack>
            <Typography className="block-subtitle-b">{problem.title}</Typography>
            <ul className="challenge-list">
              {problem.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </Box>
        </Grid>

        {/* Solution */}
        <Grid item xs={12} md={4}>
          <Box className="challenge-block">
            <Stack direction="row" alignItems="center" spacing={1}>
              {solution.icon ? (
                <img src={solution.icon} alt="Solution Icon" className="icon-img" />
              ) : (
                <RoomIcon color="primary" />
              )}
              <Typography variant="subtitle1" className="block-title-b">Solution</Typography>
            </Stack>
            <Typography className="block-subtitle-b">{solution.title}</Typography>
            <ul className="challenge-list">
              {solution.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </Box>
        </Grid>

        {/* Use Cases */}
        <Grid item xs={12} md={4}>
          <Box className="challenge-block">
            <Stack direction="row" alignItems="center" spacing={1}>
              {useCases.icon ? (
                <img src={useCases.icon} alt="Use Case Icon" className="icon-img" />
              ) : (
                <AutoAwesomeIcon color="success" />
              )}
              <Typography variant="subtitle1" className="block-title-b">Use Cases</Typography>
            </Stack>
            <Stack direction="row" flexWrap="wrap" spacing={1} mt={1}>
              {useCases.useCasesdetai.map((tag, i) => (
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
