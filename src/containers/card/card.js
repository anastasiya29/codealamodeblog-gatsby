import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rebass';
import { softGray } from 'constants/theme';
import styled from 'styled-components';

const Container = styled(Box).attrs(props => ({
  p: props.p || [20, 30],
}))`
  height: auto;
  border-radius: 7px;
  border: ${softGray} solid 1px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;

const Card = props => <Container {...props}>{props.children}</Container>;

Card.propTypes = {
  children: PropTypes.children,
};

export default Card;
