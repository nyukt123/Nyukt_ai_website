import {
  Box,
  Typography,
  Grid,
  Paper,
  Stack,
  Avatar,
} from "@mui/material";
import "./EnterpriseTechSection.css";

// Sample icons (replace with your actual imports)
import openai from "../../assets/icons/howitworksic/openai.png";
import claude from "../../assets/icons/howitworksic/cluade.png";
import langchain from "../../assets/icons/howitworksic/langchain.png";
import vectordb from  "../../assets/icons/howitworksic/database.png";
import aws from "../../assets/icons/howitworksic/aws.png";
import k8s from "../../assets/icons/howitworksic/k.png";
import redis from "../../assets/icons/howitworksic/redis.png";
import postgres from "../../assets/icons/howitworksic/psql.png";
import aes from "../../assets/icons/howitworksic/lockk.png";
import oauth from "../../assets/icons/howitworksic/oauth.png";
import soc2 from "../../assets/icons/howitworksic/soc2.png";
import gdpr from "../../assets/icons/howitworksic/gdpr.png";

const techData = [
  {
    category: "AI & ML",
    items: [
      { icon: openai, label: "OpenAI GPT-4", desc: "Advanced language models" },
      { icon: claude, label: "Claude", desc: "Anthropic’s AI Assistant" },
      { icon: langchain, label: "Langchain", desc: "LLM Application Framework" },
      { icon: vectordb, label: "Vector DB", desc: "Semantic Search & Memory" },
    ],
  },
  {
    category: "Infrastructure",
    items: [
      { icon: aws, label: "AWS", desc: "Cloud Infrastructure" },
      { icon: k8s, label: "Kubernetes", desc: "Container Orchestration" },
      { icon: redis, label: "Redis", desc: "High Performance Caching" },
      { icon: postgres, label: "PostgreSQL", desc: "Reliable Database" },
    ],
  },
  {
    category: "Security",
    items: [
      { icon: aes, label: "AES-256", desc: "End-to-End Encryption" },
      { icon: oauth, label: "OAuth 2.0", desc: "Secure Authentication" },
      { icon: soc2, label: "SOC 2", desc: "Compliance Certified" },
      { icon: gdpr, label: "GDPR", desc: "Privacy Compliant" },
    ],
  },
];

const EnterpriseTechSection = () => {
  return (
    <Box className="enterprise-tech-section">
      <Typography className="badge">Enterprises Technology</Typography>
      <Typography variant="h4" className="heading">
        Built on Cutting-Edge Technology
      </Typography>
      <Typography variant="body1" className="subheading">
        Our platform leverages the latest AI models and enterprises-grade infrastructure to deliver reliable, scalable automation
      </Typography>

      <Grid container spacing={4} justifyContent="center" mt={4}>
        {techData.map((block) => (
          <Grid item xs={12} md={4} key={block.category}>
            <Paper className="category-card">
              <Typography variant="subtitle1" className="category-title">
                {block.category}
              </Typography>
              <Box className="item-list">
                {block.items.map((item, index) => (
                  <Box key={index} className="tech-item">
                    <Avatar src={item.icon} alt={item.label} sx={{ width: 32, height: 32 }} />
                    <Box>
                      <Typography className="tech-label">{item.label}</Typography>
                      <Typography className="tech-desc">{item.desc}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EnterpriseTechSection;
