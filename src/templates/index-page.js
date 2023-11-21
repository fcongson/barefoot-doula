import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import React from "react";
import { Testimonials } from "../components/Testimonials";
import {
  Container,
  FeaturedSection,
  Hero,
  PageHeader,
  Section,
  SectionHeader,
} from "../components/core";
import { Layout } from "../components/layout";
import "./index-page.css";

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
    <div className="home-wrapper">
      <Hero
        image={
          <GatsbyImage
            image={image?.childImageSharp?.gatsbyImageData}
            style={{ height: "100%" }}
          />
        }
        className="hero-home"
      >
        <Section>
          <Container>
            <PageHeader color="var(--satin-linen)">{heading}</PageHeader>
            <SectionHeader color="var(--satin-linen)">
              {subheading}
            </SectionHeader>
          </Container>
        </Section>
      </Hero>
      <FeaturedSection backgroundColor="var(--body-color)">
        <h2>{intro.title}</h2>
        {intro.description.map(({ paragraph }) => (
          <p>{paragraph}</p>
        ))}
      </FeaturedSection>
      <FeaturedSection backgroundColor="var(--body-color)">
        <h2>{philosophy.title}</h2>
        {philosophy.description.map(({ paragraph }) => (
          <p>{paragraph}</p>
        ))}
      </FeaturedSection>
      <FeaturedSection backgroundColor="var(--xanadu)">
        <h2>{services.title}</h2>
        {services.description.map(({ paragraph }) => (
          <p>{paragraph}</p>
        ))}
        <div className="packages">
          {services.packages.map(({ title, text }, index) => (
            <div className="package" key={index}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </FeaturedSection>
      <FeaturedSection backgroundColor="var(--body-color)">
        <h2>{testimonials.title}</h2>
        <Testimonials testimonials={testimonials.testimonials} />
      </FeaturedSection>
    </div>
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
          description {
            paragraph
          }
        }
        philosophy {
          title
          description {
            paragraph
          }
        }
        services {
          title
          description {
            paragraph
          }
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
