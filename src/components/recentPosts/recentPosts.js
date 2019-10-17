import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Card from 'containers/card';
import PostPreview from 'components/postPreview';
import Fade from 'react-reveal/Fade';

const LISTING_QUERY = graphql`
  query RecentPostsQuery {
    allMarkdownRemark(
      limit: 100
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
        <Fade bottom key={node.fields.slug}>
          <Card mb={[40, 50]}>
            <PostPreview {...node} />
          </Card>
        </Fade>
      ))
    }
  />
);

export default RecentPosts;
