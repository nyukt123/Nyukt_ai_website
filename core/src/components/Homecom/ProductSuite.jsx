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
      "Advanced Agentic AIs powered by LLMs, RL, and RAG Technology for autonomous task handling across industries.",
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
      "No-code platform for building intelligent workflows with LLMs and advanced AI frameworks.",
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
    subtitle: "Modular Skills",
    description:
      "Foundational building blocks enabling specialized task execution for AI agents with 500+ skills.",
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
      "Dynamic multi-agent network enabling seamless collaboration between AI agents in real-time.",
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
      "Innovative marketplace connecting businesses with pre-built AI solutions and developer community.",
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
