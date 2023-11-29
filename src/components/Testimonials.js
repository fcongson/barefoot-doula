import PropTypes from "prop-types";
import React from "react";
import { v4 } from "uuid";

import "./Testimonials.css";

export const Testimonials = ({ testimonials }) => (
  <>
    {testimonials.map((testimonial) => (
      <article key={v4()} className="testimonial">
        <blockquote className="testimonial__quote">
          {testimonial.quote}
        </blockquote>
        <cite className="testimonial__author">– {testimonial.author}</cite>
      </article>
    ))}
  </>
);

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
    }),
  ),
};
