import React from "react";
import "./Section.css";

export const Section = ({ children, ...restProps }) => {
  return (
    <section className="section" {...restProps}>
      {children}
    </section>
  );
};
