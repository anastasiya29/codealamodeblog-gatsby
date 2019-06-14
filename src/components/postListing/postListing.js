import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Card from 'containers/card';
import PostPreview from 'components/postPreview';

const LISTING_QUERY = graphql`
  query PostListingQuery {
    allMarkdownRemark(
      limit: 25
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
            tags
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
            <PostPreview {...node} />
          </Card>
        ))
      )}
    />
  </div>
);

export default PostListing;
