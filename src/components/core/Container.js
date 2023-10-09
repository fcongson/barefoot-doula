import React from "react";
import "./Container.css";

export const Container = ({
  children,
  className,
  marginNone,
  ...restProps
}) => {
  return (
    <div
      className={`container ${!!className ? className : ""} ${
        !!marginNone ? "container--margin-none" : ""
      }`}
      {...restProps}
    >
      {children}
    </div>
  );
};
