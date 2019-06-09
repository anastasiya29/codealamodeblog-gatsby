import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Card from 'containers/card';
import Post from './post';

const LISTING_QUERY = graphql`
  query PostListingQuery {
    allMarkdownRemark(
      limit: 5
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          snippet
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

const PostListing = () => (
  <div>
    Recent Posts
  <StaticQuery
      query={LISTING_QUERY}
      render={({ allMarkdownRemark }) => (
        allMarkdownRemark.edges.map(({ node }) => (
          <Card key={node.fields.slug}>
            <Post {...node} />
          </Card>
        ))
      )}
    />
  </div>
);

export default PostListing;
