---
title: Sitecore JavaScript Services - Manifest API Demystified
description: This post explores the manifest API, which is used for modeling Sitecore data in disconnected, code-first workflow. This post is part of a series on learning to work with Sitecore JavaScript Services (JSS).
featuredImage: jss.png
tags:
  - Sitecore
  - Sitecore JavaScript Services
date: 2019-02-08 12:00:00
---

[[snippet]]
| This post is part of a series - [Sitecore JavaScript Services (JSS) Sandbox](/jss-sandbox/)
| 
| The manifest API is important for modeling Sitecore data in disconnected, code-first workflow. If you are using a Sitecore-first workflow, then you do not need to worry about the manifest.

## What is the manifest?
The manifest is used to define the data schema for both, components and page routes.

From the docs:
> In a code-first workflow the JSS app creates a manifest of its content data and data schema, from a set of files. This enables the JSS app to execute with local mock content, without a Sitecore instance. In this mode the JSS app is the master copy of all artifacts.  
[Development Workflows | Sitecore JSS Documentation](https://jss.sitecore.com/docs/fundamentals/dev-workflows/overview#code-first-workflow)

> The manifest API is used to define the structure of your JSS site while it is disconnected, so that it can be later imported into Sitecore.  
[Manifest API Reference | Sitecore JSS Documentation](https://jss.sitecore.com/docs/techniques/working-disconnected/manifest-api)

## What data does the manifest create?
If the goal of the manifest is to model Sitecore data, and to ultimately generate Sitecore items, then it helps to understand what the target end-goal looks like.

{% raw %}
<div style="display: inline-grid;grid-template-columns:2fr 1fr">
<div>
<p>
I will use a made-up, simple website as an example to explain the relevant concepts.
</p>
<p>
This site has a home page, an article listing page, and multiple article details pages. The article pages are tagged with arbitrary tags. To render the article details page, the following Sitecore items are needed.
</p>
</div>
<div>
<img src="/images/jss-manifest-demystified/sitecore-tree.png" />
</div>
</div>
{% endraw %}

There are three types of items here.

{% raw %}
<div style="display: inline-grid;grid-template-columns:2fr 1fr">
<div>
<h3>Routes</h3>
<p>
In Sitecore terms, these items are “pages” since they can be viewed in browsers using unique URLs. They contain route-level fields, and instructions for how to lay out the route’s components.
</p>
<p>
Site implementations need multiple route types to capture differences in fields and default layout. For example, article route, product route, location route, etc. In Sitecore terms, route types are “templates”.
</p>
</div>
<div>
<img src="/images/jss-manifest-demystified/sitecore-tree-pages.png" />
</div>
</div>
{% endraw %}

{% raw %}
<div style="display: inline-grid;grid-template-columns:2fr 1fr">
<div>
<h3>Components</h3>
<p>
In Sitecore terms, these are “rendering datasources”. They contain component-level fields. These items cannot be viewed in browsers directly because they don’t have any layout data - they are simply building blocks for route presentation.
</p>
</div>
<div>
<img src="/images/jss-manifest-demystified/sitecore-tree-components.png" />
</div>
</div>
{% endraw %}

{% raw %}
<div style="display: inline-grid;grid-template-columns:2fr 1fr">
<div>
<h3>Arbitrary content items that are not used as pages, nor datasources</h3>
<p>
In Sitecore terms, they are referred to as “lookups” or “list items”. These items also cannot be viewed in browsers directly because they don’t have any layout data. They are usually used for restricting values of route-level or component-level fields to a limited set of options.
</p>
</div>
<div>
<img src="/images/jss-manifest-demystified/sitecore-tree-content-items.png" />
</div>
</div>
{% endraw %}

## Understanding manifest functions
Different manifest API functions should be used to create these different types of Sitecore items.

### Functions for adding new content items to the site
`manifest.addContent()` - adds a new arbitrary content item (like a list item), or a shared component datasource item to the content tree from a yaml or json file.
* In the sample app, you don’t need to write code that calls this function. It will be called for you by  `sitecore\definitions\content.sitecore.js` or `sitecore\definitions\component-content.sitecore.js` as long as you put your yaml/json files into the `/data/content` or `/data/component-content` directories, respectively.

`manifest.addRoute()` - adds a new route to the site.
* In the sample app, you don’t need to write code that calls this function. It will be called for you by `sitecore\definitions\routes.sitecore.js` as long as you put your yaml/json files into the `/data/routes` directory.
* If the route you are adding is a custom route type, use the `template` property in the yaml/json file to specify the route id.

### Functions for defining new types of content
`manifest.addComponent()` - defines a new type of component.
* The call to manifest.addComponent gets set up for you as long as you use the `jss scaffold` command to create new components. If you create components manually, then it’s necessary to add code that calls this function.
* Behind the scenes, `manifest.addComponent` essentially creates a datasource item and a rendering definition.

`manifest.addRouteType()` - defines a new type of route.
* The starter app comes with a single type of page route, which has a `pageTitle` field. This route type is defined in `sitecore/definitions/routes.sitecore.js` using the `manifest.setDefaultRouteType()` function.
* As explained in the previous section, a site always needs multiple route types, so it’s necessary to create a new file and call `addRouteType` for every new type.

`manifest.addTemplate()` - defines a new type of content item.
* Defines the fields that exist on all content items of this type.

> Note: The `jss scaffold` command is used to create a new file and set up a call to `manifest.addComponent()`. It’s possible to extend `jss scaffold` to do the same for `manifest.addRouteType()` and `manifest.addTemplate()` if you like this kind of automation.  

## Designing manifest schema
When building the manifest, the most common schema decision that comes up is regarding whether to put content fields on a route or on a component.

For example, in this example the H1 content can come from either, a route field or a component field. Which way is better?
![](/images/jss-manifest-demystified/route-vs-component-fields.png)

In general, the following guidelines can help make the decision:
* Component datasource items can be shared by multiple components on multiple pages, so all generic fields should be placed on components.
* Fields that are unique to the route type, and fields that you are planning to use for filtering, should be placed on routes.

## Lessons Learned
* In JSS, it’s necessary to be more explicit about the role of your item when you declare it. For example, when creating a template in Sitecore, it doesn’t matter if this template will ultimately be used as a page template of a datasource template. But in JSS, different manifest functions need to be used for pages and datasources.
* The sample app comes with code that calls `manifest.addContent()` and `manifest.addRoute()` for us, so we end up not working with these functions directly and it’s easy to forget they exist. But they are the wizards behind how we can drop yaml/json files into certain folders and magically content gets added to our site.

Bon Appétit!