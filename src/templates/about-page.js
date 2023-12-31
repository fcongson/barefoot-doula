import { Container, PageHeader, Section, useTheme } from "@fcongson/lagom-ui";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Content, HTMLContent } from "../components/Content";
import { Layout } from "../components/layout";

// eslint-disable-next-line
export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;
  const theme = useTheme();

  return (
    <>
      <Section style={{ marginTop: "4rem" }}>
        <Container>
          <PageHeader>{title}</PageHeader>
        </Container>
      </Section>
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

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
