---
title: Node.js for (.NET) Dummies
description: Introduction to the world of Node.js for Sitecore developers
date: 2017-12-01 12:00:00
tags:
- JavaScript
- node
---

[[snippet]]
| > **This post is part of a series**
| > 1. **Node.js for (.NET) Dummies**
| > 2. [A quick-start guide to using Node to bundle JavaScript modules for Sitecore](/Sitecore/Node-js/module-bundling-rollup/)
| > 3. [A guide to automating Sitecore development tasks with Gulp](/Sitecore/Node-js/automate-with-gulp/)
| 
| This post is for my fellow .NET/Sitecore developers who find themselves trying to avoid JavaScript like the plague. For the record, I do not think my peers are dummies. On the contrary, Sitecore is incredibly complex, so I think anyone who can jump into this under-documented framework, weave through constant version changes, and still produce a beautiful, usable product is a very skilled individual. Yet I've worked with enough Sitecore power-houses to know that JavaScript scares even the best Sitecore devs, and most often we end up with a single monolitic JavaScript file that contains scattared code covering the entire site, and is a nightmare to maintain. If this sounds familiar to you, then read on. If not, then consider yourself lucky and go give your boss a high five.

## Why is JavaScript so scary?
I think there is a very simple answer to this question - it's scary because it's unfamiliar. Sitecore is built upon backend processing. And while we were busy in the backend during the past few year, building custom pipelines, processors, and integrations, JavaScript evolved from a Charmander to a Charizard. Now it's no longer this little thing that we can hack through because the syntax is "close enough" to C#. It has new features - arrow functions, destructuring, exports - stuff that looks totally foreign. And with the rise of Node, it seems like you need to learn 5 different libraries before you can even start working on a module in this "ecosystem". No one has time for that - clients pay us to implement Sitecore, not to implement JavaScript.

## Why should we care about JavaScript?
We should care about JavaScript because we need it to build the fancy, dynamic components that clients want. Most clients are not willing to pay for a team of Sitecore devs and a separate team of front-end devs - we are generally expected to do it all. And even if clients were willing to add front-end devs to the team - Sitecore's backend processing regularly spills into frontend architecture (personalization, analytics, globalization, security), so there is no clear boundary where a Sitecore dev could stop coding and hand a component over to a frontend dev.

Plus, JavaScript is fun! ☺

## Why should we care about Node?
1. Node allows us to embrace js modularity - the organization of js into neat modules which are autonomous, extendable, and testable. The notion of Modules has been added to the latest [spec](http://exploringjs.com/es6/ch_modules.html), so this is trully how js code should be organized. Please kill that monolithic file that has all the front-end code for the entire site and create a js library that's as beautifully architected as your .NET application, and as easy to traverse as your Sitecore tree.
2. Adding node allows us to easily utilize popular frameworks like [React](https://reactjs.org/) and [Angular](https://angular.io/) in our Sitecore components.
3. Node makes it easy to add transpilation to our build process, so we can get fancy with [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) or [ECMAScript 6](http://es6-features.org) code.
4. By setting up a node stack, we create a way to manage front-end code that's independent from both, Sitecore and Visual Studio. This makes js development MUCH faster. It also frees you from having to develop in a Windows enrivonment.
5. Even if you hate JavaScript, consider this - *Node-based task runners can be used to significantly improve your .NET/Sitecore development process*. For example, you can set a task runner to "watch" JavaScript, CSS, and View files for changes and automatically copy updates to your /Website directory, thus minimizing how often the project needs to be built.

## So what can we do to get better?
The best way to learn is to break up existing Javascript into modules - each module should be a separate file that encapsulates the functionality of a single Sitecore component. Then create a node project with the single goal of bundling and minifying those modules (and their 3rd party dependencies like jQuery) into a single file that can be referenced by the Main Layout. This bundling is the base use-case for connecting Node with Sitecore.

There is a very large number of libraries to chose from when determining your Node stack. In fact, the number of choices feels overwhelming to a newbie (this is another reason people are afraid to get their feat wet). My advice is this - don't get hung up on chosing the perfect set of tools, and start with the minimum toolset necessary to accomplish your immediate needs. You can always add on to the stack later. Remember that all the competing libraries (gulp vs grunt, npm vs yarn, webpack vs Babel) are server side tools; this means it’s ok to experiment and make mistakes. The worst that can happen is you make a selection that’s not optimal in terms of configuration effort and build time, but it will still get you the same end-result and the frontend won’t blow up.

That's it for my pep-talk. In the next post I will demonstrate how easy it is to achieve what I described above.

In the meantime, I offer this diagram, which draws parallels between the JavaScript world and the .NET world that we're used to, as a high-level overview of the popular libraries in the Node stack. Granted we are comparing apples to oranges so this is a bit crude, but this kind of thinking really helped me when I was learning.

![Diagram showing items in the node stack along with the analogous parallel in .NET](/images/nodethroughdotneteyes.png)

Bon Appétit!

### Up Next
A quick-start guide for creating a new Node project and bundling/minifying JavaScript modules for Sitecore.

### Additional Resources
I *highly* recommend reading these two books to anyone who wants to elevate his or her JavaScript extertise.

* [Secrets of the JavaScript Ninja by John Resig](https://www.amazon.com/Secrets-JavaScript-Ninja-John-Resig/dp/1617292850/) - this is an older book that was written before the latest spec was released, but it is by far the best presentation of raw JavaScript - what's special about it and how to use it. I would not love JavaScript as much as I do had I not read this book a few years ago.

* [You Don't Know JS: ES6 & Beyond by Kyle Simpson](https://www.amazon.com/You-Dont-Know-JS-Beyond/dp/1491904240) - this is a great teacher of all the fancy new stuff in the latest spec. Understading how the new features work does not come naturally from simply looking at the code. So everyone just has to buckle down and study these. Then force yourself to use them in your code to make sure the lessons stick.
