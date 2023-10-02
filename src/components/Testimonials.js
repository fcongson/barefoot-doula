import { Quote } from "@fcongson/lagom-ui";
import PropTypes from "prop-types";
import React from "react";
import { v4 } from "uuid";

export const Testimonials = ({ testimonials }) => (
  <>
    {testimonials.map((testimonial) => (
      <article key={v4()}>
        <Quote>
          <p>"{testimonial.quote}"</p>
          <cite> – {testimonial.author}</cite>
        </Quote>
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
