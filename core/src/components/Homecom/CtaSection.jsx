import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import checkcircle from "../../assets/icons/chkw.png";
import "./CtaSection.css";

const CtaSection = () => {
  return (
    <section className="cta-section">
      <Box className="cta-container">
        <Typography variant="h4" className="cta-heading" gutterBottom>
          Ready to Transform Your Business with AI Agents?
        </Typography>

        <Typography variant="body1" className="cta-subheading">
          Join hundreds of forward-thinking companies that are already leveraging Nyukt to automate processes, reduce costs, and drive innovation.
        </Typography>

        <Box className="cta-buttons" mt={4}>
          <Button
            component={Link}
            // to="/Contactus"
            variant="contained"
            className="btn-primary-cta"
          >
            <Link to="/Contact Us" style={{ color: "black", textDecoration: "none" }}>Start Free Trial</Link>
          </Button>
          <Button
            component={Link}
            // to="/Contactus"
            variant="outlined"
            className="btn-outlines"
            style={{ color: "white", textDecoration: "none" }}
          >
            <Link to="/Contact Us" style={{ color: "white", textDecoration: "none" }}>Schedule Demo</Link>
          </Button>
        </Box>

        <Box className="cta-features" mt={4}>
          {["14-day free trial", "No credit card required", "Cancel anytime"].map((text, index) => (
            <Box className="cta-feature-item-pr" key={index}>
              <span className="check-circle-ic">
                <img src={checkcircle} alt="check" />
              </span>
              {text}
            </Box>
          ))}
        </Box>
      </Box>
    </section>
  );
};

export default CtaSection;
