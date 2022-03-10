import ChangeTheme from "../components/ChangeTheme";
import Contact from "../container/Contact";
import Footer from "../container/Footer";
import Header from "../components/Header/Header";
import { Helmet } from "react-helmet";
import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import Waves from "./Waves";
import "./Waves.scss";
const Layout = ({ children, page }) => {
  const isFooter = true;
  return (
    <div>
      <Helmet>
        <title>{`Kanishk's Portfolio | ${page}`}</title>
        <html lang="en" />
        <meta name="description" content="Portfolio Website"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta name="author" content="Kanishk Shah"></meta>
        <meta
          name="keywords"
          content="Portfolio, Kanishk Shah, Kanishk, SASS, Javascript"
        ></meta>
      </Helmet>
      <Header />
      {children}
      <ChangeTheme />
      <ScrollToTop />
      <div className="footer__waves">
        <Contact isFooter={isFooter} />
        <Footer />
        <Waves />
      </div>
    </div>
  );
};

export default Layout;
