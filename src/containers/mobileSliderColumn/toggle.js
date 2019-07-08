import React from 'react';
import PropTypes from 'prop-types';
import MEDIA from 'helpers/mediaTemplates';
import styled from 'styled-components';
import { accentTeal } from 'constants/theme';

const Button = styled.button`
  display: none;
  ${MEDIA.PHONE`
    position: fixed;
    left: 0;
    display: block;
    background-color: ${accentTeal};
    color: white;
    border-radius: 10px;
    padding: 10px 5px;
  `};
`;

const Toggle = ({ handleMouseDown }) => (
  <Button type="button" className="toggle" onMouseDown={handleMouseDown}>
    ☰
  </Button>
);

Toggle.propTypes = {
  handleMouseDown: PropTypes.func.isRequired,
};

export default Toggle;
