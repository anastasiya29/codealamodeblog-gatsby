import React from 'react';
import PropTypes from 'prop-types';

const Emoji = ({ label, symbol }) => (
  <span role="img" aria-label={label}>
    {symbol}
  </span>
);

Emoji.propTypes = {
  label: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};

export default Emoji;
