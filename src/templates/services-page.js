import {
  Container,
  Hero,
  PageHeader,
  Section,
  useTheme,
} from "@fcongson/lagom-ui";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import React from "react";
import { Content, HTMLContent } from "../components/Content";
import { Layout } from "../components/layout";

// eslint-disable-next-line
export const ServicesPageTemplate = ({
  title,
  image,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;
  const theme = useTheme();

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
        <Container style={{ maxWidth: theme.sizes.maxWidthContent }}>
          <PageContent
            content={content}
            style={{ maxWidth: theme.sizes.maxWidthContent }}
          />
        </Container>
      </Section>
    </>
  );
};

ServicesPageTemplate.propTypes = {
  title: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const ServicesPage = ({ data }) => {
  const { markdownRemark } = data;

  return (
    <Layout>
      <ServicesPageTemplate
        contentComponent={HTMLContent}
        title={markdownRemark.frontmatter.title}
        image={markdownRemark.frontmatter.image}
        content={markdownRemark.html}
      />
    </Layout>
  );
};

ServicesPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ServicesPage;

export const ServicesPageQuery = graphql`
  query ServicesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
