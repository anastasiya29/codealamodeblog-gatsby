import React from 'react';
import { Box } from 'rebass';
import SymposiumPromo from './symposiumPromo';
import JSSSandboxPromo from './jssSandboxPromo';

// GraphQL does support varibles or string interpolation in static queries
// so each image much be explicitly named
const Promos = () => (
  <Box py="30px">
    <SymposiumPromo />
    <JSSSandboxPromo />
  </Box>
)

export default Promos;
