import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Box } from 'rebass';
import TagWithCount from 'components/tagWithCount';

const TAGS_QUERY = graphql`
  query TagsQuery {
    allMarkdownRemark(limit: 100) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
    }
  }
`;

const TopTags = () => (
  <Box className="tags">
    Top Tags
        <StaticQuery
      query={TAGS_QUERY}
      render={({ allMarkdownRemark }) => (
        allMarkdownRemark.group
          .sort((a, b) => b.totalCount - a.totalCount)
          .slice(0, 5)
          .map((tag, i) => (
            <p key={i}><TagWithCount tag={tag} /></p>
          ))
      )}
    />
  </Box>
)

export default TopTags;
