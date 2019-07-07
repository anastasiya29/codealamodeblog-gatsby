import React from 'react';
import Nav from './header/nav';
import Banner from './header/banner';
import { Link } from 'gatsby';
import Emoji from 'components/emoji';

const Header = props => (
  <>
    <Nav>
      <Link to="/">
        <Emoji label="home" symbol="🏠" /> Home
      </Link>
      <Link to="/posts">
        <Emoji label="brain" symbol="🧠" /> Posts
      </Link>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://noti.st/anastasiyaflynn"
      >
        <Emoji label="microphone" symbol="🎤" /> Talks
      </a>
      <Link to="/about">
        <Emoji label="happy blushing" symbol="🤗" /> Contact
      </Link>
    </Nav>
    <Banner {...props} />
  </>
);

export default Header;
