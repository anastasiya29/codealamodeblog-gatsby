---
title: Sitecore JavaScript Services - How To Publish JSS Components As NPM Packages
description: This post shares how I published JSS components as an npm package that can be imported into other JSS projects. This post is part of a series on learning to work with Sitecore JavaScript Services (JSS).
featuredImage: jss.png
tags:
  - Sitecore
  - Sitecore JavaScript Services
  - React
date: 2019-03-06 12:00:00
---

[[snippet]]
| This post is part of a series - [Sitecore JavaScript Services (JSS) Sandbox](/jss-sandbox/)
| 
| Component reuse is an important subject for developers. As I was building structural grid components for my JSS app, I thought, “all projects need grid components, so is it possible to package these up for reuse?” So I set out to create a POC of the idea. This post shares how I published JSS components as an npm package that can be imported into other JSS projects.

## Prepping and Publishing the NPM package
JSS components consist of two files - definition files (`sitecore\definitions\components`) and src files (`src\components`). Both need to be packaged into the module, but in different ways. This section covers how to prep the package.

### Create a new JSS app to contain the reusable components
The first step was to create a new, separate project for the grid components.

If you use one of the default starters to create your app, be sure to delete all the sample StyleGuide and GraphQL components so that they don’t get packaged into your module.

I used a stripped down react starter. It’s based on the default JSS react starter, but with the following changes:
* all StyleGuide and GraphQL boilerplate removed
* References to i18n removed
* References to bootstrap removed
* Scripts and commands for connected mode removed
_The purpose of a stripped down starter is for quick prototyping of disconnected react components only_. 

