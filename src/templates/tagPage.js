import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import { ResponsiveColumns, WideColumn } from 'containers/responsiveColumns';
import MobileSliderColumn from 'containers/mobileSliderColumn';
import TagsList from 'components/tagsList';
import Card from 'containers/card';
import PostPreview from 'components/postPreview';

const Tag = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`;

  return (
    <Layout pageTitle={tagHeader} pageDescription=" ">
      <ResponsiveColumns>
        <MobileSliderColumn>
          <TagsList />
        </MobileSliderColumn>
        <WideColumn>
          {edges.map(({ node }) => (
            <Card key={node.fields.slug} mb={[40, 50]}>
              <PostPreview {...node} />
            </Card>
          ))}
        </WideColumn>
      </ResponsiveColumns>
    </Layout>
  );
};

Tag.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.array.isRequired,
    }),
  }),
};

export const query = graphql`
  query TagPageQuery($tag: String) {
    allMarkdownRemark(
      limit: 100
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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

export default Tag;
