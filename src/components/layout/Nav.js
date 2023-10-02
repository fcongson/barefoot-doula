import { Container } from "@fcongson/lagom-ui";
import { Link } from "gatsby";
import React, { useState } from "react";
import github from "../../../static/images/github-icon.svg";
import logo from "../../../static/images/logo.png";

export const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Container>
      <nav role="navigation" aria-label="main-navigation" className="nav">
        <Link to="/" title="Logo">
          <img src={logo} alt="Lagom" style={{ width: "10rem" }} />
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
        <ul id="navMenu" className={`${isActive && "is-active"}`}>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <a
              href="https://github.com/fcongson/lagom-starter-gatsby-decap-cms"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github}
                alt="Github"
                style={{ width: "1em", height: "1em" }}
              />
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  );
};
