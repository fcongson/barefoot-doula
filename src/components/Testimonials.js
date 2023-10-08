import PropTypes from "prop-types";
import React from "react";
import { v4 } from "uuid";

export const Testimonials = ({ testimonials }) => (
  <>
    {testimonials.map((testimonial) => (
      <article key={v4()}>
        <p>
          "{testimonial.quote}"<cite> – {testimonial.author}</cite>
        </p>
      </article>
    ))}
  </>
);

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
    })
  ),
};
