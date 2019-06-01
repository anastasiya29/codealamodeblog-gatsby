import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';

const Post = ({ data, location }) => {

  const { markdownRemark } = data;
  return (
    <div location={location}>
      <h1>{markdownRemark.frontmatter.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: markdownRemark.html,
        }}
      />
    </div>
  )
};


export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
