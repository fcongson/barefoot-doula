import PropTypes from "prop-types";
import React from "react";
import { PreviewCompatibleImage } from "../components/PreviewCompatibleImage";

export const Features = ({ gridItems }) => (
  <>
    {gridItems.map((item) => (
      <section key={item.text}>
        <PreviewCompatibleImage imageInfo={item} />
        <p>{item.text}</p>
      </section>
    ))}
  </>
);

Features.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};
