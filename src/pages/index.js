import React from 'react';
import Layout from 'components/layout';
import TagsList from 'components/tagsList';
import RecentPosts from 'components/recentPosts';
import ProjectList from 'components/projectList';
import ResponsiveColumns from 'containers/responsiveColumns';
import IOExample from 'components/io-example';
import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { Heading } from 'rebass';
import BannerImage from '../../content/images/banners/avatarBanner.png';

const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;
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
  <Layout bannerImage={BannerImage}>
    <ResponsiveColumns>
      <div>
        <Heading fontSize={[2, 3, 4]}>Top Tags</Heading>
        <FlexBox>
          <TagsList count={5} />
        </FlexBox>
        <Heading fontSize={[2, 3, 4]}>Recent Projects</Heading>
        <FlexBox>
          <ProjectList />
        </FlexBox>
      </div>
      <div>
        <Heading fontSize={[2, 3, 4]} mb={20}>
          Recent Posts
        </Heading>
        <RecentPosts />
      </div>
    </ResponsiveColumns>
    <IOExample />
  </Layout>
);

export default Index;
