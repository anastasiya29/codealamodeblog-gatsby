import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BasicBanner from '../../../content/images/banners/basicBanner.png';
import { Box, Heading } from 'rebass';
import { accentPink, lightestTeal } from 'constants/theme';

const Container = styled.div`
  display: grid;
  grid-template-columns: ${({ bannerImage }) =>
    bannerImage ? '10vw auto 50vw' : '10vw auto 10vw' };
  background-image: url("${({ bannerImage }) => bannerImage || BasicBanner}");
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

const Banner = ({ siteMetadata, pageTitle, pageDescription, bannerImage }) => (
  <Container bannerImage={bannerImage}>
    <div />
    <Box p={['1em', '2em', '3em']} className="title">
      <Heading
        as="h1"
        fontSize={[3, 4, 5]}
        lineHeight={['20px', '24px', '32px']}
        mb="10px"
      >
        {pageTitle || siteMetadata.siteTitle}
      </Heading>
      <Box>{pageDescription || siteMetadata.siteDescription}</Box>
    </Box>
    <div />
  </Container>
);

Banner.propTypes = {
  siteMetadata: PropTypes.shape({
    siteTitle: PropTypes.string.isRequired,
    siteDescription: PropTypes.string.isRequired,
  }).isRequired,
  pageTitle: PropTypes.string,
  pageDescription: PropTypes.string,
  bannerImage: PropTypes.string,
};

export default Banner;
