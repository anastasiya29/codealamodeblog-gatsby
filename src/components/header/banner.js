import React from 'react';
import styled from 'styled-components';
import BannerImage from '../../../content/images/banner.png';
import { Flex, Box, Heading } from 'rebass';
import { accentPink, lightestTeal } from 'constants/theme';

const Container = styled(Flex)`
  background-image: url("${BannerImage}");
  background-size: cover;
  background-position: center center;
  height: 50vh;
  .title {
    flex-grow: 2;
    justify-self: center;
    align-self: center;
    max-width: 475px;
    background-color: ${lightestTeal};
    border: ${accentPink} solid 10px;
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.25);
    @media (min-width: 1224px) {
      max-width: 600px;
    }
  }
  .empty-pre {
    flex-grow: 0.5;
    flex-shrink: 2;
  }
  .empty-post {
    flex-grow: 2;
    flex-shrink: 1;
  }
`;

const Banner = ({ siteTitle, siteDescription }) => (
  <Container>
    <div className="empty-pre"></div>
    <Box p={['2em', '3em', '4em']} className="title">
      <Heading as="h1" fontSize={[3, 4, 5]}>{siteTitle}</Heading>
      <div>{siteDescription}</div>
    </Box>
    <div className="empty-post"></div>
  </Container>
);

export default Banner;
