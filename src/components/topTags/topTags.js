import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Box } from 'rebass';
import { tagSanitizer } from 'gatsby/tagSanitizer';
import Tag  from './tag';

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
                        <p key={i}>
                            <Tag slug={`/tags/${tagSanitizer(tag.fieldValue)}/`} tag={tag} />
                        </p>
                    ))
            )}
        />
    </Box>
)

export default TopTags;
