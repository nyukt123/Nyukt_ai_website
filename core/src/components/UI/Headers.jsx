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
import logo from "../../assets/logo.png";
import "./Header.css";

const navLinks = [
  { label: "Features", to: "/" },
  { label: "How It Works", to: "/about" },
  { label: "Use Cases", to: "/product" },
  { label: "Pricing", to: "/marketplace" },
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
              <img src={logo} alt="Nyukt Logo" className="logo-img" />
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
            <NavLink to="/login" className="login-link">
              Login
            </NavLink>
            <NavLink to="/get-started" className="get-started-link">
              <Button variant="contained" className="btn-get-started">
                Get Started
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
