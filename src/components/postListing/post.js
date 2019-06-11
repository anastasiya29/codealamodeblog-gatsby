import React from 'react';
import { Link } from 'gatsby';
import Img from "gatsby-image";
import PropTypes from 'prop-types';
import { accentPink, accentTeal } from 'constants/theme';
import Highlight from 'containers/highlight';
import Title from './post/title.css';
import DetailsContainer from './post/detailsContainer.css';
import Container from './post/container.css';

const Post = ({ frontmatter, snippet, fields }) => (
  <Container>
    <div>
      <Link to={fields.slug}>
        <Title my={2} pb={1} as="h2">{frontmatter.title}</Title>
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
      <Link to={fields.slug}>
        <Highlight backgroundColor={accentTeal} hoverBackgroundColor={accentPink}>
          Read More
          </Highlight>
      </Link>
    </div>
    {frontmatter.featuredImage && (
      <Link to={fields.slug}>
        <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />
      </Link>
    )}
  </Container>
);

Post.propTypes = {
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

export default Post;