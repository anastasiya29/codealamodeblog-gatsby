import React from 'react';
import PropTypes from 'prop-types';
import Tag from 'components/tag';

const PostTags = ({ tags }) => (
    <div className="tags">
        {tags.map((tag, i) => (
            <Tag key={i} tag={tag} />
        ))}
    </div>
);

PostTags.PropTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default PostTags;