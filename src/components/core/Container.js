import React from "react";
import "./Container.css";

export const Container = ({ children, ...restProps }) => {
  return (
    <div className="container" {...restProps}>
      {children}
    </div>
  );
};
