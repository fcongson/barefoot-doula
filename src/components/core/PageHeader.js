import React from "react";
import "./PageHeader.css";

export const PageHeader = ({ children, ...restProps }) => {
  return (
    <h1 className="page-header" {...restProps}>
      {children}
    </h1>
  );
};
