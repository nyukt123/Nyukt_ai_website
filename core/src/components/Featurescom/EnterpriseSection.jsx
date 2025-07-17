import { Grid, Card, CardContent, Typography, Chip } from "@mui/material";
import "./EnterpriseSection.css";
// image icon
import shield1 from "../../assets/icons/entrp/shield-1.png";
import shield2 from "../../assets/icons/entrp/shield-2.png";
import shield3 from "../../assets/icons/entrp/shield-3.png";
import shield4 from "../../assets/icons/entrp/shield-4.png";

const features = [
  {
    icon: shield1,
    title: "Custom AI Models",
    subtitle: "Advanced ML",
    category: "AI/ML",
    description:
      "Train AI models on your specific data for industry-specific intelligence and specialized use cases",
    points: [
      "Custom training datasets",
      "Domain-specific knowledge",
      "Continuous learning",
      "Model versioning",
    ],
    complexity: "High Complexity",
    color: "purple",
  },
  {
    icon: shield2,
    title: "Enterprise Integration",
    subtitle: "Enterprise",
    category: "Integration",
    description:
      "Connect with enterprise systems and legacy applications through robust APIs and connectors",
    points: [
      "SSO integration",
      "API management",
      "Legacy connectors",
      "Custom webhooks",
    ],
    complexity: "Medium Complexity",
    color: "blue",
  },
  {
    icon: shield3,
    title: "Advanced Analytics",
    subtitle: "Analytics Pro",
    category: "Analytics",
    description:
      "Deep insights with predictive analytics and business intelligence for data-driven decisions",
    points: [
      "Predictive modeling",
      "Custom dashboards",
      "Real-time alerts",
      "ROI tracking",
    ],
    complexity: "High Complexity",
    color: "green",
  },
  {
    icon: shield4,
    title: "Multi-Language Support",
    subtitle: "Global Scale",
    category: "Localization",
    description:
      "Global deployment with support for 50+ languages and cultural adaptation capabilities",
    points: [
      "50+ languages",
      "Cultural adaptation",
      "Regional compliance",
      "Localized training",
    ],
    complexity: "Medium Complexity",
    color: "orange",
  },
];

const EnterpriseSection = () => {
  return (
    <Grid className="enterprise-container">
      <Chip label="Advanced Capabilities" className="badge" />
      <Typography variant="h4" className="title">
        Enterprise-Grade Features
      </Typography>
      <Typography className="subtitle">
        Advanced features designed for large organisations with complex
        requirements and high-scale deployments.
      </Typography>

      <Grid container spacing={3} className="card-container">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}  style={{ display: "flex" }}>
            {/* <Grid className={`top-border ${feature.color}`} /> */}
            <Card className="feature-card-ent">
              <div className={`top-border ${feature.color}`} />
              <CardContent>
                <Grid className="card-header">
                  <span>
                    <img src={feature.icon} className="icon" />
                  </span>
                  <Grid className="label-chip">
                    <Chip
                      label={feature.category}
                      className={`chip ${feature.color}`}
                    />
                    <span className="subtitle-text">{feature.subtitle}</span>
                  </Grid>
                </Grid>
                <Typography variant="h6" className="card-title">
                  {feature.title}
                </Typography>
                <Typography variant="body2" className="description">
                  {feature.description}
                </Typography>
                <ul className="feature-lists">
                  {feature.points.map((point, idx) => (
                    <li key={idx} className="feature-list">
                      {point}
                    </li>
                  ))}
                </ul>
                <Grid
                  className={`complexity ${
                    feature.complexity.includes("High") ? "high" : "medium"
                  }`}
                >
                  <span className="dots">...</span> {feature.complexity}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default EnterpriseSection;
