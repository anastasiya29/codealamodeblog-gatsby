import React from 'react';
import PropTypes from 'prop-types';
import Highlight from 'containers/highlight';
import Emoji from 'components/emoji';
import { accentTeal } from 'constants/theme';

const Tag = ({ tag }) => (
    <div>
        <Emoji label="pin" symbol="📌" />
        <Highlight backgroundColor={accentTeal}>{tag}</Highlight>
    </div>
);

Tag.PropTypes = {
    tag: PropTypes.string.isRequired
};

export default Tag;