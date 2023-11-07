import "@fcongson/lagom-tokens/css/theme/_dark.css";
import "@fcongson/lagom-tokens/css/theme/_light.css";
import "@fcongson/lagom-tokens/css/variables/_core.css";
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
    <>
      <Helmet>
        <html lang="en" data-theme={prefersDark ? "dark" : "light"} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1.0,initial-scale=1.0,viewport-fit=cover"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Cutive+Mono&family=Quicksand:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}images/favicon.png`}
          sizes="32x32"
        />
      </Helmet>
      <div className="body-container">
        <Nav />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};
