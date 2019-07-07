import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Navigation = ({ newer, older }) => (
  <>
    <div className="left">
      {older && (
        <Link to={older.fields.slug}>
          &#171; Older
          <br />
          {older.frontmatter.title}
        </Link>
      )}
    </div>
    <div className="right">
      {newer && (
        <Link to={newer.fields.slug}>
          Newer &#187;
          <br />
          {newer.frontmatter.title}
        </Link>
      )}
    </div>
  </>
);

Navigation.propTypes = {
  older: PropTypes.shape({
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }),
  newer: PropTypes.shape({
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }),
};

export default Navigation;
