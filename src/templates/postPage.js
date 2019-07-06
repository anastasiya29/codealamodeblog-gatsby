import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Navigation from './postPage/navigation';
import TableOfContents from './postPage/tableOfContents';
import ResponsiveColumns from 'containers/responsiveColumns';
import PostColumn from './postPage/postColumn.css';
import PostCard from './postPage/postCard.css';

const PostPage = ({ data: { post, left, right } }) => (
  <Layout
    pageTitle={post.frontmatter.title}
    pageDescription={post.frontmatter.description}
    pageImage={post.frontmatter.featuredImage.childImageSharp.fixed.src}
  >
    <ResponsiveColumns>
      <div>
        In this post
        <TableOfContents
          dangerouslySetInnerHTML={{ __html: post.tableOfContents }}
        />
      </div>
      <PostColumn>
        <div className="post-date">{post.frontmatter.date}</div>
        <div className="post-tags">
          {post.frontmatter.tags.map((tag, i) => (
            <span key={i}>#{tag}</span>
          ))}
        </div>
        <PostCard
          className="post-body"
          m="20px 0"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <Navigation left={left} right={right} />
      </PostColumn>
    </ResponsiveColumns>
  </Layout>
);

PostPage.propTypes = {
  data: PropTypes.shape({
    post: PropTypes.object.isRequired,
    left: PropTypes.object,
    right: PropTypes.object,
  }).isRequired,
};

export const query = graphql`
  query($slug: String!, $left: String, $right: String) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
        tags
        featuredImage {
          childImageSharp {
            fixed(width: 400) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      tableOfContents
    }
    left: markdownRemark(fields: { slug: { eq: $left } }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
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
