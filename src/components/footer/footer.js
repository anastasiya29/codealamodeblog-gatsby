import React from 'react';
import { Box, Text } from 'rebass';
import { softestGray } from 'constants/theme';

const Footer = () => (
  <Box p={[1, 2, 3]} backgroundColor={softestGray}>
    <Text textAlign="center">
    © 2018-{new Date().getFullYear()}. All statements and opinions on this site
    are representative of the author, Anastasiya Flynn, and not her employer.
    </Text>
  </Box>
);

export default Footer;
