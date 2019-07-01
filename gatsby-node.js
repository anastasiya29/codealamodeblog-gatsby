const path = require('path');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const { createFilePath } = require(`gatsby-source-filesystem`);
const { createPosts, createTags, createPostLists } = require('./src/helpers/pageCreator');

exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      plugins: [new DirectoryNamedWebpackPlugin({
        exclude: /node_modules/
      })],
    },
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `posts`,
      trailingSlash: false,
    });

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  createRedirect({
    fromPath: '/tags',
    toPath: '/',
    isPermanent: true,
  });

  return new Promise((resolve) => {
    graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 200
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
    }`).then(results => {
      // Path to templates
      const postTemplate = path.resolve('./src/templates/postPage.js');
      const tagTemplate = path.resolve('./src/templates/tagPage.js');
      const postListTemplate = path.resolve('./src/templates/postListPage.js');
      const posts = results.data.allMarkdownRemark.edges;

      // Programmatically create pages
      createPosts(posts, createPage, postTemplate);
      createTags(posts, createPage, tagTemplate);
      createPostLists(posts, createPage, postListTemplate);
      resolve();
    });
  });
};
