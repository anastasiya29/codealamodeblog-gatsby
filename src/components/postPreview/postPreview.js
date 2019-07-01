import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import StyledLink from 'components/styledLink';
import Title from './title.css';
import DetailsContainer from './detailsContainer.css';
import Container from './container.css';

const PostPreview = ({ frontmatter, snippet, fields }) => (
  <Container>
    <div>
      <Link to={fields.slug}>
        <Title my={2} pb={1} as="h2">
          {frontmatter.title}
        </Title>
      </Link>
      <DetailsContainer>
        <div>{frontmatter.date}</div>
        <div className="tags">
          {frontmatter.tags.map((tag, i) => (
            <span key={i}>#{tag}</span>
          ))}
        </div>
      </DetailsContainer>
      <div dangerouslySetInnerHTML={{ __html: snippet }} />
      <StyledLink to={fields.slug}>Read More</StyledLink>
    </div>
    {frontmatter.featuredImage && (
      <Link to={fields.slug}>
        <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />
      </Link>
    )}
  </Container>
);

PostPreview.propTypes = {
  fields: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }).isRequired,
  frontmatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    featuredImage: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }),
  snippet: PropTypes.string.isRequired,
};

export default PostPreview;
