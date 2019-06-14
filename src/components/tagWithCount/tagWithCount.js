import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { tagSlugGenerator } from 'helpers/tagSlugGenerator';
import Emoji from 'components/emoji';
import { accentPink, accentTeal } from 'constants/theme';
import Highlight from 'containers/highlight';

const TagWithCount = ({ tag }) => (
    <Link to={tagSlugGenerator(tag.fieldValue)}>
        <Emoji label="pin" symbol="📌" />
        <Highlight backgroundColor={accentTeal} hoverBackgroundColor={accentPink}>
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