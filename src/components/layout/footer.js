import React from 'react';
import { Link } from 'gatsby';
import { Flex } from 'rebass';
import { softestGray } from 'constants/theme';

const Footer = () => (
  <Flex
    p={[1, 2, 3]}
    backgroundColor={softestGray}
    alignItems="center"
    flexDirection="column"
  >
    <span>© 2018-{new Date().getFullYear()} Anastasiya Flynn</span>
    <Link to="/disclaimer">Disclaimer</Link>
    <a target="_blank" rel="noopener noreferrer" href="/rss.xml">
      RSS
    </a>
  </Flex>
);

export default Footer;
