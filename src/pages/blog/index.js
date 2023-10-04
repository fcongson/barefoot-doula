import { Container, PageHeader, Section } from "@fcongson/lagom-ui";
import React from "react";
import { BlogRoll } from "../../components/BlogRoll";
import { Layout } from "../../components/layout";

export default function BlogIndexPage() {
  return (
    <Layout>
      <div
        className="full-width-image-container"
        style={{
          // width: "100vw",
          // height: "400px",
          // position: "relative",
          // left: "50%",
          // right: "50%",
          // margin: "2em -50vw",
          // display: "flex",
          // justifyContent: "center",
          // alignitems: "center",
          // backgroundSize: "cover",
          // backgroundPosition: "bottom",
          backgroundImage: `url('/images/kym-ellis-Ye6rupMjAWk-unsplash.jpg')`,
        }}
      >
        <PageHeader
          style={{
            boxShadow:
              "0.5rem 0 0 var(--primary), -0.5rem 0 0 var(--primary)",
            backgroundColor: "var(--primary)",
          }}
        >
          Latest Stories
        </PageHeader>
      </div>
      <Section>
        <Container>
          <BlogRoll />
        </Container>
      </Section>
    </Layout>
  );
}
