---
title: "How to set up, create, and publish a Gatsby open source plugin"
date: "2018-07-08"
slug: "create-gatsby-open-source-plugin"
lead: "Details and gotchas to extract code from your Gatsby project, into a reusable plugin"
backgroundColor: "#7f562c"
image: "/posts/plugin.png"
---

I created functionality to add page transitions to Gatsby pages, letting you mix and match any transitions desired:

<div style="display: flex; justify-content: center;">
  <img src="/posts/transition.gif" alt="gatsby-plugin-page-transition demo">
</div>

The general implementation is as follows:
1. Create a new browser history in the client that we can control. This can be done in the `gatsby-browser.js` client file
2. History has a `getUserConfirmation` that catches page changes
3. Dispatch a global event on page change, containing the new path to be navigated to
4. Wait with a `setTimeout` to withhold page change until animation is complete before navigating
5. Wrap all pages with animation parent component
6. Component listens to event, when the current path is different from new path, it toggles the transition state
7. Transition animation runs, timout completes, and new page is navigated to.

However, it's pretty tedious to do, and it'd be great to create a plugin to make this easier for myself and others in the future.
Creating a plugin for gatsby is easy, however there are steps that should be followed to match exiting conventions.

<hr/>

### 1. Choosing a name prefix
Depending on the type of functionality the plugin has, Gatsby has namespaces, described [here](https://www.gatsbyjs.org/docs/plugin-authoring/#plugin-naming-conventions)

In this case, I'm creating a plugin to allow page transitions, which means the general `gatsby-plugin-` prefix should be used.
The name for my plugin will be `gatsby-plugin-page-transitions`.

<hr/>

### 2. Local plugin dev setup
To develop the plugin, you'll want the plugin to actually be placed inside an EXISTING Gatsby project.
Like so described in the docs, [here](https://www.gatsbyjs.org/docs/plugin-authoring/#local-plugins)
The project will allow you to use a local plugin if you create a `plugins` folder within the project.
Gatsby will look inside the folders for the `package.json` of the plugin.

1. Create the folder `plugins/`

2. Create a second folder with the plugin's name
`plugins/gatsby-plugin-page-transitions`

3. Point to the local plugin in the project's `gatsby-config.js`
`gatsby-config.js`
```javascript
module.exports = {
  ...
  plugins: [
    ...
    'gatsby-plugin-page-transitions',
  ],
  ...
}
```

4. Create the plugin's `package.json` file
`plugins/gatsby-plugin-page-transitions/package.json`

<hr/>

### 3. Initial `package.json`
Gatsby looks for certain packages on npm to add to it's plugins list, described [here](https://www.gatsbyjs.org/docs/plugin-authoring/#what-files-does-gatsby-look-for-in-a-plugin).

Most important keys are:
  1. `name` key with a name string that begins with either `gatsby` or `gatsby-plugin`
  2. `keywords` key with array that contains `gatsby` AND `gatsby-plugin` to help the crawlers add plugin into their library

I personally like to add a little more information, such as `description`, `author`, `homepage` fields, resulting in an initial `package.json` somewhat like this.

`plugins/gatsby-plugin-page-transitions/package.json`
```javascript
{
  "name": "gatsby-plugin-page-transitions",
  "description": "Gatsby plugin to set page transitions",
  "author": "Mong-Kuen Sun <mongkuen.sun@gmail.com>",
  "homepage": "https://github.com/mongkuen/gatsby-plugin-page-transitions",
  "bugs": {
    "url": "https://github.com/mongkuen/gatsby-plugin-page-transitions/issues"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/mongkuen/gatsby-plugin-page-transitions"
  },
  "keywords": [
    "gatsby",
    "gatsby-plugin",
    "page",
    "transitions",
    "page-transitions"
  ]
}
```
<br/><hr/>

### 4. Add a License
Add a `LICENSE` to the project, simply copy/paste the [MIT open source license](https://opensource.org/licenses/MIT)
`plugins/gatsby-plugin-page-transitions/LICENSE`
```
MIT License

Copyright (c) 2018 mongkuen

Permission is hereby granted, free of charge, to any person ...
```

Don't forget to add license to `package.json`
`plugins/gatsby-plugin-page-transitions/package.json`
```javascript
{
  ...
  "license": "MIT"
}
```
<br/><hr/>

### 5. Create a build system
Gatsby plugins do not get processed by Babel, as documented [here](https://www.gatsbyjs.org/docs/plugin-authoring/#local-plugins)
```
Like all gatsby-* files, the code is not processed by Babel. If you want to use JavaScript syntax which isn’t supported by your version of Node.js, you can place the files in a src subfolder and build them to the plugin folder root.
```
This means that you'll want to compile the ES2016 source in the `src` folder down to ES2015, which will be the published version.

Inside the plugin folder `plugins/gatsby-plugin-page-transitions/` run:

1. Install `babel-cli`, so you can run Babel in the command line.
`yarn add --dev babel-cli`

2. Install `babel-runtime`, which contains polyfills that might be necessary in compilation
`yarn add --dev babel-runtime`

3. Install `babel-preset-es2015`, which is a set of plugins that has transformations down to the JS version year
`yarn add --dev babel-preset-es2015`

4. Install `babel-preset-react` if you are writing any JSX react components
`yarn add --dev babel-preset-react`

`package.json` should have the following added
`plugins/gatsby-plugin-page-transitions/package.json`
```javascript
{
  ...
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-react": "^6.24.1",
    "babel-runtime": "^6.26.0",
  }
}
```

4. Create source folder `plugins/gatsby-plugin-page-transitions/src/`

5. Add `.babelrc` file to let Babel know to compile down to ES2015, and JSX
`plugins/gatsby-plugin-page-transitions/.babelrc`
```javascript
{
  "presets": ["es2015", "react"]
}
```
<br/><hr/>

### 6. Gitignore
Since there is a build system, and you do not want to commit compiled code into source control, the `.gitignore` must ignore the built files.

Depending on what type of files your plugin utilizes, you may have to ignore `gatsby-node.js`, `gatsby-browser.js`, `gatsby-ssr.js`, `index.js`, all 3, or more.
In my case I only have to build and ignore `gatsby-browser.js` and `index.js`

Note that if the parent Gatsby project is tracking changes vit git, you'll want to ignore the local dev plugin folder in the parent project.

1. Initialize git inside plugin folder `plugins/gatsby-plugin-page-transitions/`
2. Create `plugins/gatsby-plugin-page-transitions/.gitignore` file
3. Add built files that should be ignored, and any other undesireable files

`plugins/gatsby-plugin-page-transitions/.gitignore`
```
/gatsby-browser.js
/index.js
...
```
<br/><hr/>

### 7. Test Build System

1. Add a `gatsby-browser.js` file with a message to be logged in the browser
`plugins/gatsby-plugin-page-transitions/src/gatsby-browser.js`
```javascript
console.log('Plugin browser message');
```

2. Create `package.json` script that runs build, setting the output directory to where the plugin root is.
`plugins/gatsby-plugin-page-transitions/package.json`
```javascript
{
  ...
  "scripts": {
    "build": "babel src --out-dir ."
  }
}
```

3. Test the build `yarn run build`

4. You should see the built file being outputted to the plugin folder `plugins/gatsby-plugin-page-transitions/gatsby-browser.js`!

5. The built file should have been ignored bby git, via the last step.

<hr/>

### 8. Install developer tools
It's a pain to have to have to rebuild every time we make a change manually. I personally like to use `prettier` as well, to automatically format my code.
It's optional, but just nicer to put some developer tools in place to help with that.

1. Install `onchange`, which detects file changes and runs commands
`yarn add ---dev onchange`

2. Add `prettier`, which automatically formats your code
`yarn add --dev prettier`

3. Add a watcher to run `prettier` on `js` or `jsx` file changes in `/src` folder
`plugins/gatsby-plugin-page-transitions/package.json`
```javascript
{
  ...
  "scripts": {
    ...
    "prettier-watch": "onchange 'src/**/*.js' 'src/**/*.jsx' -- prettier --write {{changed}}"
  }
}
```

4. Add a watcher to run `build` on `js` or `jsx` file changes in `/src` folder
`plugins/gatsby-plugin-page-transitions/package.json`
```javascript
{
  ...
  "scripts": {
    ...
    "build-watch": "onchange 'src/**/*.js' 'src/**/*.jsx' -- yarn run build"
  }
}
```

5. Add `concurrently`, which lets you run multiple commands within one command
`yarn add --dev concurrently`

6. Run prettier and build watchers concurrently when running `dev`, and automatically kill watchers upon exiting
```javascript
{
  ...
  "scripts": {
    ...
    "dev": "concurrently \"yarn run prettier-watch\" \"yarn run build-watch\" --kill-others"
  }
}
```

If you make a change to the logged message in `plugins/gatsby-plugin-page-transitions/src/gatsby-browser.js`, you should see:
1. Source file being prettified
2. Built file changed with latest compiled code

<hr/>

### 9. Implement Plugin
If plugin feature has already been implemented in your `gatsby-node.js`, `gatsby-browser.js`, or `gatsby-ssr.js`, it should be possible to simply copy/paste the related chunk directly to the plugin source file.

If your plugin has options that the user can modify in their `gatsby-config.js`, they are available as the second argument within the gatsby function callbacks.

For example, my plugin allows you to change the `transitionTime` of the animation like so:

`gatsby-config.js`
```javascript
module.exports = {
  ...
  plugins: [
    ...
    {
      resolve: 'DEV-gatsby-plugin-page-transitions',
      options: {
        transitionTime: 250,
      },
    },
  ]
}
```

I can then access the `transitionTime` in the plugin's `gatsby-config.js` like so:
`plugins/gatsby-plugin-page-transitions/gatsby-browser.js`
```javascript
exports.onClientEntry = (_, pluginOptions) => {
  pluginOptions.transitionTime
  // 250
}
```

You can see the full implementation of the code [here](https://github.com/mongkuen/gatsby-plugin-page-transitions).

<hr/>

### 10. Add version number
Gatsby docs recommends [here](https://www.gatsbyjs.org/docs/plugin-authoring/#what-files-does-gatsby-look-for-in-a-plugin):
```
omitting the version field is recommended for local plugins
```

This is because build caches are cleared when version numbers are different, and if there's a version number in a local dev plugin, changes may not be immediately picked up.

When you are satisfied with plugin functionality, you can add a version number.

NPM follows [semantic versioning](https://docs.npmjs.com/getting-started/semantic-versioning), meaning 3 digits, for patch, minor, and major releases.

The first version can simply look like:

`plugins/gatsby-plugin-page-transitions/package.json`
```javascript
{
  ...
  "version": "1.0.0",
}
```
<br/><hr/>

### 11. Add `README.md`
Create a `README.md` file with your plugin's installation instructions, usage instructions, configuration instructions.
These will be published beside your plugin in Gatsby's library, and will also show up in Github/npm

`plugins/gatsby-plugin-page-transitions/README.md`

<hr/>

### 12. Prepare to publish on NPM
1. There are files that do not need to be published to npm, so an `.npmignore` should be added.

There are many sample `npmignores`, such as [here](https://github.com/s0ph1e/npmignore).

But most importantly be you can leave out `node_modules`, as well as ignore the `src` if desired

`plugins/gatsby-plugin-page-transitions/.npmignore`
```
...
node_modules
src
```

2. Make NPM publish a fresh build right before publishing with the `prepublishOnly` hook
Note there were naming/deprecation issues with `prepublish` vs `prepublishOnly`, more reading [here](https://iamakulov.com/notes/npm-4-prepublish/).
However for most expected behavior of hooking in before publishing, use `prepublishOnly`

`plugins/gatsby-plugin-page-transitions/package.json`
```javascript
{
  ...
  "scripts": {
    ...
    "prepublishOnly": "npm run build"
  }
}
```
<br/><hr/>

### 13. Follow NPM publishing instructions
NPM publishing docs found [here](https://docs.npmjs.com/getting-started/publishing-npm-packages)

If you don't have an npm account, you'll want to follow the instructions to set up, and log into the account.

Otherwise, just run `npm publish` and your plugin should be live!
