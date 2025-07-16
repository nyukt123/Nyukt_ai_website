import { Box, Container, Grid, Typography, Chip } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./SecuritySection.css";

// img icon
import shield from "../../assets/icons/security/shield.png";
import users from "../../assets/icons/security/users.png";
import lock from "../../assets/icons/security/lock.png";

const cards = [
  {
    icon: shield,
    label: "Certified",
    badge: "Enterprise",
    title: "SOC 2 Type II Certified",
    desc: "Independently verified security controls and practices ensure your data is protected at the highest enterprise standards.",
    protection: "Active Protection",
    compliance: "99.9% Compliant",
  },
  {
    icon: users,
    label: "AES-256",
    badge: "Military Grade",
    title: "End-to-End Encryption",
    desc: "AES-256 encryption protects your data both in transit and at rest with military-grade security protocols.",
    protection: "Active Protection",
    compliance: "100% Compliant",
  },
  {
    icon: lock,
    label: "RBAC",
    badge: "Advanced",
    title: "Role-Based Access Control",
    desc: "Granular permissions ensure team members only access what they need with detailed audit trails.",
    protection: "Active Protection",
    compliance: "100% Compliant",
  },
  {
    icon: shield,
    label: "Full Audit",
    badge: "Compliance",
    title: "Complete Audit Logging",
    desc: "Comprehensive audit trails track all system activities for compliance and security monitoring.",
    protection: "Active Protection",
    compliance: "100% Compliant",
  },
  {
    icon: shield,
    label: "GDPR",
    badge: "Global",
    title: "GDPR & Privacy Compliant",
    desc: "Full compliance with GDPR, CCPA and other privacy regulations worldwide with data residency options.",
    protection: "Active Protection",
    compliance: "100% Compliant",
  },
  {
    icon: shield,
    label: "Multi-Region",
    badge: "Flexible",
    title: "Flexible Data Residency",
    desc: "Choose where your data is stored and processed to meet regional requirements and compliance needs.",
    protection: "Active Protection",
    compliance: "100% Compliant",
  },
];

const SecuritySection = () => {
  return (
    <section className="security-section">
      <Container maxWidth="xl">
        <Box className="security-chip-wrap">
          <Chip label="Enterprise Security" className="security-chip" />
        </Box>
        <Typography variant="h4" className="security-title">
          Built with Security & Compliance First
        </Typography>
        <Typography variant="body1" className="security-subtitle">
          Enterprise-grade security features and compliance standards to protect
          your data and meet regulatory requirements.
        </Typography>

        <Grid container spacing={3} className="security-grid">
          {cards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box className="security-card">
                {/* Top Row: Icon Left + Label/Badge Right */}
                <Box className="security-card-top">
                  <Box className="security-icon-wrap">
                    <img src={card.icon} alt={card.title}/>
                  </Box>
                  <Box className="security-card-header">
                    <Chip label={card.label} className="security-card-chip" />
                    <Typography className="security-card-badge">
                      {card.badge}
                    </Typography>
                  </Box>
                </Box>

                <Typography className="security-card-title">
                  {card.title}
                </Typography>

                <Typography className="security-card-desc">
                  {card.desc}
                </Typography>

                <Box className="security-card-footer">
                  <Typography className="security-protection">
                    + {card.protection}
                  </Typography>
                  <Box className="security-compliance">
                    <CheckCircleIcon className="security-check-icon" />
                    <Typography className="sec-card-comp">
                      {card.compliance}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default SecuritySection;
