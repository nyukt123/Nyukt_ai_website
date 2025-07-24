import { Box, Typography, Grid, Link, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./Footer.css";
//socials
import linkedin from "../../assets/icons/linkedin.png";
import twitter from "../../assets/icons/twitter.png";
import instagram from "../../assets/icons/instagram.png";
import facebook from "../../assets/icons/facebook.png";
import footermail from "../../assets/icons/footer-mail.png";
import phone from "../../assets/icons/phone.png";
import map from "../../assets/icons/map-pin.png";
import youtube from "../../assets/icons/youtube-s.png";
// import logo from "../../assets/logo-2.png";
import logo3 from "../../assets/logo-3.png";

export const Footers = () => {
  // Mapping of footer link labels to route paths
  const navLinkMap = {
    "Product": "/product",
    "Features": "/features",
    "How It Works": "/howitworks",
    "Use Cases": "/usecases",
    "Pricing": "/pricing",
    "Integrations": "/integrations",
    "API Documentation": "/api-docs",

    "About Us": "/about",
    "Careers": "/careers",
    "Blog": "/blog",
    "Press": "/press",
    "Partners": "/partners",
    "Contact": "/contact",

    "Help Center": "/help",
    "Community": "/community",
    "Tutorials": "/tutorials",
    "Webinars": "/webinars",
    "Case Study": "/case-study",
    "Templates": "/templates",

    "Terms & Conditions": "/terms",
    "Privacy Policy": "/privacy",
    "Cookie Policy": "/cookies",
    "Security": "/security",
    "Compliance": "/compliance",
    "Data Processing": "/data-processing",
  };

  return (
    <Box component="footer" className="footer-section">
      <Box className="container footer-cont">
        <Grid container spacing={10}>
          {/* Left section */}
          <Grid item xs={12} md={4}>
            <Box className="footer-logo-wrap">
              <img src={logo3} alt="Nyukt AI" className="footer-logo" />
            </Box>
            <Typography variant="body2" className="footer-desc">
              Empowering businesses with intelligent AI agents. Build, deploy,
              and manage powerful automation without writing a single line of
              code.
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              className="footer-contact"
            >
              <img src={footermail} alt="Email" />
              <Typography variant="body2" className="body2">
                hello@nyukt.com
              </Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              className="footer-contact"
            >
              <img src={phone} alt="Phone" />
              <Typography variant="body2" className="body2">
                +91 987654321
              </Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              className="footer-contact"
            >
              <img src={map} alt="Location" />
              <Typography variant="body2" className="body2">
                311, ZED PINNACLE, Koramangala, Bengaluru, Karnataka 560095
              </Typography>
            </Stack>
          </Grid>

          {/* Footer links section */}
          {[
            {
              title: "Product",
              links: [
                "Features",
                "How It Works",
                "Use Cases",
                "Pricing",
                "Integrations",
                "API Documentation",
              ],
            },
            {
              title: "Company",
              links: [
                "About Us",
                "Careers",
                "Blog",
                "Press",
                "Partners",
                "Contact",
              ],
            },
            {
              title: "Resources",
              links: [
                "Help Center",
                "Community",
                "Tutorials",
                "Webinars",
                "Case Study",
                "Templates",
              ],
            },
            {
              title: "Legal",
              links: [
                "Terms & Conditions",
                "Privacy Policy",
                "Cookie Policy",
                "Security",
                "Compliance",
                "Data Processing",
              ],
            },
          ].map((section, i) => (
            <Grid key={i} item xs={12} sm={6} md={2}>
              <Box className="footer-links">
                <Typography variant="h6">{section.title}</Typography>
                <ul>
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <NavLink to={navLinkMap[link] || "#"}>{link}</NavLink>
                    </li>
                  ))}
                </ul>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Bottom line */}
        <Box className="footer-bottom">
          <Typography variant="body2" className="copyright-text">
            © 2025{" "}
            <Link
              href="https://www.nyukt.ai/"
              target="_blank"
              underline="none"
              sx={{ color: "#62748E", fontWeight: 500 }}
            >
              Nyukt.ai.
            </Link>{" "}
            All rights reserved.
          </Typography>

          <Box className="footer-social">
            <a
              href="https://www.linkedin.com/company/nyukt-ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a
              href="https://x.com/nyukt_ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="Twitter" />
            </a>
            <a
              href="https://www.instagram.com/nyukt_ai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="Instagram" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="Facebook" />
            </a>
            <a
              href="https://www.youtube.com/@nyuktai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtube} alt="YouTube" />
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
