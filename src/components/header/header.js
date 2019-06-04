import React from 'react';
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

const Header = (props) => (
  <AnimatedContainer>
    <Nav />
    <Banner {...props} />
  </AnimatedContainer>
);

export default Header;
