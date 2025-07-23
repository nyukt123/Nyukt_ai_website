import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
} from "@mui/material";
import "./ProductSuite.css";

// image icons
import pr1 from "../../assets/icons/product/pr1.png";
import pr2 from "../../assets/icons/product/pr2.png";
import pr3 from "../../assets/icons/product/pr3.png";
import pr4 from "../../assets/icons/product/pr4.png";
import pr5 from "../../assets/icons/product/pr5.png";

const productData = [
  {
    icon: pr1,
    title: "NyukTRON",
    subtitle: "Agentic AI as a Service",
    description:
      "Cutting-edge autonomous AI agents powered by Large Language Models (LLMs), Reinforcement Learning (RL), and Retrieval-Augmented Generation (RAG) technologies—designed for efficient task handling across industries.",
    tags: [
      { label: "99.9% ", value: "Accuracy" },
      { label: "10x Faster", value: "Speed" },
    ],
    color: "#3A3F40",
    link: "#",
  },
  {
    icon: pr2,
    title: "NyukTACT",
    subtitle: "AI Infra as a Service",
    description:
      "A no-code platform enabling you to build intelligent workflows using LLMs and advanced AI frameworks—getting your AI projects up and running in just 5 minutes",
    tags: [
      { label: "5 Min Setup", value: "Deployment" },
      { label: "100+ APIs", value: "Integration" },
    ],
    color: "#00B8A9",
    link: "#",
  },
  {
    icon: pr3,
    title: "Nyuktics",
    subtitle: "Modular AI Skills",
    description:
      "A collection of 500+ modular, customizable AI skills acting as foundational building blocks for specialized task execution by AI agents.",
    tags: [
      { label: "500+ Skills", value: "Skills" },
      { label: "100% Custom", value: "Customization" },
    ],
    color: "#607E9E",
    link: "#",
  },
  {
    icon: pr4,
    title: "Nyuktwork",
    subtitle: "Collaborative AI Ecosystem",
    description:
      "A dynamic multi-agent network that enables real-time collaboration and communication between AI agents, enhancing workflow efficiency and intelligence.",
    tags: [
      { label: "1000+ Agents", value: "Agents" },
      { label: "90% Better", value: "Efficiency" },
    ],
    color: "#DA3E52",
    link: "#",
  },
  {
    icon: pr5,
    title: "Nyuktrium",
    subtitle: "AI Marketplace",
    description:
      "An innovative marketplace connecting businesses with pre-built AI solutions and a thriving developer community—accelerating AI adoption and innovation.",
    tags: [
      { label: "10K+ Solutions", value: "Solutions" },
      { label: "5K+ Devs", value: "Developers" },
    ],
    color: "#B87333",
    link: "#",
  },
];

const ProductSuite = () => {
  return (
    <Box className="product-suite-container">
      <Grid className="prod-main-head-sub">
        <Chip label="Product Suite" className="badgeh" />
        <Typography variant="h4" className="special-head-text" sx={{marginTop:2}}>
         Our Innovative AI Products
        </Typography>
        <Typography variant="body1" className="special-head-sub-text">
         Explore Nyukt.ai’s comprehensive suite of AI solutions, built to transform your business operations and drive innovation across every department.
        </Typography>
      </Grid>

      <Grid container spacing={3} className="card-grid" justifyContent="center">
        {productData.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card className="product-cards">
              <Box
                className={`card-ribbon`}
                style={{ backgroundColor: product.color }}
              />
              <CardContent>
                <Box className="card-content-animated">
                  <Box display="flex" alignItems="center" gap={1} mb={1}>
                    <img
                      src={product.icon}
                      className="product-icon-test"
                      alt={product.title}
                    />
                    <Typography
                      variant="h6"
                      className="card-title-p"
                      style={{ color: product.color }}
                    >
                      {product.title}
                    </Typography>
                  </Box>

                  <Typography
                    variant="subtitle2"
                    className="card-subtitle-p"
                    style={{ color: product.color }}
                  >
                    {product.subtitle}
                  </Typography>

                  <Typography variant="body2" className="card-description-p">
                    {product.description}
                  </Typography>

                  <Box className="card-tags-p">
                    {product.tags.map((tag, idx) => (
                      <Box className="tag-boxs" key={idx}>
                        <Typography className="product-card-tags">{tag.label}</Typography>
                        
                        <Typography className="product-card-tags-small">{tag.value}</Typography>
                      </Box>
                    ))}
                  </Box>

                  <Button
                    className="learn-more"
                    href={product.link}
                    endIcon={<span>→</span>}
                    style={{ color: product.color }}
                  >
                    Learn More
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductSuite;
