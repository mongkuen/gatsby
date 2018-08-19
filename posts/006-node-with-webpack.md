---
title: "Using Modern JS with Node with Webpack 4 Build Tools"
date: "2018-08-18"
slug: "node-with-webpack"
lead: "Setting up a node project with Babel, source maps, and server reloading"
backgroundColor: "#2c427f"
image: "/posts/webpack.svg"
---

Once you get used to writing modern JS, it's often hard to go back. You can create a developer friendly environment with Node by building your project with Webpack.

This will solve 5 main issues when using Webpack with Node:
1. Transforming then bundling code through Babel and Webpack
2. Running and reloading server on code changes
3. Fixing pathing behavior
4. Allowing absolute instead of relative imports
5. Source maps that map built code to source code.

<hr/>

## Project Setup:
Project will place source code in a `app/src` directory, and webpack configs in their own `app/config/webpack` folder for a future location to add more configs for staging/testing/production etc. The `build` folder will contain files built by Webpack.

```
app
├── build
├── config
│   └── webpack
│        └── development.js
├── src
│   ├── index.js
│   └── server.js
└── package.json
```

The `server.js` file will contain the simple express app we're serving. Notice it uses ES6 Javascript, as well as object spread operator.

```javascript
// app/src/server.js

import express from 'express'

const app = express()

const response = { ok: true }

app.all('*', (req, res) => {
  res.json({ ...response })
})

export default app
```

The `index.js` file imports the server app, and begins listening on the port.

```javascript
// app/src/index.js

import app from './server'

app.listen(3000, () => {
  console.log('Server listening on port 3000')
})
```

<br/>
<hr/>

## Webpack with Babel

The following needs to be installed for running our code through Babel with Webpack:

1. `webpack`: Module bundler
2. `webpack-cli`: Lets you run webpack in the command line
3. `babel-core`: Code transformer core
4. `babel-loader`: Webpack plugin to load your code into `babel`
5. `babel-preset-env`: Code transformation definitions (preset) so `babel` knows how to read and transform ES6 code
6. `babel-preset-stage-2`: Preset to transform features like the spread operator.
7. `webpack-node-externals`: Function to remove `node_modules` from being bundled by webpack.

After `yarn init`, all dev dependencies can be installed via:

`yarn add --dev webpack webpack-cli babel-core babel-loader babel-preset-env babel-preset-stage-2 webpack-node-externals`

Express can be installed as a dependency via:

`yarn add express`

We want webpack to use our config in `app/config/webpack/development.js`, so in add the following in `package.json`

```javascript
// app/package.json
{
  ...
  "scripts": {
    "dev": "webpack --config ./config/webpack/development.js"
  }
}
```

`yarn run dev` should now run the webpack command with our development config.

Configuring Webpack to run our code through Babel requires the following:

```javascript
// app/config/webpack/development.js

var path = require('path')
// generates proper paths
var nodeExternals = require('webpack-node-externals');
// Function to exclude node_modules being bundled

var appRoot = path.join(__dirname, '..', '..')
// navigate 2 levels up to get the base app folder

module.exports = {
  target: 'node',
  // Webpack to target node
  mode: 'development',
  // Optimize features for development, such as naming modules etc.
  entry: path.join(appRoot, 'src', 'index.js'),
  // app/src/index.js is the entry point for our app
  output: {
    filename: 'index.js',
    path: path.join(appRoot, 'build')
  },
  // Emit built output to app/build/index.js
  externals: [nodeExternals()],
  // Exclude node_modules from being built
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
  // If file ends with .js and not inside node_modules, use babel-loader to load into babel for transformation
}
```

We can now create a `.babelrc` file that tells Babel what transformations to apply.

```javascript
// app/.babelrc
{
  "presets": ["env", "stage-2"]
}
// Allows babel to understand ES6 with stage-2 features enabled, and transform them to the proper javascript target for the node environment
```

You can now run webpack with `yarn run dev`, and see the built files in `app/build/index.js`

Running `node ./build/index.js` in the `app` folder will launch the app successfully.

<hr/>

## Running Server Automatically
It would be good to speed up development by watching the files, rebuilding the output when code is changed, and then reloading the server to update the server.

`ReloadServerPlugin` helps us automate this workflow. Install it via: `yarn add --dev reload-server-webpack-plugin`

```javascript
// app/config/webpack/development.js
...
var ReloadServerPlugin = require('reload-server-webpack-plugin');

module.exports = {
  ...
  watch: true,
  // watch runs webpack again on file change
  plugins: [
    new ReloadServerPlugin({ script: path.join(appRoot, 'build', 'index.js') })
    // Plugin starts developmental server, and serves the file at app/build/index.js
  ]
}
```

Now `yarn run dev` will build the output, and be served automatically. You can change the response in `app/src/server.js`, and Webpack will rebuild, and the server will reload, reflecting your changes.

<hr/>

## Fixing `__filename` and `__dirname`
If you log either `__filename` or `__dirname` out to console, you'll see that the paths are simply mocked, and are incorrect. This is because `webpack.node.__filename` and `webpack.node.__dirname`'s values both [default to "mock"](https://webpack.js.org/configuration/node/#node-__filename).

Setting these options to `true` will set these values to base paths off the `context` option.

```javascript
// app/config/webpack/development.js
...
module.exports = {
  ...
  context: appRoot,
  // Sets node context to be app base directory
  node: {
    __filename: true,
    __dirname: true
  }
  // __filename and __dirname will now be pathed relative to app root
}
```

<br/>
<hr/>

## Absolute Imports
Currently we're importing files via relative imports like so:

```javascript
// app/src/index.js
import app from './server'
```

However, this quickly gets complicated with more sophisticated folder organizations. Absolute imports lets us always import from a known location, without needint to navigate folder nesting like this:

```javascript
// app/src/index.js
import app from 'src/server'
```

Webpack has a `webpack.resolve.alias` option which allows you to map a string to a folder. In our case, we want to map `app/src` to just the string `src`.


```javascript
// app/config/webpack/development.js
...
module.exports = {
  ...
  resolve: {
    alias: {
      "src": path.join(appRoot, 'src'),
    }
  }
  // any import beginning with 'src' will be aliased to app/src
}
```

<br/>
<hr/>

## Source Maps
If there is faulty code, you'll notice the built output errors on a line different than the line than where the error occured in your source code. This makes debugging difficult. Source maps allow you to map the built code, to the source code.

Webpack's `webpack.devtool` option allows us to specify what type of source maps to use. In our case, we'll generate an actual `index.map.js` file.

After this file is generated, `source-map-support` allows us to link into that mapping from our built files. To do this, the built file needs to have a line of code from `source-map-support` to be injected to run before any other code. We'll do this with `webpack.BannerPlugin` to inject this code to the top of the built file.

Install `source-map-support` via: `yarn add --dev source-map-support`
```javascript
// app/config/webpack/development.js
...
var webpack = require('webpack')

module.exports = {
  ...
  plugins: [
    ...
    new webpack.BannerPlugin({ banner: 'require("source-map-support").install();', raw: true, entryOnly: false })
    // Banner applying raw source-map-support banner string, into every built file (not just entry)
  ],
  ...
  devtool: 'source-map'
  // generate the app/build/index.map.js map file
}
```

You should see that any errors that happen will now be attributed to the proper line in the source.
