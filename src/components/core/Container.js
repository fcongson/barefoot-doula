import React from "react";
import "./Container.css";

export const Container = ({ children, className, ...restProps }) => {
  return (
    <div className={`container ${!!className ? className : ""}`} {...restProps}>
      {children}
    </div>
  );
};
