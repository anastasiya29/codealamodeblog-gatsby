import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { softestGray, gray, accentTeal } from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates';

const Container = styled.div`
  min-width: 25vw;
  .tableOfContents {
    a {
      color: ${gray};
      &:hover {
        color: ${accentTeal};
      }
    }
    & > ul {
      padding-left: 0;
      list-style: none;
      ul {
        padding-left: 2em;
      }
      & > li {
        margin-bottom: 1em;
      }
    }
    ul > li > p {
      margin-bottom: 0;
    }
  }
  ${MEDIA.PHONE`
    padding: 1em 1em 0 1em;
    background-color: ${softestGray};
  `};
`;

const TableOfContents = props => (
  <Container {...props}>
    In this post
    <div
      className="tableOfContents"
      dangerouslySetInnerHTML={{ __html: props.tableOfContents }}
    />
  </Container>
);

TableOfContents.propTypes = {
  tableOfContents: PropTypes.string.isRequired,
};

export default TableOfContents;
