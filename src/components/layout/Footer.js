import { Container, Section } from "@fcongson/lagom-ui";
import { Link } from "gatsby";
import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer-wrapper">
      <Section>
        <Container>
          <footer className="footer">
            <Link to="/" title="Logo" className="footer__logo">
              <div className="img" />
            </Link>
            <div className="footer__content">
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
                  <Link to="/services" className="footer__link">
                    Services
                  </Link>
                </li>
              </ul>
              <small className="copyright">
                Copyright © {new Date().getFullYear()} Barefoot Doula
              </small>
            </div>
          </footer>
        </Container>
      </Section>
    </div>
  );
};
