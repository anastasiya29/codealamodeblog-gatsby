import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { tagSanitizer } from 'gatsby/tagSanitizer';
import Emoji from 'components/emoji';
import { gray, accentTeal } from 'constants/theme';

const Container = styled.span`
    background: ${gray};
    &:hover { background: ${accentTeal}; }
    color: white;
    text-shadow: 0 1px rgba(0, 0, 0, 0.3);
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: 1em;
    line-height: 1.5;
    padding: 0.3em 0.5em;
    border-radius: .3em;
`;

const TagWithCount = ({ tag }) => (
    <Link to={`/tags/${tagSanitizer(tag.fieldValue)}/`}>
        <Emoji label="pin" symbol="📌" />
        <Container>{tag.fieldValue} {tag.totalCount !== undefined && (
            <span>({tag.totalCount})</span>
        )}</Container>
    </Link>
);

TagWithCount.PropTypes = {
    tag: PropTypes.shape({
        fieldValue: PropTypes.string.isRequired,
        totalCount: PropTypes.number
    })
};

export default TagWithCount;