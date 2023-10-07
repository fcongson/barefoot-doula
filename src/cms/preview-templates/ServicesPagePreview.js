import PropTypes from "prop-types";
import React from "react";
import { ServicesPageTemplate } from "../../templates/services-page";

const ServicesPagePreview = ({ entry, getAsset }) => {
  return (
    <ServicesPageTemplate
      title={entry.getIn(["data", "title"])}
      image={getAsset(entry.getIn(["data", "image"]))}
      heading={entry.getIn(["data", "heading"])}
      description={entry.getIn(["data", "description"])}
    />
  );
};

ServicesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default ServicesPagePreview;
