const siteConfig = require('./site-config');

module.exports = {
    siteMetadata: {
        ...siteConfig,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-offline`,
        `gatsby-transformer-json`,
        {
            "resolve": `gatsby-transformer-remark`,
            "options": {
                plugins: [
                    {
                        "resolve": "gatsby-remark-custom-blocks",
                        "options": {
                            "blocks": {
                                "snippet": {
                                    "classes": "snippet"
                                }
                            }
                        }
                    }
                ]
            }
        },
        {
            "resolve": "gatsby-plugin-excerpts",
            "options": {
                "sources": {
                    "snippetBlocks": {
                        "type": "htmlQuery",
                        "sourceField": "html",
                        "excerptSelector": ".custom-block.snippet .custom-block-body",
                        "elementReplacements": [
                            {
                                "selector": "h6",
                                "replaceWith": "strong"
                            },
                            {
                                "selector": "h5",
                                "replaceWith": "h6"
                            },
                            {
                                "selector": "h4",
                                "replaceWith": "h5"
                            },
                            {
                                "selector": "h3",
                                "replaceWith": "h4"
                            },
                            {
                                "selector": "h2",
                                "replaceWith": "h3"
                            },
                        ],
                    },
                    "default": {
                        "type": "htmlQuery",
                        "sourceField": "html",
                        "excerptSelector": "html > *",
                        "ignoreSelector": "img, .gatsby-highlight",
                        "stripSelector": "a",
                        "elementReplacements": [
                            {
                                "selector": "h6",
                                "replaceWith": "strong"
                            },
                            {
                                "selector": "h5",
                                "replaceWith": "h6"
                            },
                            {
                                "selector": "h4",
                                "replaceWith": "h5"
                            },
                            {
                                "selector": "h3",
                                "replaceWith": "h4"
                            },
                            {
                                "selector": "h2",
                                "replaceWith": "h3"
                            },
                        ],
                        "truncate": {
                            "length": 80,
                            "byWords": true,
                            "ellipsis": "…"
                        },
                    }
                },
                "sourceSets": {
                    "markdownHtml": [
                        "snippetBlocks",
                        "default"
                    ]
                },
                "excerpts": {
                    "snippet": {
                        "type": "html",
                        "nodeTypeSourceSet": {
                            "MarkdownRemark": "markdownHtml"
                        }
                    }
                }
            },
        },
        `gatsby-plugin-eslint`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/content`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/posts/`,
            },
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-webpack-size`,
        {
            resolve: `gatsby-plugin-react-svg`,
            options: {
                rule: {
                    include: /images\/.*\.svg$/,
                },
            },
        },
    ],
};
