import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";
import { accentTeal, softTeal, accentPink } from 'constants/theme';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Pagination = ({ pageInfo, totalCount }) => {
  const {
    currentPage,
    pageCount,
    hasNextPage,
    hasPreviousPage
  } = pageInfo;

  const prevLink = "/posts/" + (currentPage - 1 > 1 ? (currentPage - 1) : "");
  const nextLink = "/posts/" + (currentPage + 1);
  const paginationArr = [];
  for (let i = 1; i <= pageCount; i++) {
    paginationArr.push(i);
  }

  return (
    <Container>
      {hasPreviousPage && (
        <Link to={prevLink} rel="prev">
          <span className="prev-arrow">
            <FaArrowLeft />
          </span>
        </Link>
      )}
      {paginationArr.map(page => (
        <span key={page} >
          <Link to={`/posts/${page}`}>{page}</Link>
        </span>
      ))}
      {hasNextPage && (
        <Link to={nextLink} rel="next">
          <span className="next-arrow">
            <FaArrowRight />
          </span>
        </Link>
      )}
    </Container>
  );
}

Pagination.propTypes = {
  pageInfo: PropTypes.object.isRequired
};

export default Pagination;
