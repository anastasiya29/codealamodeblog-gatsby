import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BasicBanner from '../../../../content/images/banners/basicBanner.png';
import { Box, Heading } from 'rebass';
import { accentPink, softestGray } from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates';

const Container = styled.div`
  display: grid;
  grid-template-columns: ${({ bannerImage }) =>
    bannerImage ? '10vw auto 50vw' : '10vw auto 10vw'};
  background-image: url("${({ bannerImage }) => bannerImage || BasicBanner}");
  background-size: cover;
  background-position: center center;
  height: 30vh;
  .title {
    opacity: 0.8;
    justify-self: center;
    align-self: center;
    background-color: ${softestGray};
    border: ${accentPink} solid 10px;
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.25);
  }
  ${MEDIA.MIN_DESKTOP`
    height: 50vh;
  `};
  ${MEDIA.LANDSCAPE`
    height: 50vh;
  `};
`;

const Banner = ({ siteMetadata, pageTitle, pageDescription, bannerImage }) => (
  <Container bannerImage={bannerImage}>
    <div />
    <Box p={['1em', '2em', '3em']} className="title">
      <Heading
        as="h1"
        fontSize={[2, 4, 5]}
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

const BannerWithQuery = props => (
  <StaticQuery
    query={graphql`
      query BannerQuery {
        site {
          siteMetadata {
            siteTitle
            siteDescription
          }
        }
      }
    `}
    render={data => <Banner siteMetadata={data.site.siteMetadata} {...props} />}
  />
);

export default BannerWithQuery;
