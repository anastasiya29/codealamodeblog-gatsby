import React from 'react';
import posed from 'react-pose';
import Nav from './nav';
import Banner from './banner';
import { Link } from 'gatsby';
import { Text } from 'rebass';
import Emoji from 'components/emoji';

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
    <Nav>
      <Link to="/">
        <Text><Emoji label="ice cream" symbol="🍦" /> Code à la Mode Home</Text>
      </Link>
      <ul>
        <li>
          <Link to="/posts"><Emoji label="brain" symbol="🧠" /> Posts</Link>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://noti.st/anastasiyaflynn">
            <Emoji label="microphone" symbol="🎤" /> Presentations
        </a>
        </li>
        <li>
          <Link to="/about"><Emoji label="happy blushing" symbol="🤗" /> About</Link>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="/rss.xml">
            <Emoji label="megaphone" symbol="🔊" /> RSS
          </a>
        </li>
      </ul>
    </Nav>
    <Banner {...props} />
  </AnimatedContainer>
);

export default Header;
