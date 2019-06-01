import React from 'react';
import PropTypes from 'prop-types';
import posed from 'react-pose';
import Nav from './nav';
import Banner from './banner';

const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Header = ({ siteMetadata }) => (
  <AnimatedContainer>
    <Nav />
    <Banner {...siteMetadata} />
  </AnimatedContainer>
);

Header.propTypes = {
  siteMetadata: PropTypes.shape({
    siteTitle: PropTypes.string.isRequired,
    siteDescription: PropTypes.string
  }).isRequired
};

export default Header;
