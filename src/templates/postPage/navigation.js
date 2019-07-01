import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Emoji from 'components/emoji';

const Navigation = ({ left, right }) => (
  <>
    <div className="left">
      {left && (
        <Link to={left.fields.slug}>
          <Emoji label="left" symbol="⬅️" /> Newer<br />
          {left.frontmatter.title}
        </Link>
      )}
    </div>
    <div className="right">
      {right && (
        <Link to={right.fields.slug}>
          Older <Emoji label="right" symbol="➡️" /><br />
          {right.frontmatter.title}
        </Link>
      )}
    </div>
  </>
);

Navigation.propTypes = {
  left: PropTypes.shape({
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }),
  right: PropTypes.shape({
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }),
};

export default Navigation;
