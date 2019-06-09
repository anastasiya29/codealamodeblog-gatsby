import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Layout from 'components/layout';

const Tag = ({ pageContext, data }) => {
    const { tag } = pageContext;
    const { edges, totalCount } = data.allMarkdownRemark;
    const tagHeader = `${totalCount} post${
        totalCount === 1 ? "" : "s"
        } tagged with "${tag}"`;

    return (
        <Layout pageTitle={tagHeader} pageDescription="">
            <ul>
                {edges.map(({ node }) => {
                    const { slug } = node.fields
                    const { title } = node.frontmatter
                    return (
                        <li key={slug}>
                            <Link to={slug}>{title}</Link>
                        </li>
                    )
                })}
            </ul>
            {/*
                  This links to a page that does not yet exist.
                  We'll come back to it!
                */}
            <Link to="/tags">All tags</Link>
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
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
                        snippet: PropTypes.string,
                        frontmatter: PropTypes.shape({
                            title: PropTypes.string.isRequired,
                        }),
                        fields: PropTypes.shape({
                            slug: PropTypes.string.isRequired,
                        }),
                    }),
                }).isRequired
            ),
        }),
    }),
}

export const query = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 500
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
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;

export default Tag;