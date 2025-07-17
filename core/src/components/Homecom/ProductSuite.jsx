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
import textp from "../../assets/icons/product/testp.png";

const productData = [
  {
    icon: textp,
    title: "NyukTRON",
    subtitle: "Agentic AI as a Service",
    description:
      "Advanced Agentic AIs powered by LLMs, RL, and RAG Technology for autonomous task handling across industries.",
    tags: [
      { label: "99.9% ", value: "Accuracy" },
      { label: "10x Faster", value: "Speed" },
    ],
    color: "primary",
    link: "#",
  },
  {
    icon: textp,
    title: "NyukTACT",
    subtitle: "AI Infra as a Service",
    description:
      "No-code platform for building intelligent workflows with LLMs and advanced AI frameworks.",
    tags: [
      { label: "5 Min Setup", value: "Deployment" },
      { label: "100+ APIs", value: "Integration" },
    ],
    color: "secondary",
    link: "#",
  },
  {
    icon: textp,
    title: "Nyuktics",
    subtitle: "Modular Skills",
    description:
      "Foundational building blocks enabling specialized task execution for AI agents with 500+ skills.",
    tags: [
      { label: "500+ Skills", value: "Skills" },
      { label: "100% Custom", value: "Customization" },
    ],
    color: "info",
    link: "#",
  },
  {
    icon: textp,
    title: "Nyuktwork",
    subtitle: "Collaborative AI Ecosystem",
    description:
      "Dynamic multi-agent network enabling seamless collaboration between AI agents in real-time.",
    tags: [
      { label: "1000+ Agents", value: "Agents" },
      { label: "90% Better", value: "Efficiency" },
    ],
    color: "error",
    link: "#",
  },
  {
    icon: textp,
    title: "Nyuktrium",
    subtitle: "AI Marketplace",
    description:
      "Innovative marketplace connecting businesses with pre-built AI solutions and developer community.",
    tags: [
      { label: "10K+ Solutions", value: "Solutions" },
      { label: "5K+ Devs", value: "Developers" },
    ],
    color: "warning",
    link: "#",
  },
];

const ProductSuite = () => {
  return (
    <Box className="product-suite-container">
      <Grid className="prod-main-head-sub">
        <Chip label="Product Suite" className="badge" />
        <Typography variant="h4" className="special-head-text">
          Our RevolutionaryAI Products
        </Typography>
        <Typography variant="body1" className="special-head-sub-text">
          Discover our comprehensive suite of AI products designed to transform
          your business operations and drive innovation across every department.
        </Typography>
      </Grid>

      <Grid container spacing={3} className="card-grid">
        {productData.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className={`product-cards ${product.color}`}>
              <Box
                className={`card-ribbon ribbon-${product.color}`}
                aria-hidden="true"
              />
              <CardContent>
                <Typography>
                  <img src={textp} className="product-icon-test" />
                </Typography>
                <Typography variant="h6" className="card-title-p">
                  {product.title}
                </Typography>
                <Typography variant="subtitle2" className="card-subtitle-p">
                  {product.subtitle}
                </Typography>
                <Typography variant="body2" className="card-description-p">
                  {product.description}
                </Typography>

                <Box className="card-tags-p">
                  {product.tags.map((tag, idx) => (
                    <Box className="tag-boxs" key={idx}>
                      <strong>{tag.label}</strong>
                      <br />
                      <small>{tag.value}</small>
                    </Box>
                  ))}
                </Box>

                <Button
                  className="learn-more"
                  href={product.link}
                  endIcon={<span>→</span>}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductSuite;
