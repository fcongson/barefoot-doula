import React from "react";
import "./Section.css";

export const Section = ({
  children,
  className,
  backgroundColor,
  ...restProps
}) => {
  return (
    <section
      className={`section ${!!className ? className : ""} ${
        !!backgroundColor ? "section--background-color" : ""
      }`}
      style={!!backgroundColor ? { backgroundColor: backgroundColor } : null}
      {...restProps}
    >
      {children}
    </section>
  );
};
