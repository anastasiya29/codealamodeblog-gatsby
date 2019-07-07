import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Pagination = ({ pageInfo }) => {
  const { currentPage, pageCount, hasNextPage, hasPreviousPage } = pageInfo;

  const prevLink = '/posts/' + (currentPage - 1 > 1 ? currentPage - 1 : '');
  const nextLink = '/posts/' + (currentPage + 1);
  const paginationArr = [];
  for (let i = 1; i <= pageCount; i++) {
    paginationArr.push(i);
  }

  return (
    <Container>
      {hasPreviousPage && (
        <Link to={prevLink} rel="prev">
          &#171;
        </Link>
      )}
      {paginationArr.map(page => {
        return page === currentPage ? (
          <span key={page}>{page}</span>
        ) : (
          <Link key={page} to={`/posts/${page === 1 ? '' : page}`}>
            {page}
          </Link>
        );
      })}
      {hasNextPage && (
        <Link to={nextLink} rel="next">
          &#187;
        </Link>
      )}
    </Container>
  );
};

Pagination.propTypes = {
  pageInfo: PropTypes.object.isRequired,
};

export default Pagination;
