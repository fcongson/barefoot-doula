import { Link } from "gatsby";
import React, { useState } from "react";
import logo from "../../../static/images/logo-long.svg";
import "./Nav.css";

export const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="nav-container">
      <nav role="navigation" aria-label="main-navigation" className="nav">
        <Link to="/" title="Logo" className="nav__logo">
          <img src={logo} alt="Lagom" />
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
            <Link to="/products" className="nav__link">
              Services
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
