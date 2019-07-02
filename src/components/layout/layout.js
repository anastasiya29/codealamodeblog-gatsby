import React from 'react';
import PropTypes from 'prop-types';
import Head from './head';
import Header from './header';
import Footer from './footer';
import GlobalStyle from 'global.css.js';

const Layout = ({
  children,
  pageTitle,
  pageDescription,
  bannerImage,
  pageImage,
}) => (
  <div>
    <GlobalStyle />
    <Head
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      pageImage={pageImage}
    />
    <Header
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      bannerImage={bannerImage}
    />
    {children}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
  pageTitle: PropTypes.string,
  pageDescription: PropTypes.string,
  bannerImage: PropTypes.string,
  pageImage: PropTypes.string,
};

export default Layout;
