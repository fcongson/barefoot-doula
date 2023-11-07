import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import React from "react";
import { Container, Hero, PageHeader, Section } from "../components/core";
import { Layout } from "../components/layout";

// eslint-disable-next-line
export const ServicesPageTemplate = ({
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
        <Section>
          <Container>
            <PageHeader>{title}</PageHeader>
          </Container>
        </Section>
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

ServicesPageTemplate.propTypes = {
  title: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  description: PropTypes.string,
};

const ServicesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ServicesPageTemplate
        title={frontmatter.title}
        image={frontmatter.image}
        heading={frontmatter.heading}
        description={frontmatter.description}
      />
    </Layout>
  );
};

ServicesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ServicesPage;

export const ServicesPageQuery = graphql`
  query ServicesPage($id: String!) {
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
