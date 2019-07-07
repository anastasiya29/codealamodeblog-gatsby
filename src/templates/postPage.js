import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Navigation from './postPage/navigation';
import TableOfContents from './postPage/tableOfContents';
import ResponsiveColumns from 'containers/responsiveColumns';
import PostColumn from './postPage/postColumn.css';
import PostCard from './postPage/postCard.css';

const PostPage = ({ data: { post, newer, older } }) => (
  <Layout
    pageTitle={post.frontmatter.title}
    pageDescription={post.frontmatter.description}
    pageImage={post.frontmatter.featuredImage.childImageSharp.fixed.src}
  >
    <ResponsiveColumns p={[0, '3em', '4em']} pb={['2em', '3em', '4em']}>
      <TableOfContents tableOfContents={post.tableOfContents} />
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
        <Navigation newer={newer} older={older} />
      </PostColumn>
    </ResponsiveColumns>
  </Layout>
);

PostPage.propTypes = {
  data: PropTypes.shape({
    post: PropTypes.object.isRequired,
    newer: PropTypes.object,
    older: PropTypes.object,
  }).isRequired,
};

export const query = graphql`
  query PostPageQuery($slug: String!, $newer: String, $older: String) {
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
    newer: markdownRemark(fields: { slug: { eq: $newer } }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    older: markdownRemark(fields: { slug: { eq: $older } }) {
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
