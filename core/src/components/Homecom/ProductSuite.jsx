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
import { Link } from "react-router-dom";
import pr1 from "../../assets/icons/product/pr1.png";
import pr2 from "../../assets/icons/product/pr2.png";
import pr3 from "../../assets/icons/product/pr3.png";
import pr4 from "../../assets/icons/product/pr4.png";
import pr5 from "../../assets/icons/product/pr5.png";
import ec1 from "../../assets/icons/product/ec1.png";
import ec2 from "../../assets/icons/product/ec2.png";
import ec3 from "../../assets/icons/product/ec3.png";
import ec4 from "../../assets/icons/product/ec4.png";
import ec5 from "../../assets/icons/product/ec5.png";

const productData = [
  {
    icon: pr1,
    title: "NyukTRON",
    subtitle: "Single Function Agentic AI",
    description:
      "Cutting-edge autonomous AI agents powered by Large Language Models (LLMs), Reinforcement Learning (RL), and Retrieval-Augmented Generation (RAG) technologies—designed for efficient task handling across industries.",
    tags: [
      { label: "99.9% ", value: "Accuracy" },
      { label: "10x Faster", value: "Speed" },
    ],
    ribbon: ec1,
    color: "#3A3F40",
  },
  {
    icon: pr2,
    title: "MAAS",
    subtitle: "Multi-Agent AI System",
    description:
      "This no-code platform allows you to create smart workflows with large language models and cutting-edge AI frameworks, launching your AI projects in as little as five minutes. Experience the ease of building intelligent solutions without any coding expertise.",
    tags: [
      { label: "5 Min Setup", value: "Deployment" },
      { label: "100+ APIs", value: "Integration" },
    ],
    ribbon: ec2,
    color: "#00B8A9",
  },
  {
    icon: pr3,
    title: "Research And Innovation",
    // subtitle: "Research And Innovation",
    description:
      "Discover over 500 modular AI skills that can be tailored to meet specific needs. These customizable building blocks empower AI agents to perform specialized tasks efficiently, enhancing their capabilities and versatility in various applications.",
    tags: [
      { label: "500+ Skills", value: "Skills" },
      { label: "100% Custom", value: "Customization" },
    ],
    ribbon: ec3,
    color: "#607E9E",
  },
  {
    icon: pr4,
    title: "Upcoming Products",
    // subtitle: "Collaborative AI Ecosystem",
    description:
      "Exploring the next wave of AI innovations—upcoming products designed to bring smarter automation and seamless experiences",
    tags: [
      { label: "1000+ Agents", value: "Agents" },
      { label: "90% Better", value: "Efficiency" },
    ],
    ribbon: ec4,
    color: "#DA3E52",
  },

];

const ProductSuite = () => {
  return (
    // <Box className="product-suite-container">
    //   <Grid className="prod-main-head-sub">
    //     <Chip label="Product Suite" className="badgeh" />
    //     <Typography
    //       variant="h4"
    //       className="special-head-text"
    //       sx={{ marginTop: 2 }}
    //     >
    //       Our Innovative AI Products
    //     </Typography>
    //     <Typography variant="body1" className="special-head-sub-text">
    //       Explore Nyukt.ai’s comprehensive suite of AI solutions, built to
    //       transform your business operations and drive innovation across every
    //       department.
    //     </Typography>
    //   </Grid>

    //   <Grid container spacing={3} className="card-grid" justifyContent="center">
    //     {productData.map((product, index) => (
    //       <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
    //         <Card className="product-cards">
    //           <img
    //             src={product.ribbon}
    //             alt="ribbon"
    //             className="card-ribbon-image"
    //           />
    //           <CardContent className="card-content-wrapper">
    //             <Box className="card-content-animated">
    //               <Box display="flex" alignItems="center" gap={1} mb={1}>
    //                 <img
    //                   src={product.icon}
    //                   className="product-icon-test"
    //                   alt={product.title}
    //                 />
    //                 <Typography
    //                   variant="h6"
    //                   className="card-title-p"
    //                   style={{ color: product.color }}
    //                 >
    //                   {product.title}
    //                 </Typography>
    //               </Box>

    //               <Typography
    //                 variant="subtitle2"
    //                 className="card-subtitle-p"
    //                 style={{ color: product.color }}
    //               >
    //                 {product.subtitle}
    //               </Typography>

    //               <Typography variant="body2" className="card-description-p">
    //                 {product.description}
    //               </Typography>

    //               <Box className="card-tags-p">
    //                 {product.tags.map((tag, idx) => (
    //                   <Box className="tag-boxs" key={idx}>
    //                     <Typography className="product-card-tags">
    //                       {tag.label}
    //                     </Typography>

    //                     <Typography className="product-card-tags-small">
    //                       {tag.value}
    //                     </Typography>
    //                   </Box>
    //                 ))}
    //               </Box>
    //               <Box className="learn-more-wrapper">
    //                 <Button
    //                   className="learn-more"
    //                   component={Link}
    //                   to="/product"
    //                   endIcon={<span>→</span>}
    //                   style={{ color: product.color }}
    //                 >
    //                   Learn More
    //                 </Button>
    //               </Box>
    //               {/* <Box className="learn-more-wrapper">
    //                 <Button
    //                   className="learn-more"
    //                   component={Link}
    //                   to="/product"
    //                   endIcon={<span>→</span>}
    //                   style={{ color: product.color }}
    //                 >
    //                   Learn More
    //                 </Button>
    //               </Box> */}
    //             </Box>
    //           </CardContent>
    //         </Card>
    //       </Grid>
    //     ))}
    //   </Grid>
    // </Box>


    <Box className="product-suite-container">
      <Grid className="prod-main-head-sub">
        <Chip label="Product Suite" className="badgeh" />
        <Typography
          variant="h4"
          className="special-head-text"
          sx={{ marginTop: 1 }}
        >
          Our Innovative AI Products
        </Typography>
        <Typography variant="body1" className="special-head-sub-text">
          Explore Nyukt.ai’s comprehensive suite of AI solutions, built to
          transform your business operations and drive innovation across every
          department.
        </Typography>
      </Grid>
      <Grid container spacing={3} className="card-grid" justifyContent="center">

        {productData.map((product, index) => (
          <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
            <Card className="product-cards">
              <img
                src={product.ribbon}
                alt="ribbon"
                className="card-ribbon-image"
              />
              <CardContent className="card-content-wrapper">
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
                        <Typography className="product-card-tags">
                          {tag.label}
                        </Typography>
                        <Typography className="product-card-tags-small">
                          {tag.value}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                  <Box className="learn-more-wrapper">
                    <Button
                      className="learn-more"
                      component={Link}
                      to="/product"
                      endIcon={<span>→</span>}
                      style={{ color: product.color }}
                    >
                      Learn More
                    </Button>
                  </Box>
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
