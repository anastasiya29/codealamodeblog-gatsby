import React from 'react';
import PropTypes from 'prop-types';
import { tagSlugGenerator } from 'helpers/tagSlugGenerator';
import StyledLink from 'components/styledLink';
import styled from 'styled-components';
import logos from '../../../content/images/logos/logos';

const TagIcon = styled.i`
  content: url('${({ tagName }) =>
    logos[tagName.replace(/[.-\s]/g, '')] || logos.fallback}');
  width: 25px;
  height: 25px;
  background-color: white;
  padding: 3px;
  border-radius: 20px;
  margin-right: 3px;
`;

const TagWithCount = ({ tag }) => (
  <StyledLink to={tagSlugGenerator(tag.fieldValue)}>
    <TagIcon tagName={tag.fieldValue} />
    {/* eslint-disable-next-line */}
    {tag.fieldValue} {tag.totalCount !== undefined && (
      <span>({tag.totalCount})</span>
    )}
  </StyledLink>
);

TagWithCount.propTypes = {
  tag: PropTypes.shape({
    fieldValue: PropTypes.string.isRequired,
    totalCount: PropTypes.number,
  }),
};

export default TagWithCount;
