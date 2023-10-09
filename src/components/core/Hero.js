import React from "react";
import "./Hero.css";

export const Hero = ({ children, className, image, ...restProps }) => {
  return (
    <div className={`hero ${!!className ? className : ""}`} {...restProps}>
      <div className="hero__image">{image}</div>
      <div className="hero__content">{children}</div>
    </div>
  );
};
