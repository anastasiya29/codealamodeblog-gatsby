import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Emoji from 'components/emoji';
import { accentPink } from 'constants/theme';

const Container = styled.span`
    background-color: ${accentPink};
    color: white;
    padding: 5px 10px;
    border-radius: 15px;
`;

const Tag = ({ slug, tag }) => (
    <Link to={slug}>
        <Emoji label="pin" symbol="📌" />
        <Container>{tag.fieldValue} {tag.totalCount !== undefined && (
            <span>({tag.totalCount})</span>
        )}</Container>
    </Link>
);

Tag.PropTypes = {
    slug: PropTypes.string.isRequired,
    tag: PropTypes.shape({
        fieldValue: PropTypes.string.isRequired,
        totalCount: PropTypes.number
    })
};

export default Tag;