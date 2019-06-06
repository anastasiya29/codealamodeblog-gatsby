import React from 'react';
import { Link } from 'gatsby';
import { Text } from 'rebass';
import styled from 'styled-components';
import { accentTeal, lightestTeal, text } from 'constants/theme';
import Emoji from 'components/emoji';

const Container = styled.nav`
  display: flex;
  background-color: ${lightestTeal};
  ul {
    list-style: none;
    flex-grow: 3;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    li {
      & + li {
        margin-left: 2rem;
      }
    }
  }
  a {
    padding: 1em;
    transition: color 0.2s ease;
    text-decoration: none;
    color: ${text};

    &:hover {
      color: white;
      background-color: ${accentTeal};
      text-decoration: none;
    }
  }
`;

const Nav = () => (
  <Container>
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
      <li><Emoji label="megaphone" symbol="🔊" /> RSS</li>
    </ul>
  </Container>
);

export default Nav;
