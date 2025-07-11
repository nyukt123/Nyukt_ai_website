import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.png";

export const Headers = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container navbar">
        {/* Logo */}
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="Nyukt Logo" className="logo-img" />
          </NavLink>
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Links */}
        <nav className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <NavLink to="/" exact="true" onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</NavLink>
            </li>
            <li>
              <NavLink to="/product" onClick={() => setIsMobileMenuOpen(false)}>Product</NavLink>
            </li>
            <li>
              <NavLink to="/marketplace" onClick={() => setIsMobileMenuOpen(false)}>Marketplace</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</NavLink>
            </li>
          </ul>
        </nav>

        {/* Auth Buttons */}
        <div className="auth-buttons">
          <NavLink to="/login" className="auth-link">Login</NavLink>
          <NavLink to="/get-started" className="btn-get-started">Get Started</NavLink>
        </div>
      </div>
    </header>
  );
};
