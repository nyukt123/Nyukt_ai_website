// Header.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Box,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import logo from "../../assets/logo.png";
// import logo2 from "../../assets/logo-2.png";
import logo3 from "../../assets/logo-3.png";
// import "./Header.css";

const navLinks = [
  { label: "Product", to: "/product" },
  { label: "Features", to: "/features" },
  { label: "How It Works", to: "/howitworks" },
  { label: "UseCases", to: "/UseCases" },
  // { label: "Pricing", to: "/Pricing" },
  { label: "About Us", to: "/about-us" },
  { label: "Contact Us", to: "/contact-us" },

  // { label: "SmartHireAI", to: "https://smarthireai.nyukt.ai/" },

];

export const Headers = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <Box className="drawer-container" onClick={handleDrawerToggle}>
      <List>
        {navLinks.map(({ label, to }) => (
          <ListItem key={to} disablePadding>
            <ListItemButton component={NavLink} to={to}>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" elevation={0} className="header-appbar">
        <Container maxWidth={false} className="header-container">
          {/* Logo */}
          <Box className="logo-box">
            <NavLink to="/">
              <img src={logo3} alt="Nyukt Logo" className="logo-img" />
            </NavLink>
          </Box>

          {/* Desktop Nav Links */}
          <Box className="nav-links">
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {label}
              </NavLink>
            ))}
          </Box>

          {/* Auth Buttons */}
          <Box className="auth-buttons">
            
            <NavLink to="https://smarthireai.nyukt.ai/" target="_blank" className="get-started-link">
              <Button variant="contained" className="btn-get-started">
                SmartHireAI
              </Button>
            </NavLink>
          </Box>

          {/* Hamburger Menu */}
          <IconButton
            edge="end"
            onClick={handleDrawerToggle}
            className="hamburger-icon"
            sx={{
              display: { xs: "block", md: "none" },
              color: "#7C3AED",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </>
  );
};
