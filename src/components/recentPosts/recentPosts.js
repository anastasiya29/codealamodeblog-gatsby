import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Card from 'containers/card';
import PostPreview from 'components/postPreview';

const LISTING_QUERY = graphql`
  query RecentPostsQuery {
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

const RecentPosts = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({ allMarkdownRemark }) =>
      allMarkdownRemark.edges.map(({ node }) => (
        <Card key={node.fields.slug} mb={[40, 50]}>
          <PostPreview {...node} />
        </Card>
      ))
    }
  />
);

export default RecentPosts;
