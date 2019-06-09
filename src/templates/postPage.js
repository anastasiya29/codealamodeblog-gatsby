import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from "gatsby-image";
import ResponsiveColumns from 'containers/responsiveColumns';
import Card from 'containers/card';
import Layout from 'components/layout';
import Emoji from 'components/emoji';
import TableOfContents from './postPage/tableOfContents';
import PostTags from './postPage/postTags';
import PostBody from './postPage/postBody.css';
import PostNavigation from './postPage/postNavigation.css';

const PostPage = ({ data: { post, left, right } }) => (
  <Layout
    pageClassName="postPage"
    showDescription={false}
    pageTitle={post.frontmatter.title}
    pageDescription={post.frontmatter.description}
    pageImage={post.frontmatter.featuredImage.childImageSharp.fixed.src}>
    <ResponsiveColumns templateColumns="auto 70vw">
      <TableOfContents />
      <Card>
        <PostTags tags={post.frontmatter.tags} />
        <Img fixed={post.frontmatter.featuredImage.childImageSharp.fixed} />
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
    </ResponsiveColumns>
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
        featuredImage {
          childImageSharp {
            fixed(width: 768) {
              ...GatsbyImageSharpFixed
            }
          }
        }
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