import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./PriceSection.css";

// Icon images
import zap from "../../assets/icons/zap.png";
import star from "../../assets/icons/star.png";
import users2 from "../../assets/icons/users2.png";
import building from "../../assets/icons/Building.png";

const plans = [
  {
    icon: zap,
    name: "Pay-as-you-go",
    subtitle: "Begin your Agent Studio journey at no cost.",
    price: "Free",
    price_tag: "Lifetime",
    features: [
      "10,000 monthly credits",
      "Basic text-to-speech",
      "Speech-to-speech conversion",
      "3 custom voices",
      "Studio access",
    ],
  },
  {
    icon: star,
    name: "Pro",
    subtitle: "Upgrade to Pro for more features and benefits",
    price: "$999.00",
    price_tag: "per user/month",
    features: [
      "Everything in Pay-as-you-go",
      "Priority support",
      "Advanced analytics",
      "Higher concurrency limits",
      "Professional voice cloning",
    ],
  },
  {
    icon: users2,
    name: "Team",
    subtitle: "Plan offers advanced features for smaller teams",
    price: "$1999.99",
    price_tag: "per user/month",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Advanced role management",
      "Audio Native access",
      "Team analytics",
    ],
  },
  {
    icon: building,
    name: "Enterprise",
    subtitle: "Plan tailored to your needs",
    price: "Custom",
    price_tag: "-",
    features: [
      "Everything in Team",
      "Custom integrations",
      "Dedicated support",
      "Enterprise security",
      "Enterprise security",
    ],
  },
];

const PriceSection = () => {
  return (
    <section className="price-section">
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" className="price-heading" gutterBottom>
          Flexible Pricing for Every Business
        </Typography>
        <Typography variant="body1" className="price-subheading">
          Choose the right plan that fits your business needs and scale as you
          grow
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {plans.map((plan, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card className="price-card" elevation={3}>
              <CardContent>
                <Box textAlign="center" mb={2} className="price-icoo">
                  <img src={plan.icon} alt={plan.name} className="plan-icon" />
                </Box>
                <Typography variant="h5" align="center" className="card-titles">
                  {plan.name}
                </Typography>
                <Typography
                  variant="body2"
                  align="center"
                  color="text.secondary"
                  className="card-subtitle"
                >
                  {plan.subtitle}
                </Typography>
                <Typography variant="h4" align="center" className="price-tag">
                  {plan.price}
                </Typography>
                <Typography
                  variant="body2"
                  align="center"
                  className="price-small-tag"
                >
                  {plan.price_tag}
                </Typography>

                <List>
                  {plan.features.map((feature, i) => (
                    <ListItem key={i} className="feature-item">
                      <ListItemIcon>
                        <CheckCircleIcon color="success" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>

                <Box textAlign="center" mt={3}>
                  <Button
                    variant="contained"
                    color="primary"
                    className="price-btn"
                  >
                    Get Started
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default PriceSection;
