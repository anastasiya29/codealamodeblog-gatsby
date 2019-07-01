const { tagSlugGenerator } = require('./tagSlugGenerator');

const getSlug = post => post.node.fields.slug;

const createPosts = (posts, createPage, template) =>
  posts.forEach((post, i, posts) => {
    createPage({
      path: getSlug(post),
      component: template,
      context: {
        slug: getSlug(post),
        left: i === 0 ? null : getSlug(posts[i - 1]),
        right: i === (posts.length - 1) ? null : getSlug(posts[i + 1]),
      },
    })
  });

const createTags = (posts, createPage, template) => {
  let tags = [];
  posts.forEach(post => {
    tags = tags.concat(post.node.frontmatter.tags);
  });

  (new Set(tags)).forEach(tag => createPage({
    path: tagSlugGenerator(tag),
    component: template,
    context: {
      tag
    }
  }));
};

const createPostLists = (posts, createPage, template) => {
  const postsPerPage = 6;
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/posts` : `/posts/${i + 1}`,
      component: template,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
};

module.exports = { createPosts, createTags, createPostLists };
