import { Box, Typography } from "@mui/material";

const StatItem = ({ label, value, color }) => {
  return (
    <Box px={8} >
      <Typography
        variant="h4"
        sx={{ fontWeight: 700, color: color ,fontSize:31,}} 
      >
        {value}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {label}
      </Typography>
    </Box>
  );
};

export default StatItem;
