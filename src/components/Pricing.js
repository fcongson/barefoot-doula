import PropTypes from "prop-types";
import React from "react";

export const Pricing = ({ data }) => (
  <>
    {data.map((price) => (
      <section key={price.plan}>
        <h4>{price.plan}</h4>
        <h2>${price.price}</h2>
        <p>{price.description}</p>
        <ul>
          {price.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    ))}
  </>
);

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    })
  ),
};
