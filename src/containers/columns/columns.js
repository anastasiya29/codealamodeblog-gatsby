import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Box } from 'rebass';
import MEDIA from 'helpers/mediaTemplates';

const Container = styled(Box).attrs({
    p: ['2em', '4em']
})`
    display: grid;
    grid-template-columns: unset;
    grid-column-gap: 10px;
    .tags { display: none; }
    ${MEDIA.MIN_DESKTOP`
      grid-template-columns: ${props => props.templateColumns};
      grid-column-gap: 20px;
      .tags { display: unset; }
    `};
  `;

const Columns = ({ templateColumns, children }) => (
    <Container templateColumns={templateColumns}>{children}</Container>
);

Columns.PropTypes = {
    templateColumns: PropTypes.string.isRequired
};

export default Columns;