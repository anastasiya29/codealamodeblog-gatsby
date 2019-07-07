import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import TagWithCount from 'components/tagWithCount';

const TAGS_QUERY = graphql`
  query TagsListQuery {
    allMarkdownRemark(limit: 100) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

const TagsList = ({ count }) => (
  <StaticQuery
    query={TAGS_QUERY}
    render={({ allMarkdownRemark }) =>
      allMarkdownRemark.group
        .sort((a, b) => b.totalCount - a.totalCount)
        .slice(0, count)
        .map((tag, i) => (
          <p key={i}>
            <TagWithCount tag={tag} />
          </p>
        ))
    }
  />
);

TagsList.propTypes = {
  count: PropTypes.number,
};

export default TagsList;
