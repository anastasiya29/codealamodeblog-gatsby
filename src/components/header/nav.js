import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { accentTeal, lightestTeal, text } from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates';

const Container = styled.nav`
  display: flex;
  background-color: ${lightestTeal};
  justify-content: flex-end;
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

    &:first-of-type {
      margin-right: auto;
    }
  }
`;

const Nav = ({ children }) => <Container>{children}</Container>;

Nav.propTypes = {
  children: PropTypes.children,
};

export default Nav;
