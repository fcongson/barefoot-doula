import PropTypes from "prop-types";
import React from "react";
import { ProductsPageTemplate } from "../../templates/products-page";

const ProductsPagePreview = ({ entry, getAsset }) => {
  return (
    <ProductsPageTemplate
      title={entry.getIn(["data", "title"])}
      image={getAsset(entry.getIn(["data", "image"]))}
      heading={entry.getIn(["data", "heading"])}
      description={entry.getIn(["data", "description"])}
    />
  );
};

ProductsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default ProductsPagePreview;
