import React from 'react';
import { Link } from 'gatsby';
import { Heading } from 'rebass';
import styled from 'styled-components';
import { accentTeal, lightestTeal, text } from 'constants/theme';

const Container = styled.nav`
  display: flex;
  background-color: ${lightestTeal};
  ul {
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
    }
  }
`;

const Nav = ({ title }) => (
  <Container>
    <Link to="/">
      <Heading as="div">{title}</Heading>
    </Link>
    <ul>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <a target="_blank" rel="noopener noreferrer" href="https://noti.st/anastasiyaflynn">Presentations</a>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
