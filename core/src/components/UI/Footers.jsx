import { Box, Typography, Grid, Link, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import FacebookIcon from "@mui/icons-material/Facebook";
import "./Footer.css";
import logo from "../../assets/logo-2.png"; 
import linkedin from "../../assets/icons/linkedin.png";
import twitter from "../../assets/icons/twitter.png";
import instagram from "../../assets/icons/instagram.png";
import facebook from "../../assets/icons/facebook.png";
import footermail from "../../assets/icons/footer-mail.png";
import phone from "../../assets/icons/phone.png";
import map from "../../assets/icons/map-pin.png";

export const Footers = () => {
  return (
    <Box component="footer" className="footer-section">
      <Box className="container footer-cont">
        <Grid container spacing={10}>
          {/* Left section */}
          <Grid item xs={12} md={4}>
            <Box className="footer-logo-wrap">
              <img src={logo} alt="Nyukt AI" className="footer-logo" />
             
            </Box>
            <Typography variant="body2" className="footer-desc">
              Empowering businesses with intelligent AI agents. Build, deploy, and manage powerful automation without writing a single line of code.
            </Typography>

            <Stack direction="row" spacing={1} alignItems="center" className="footer-contact">
              {/* <MailOutlineIcon fontSize="small" /> */}
              <img src={footermail}/>
              <Typography variant="body2">hello@nyukt.com</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center" className="footer-contact">
              {/* <CallOutlinedIcon fontSize="small" /> */}
              <img src={phone}/>
              <Typography variant="body2">+91 987654321</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center" className="footer-contact">
              {/* <LocationOnOutlinedIcon fontSize="small" /> */}
              <img src={map}/>
              <Typography variant="body2">
                311, ZED PINNACLE, Koramangala, Bengaluru, Karnataka 560095
              </Typography>
            </Stack>
          </Grid>

          {/* Footer links section */}
          {[
            {
              title: "Product",
              links: ["Features", "How It Works", "Use Cases", "Pricing", "Integrations", "API Documentation"],
            },
            {
              title: "Company",
              links: ["About Us", "Careers", "Blog", "Press", "Partners", "Contact"],
            },
            {
              title: "Resources",
              links: ["Help Center", "Community", "Tutorials", "Webinars", "Case Study", "Templates"],
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
                      <NavLink to="#">{link}</NavLink>
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
            © 2025 Nyukt.ai. All rights reserved.
          </Typography>
          <Box className="footer-social">
            <Link href="#" target="_blank"><img src={linkedin}/></Link>
            <Link href="#" target="_blank"><img src={twitter}/></Link>
            <Link href="#" target="_blank"><img src={instagram}/></Link>
            <Link href="#" target="_blank"><img src={facebook}/></Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
