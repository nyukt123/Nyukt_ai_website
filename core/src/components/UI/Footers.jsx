// import footerContact from "../../api/footerApi.json";
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";

import { NavLink } from "react-router-dom";

export const Footers = () => {
//   const footerIcon = {
//     MdPlace: <MdPlace />,
//     IoCallSharp: <IoCallSharp />,
//     TbMailPlus: <TbMailPlus />,
//   };

  return (
    <footer className="footer-section">
  <div className="container grid grid-four-cols">
    <div className="footer-about">
      <h4>Nyukt AI</h4>
      <p>
        Intelligent AI agents that automate tasks and provide valuable insights
        for modern businesses.
      </p>
    </div>

    <div className="footer-links">
      <h4>Product</h4>
      <ul>
        <li><NavLink to="#">Features</NavLink></li>
        <li><NavLink to="#">Pricing</NavLink></li>
        <li><NavLink to="#">Use Cases</NavLink></li>
        <li><NavLink to="#">Roadmap</NavLink></li>
      </ul>
    </div>

    <div className="footer-links">
      <h4>Resources</h4>
      <ul>
        <li><NavLink to="#">Documentation</NavLink></li>
        <li><NavLink to="#">API Reference</NavLink></li>
        <li><NavLink to="#">Blog</NavLink></li>
        <li><NavLink to="#">Community</NavLink></li>
      </ul>
    </div>

    <div className="footer-links">
      <h4>Company</h4>
      <ul>
        <li><NavLink to="#">About Us</NavLink></li>
        <li><NavLink to="#">Careers</NavLink></li>
        <li><NavLink to="#">Privacy Policy</NavLink></li>
        <li><NavLink to="#">Terms of Service</NavLink></li>
      </ul>
    </div>
  </div>

  {/* ⬇️ Do not touch the copyright section */}
  <div className="copyright-area">
    <div className="container">
      <div className="grid grid-two-cols">
        <div className="copyright-text">
          <p>
            Copyright &copy; 2025, All Right Reserved
            <NavLink to="#" target="_blank"> Nyukt.ai</NavLink>
          </p>
        </div>
        <div className="footer-menu">
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="#">Social</NavLink></li>
            <li><NavLink to="#">hag</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>

  );
};