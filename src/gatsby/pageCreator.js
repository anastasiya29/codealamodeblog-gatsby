const { tagSanitizer } = require('./tagSanitizer');

const getSlug = post => post.node.fields.slug;
const uniqueFilter = (value, index, self) => self.indexOf(value) === index;

const createPosts = (list, createPage, template) =>
    list.forEach((post, i, list) => {

        createPage({
            path: getSlug(post),
            component: template,
            context: {
                slug: getSlug(post),
                left: i === 0 ? null : getSlug(list[i - 1]),
                right: i === (list.length - 1) ? null : getSlug(list[i + 1]),
            },
        })
    });

const createTags = (list, createPage, template) => {
    let tags = [];
    list.forEach(post => {
        tags = tags.concat(post.node.frontmatter.tags);
    });

    tags = tags.filter(uniqueFilter);
    tags.forEach(tag => createPage({
        path: `/tags/${tagSanitizer(tag)}`,
        component: template,
        context: {
            tag
        }
    }));
};

module.exports = { createPosts, createTags };