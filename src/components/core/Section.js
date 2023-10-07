import React from "react";
import "./Section.css";

export const Section = ({ children, backgroundColor, ...restProps }) => {
  return (
    <section
      className={`section ${
        !!backgroundColor ? "section--background-color" : ""
      }`}
      style={!!backgroundColor ? { backgroundColor: backgroundColor } : null}
      {...restProps}
    >
      {children}
    </section>
  );
};
