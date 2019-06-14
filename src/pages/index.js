import React from 'react';
import Layout from 'components/layout';
import TagsList from 'components/tagsList';
import PostListing from 'components/postListing';
import ProjectList from 'components/projectList';
import ResponsiveColumns from 'containers/responsiveColumns';
import IOExample from 'components/io-example';
import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { Heading } from 'rebass';

const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 50px;
  p {
    margin: 0.4em;
  }
  ${MEDIA.MIN_DESKTOP`
    display: block;
    p {
      margin: 2rem 0;
    }
  `};
`;

const Index = () => (
  <Layout>
    <ResponsiveColumns templateColumns="auto 70vw">
      <div>
        <FlexBox mb={40}>
          <Heading fontSize={[2, 3, 4]}>Top Tags</Heading>
          <TagsList count={5} />
        </FlexBox>
        <FlexBox>
          <Heading fontSize={[2, 3, 4]}>Recent Projects</Heading>
          <ProjectList />
        </FlexBox>
      </div>
      <PostListing />
    </ResponsiveColumns>
    <IOExample />
  </Layout>
);

export default Index;
