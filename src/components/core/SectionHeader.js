import React from "react";
import "./SectionHeader.css";

export const SectionHeader = ({ children, ...restProps }) => {
  return (
    <h2 className="section-header" {...restProps}>
      {children}
    </h2>
  );
};
