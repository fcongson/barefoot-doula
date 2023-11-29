import { Container, Section } from "@fcongson/lagom-ui";
import { Link } from "gatsby";
import React, { useState } from "react";
import "./Nav.css";

export const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="nav-wrapper">
      <Section>
        <Container className="nav-container" marginNone>
          <nav role="navigation" aria-label="main-navigation" className="nav">
            <div className="nav__brand">
              <Link to="/" title="Logo" className="nav__logo">
                <div className="img" />
              </Link>
              <button
                className={`nav__button ${isActive && "nav__button--active"}`}
                aria-expanded={isActive}
                onClick={() => setIsActive(!isActive)}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
            <ul className={`nav__menu ${isActive && "nav__menu--active"}`}>
              <li>
                <Link to="/" className="nav__link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav__link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="nav__link">
                  Services
                </Link>
              </li>
            </ul>
          </nav>
        </Container>
      </Section>
    </div>
  );
};
