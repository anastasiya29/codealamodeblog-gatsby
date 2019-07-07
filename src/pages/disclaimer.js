import React from 'react';
import Layout from 'components/layout';
import { Box } from 'rebass';

const NotFound = () => (
  <Layout
    pageTitle="Disclaimer"
    pageDescription=" "
    metaDescription="Legal disclaimer"
  >
    <Box p={['1em', '3em', '4em']}>
      <p>
        All statements and opinions on this site are representative of the
        author, Anastasiya Flynn, and not her employer.
      </p>
      <p>
        I use imagery of software/framework icons/logos to help users navigate
        my content. Icons/logos may be subject to copyright by their respective
        owners.
      </p>
    </Box>
  </Layout>
);

export default NotFound;
