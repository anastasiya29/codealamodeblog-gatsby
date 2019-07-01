import React from 'react';
import Nav from './nav';
import Banner from './banner';
import { Link } from 'gatsby';
import { Text } from 'rebass';
import Emoji from 'components/emoji';

const Header = props => (
  <>
    <Nav>
      <Link to="/">
        <Text>
          <Emoji label="ice cream" symbol="🍦" /> Code à la Mode Home
        </Text>
      </Link>
      <ul style={{ paddingLeft: 0 }}>
        <li>
          <Link to="/posts">
            <Emoji label="brain" symbol="🧠" /> Posts
          </Link>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://noti.st/anastasiyaflynn"
          >
            <Emoji label="microphone" symbol="🎤" /> Presentations
          </a>
        </li>
        <li>
          <Link to="/about">
            <Emoji label="happy blushing" symbol="🤗" /> About
          </Link>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="/rss.xml">
            <Emoji label="megaphone" symbol="🔊" /> RSS
          </a>
        </li>
      </ul>
    </Nav>
    <Banner {...props} />
  </>
);

export default Header;
