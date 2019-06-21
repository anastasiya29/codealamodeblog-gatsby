import React from 'react';
import { Link } from 'gatsby';
import Emoji from 'components/emoji';

const Navigation = ({ left, right }) => (
  <>
    <div className="left">
      {left && (
        <Link to={left.fields.slug}>
          <Emoji label="left" symbol="⬅️" /> Newer
            </Link>
      )}
    </div>
    <div className="right">
      {right && (
        <Link to={right.fields.slug}>
          Older <Emoji label="right" symbol="➡️" />
        </Link>
      )}
    </div>
    <div className="left">
      {left && (
        <Link to={left.fields.slug}>{left.frontmatter.title}</Link>
      )}
    </div>
    <div className="right">
      {right && (
        <Link to={right.fields.slug}>{right.frontmatter.title}</Link>
      )}
    </div>
  </>
);

export default Navigation;