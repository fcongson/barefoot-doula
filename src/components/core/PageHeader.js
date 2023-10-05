import React from "react";
import "./PageHeader.css";

export const PageHeader = ({ children }) => {
  return <h1 className="page-header">{children}</h1>;
};
