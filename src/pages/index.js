import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rebass';
import styled from 'styled-components';
import Layout from 'components/layout';
import Tags from 'components/tags';
import PostListing from 'components/postListing';
import Projects from 'components/projects';
import Promos from 'components/promos';
import Social from 'components/social';
import IOExample from 'components/io-example';
import MEDIA from 'helpers/mediaTemplates';

const Columns = styled(Box).attrs({
  p: ['2em', '4em']
})`
  display: grid;
  grid-template-columns: unset;
  grid-column-gap: 10px;
  .tags { display: none; }
  ${MEDIA.MIN_DESKTOP`
    grid-template-columns: 0.5fr 2fr 1fr;
    grid-column-gap: 20px;
    .tags { display: unset; }
  `};
`;

const Index = () => (
  <Layout>
    <Columns>
      <Tags />
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

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;
