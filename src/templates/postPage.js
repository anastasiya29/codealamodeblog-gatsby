import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Navigation from './postPage/navigation';
import TableOfContents from './postPage/tableOfContents';
import ResponsiveColumns from 'containers/responsiveColumns';
import PostColumn from './postPage/postColumn.css';
import PostCard from './postPage/postCard.css';

const PostPage = ({ data: { post, left, right } }) => (
  <Layout
    isPostPage={true}
    pageTitle={post.frontmatter.title}
    pageDescription={post.frontmatter.description}>
    <ResponsiveColumns templateColumns="auto 70vw">
      <div>
        In this post
        <TableOfContents />
      </div>
      <PostColumn>
        <div className="post-date">{post.frontmatter.date}</div>
        <div className="post-tags">
          {post.frontmatter.tags.map((tag, i) => (
            <span key={i}>#{tag}</span>
          ))}
        </div>
        <PostCard className="post-body" m="20px 0" dangerouslySetInnerHTML={{ __html: post.html }} />
        <Navigation left={left} right={right} />
      </PostColumn>
    </ResponsiveColumns>
  </Layout >
);

export const query = graphql`
  query($slug: String!, $left: String, $right: String) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
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

export default PostPage;