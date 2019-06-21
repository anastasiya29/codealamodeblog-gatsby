import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BannerImage from '../../../content/images/banner.png';
import PostBannerImage from '../../../content/images/postBanner.png';
import { Box, Heading } from 'rebass';
import { accentPink, lightestTeal } from 'constants/theme';

const Container = styled.div`
  display: grid;
  grid-template-columns: ${({ isPostPage }) => isPostPage ? "10vw auto 10vw" : "10vw auto 50vw"};
  background-image: url("${({ isPostPage }) => isPostPage ? PostBannerImage : BannerImage}");
  background-size: cover;
  background-position: center center;
  height: 50vh;
  .title {
    opacity: 0.8;
    justify-self: center;
    align-self: center;
    background-color: ${lightestTeal};
    border: ${accentPink} solid 10px;
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.25);
  }
`;

const Banner = ({ siteMetadata, pageTitle, pageDescription, isPostPage }) => (
  <Container isPostPage={isPostPage}>
    <div></div>
    <Box p={['1em', '2em', '3em']} className="title">
      <Heading as="h1" fontSize={[3, 4, 5]} lineHeight={['20px', '24px', '32px']} mb="10px">
        {pageTitle || siteMetadata.siteTitle}
      </Heading>
      <Box>{pageDescription || siteMetadata.siteDescription}</Box>
    </Box>
    <div></div>
  </Container>
);

Banner.propTypes = {
  siteMetadata: PropTypes.shape({
    siteTitle: PropTypes.string.isRequired,
    siteDescription: PropTypes.string.isRequired
  }).isRequired,
  pageTitle: PropTypes.string,
  pageDescription: PropTypes.string,
  isPostPage: PropTypes.bool
};

Banner.defaultProps = {
  isPostPage: false
};

export default Banner;
