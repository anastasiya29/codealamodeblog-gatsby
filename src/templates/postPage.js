import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Columns from 'containers/columns';
import Card from 'containers/card';
import Layout from 'components/layout';
import TopTags from 'components/topTags';
import Emoji from 'components/emoji';
import PostTags from './post/postTags';
import PostBody from './post/postBody.css';
import PostNavigation from './post/postNavigation.css';


const Post = ({ data: { post, left, right } }) => (
  <Layout pageTitle={post.frontmatter.title} pageDescription={post.frontmatter.description}>
    <Columns templateColumns="auto 70vw">
      <TopTags />
      <Card>
        <PostTags tags={post.frontmatter.tags} />
        <PostBody dangerouslySetInnerHTML={{ __html: post.html }} />
        <PostNavigation>
          <div>
            {left && (
              <Link to={left.fields.slug}>
                <Emoji label="left" symbol="⬅️" /> Newer
            </Link>
            )}
          </div>
          <div className="right">
            {right && (
              <Link to={right.fields.slug}>
                Older <Emoji label="right" symbol="➡️" />
              </Link>
            )}
          </div>
          <div>
            {left && (
              <Link to={left.fields.slug}>{left.frontmatter.title}</Link>
            )}
          </div>
          <div className="right">
            {right && (
              <Link to={right.fields.slug}>{right.frontmatter.title}</Link>
            )}
          </div>
        </PostNavigation>
      </Card>
    </Columns>
  </Layout>
);

export const query = graphql`
  query($slug: String!, $left: String, $right: String) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        date
        tags
      }
    },
    left: markdownRemark(fields: { slug: { eq: $left } }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    },
    right: markdownRemark(fields: { slug: { eq: $right } }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;

export default Post;