import { Container, PageHeader, Section } from "@fcongson/lagom-ui";
import { Link, graphql } from "gatsby";
import { kebabCase } from "lodash";
import React from "react";
import { Helmet } from "react-helmet";
import { Layout } from "../../components/layout";

export default function TagsPage({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) {
  return (
    <Layout>
      <Helmet title={`Tags | ${title}`} />
      <Section>
        <Container>
          <PageHeader>Tags</PageHeader>
          <ul>
            {group.map((tag) => (
              <li key={tag.fieldValue}>
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </Layout>
  );
}

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`;
