import React from "react";
import { Link } from "react-router";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrapper">
      {/* Top glow line */}
      <div className="footer-glow-line" />

      <div className="footer-container">
        {/* Brand Column */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="text-gradient text-2xl font-bold">EnhancResume</span>
          </Link>
          <p className="footer-tagline">
            AI-powered resume analysis that helps you land the job you deserve.
            Get ATS scores, actionable feedback, and beat the competition.
          </p>
          <div className="footer-badge">
            <span className="footer-badge-dot" />
            AI-Powered Analysis
          </div>
        </div>

        {/* Links Grid */}
        <div className="footer-links-grid">
          {/* Product */}
          <div className="footer-link-group">
            <h4 className="footer-link-heading">Product</h4>
            <ul className="footer-link-list">
              <li><Link to="/upload" className="footer-link">Upload Resume</Link></li>
              <li><Link to="/" className="footer-link">My Resumes</Link></li>
              <li><Link to="/upload" className="footer-link">ATS Checker</Link></li>
            </ul>
          </div>

          {/* Company */}
          {/* <div className="footer-link-group">
            <h4 className="footer-link-heading">Company</h4>
            <ul className="footer-link-list">
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div> */}

          {/* Legal */}
          <div className="footer-link-group">
            <h4 className="footer-link-heading">Legal</h4>
            <ul className="footer-link-list">
              <li><Link to="/privacy-policy" className="footer-link">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="footer-link">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          © {currentYear} EnhancResume. All rights reserved.
        </p>
        <div className="footer-bottom-links">
          <Link to="/privacy-policy" className="footer-bottom-link">Privacy</Link>
          <span className="footer-bottom-sep">·</span>
          <Link to="/terms-of-service" className="footer-bottom-link">Terms</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
