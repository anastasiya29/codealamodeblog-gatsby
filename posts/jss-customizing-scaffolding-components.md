---
title: Sitecore JavaScript Services - Customizing Scaffolding of Components
description: This post explores customizing the `jss scaffold` command. This post is part of a series on learning to work with Sitecore JavaScript Services (JSS).
featuredImage: jss.png
tags:
  - Sitecore
  - Sitecore JavaScript Services
  - React
date: 2019-01-30 12:00:00
---

[[snippet]]
| This post is part of a series - [Sitecore JavaScript Services (JSS) Sandbox](/jss-sandbox/)
| 
| This post explores customizing the `jss scaffold` command. This post is part of a series on learning to work with Sitecore JavaScript Services (JSS).
| 
| When I followed the “Getting Started” guide from JSS Documentation to learn how to create new components, there was one section in the docs that caught my eye:
| [Your First Component | Sitecore JSS Documentation](https://jss.sitecore.com/docs/getting-started/first-component#scaffolding-a-jss-component)
| 
| > Scaffolding a JSS Component
| > JSS’ sample apps include a script that allows you to easily scaffold new JSS components. The script is run like so:
| 
| ```bash
| jss scaffold <componentname>
| ```
| 
| > This script is a completely customizable boilerplate (\_scripts_scaffold-component.js) if you don't like the default scaffolding conventions. Take it and make it yours!

My demo site is using React, and by default, this command creates a boilerplate functional component.

src/components/NewComponents/index.js
```javascript
import React from "react";
import { Text } from "@sitecore-jss/sitecore-jss-react";

const NewComponent = props => (
  <div>
    <p>NewComponent Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default NewComponent;
```

## Finding the command definition

To figure out how this command works under the hood, I checked `package.json` for the command definition:

```json
"scripts": {
    ...
    "scaffold": "node scripts/scaffold-component.js",
    ...
}
```

You may assume that the implementation for `jss scaffold` is defined inside JSS code since it’s a JSS command. On the contrary, `package.json` reveals that all the magic is defined inside `/scripts/scaffold-component.js` , which is a script that gets scaffolded as part of the starter app. This means that we have complete power to customize everything about this command.

## Default Behavior

### 1. Input validation

The out-of-the-box implementation of `jss scaffold` does some validation on the <ComponentName> input

scripts/scaffold-component.js
```javascript
const componentName = process.argv[2];

if (!componentName) {
  throw "Component name was not passed. Usage: jss scaffold <ComponentName>";
}

if (!/^[A-Z][A-Za-z0-9-]+$/.test(componentName)) {
  throw "Component name should start with an uppercase letter and contain only letters and numbers.";
}
```

- It ensures the name is not an empty string
- It ensures the name is Pascal cased
- It ensures the name only contains letters, numbers, or dashes

If you want to do additional validation or enforce a certain naming convention on new components, you could do it here.

### 2. File generation

The script calls `scaffoldManifest()` and `scaffoldComponent()` to generate a manifest file and component file for the new component, respectively. Both of these are local functions, and they utilize string interpolation for the file content generation. As we’ll see in the next section, this setup makes the file generation very easy to customize.

## Customizing generation of new components

In the React world, it’s common to use “snippets” libraries to create new components from a set of boilerplate options. For example, if you know your component will need to hook into lifecycle methods, then you can use a class component snippet (until [React Hooks](https://reactjs.org/docs/hooks-intro.html) go live, which is early Feb apparently 👏, then functional components all the way! 😉). This is a popular VSCode plugin for React snippets - [ES7 React/Redux/GraphQL/React-Native snippets - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets#user-content-react-components). Other front-end frameworks have similar plugins.

It’s ok if you’re not familiar with snippets libraries. The TLDR is that they enable you with a set of shortcut commands, like `rcc` (for React class component) and `rfc` (for React functional component), and you just type these shortcuts into a file in VSCode to create your boilerplate.

I thought it would be helpful to introduce a similar concept to the `jss scaffold` command via flags. So, my goal was to expose a set of component templates instead of just one, and let the developer choose which one to use at scaffold time.

I modified the default script to look for a `—template:<name>` flag in the command invocation, where <name> is the template name (Ex. `—template:rcc`, `—template:rfc` ). The component name and template name are passed to a helper in an external file to figure out what content to use for file generation.

scripts/scaffold-component.js
```javascript
const getTemplate = require("./scaffold-templates").getTemplate;

//////////

/*
Components can be created from different scaffolding templates.
Use flags when calling the `jss scaffold` command to speficiy which template to use.
Supported flags:
* --template=rfc - use template for react functional component
* --template=rcc - use template for react class component
*/
let template = process.argv.find(arg => arg.indexOf("--template") === 0);
if (template) {
  template = template.split("=")[1];
}

const componentOutputPath = scaffoldComponent(
  getTemplate(componentName, template)
);

function scaffoldComponent(componentTemplate) {
  const outputDirectoryPath = path.join(componentRootPath, componentName);

  if (fs.existsSync(outputDirectoryPath)) {
    throw `Component path ${outputDirectoryPath} already existed. Not creating component.`;
  }

  fs.mkdirSync(outputDirectoryPath);
  const outputFilePath = path.join(outputDirectoryPath, "index.js");
  fs.writeFileSync(outputFilePath, componentTemplate, "utf8");
  return outputFilePath;
}
```

The external helper is just to make my set of templates easier to manage.

scripts/scaffold-templates.js
```javascript
module.exports.getTemplate = (componentName, template) => {
  const exportVarName = componentName.replace(/[^\w]+/g, "");
  const templates = {
    // Template for React Class Component
    rcc: `import React, { Component } from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

export default class ${exportVarName} extends Component {
  render() {
    return <div>
      <p>${componentName} Component</p>
      <Text field={this.props.fields.heading} />
      </div>
    }
  };
`,

    // Template for React Functional Component
    rfc: `import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const ${exportVarName} = (props) => (
  <div>
    <p>${componentName} Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default ${exportVarName};
`
  };
  if (templates.hasOwnProperty(template)) {
    return templates[template];
  }

  console.log(
    "No component template or invalid template specified, using React Functional Component template."
  );
  return templates.rfc;
};
```

View complete diff on GitHub: [Add ability to use flag to specify whether new components should be s… · anastasiya29/jss-sandbox@b647001 · GitHub](https://github.com/anastasiya29/jss-sandbox/commit/b64700157f0449542729ccaf2dd675c6a9c59e42#diff-61d12edc1cbcee5dc32e39567f301d84)

## Lessons Learned

- Templates for new components are managed by string interpolation
- New flags can be added to any jss command to extend it with custom options

## Try It Yourself

To experiment with this customization yourself, you can clone this code locally

```bash
git clone -b topic/customize-component-scaffolding-templates https://github.com/anastasiya29/jss-sandbox.git
```

Remember to install the `jss cli` if you haven’t already done so, and run `npm install` from the project root to download dependencies. After that you can start using the custom `jss scaffold` command.

Bon Appétit!
