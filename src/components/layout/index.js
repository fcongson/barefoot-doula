import "@fcongson/lagom-tokens/css/theme/_dark.css";
import "@fcongson/lagom-tokens/css/theme/_light.css";
import "@fcongson/lagom-tokens/css/variables/_core.css";
import { ThemeProvider } from "@fcongson/lagom-ui";
import { withPrefix } from "gatsby";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../../style/custom-style.css";
import { useSiteMetadata } from "../../utils/useSiteMetadata";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  const [prefersDark, setPrefersDark] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme:dark)");
    setPrefersDark(media.matches);
    media.onchange = (ev) => {
      ev.matches ? setPrefersDark(true) : setPrefersDark(false);
    };
  }, []);

  return (
    <ThemeProvider>
      <Helmet>
        <html lang="en" data-lagom-theme={prefersDark ? "dark" : "light"} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700|Domine:400,700&display=swap"
          rel="stylesheet"
          type="text/css"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}images/favicon.png`}
          sizes="32x32"
        />
      </Helmet>
      <Nav />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};
