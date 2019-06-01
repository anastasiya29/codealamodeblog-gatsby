const path = require('path');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const { createFilePath } = require(`gatsby-source-filesystem`);

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
  function slugFriendly(string) {
    return '/' + string.replace(/[\.\s]/g, '-');
  }

  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const categories = node.frontmatter.categories || []
    let slug = createFilePath({
      node,
      getNode,
      basePath: `posts`,
      trailingSlash: false,
    })

    if (categories.length > 1) {
      slug = slugFriendly(categories[1]) + slug
    }

    if (categories.length > 0) {
      slug = slugFriendly(categories[0]) + slug
    }

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(results => {
      results.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/pages/post.js'),
          context: {
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
};
