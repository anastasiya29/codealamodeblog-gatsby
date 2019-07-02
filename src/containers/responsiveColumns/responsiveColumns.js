import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from 'rebass';
import MEDIA from 'helpers/mediaTemplates';

const Container = styled(Box).attrs({
  p: ['1em', '3em', '4em'],
})`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  ${MEDIA.MIN_DESKTOP`
    display: grid;
    grid-column-gap: 10px;
    grid-template-columns: auto 70vw;
    grid-column-gap: 20px;
  `};
`;

const ResponsiveColumns = props => (
  <Container {...props}>{props.children}</Container>
);

ResponsiveColumns.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default ResponsiveColumns;
