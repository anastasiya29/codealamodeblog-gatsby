import React from 'react';
import { Link } from 'gatsby';
import Img from "gatsby-image";
import PropTypes from 'prop-types';
import { Text } from 'rebass';
import styled from 'styled-components';
import { accentPink, accentTeal } from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates';
import Highlight from 'containers/highlight';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 0fr;
    grid-column-gap: 10px;
    ${MEDIA.MIN_DESKTOP`
        background-image: none;
        grid-template-columns: 2fr 1fr;
        img {
            border-radius: 25px;
        }
    `};
`;

const Title = styled(Text)`
  font-weight: 600;
  text-transform: uppercase;
  border-bottom: ${accentTeal} 5px solid;
`;

const Post = ({ frontmatter, snippet, fields }) => (
    <Container>
        <div>
            <Link to={fields.slug}>
                <Title my={2} pb={1} as="h2">{frontmatter.title}</Title>
            </Link>
            <div dangerouslySetInnerHTML={{ __html: snippet }} />
            <Link to={fields.slug}>
                <Highlight backgroundColor={accentTeal} hoverBackgroundColor={accentPink}>
                    Read More
                </Highlight>
            </Link>
        </div>
        {frontmatter.featuredImage && (
            <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />
        )}

    </Container>
);

Post.propTypes = {
    fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
    }).isRequired,
    frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
    }),
    snippet: PropTypes.string.isRequired,
};

export default Post;