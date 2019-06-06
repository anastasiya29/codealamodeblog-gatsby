import React from 'react';
import { Box } from 'rebass';
import Layout from 'components/layout';
import TopTags from 'components/topTags';
import PostListing from 'components/postListing';
import Projects from 'components/projects';
import Promos from 'components/promos';
import Social from 'components/social';
import Columns from 'containers/columns';
import IOExample from 'components/io-example';

const Index = () => (
  <Layout>
    <Columns templateColumns="0.5fr 2fr 1fr">
      <TopTags />
      <PostListing />
      <Box>
        <Social />
        <Promos />
      </Box>
    </Columns>
    <Projects />
    <IOExample />
  </Layout>
);

export default Index;
