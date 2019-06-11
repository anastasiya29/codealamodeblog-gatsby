import React from 'react';
import { graphql, Link } from 'gatsby';
import ResponsiveColumns from 'containers/responsiveColumns';
import Card from 'containers/card';
import Layout from 'components/layout';
import Emoji from 'components/emoji';
import TableOfContents from './postPage/tableOfContents';
import Tag from 'components/tag';
import BodyContainer from './postPage/bodyContainer.css';
import NavigationContainer from './postPage/navigationContainer.css';
import TagsContainer from './postPage/tagsContainer.css';

const PostPage = ({ data: { post, left, right } }) => (
  <Layout
    pageClassName="postPage"
    isPostPage={true}
    pageTitle={post.frontmatter.title}
    pageDescription={post.frontmatter.description}>
    <ResponsiveColumns templateColumns="auto 70vw">
      <div>
        {post.frontmatter.date}
        <TableOfContents />
      </div>
      <Card>
        <TagsContainer>
          {post.frontmatter.tags.map((tag, i) => (
            <Tag key={i} tag={tag} />
          ))}
        </TagsContainer>
        <BodyContainer dangerouslySetInnerHTML={{ __html: post.html }} />
        <NavigationContainer>
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
        </NavigationContainer>
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