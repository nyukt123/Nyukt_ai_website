import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  Chip,
  Switch,
} from "@mui/material";
import "./PricingPlans.css";
// Icon images
import zap from "../../assets/icons/zap.png";
import star from "../../assets/icons/star.png";
import users2 from "../../assets/icons/users2.png";
import building from "../../assets/icons/Building.png";

const plans = [
  {
    icon:zap,
    title: "Pay-as-you-go",
    price: "Free",
    duration: "Lifetime",
    features: [
      "10,000 monthly credits",
      "Basic text-to-speech",
      "Speech-to-speech conversion",
      "3 custom voices",
      "Studio access",
    ],
    buttonLabel: "Current Plan",
    isCurrent: true,
  },
  {
    icon:star,
    title: "Pro",
    description:"Upgrade to Pro for more features and benefits",
    price: "$999.00",
    duration: "per user/month",
    features: [
      "Everything in Pay-as-you-go",
      "Priority support",
      "Advanced analytics",
      "Higher concurrency limits",
      "Professional voice cloning",
    ],
    buttonLabel: "Upgrade to Pro",
    isPopular: true,
  },
  {
    icon:users2,
    title: "Team",
    price: "$1999.99",
    duration: "per user/month",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Advanced role management",
      "Audio Node access",
      "Team analytics",
    ],
    buttonLabel: "Upgrade to Team",
  },
  {
    icon:building,
    title: "Enterprise",
    price: "Custom",
    duration: "",
    features: [
      "Everything in Team",
      "Custom integrations",
      "Dedicated support",
      "Enterprise security",
      "Custom pricing",
    ],
    buttonLabel: "Contact Sales",
  },
];

const PricingPlans = () => {
  return (
    <Box className="pricing-section">
      <Box className="billing-toggle">
        <Typography>Billed monthly</Typography>
        <Switch />
        <Typography>Billed yearly</Typography>
        <Chip label="15 Days free" size="small" color="secondary" />
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {plans.map((plan, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              className={`pricing-card ${
                plan.isPopular ? "popular" : ""
              } ${plan.isCurrent ? "current" : ""}`}
              elevation={plan.isPopular ? 6 : 2}
            >
              <CardContent>
                <img src={plan.icon} className="plan-icon"/>
                <Typography variant="h6" className="plan-title" gutterBottom>
                  {plan.title}
                </Typography>
                <Typography variant="h4" className="plan-price">
                  {plan.price}
                </Typography>
                <Typography className="plan-duration">{plan.duration}</Typography>
                <ul className="features-list">
                  {plan.features.map((item, idx) => (
                    <li key={idx}>✓ {item}</li>
                  ))}
                </ul>
                <Button
                  variant={plan.isCurrent ? "outlined" : "contained"}
                  className="plan-button"
                  fullWidth
                >
                  {plan.buttonLabel}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PricingPlans;
