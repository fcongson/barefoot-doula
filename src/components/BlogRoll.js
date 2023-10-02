import { LinkButton } from "@fcongson/lagom-ui";
import { Link, graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { PreviewCompatibleImage } from "./PreviewCompatibleImage";

const BlogRollTemplate = (props) => {
  const { edges: posts } = props.data.allMarkdownRemark;

  return (
    <>
      {posts &&
        posts.map(({ node: post }) => (
          <article
            className={`blog-list-item ${
              post.frontmatter.featuredpost ? "is-featured" : ""
            }`}
            key={post.id}
          >
            <header>
              {post?.frontmatter?.featuredimage && (
                <PreviewCompatibleImage
                  imageInfo={{
                    image: post.frontmatter.featuredimage,
                    alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                  }}
                />
              )}
              <p>
                <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                <span> &bull; {post.frontmatter.date}</span>
              </p>
            </header>
            <p>{post.excerpt}</p>
            <LinkButton to={post.fields.slug} Component={Link}>
              Keep Reading →
            </LinkButton>
          </article>
        ))}
    </>
  );
};

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export function BlogRoll() {
  const data = useStaticQuery(graphql`
    query BlogRollQuery {
      allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      ) {
        edges {
          node {
            excerpt(pruneLength: 400)
            id
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
              date(formatString: "MMMM DD, YYYY")
              featuredpost
              featuredimage {
                childImageSharp {
                  gatsbyImageData(width: 120, quality: 100, layout: CONSTRAINED)
                }
              }
            }
          }
        }
      }
    }
  `);
  return <BlogRollTemplate data={data} />;
}
