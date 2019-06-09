import React from 'react';
import Layout from 'components/layout';
import TopTags from 'components/topTags';
import PostListing from 'components/postListing';
import Projects from 'components/projects';
import ResponsiveColumns from 'containers/responsiveColumns';
import IOExample from 'components/io-example';

const Index = () => (
  <Layout>
    <ResponsiveColumns templateColumns="auto 70vw">
      <TopTags />
      <PostListing />
    </ResponsiveColumns>
    <Projects />
    <IOExample />
  </Layout>
);

export default Index;
