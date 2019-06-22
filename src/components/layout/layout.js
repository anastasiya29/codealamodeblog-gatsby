import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Head from './head';
import Header from 'components/header';
import GlobalStyle from 'global.css.js';

const Layout = ({ data, children, pageTitle, pageDescription, isPostPage }) => (
  <div>
    <GlobalStyle />
    <Head />
    <Header
      siteMetadata={data.site.siteMetadata}
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      isPostPage={isPostPage}
    />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
  pageTitle: PropTypes.string,
  pageDescription: PropTypes.string,
  isPostPage: PropTypes.bool,
};

const LayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitle
            siteDescription
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
);

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutWithQuery;
