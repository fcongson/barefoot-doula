import { Container, PageHeader, Section } from "@fcongson/lagom-ui";
import { Link } from "gatsby";
import React from "react";
import { Layout } from "../components/layout";

const NotFoundPage = () => (
  <Layout>
    <Section>
      <Container>
        <PageHeader>404</PageHeader>
        <h2>Page not found</h2>
        <p>
          <Link to="/">Return to homepage</Link>
        </p>
      </Container>
    </Section>
  </Layout>
);

export default NotFoundPage;
