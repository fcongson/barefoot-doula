import { Link } from "gatsby";
import React, { useState } from "react";
import { Container, Section } from "../core";
import "./Nav.css";

export const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="nav-container">
      <nav role="navigation" aria-label="main-navigation">
        <Section>
          <Container className="nav">
            <Link to="/" title="Logo" className="nav__logo">
              <div className="img" />
            </Link>
            {/* Hamburger menu */}
            <button
              className={`${isActive && "is-active"}`}
              aria-expanded={isActive}
              onClick={() => setIsActive(!isActive)}
            >
              <span />
              <span />
              <span />
            </button>
            <ul className={`nav__menu ${isActive && "is-active"}`}>
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
          </Container>
        </Section>
      </nav>
    </div>
  );
};
