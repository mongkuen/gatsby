---
title: "React Testing: Configuring Jest"
date: "2018-06-27"
slug: "configuring-jest"
lead: "Configuring Jest to handle ES modules, dynamic imports, CSS modules, coverage, mocks"
backgroundColor: "#7f2c39"
image: "/posts/jest.svg"
---

## Installing Jest
`npm install --save-dev jest`

`package.json`
```javascript
{
  ...
  "scripts": {
    ...
    "test": "jest",
    "test:watch": "jest --watch"
  }
}
```

`jest.config.js`
```javascript
module.exports = {
  ...
  testPathIgnorePatterns: ['/node_modules/']
}
```

Jest will automatically run any `.js` or `.jsx` files that are either
1. Inside a folder called `__tests__`
2. Have the extension prefix `.spec` or `.test`

`npm run test` will run test suite

`npm run test:watch` will run tests in watch mode, looking for new changes or failed tests, etc.
<br/><hr/>

## Configuring Jest
### ES module imports
To allow webpack to use ES modules to do tree shaking, Babel should transpile everything EXCEPT for imports. If this is configured like the following:

`package.json`
```javascript
{
  ...
  "babel": {
    "presets": "./.babelrc.js"
  }
}
```

`.babelrc.js`
```javascript
module.exports = {
  ...
  presets: [['env', { modules: false}], 'react']
}
```

An `unexpected token import` error will occur, as the testing environment import will fail

Fix the error by making test env use common JS import
`.babelrc.js`
```javascript
const isTest = String(process.env.NODE_ENV) === 'test'

module.exports = {
  ...
  presets: [['env', { modules: isTest ? 'commonjs' : false }], 'react']
}
```
<br/><hr/>

### Increasing speed
If your components and tests don't require access to the DOM or the `window` object, Jest can be spedup by running in the `node` environment.

`jest.config.js`
```javascript
module.exports = {
  ...
  testEnvironment: 'node'
}
```
<br/><hr/>

### Mocking Imports
Webpack can use loaders to import elements that are not traditionally javascript, such as CSS, images, and SVGs.

However, the testing environment will fail with an import such as `import styles from './styles.css`. It is possible to create a empty mock, and have files matching regex extensions be replaced with that mock. A mock for CSS imports could be the following:

`style-mock.js`
```javascript
module.exports = {}
```

`jest.config.js`
```javascript
module.exports = {
  ...
  moduleNameMapper: {
    '\\.css$': require.resolve('./style-mock')
  }
}
```
<br/><hr/>

### CSS Identity Object Proxy
For more sophisticated CSS tests, for example testing conditional classes `styles.active` and `styles.inactive`, the empty mock will not return anything.

There's a simple way to test if `active` or `inactive` was applied, by using an `idenitty-obj-proxy`, that replaces imported style objects with the string of the `className`, so the element will show a class of the strings `active` and `inactive`

`npm install --save-dev identity-obj-proxy`

`jest.config.js`
```javascript
module.exports = {
  ...
  moduleNameMapper: {
    ...
    '\\.module\\.css$': 'identity-obj-proxy'
  }
}
```
<br/><hr/>

### Dynamic Imports
Node doesn't support dynamic imports, but does support `require` statements. A polyfill is required to make dynamic imports work.

`npm install --savae-dev babel-plugin-dynamic-import-node`

`.babelrc.js`
```javascript
const isTest = String(process.env.NODE_ENV) === 'test'

module.exports = {
  ...
  plugins: [
    ...
    'syntax-dynamic-import',
    isTest ? 'dynamic-import-node' : null
  ].filter(Boolean)
}
```
<br/><hr/>

### Mocking DOM objects
There are sometimes 3rd party scripts to be loaded, or browser APIs that don't exist in Jest's JSDom, such as `localStorage` and `sessionStorage`. These can be mocked and set by `setupTestFrameworkScriptFile`.

`setup-test-framework.js`
```javascript
if (!window.localStorage) {
  window.localStorage = {}
  Object.assign(window.localStorage, {
    removeItem: function removeItem(key) {
      delete this[key]
    }.bind(window.localStorage),
    setItem: function setItem(key, val) {
      this[key] = String(val)
    }.bind(window.localStorage),
    getItem: function getItem(key) {
      return this[key]
    }.bind(window.localStorage),
  })
}
```

`jest.config.js`
```javascript
module.exports = {
  ...
  setupTestFrameworkScriptFile: require.resolve('./setup-test-framework')
}
```
<br/><hr/>

### Setting Code Coverage
Code coverage is easy in Jest with a simple flag to be turned on

`package.json`
```javascript
{
  ...
  "scripts": {
    ...
    "test": "jest --coverage"
  }
}
```

`.gitignore`
```
/coverage
```

This creates a folder called `coverage`, with a `lcov-report/index.html` that contains test coverage information.

To remove coverage reporting from unnecessary files, it's possible to whitelist files to be included in the coverage report with `collectCoverageFrom`

To set coverage minimums, `coverageThreshold` can be set in the Jest config. You can set coverage minimums to varying degrees of granularity from global, to folders, to files in vary percentages by code type.

`jest.config.js`
```javascript
module.exports = {
  ...
  collectCoverageFrom: ['**/src/**/*.js'],
  coverageThreshold: {
    global: {
      statements: 10,
      branches: 10,
      functions: 10,
      lines: 10,
    }
  }
}
```
<br/><hr/>

### Jest Projects
Jest allows you to set granular configs for subprojects, and run tests for each project in parallel.

For example, for a monorepo app with `/server` and `/client` folders, jest project can work like the following:

`/jest.config.js`
```javascript
module.exports = {
  ...
  projects: ['./client', './server']
}
```

The client itself can have its own Jest config, with a unique project `displayName` property.

The `/client` folder can be referred to in the config via the string `<rootDir>`, the `modulePaths` array adds locations to search when resolving modules in the test.

`/client/jest.config.js`
```javascript
module.exports = {
  ...
  displayName: 'client'
  modulePaths: ['<rootDir>/src', '<rootDir>/test']
}
```
