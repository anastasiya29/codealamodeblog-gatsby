import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import Head from './head';
import Header from './header';
import Footer from './footer';
import './global.css';

const Layout = ({
  children,
  pageTitle,
  pageDescription,
  bannerImage,
  pageImage,
}) => (
  <ThemeProvider theme={{}}>
    <div>
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
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node,
  pageTitle: PropTypes.string,
  pageDescription: PropTypes.string,
  bannerImage: PropTypes.string,
  pageImage: PropTypes.string,
};

export default Layout;
