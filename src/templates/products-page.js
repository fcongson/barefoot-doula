import { Hero } from "@fcongson/lagom-ui";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import React from "react";
import { Container, PageHeader, Section } from "../components/core";
import { Layout } from "../components/layout";

// eslint-disable-next-line
export const ProductsPageTemplate = ({
  title,
  image,
  heading,
  description,
}) => {
  return (
    <>
      <Hero
        image={
          <GatsbyImage
            image={image?.childImageSharp?.gatsbyImageData}
            style={{ height: "100%" }}
          />
        }
      >
        <PageHeader>{title}</PageHeader>
      </Hero>
      <Section>
        <Container>
          <h3>{heading}</h3>
          <p>{description}</p>
        </Container>
      </Section>
    </>
  );
};

ProductsPageTemplate.propTypes = {
  title: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  description: PropTypes.string,
};

const ProductsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ProductsPageTemplate
        title={frontmatter.title}
        image={frontmatter.image}
        heading={frontmatter.heading}
        description={frontmatter.description}
      />
    </Layout>
  );
};

ProductsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ProductsPage;

export const ProductsPageQuery = graphql`
  query ProductsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        description
      }
    }
  }
`;
