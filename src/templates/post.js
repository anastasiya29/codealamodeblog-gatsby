import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from 'components/layout';

const Post = ({ data }) => {
  const post = data.post;
  const left = data.left;
  const right = data.right;
  return (
    <Layout pageTitle={post.frontmatter.title} pageDescription={post.frontmatter.description}>

      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      {left && (
        <div>
          <Link to={left.fields.slug}>{left.frontmatter.title}</Link>
        </div>
      )}
      {right && (
        <div>
          <Link to={right.fields.slug}>{right.frontmatter.title}</Link>
        </div>
      )}
    </Layout>
  )
};

export const query = graphql`
  query($slug: String!, $left: String, $right: String) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        date
      }
    },
    left: markdownRemark(fields: { slug: { eq: $left } }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    },
    right: markdownRemark(fields: { slug: { eq: $right } }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;

export default Post;