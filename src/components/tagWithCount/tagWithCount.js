import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { tagSlugGenerator } from 'helpers/tagSlugGenerator';
import Highlight from 'containers/highlight';
import styled from 'styled-components';
import logos from '../../../content/images/logos/logos'

const TagIcon = styled.i`
    content: url('${({ tagName }) => logos[tagName.replace(/[.-\s]/g, '')] || logos.fallback}');
    width: 25px;
    height: 25px;
    background-color: white;
    padding: 3px;
    border-radius: 20px;
    margin-right: 3px;
`;

const TagWithCount = ({ tag }) => (
    <Link to={tagSlugGenerator(tag.fieldValue)}>
        <Highlight>
            <TagIcon tagName={tag.fieldValue} />
            {tag.fieldValue} {tag.totalCount !== undefined && (
                <span>({tag.totalCount})</span>
            )}
        </Highlight>
    </Link>
);

TagWithCount.PropTypes = {
    tag: PropTypes.shape({
        fieldValue: PropTypes.string.isRequired,
        totalCount: PropTypes.number
    })
};

export default TagWithCount;