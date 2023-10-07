import { Hero } from "@fcongson/lagom-ui";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import React from "react";
import { Testimonials } from "../components/Testimonials";
import {
  Container,
  PageHeader,
  Section,
  SectionHeader,
} from "../components/core";
import { Layout } from "../components/layout";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  title,
  image,
  heading,
  subheading,
  intro,
  philosophy,
  services,
  testimonials,
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
        <PageHeader>{heading}</PageHeader>
        <SectionHeader>{subheading}</SectionHeader>
      </Hero>
      <Section>
        <Container>
          <h2>{intro.title}</h2>
          <p>{intro.description}</p>
        </Container>
      </Section>
      <Section
        style={{
          backgroundColor: "var(--yellow-metal)",
        }}
      >
        <Container
          style={{
            backgroundColor: "var(--yellow-metal)",
            padding: "4rem 0",
            margin: "0 auto",
          }}
        >
          <h2>{philosophy.title}</h2>
          <p>{philosophy.description}</p>
        </Container>
      </Section>
      <Section
        style={{
          backgroundColor: "var(--xanadu)",
        }}
      >
        <Container
          style={{
            backgroundColor: "var(--xanadu)",
            padding: "4rem 0",
            margin: "0 auto",
          }}
        >
          <h2>{services.title}</h2>
          <p>{services.description}</p>
          {services.packages.map(({ title, text }) => (
            <>
              <h3>{title}</h3>
              <p>{text}</p>
            </>
          ))}
        </Container>
      </Section>
      <Section
        style={{
          backgroundColor: "var(--opium)",
        }}
      >
        <Container
          style={{
            backgroundColor: "var(--opium)",
            padding: "4rem 0",
            margin: "0 auto",
          }}
        >
          <h2>{testimonials.title}</h2>
          <Testimonials testimonials={testimonials.testimonials} />
        </Container>
      </Section>
    </>
  );
};

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  subheading: PropTypes.string,
  intro: PropTypes.object,
  philosophy: PropTypes.object,
  services: PropTypes.object,
  testimonials: PropTypes.object,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        image={frontmatter.image}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        intro={frontmatter.intro}
        philosophy={frontmatter.philosophy}
        services={frontmatter.services}
        testimonials={frontmatter.testimonials}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        intro {
          title
          description
        }
        philosophy {
          title
          description
        }
        services {
          title
          description
          packages {
            title
            text
          }
        }
        testimonials {
          title
          testimonials {
            author
            quote
          }
        }
      }
    }
  }
`;
