import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Text } from 'rebass';
import styled from 'styled-components';
import { accentTeal } from 'constants/theme';

const Title = styled(Text)`
  font-weight: 600;
  text-transform: uppercase;
  border-bottom: ${accentTeal} 5px solid;
`;

const Post = ({ frontmatter, snippet, fields }) => (
    <>
        <Title my={2} pb={1} as="h2">{frontmatter.title}</Title>
        <div dangerouslySetInnerHTML={{ __html: snippet }} />
        <Link to={fields.slug}>Read More</Link>
    </>
);

Post.propTypes = {
    fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
    }).isRequired,
    frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        image: PropTypes.string,
    }),
    snippet: PropTypes.string.isRequired,
};

export default Post;