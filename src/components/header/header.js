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
    <Nav title={siteMetadata.siteTitle} />
    <Banner {...siteMetadata} />
  </AnimatedContainer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
