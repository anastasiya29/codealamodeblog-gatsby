import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rebass';
import styled from 'styled-components';
import Layout from 'components/layout';
import PostListing from 'components/postListing';
import Projects from 'components/projects';
import IOExample from 'components/io-example';

const Columns = styled(Box).attrs({
  p: ['2em', '4em']
})`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

const Index = () => (
  <Layout>
    <Columns>
      <PostListing count={5} />
      <Box></Box>
    </Columns>
    <Projects />
    <IOExample />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;