### Build components
I built and tested the JSS components in disconnected mode per the normal process; no special steps here. I built two components - a One Column and a Two Column. I used [Rebass Grid](https://github.com/rebassjs/grid) for the responsive grid framework. The Two Column component had a field for column width. By nesting these components and varying column width, I was able to achieve any grid pattern.
![](/images/jss-publish-jss-component-library/grid-components.png)

### Prepare definition files for packaging
To make testing easier, I used a ContentBlock component that had fields for text and background color. Since this component is purely for testing purposes, and shouldn’t be included in the final package, I moved its definition file into a separate directory. So my component definition files were structured like this:
```
sitecore
  definitions
    components
      Grid1Column.sitecore.js
      Grid2Column.sitecore.js
    test
      ContentBlock.sitecore.js
```
This separation was important because `sitecore\definitions\components` would be included in the npm package, but `sitecore\definitions\test` would not.

> Definition files can go into the npm package in their raw form, without being transpiled, because these files are only used by JSS to generate the manifest, and JSS will perform a transpilation step before generating the manifest.  

### Prepare src files for packaging
Unlike definition files, the src files need to be transpiled to plain JavaScript. All JSS starters come with webpack, so it was pretty quick to get this set up. First, I added an entry file for webpack that exported only the grid components.
`src\components.js`
```javascript
import Grid1Column from './components/Grid1Column';
import Grid2Column from './components/Grid2Column';

export { Grid1Column, Grid2Column };
```

Next, I added a webpack config to the project root, using `components.js` as the entry file.
`webpack.config.js`
```javascript
var path = require('path');
const env = require('@babel/preset-env');
const reactApp = require('babel-preset-react-app');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'production',
    entry: './src/components.js',
    target: 'node',
	  externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'components.js',
        libraryTarget: 'commonjs2'
    },
    optimization: {
        minimize: false,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: [env, reactApp],
                    },
                }
            }
        ]
    }
};
```

This config generates a JavaScript bundle in `dist\components.js`. Remember to add the `dist` directory to gitignore.

Note the import and usage of `webpack-node-externals` in the above config. This dependency is not part of the default JSS starter; it needs to be added via `npm install webpack-node-externals —save-dev`. The purpose of this module is to exclude all external node modules from the bundle. (More info here: [webpack-node-externals](https://www.npmjs.com/package/webpack-node-externals))

When building a JavaScript library, it is best practice to leave the loading of 3rd party dependencies up to the library consumers. Additionally, if dependencies like `@sitecore-jss/sitecore-jss-react` are included in the bundle, the library consumers (who will have their own version of `sitecore-jss-react`) will end up with 2 copies of this code, which will result in unexpected component behavior (as I learned from personal experience 😅).

To trigger the webpack build, I added an npm command to `package.json`
```json
"scripts": {
	"webpack": "cross-env-shell NODE_ENV=production \"webpack --config webpack.config.js\""
},
```
Side note: If you’re curious why the NODE_ENV variable needs to be specified, check out this thread: [Issue #2377 · facebook/create-react-app](https://github.com/facebook/create-react-app/issues/2377)

### Organize package.json dependencies
I needed to change the dependencies in `package.json` a bit to properly reflect the code that I’m exporting.
* Imports directly referenced by components belong in `dependencies`  and `peerDependencies` since consumers of the package are expected to import their own copies of 3rd party dependencies.
* All other imports move to `devDependencies`

### Generate the package
To tell npm explicitly what to include in the package, I added a `files` property to `package.json`.
```json
"files": [
    "dist",
    "sitecore/definitions/components"
]
```

Update other relevant properties in `package.json` as you see fit (description, version, author, private, etc).

At this point, the package can be published to npm. Since this was just a demo, I used `npm pack` to generate a local npm module for testing.

## Consuming the NPM package
This sections covers how to import and use the NPM package from the previous section in an existing JSS app.

### Import the external JSS components
From my jss-sandbox project, where I am building a listing page of Sitecore community events, I imported the local npm module using `npm install <path to local package>`. This placed the definition and src files for my grid components into the `node_modules` directory.

### Update manifest generation to include external modules
By default, when the JSS manifest is generated, it only takes into account these paths:
* `./sitecore/definitions/**/*.sitecore.js`
* `./sitecore/definitions/**/*.sitecore.ts`

To make it include definitions from `node_modules`, I did the following:
**For disconnected mode** - Add a `proxyOptions.sourceFiles` property in `scripts\disconnected-mode-proxy.js` with the updated list of definition sources.
```javascript
const proxyOptions = {
...
  sourceFiles: [
    './sitecore/definitions/**/*.sitecore.js',
    './sitecore/definitions/**/*.sitecore.ts',
    './node_modules/sitecore-jss-grid-components/sitecore/definitions/**/*.sitecore.js'
  ],
...
};
```

**For connected mode** - All commands that rely on the manifest (like `jss manifest` and `jss deploy`) need to be told about the updated list of definition sources using the `--manifestSourceFiles` argument. For example,
```bash
jss manifest --manifestSourceFiles './sitecore/definitions/**/*.sitecore.js' './sitecore/definitions/**/*.sitecore.ts' './node_modules/sitecore-jss-grid-components/sitecore/definitions/**/*.sitecore.js'
```

Since definition files need to be transpiled when the manifest is generated, there was one additional change required to the babel config. By default, babel ignores all node modules. Adding an explicit `ignore` property to `sitecore\definitions\config.js` allowed me to include my grid definitions in the transpilation.
`ignore: [/node_modules\/(?!sitecore-jss-grid-components)/]`

### Update component factory to include external modules
By default, `scripts\generate-component-factory.js`  generates the contents of `temp\componentFactory.js`, which is used to aggregate all your components and register them with JSS. Normally, this script only checks `src\components` for components, so I needed to add code to make it pull components from `node_modules`. However, I didn’t want it to look through all node modules, so I added a custom property to `package.json` to explicitly specify the locations of external JSS components.

`package.json`
```json
{
  "externalComponents": {
    "../../node_modules/sitecore-jss-grid-components/dist/components": [
      "Grid1Column",
      "Grid2Column"
    ]
  }
}
```
 This is set up as an object so that multiple external modules can be imported.

I updated the component factory script to read the custom `package.json` property, and add the external components to the factory.
`scripts\generate-component-factory.js`
```javascript
const config = require("../package.json");
const externalComponents = config.externalComponents || {};

function generateComponentFactory() {
    const imports = [];
    const registrations = [];
    const externalModules = Object.keys(externalComponents);

    // default code clipped for brevity

    if (externalModules.length) {
    externalModules.forEach(modulePath => {
      const components = externalComponents[modulePath];
      components.forEach(component => {
        console.debug(`Registering JSS component ${component}`);
        imports.push(`import { ${component} } from '${modulePath}';`);
        registrations.push(`components.set('${component}', ${component});`);
      });
    });
  }
}
```

This results in `src\temp\componentFactory.js` registering the external components:
```javascript
import { Grid1Column } from '../../node_modules/sitecore-jss-grid-components/dist/components';
import { Grid2Column } from '../../node_modules/sitecore-jss-grid-components/dist/components';

const components = new Map();

components.set('Grid1Column', Grid1Column);
components.set('Grid2Column', Grid2Column);

export default function componentFactory(componentName) {
    return components.get(componentName);
};
```

With these changes, the external components and their placeholders can be used in routes per the normal process.
`data\routes\en.yml`
```yaml
id: home-page
fields:
  pageTitle: Welcome to Sitecore JSS
placeholders:
  jss-main:
  - componentName: Grid1Column
    placeholders:
      grid-1-column:
      - componentName: ContentBlock
        fields:
          heading: Welcome to Sitecore JSS
          content: JSS Sandbox
```

## Source Code
Grid components repo: [GitHub - anastasiya29/sitecore-jss-grid-components](https://github.com/anastasiya29/sitecore-jss-grid-components)
Project that imported grid components: [GitHub - anastasiya29/jss-sandbox at topic/import-external-jss-components](https://github.com/anastasiya29/jss-sandbox/tree/topic/import-external-jss-components)

## Lessons Learned
* When building a library of external JSS components, it is very important to exclude all node modules from the library bundle
* When building a library of external JSS components, component source files should be transpiled. However, manifest definition files are processed server-side at build-time, so they don’t need to be.
* The locations where JSS searches for manifest definition files can be overridden with the `--manifestSourceFiles` arg.
* The locations where `componentFactory` imports components from can be customized by modifying `scripts\generate-component-factory.js`.

## Helpful Resources
[Guide to Authoring JavaScript Libraries](https://webpack.js.org/guides/author-libraries/)

Bon Appétit!