import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from 'rebass';
import MEDIA from 'helpers/mediaTemplates';

const Container = styled(Box).attrs({
  p: ['2em', '3em', '4em'],
})`
  display: grid;
  grid-template-columns: unset;
  grid-column-gap: 10px;
  ${MEDIA.MIN_DESKTOP`
    grid-template-columns: auto 70vw;
    grid-column-gap: 20px;
  `};
`;

const ResponsiveColumns = props => (
  <Container {...props}>{props.children}</Container>
);

ResponsiveColumns.propTypes = {
  children: PropTypes.children,
};

export default ResponsiveColumns;
