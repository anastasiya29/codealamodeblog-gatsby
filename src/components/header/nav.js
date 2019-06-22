import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { accentTeal, lightestTeal, text } from 'constants/theme';

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

const Nav = ({ children }) => <Container>{children}</Container>;

Nav.propTypes = {
  children: PropTypes.children,
};

export default Nav;
