import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import { Box } from 'rebass';
import { tagSanitizer } from 'gatsby/tagSanitizer';

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

const Tags = () => (
    <Box className="tags">
        Tags
        <StaticQuery
            query={TAGS_QUERY}
            render={({ allMarkdownRemark }) => (
                allMarkdownRemark.group
                    .sort((a, b) => b.totalCount - a.totalCount)
                    .map((tag, i) => (
                        <p key={i}>
                            <Link to={`/tags/${tagSanitizer(tag.fieldValue)}/`}>
                                #{tag.fieldValue} ({tag.totalCount})
                            </Link>
                        </p>
                    ))
            )}
        />
    </Box>
)

export default Tags;
