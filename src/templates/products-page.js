import { Hero } from "@fcongson/lagom-ui";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import React from "react";
import { PreviewCompatibleImage } from "../components/PreviewCompatibleImage";
import { Pricing } from "../components/Pricing";
import { Testimonials } from "../components/Testimonials";
import { Container, PageHeader, Section } from "../components/core";
import { Layout } from "../components/layout";

// eslint-disable-next-line
export const ProductsPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
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
      <Section>
        <Container>
          <h3>{main.heading}</h3>
          <p>{main.description}</p>
        </Container>
      </Section>
      <Section>
        <Container>
          <PreviewCompatibleImage imageInfo={main.image1} />
          <PreviewCompatibleImage imageInfo={main.image2} />
          <PreviewCompatibleImage imageInfo={main.image3} />
        </Container>
      </Section>
      <Section>
        <Container>
          <Testimonials testimonials={testimonials} />
        </Container>
      </Section>
      <GatsbyImage
        image={fullImage?.childImageSharp?.gatsbyImageData}
        style={{ height: "100%" }}
      />
      <Section>
        <Container>
          <h2>{pricing.heading}</h2>
          <p>{pricing.description}</p>
          <Pricing data={pricing.plans} />
        </Container>
      </Section>
    </>
  );
};

ProductsPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
};

const ProductsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ProductsPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
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
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                gatsbyImageData(width: 526, quality: 92, layout: CONSTRAINED)
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                gatsbyImageData(width: 526, quality: 92, layout: CONSTRAINED)
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                gatsbyImageData(quality: 72, layout: FULL_WIDTH)
              }
            }
          }
        }
        testimonials {
          author
          quote
        }

        full_image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`;
