import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import BannerImage from '../../content/images/banners/avatarBanner.png';
import styled from 'styled-components';
import Card from 'containers/card';
import PostPreview from 'components/postPreview';
import { Flex } from 'rebass';
import Pagination from './postListPage/pagination';

const Container = styled(Flex).attrs({
  width: ['90vw', '70vw']
})`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 30px;
  align-items: stretch;
`;

const PostListPage = ({ data }) => {
  const { totalCount, pageInfo, edges } = data.allMarkdownRemark;
  const pageDescription = `${totalCount} posts available`;
  return (
    <Layout
      bannerImage={BannerImage}
      pageTitle="All Posts"
      pageDescription={pageDescription}
    >
      <Container>
        <Card mb={[40, 50]}>
          <Pagination pageInfo={pageInfo} />
        </Card>
        {edges.map(({ node }) => (
          <Card key={node.fields.slug} mb={[40, 50]}>
            <PostPreview {...node} />
          </Card>
        ))}
        <Card mb={[40, 50]}>
          <Pagination pageInfo={pageInfo} />
        </Card>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query PostListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      pageInfo {
        currentPage
        hasPreviousPage
        hasNextPage
        itemCount
        pageCount
        perPage
      }
      edges {
        node {
          snippet
          fields {
            slug
          }
          frontmatter {
            title
            tags
            date(formatString: "MMMM DD, YYYY")
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default PostListPage;
