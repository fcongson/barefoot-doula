import { Link } from "gatsby";
import React from "react";
import logo from "../../../static/images/logo-long-dark.svg";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <Link to="/" title="Logo" className="footer__logo">
          <img src={logo} alt="Lagom" />
        </Link>
        <ul className="footer__links">
          <li>
            <Link to="/" className="footer__link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="footer__link">
              About
            </Link>
          </li>
          <li>
            <Link to="/products" className="footer__link">
              Services
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};
