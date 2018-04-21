---
title: "Building a website (this one) in 2018"
date: "2018-04-21"
slug: "building-a-static-website"
lead: "Making static websites cool and buzzword compliant again (featuring:
React, GatsbyJS, GraphQL, Webpack, and Styled Components)"
backgroundColor: "#653399"
image: "/posts/gatsby.svg"
---

#From Jekyll to Gatsby

Using Jekyll and Github Pages served me well starting out, but it just wasn't
quite flexible enough to customize however I wanted.

##Requirements
I had several requirements in mind when choosing to make this new portfolio/blog:

####1. React:
I wanted to branch out from VueJS development, and use something interesting like
React and Styled-Components.

####2. Performance/SEO:
While major search engines crawl JS just fine, I wanted something that was either
server-rendered, or statically pre-rendered. I'm not a fan of loading screens,
placeholders, and jumping content.

####3. Customizability and support:
Had to be flexible enough to customize however I wanted, but also a large enough
community where help is abundant and project momentum is growing.
---

Ultimately I settled on Gatsby. I built sample projects with NextJS, Phenomic,
and Gatsby, and felt like Gatsby had the best mixture of project momentum,
flexibility, and functionality.

Gatsby is interesting because it takes React code, and builds it
into a static website. On fresh navigation, static markup immediately renders, without
requiring client JS to download and populate the view. Gatsby will then load
JS in the background, and prefetch other pages. On subsequent navigation, JS
takes over and provides fast and seamless client-side navigation.

##Gatsby Lifecycle
###1. GraphQL
The premise of Gatsby is to collect the dynamic data you want from whatever
sources you want (API, local markdown files, headless CMS, Github repo), and
makes them all accessible via a GraphQL API at build time.

In my case, I simply wanted Markdown files in a project folder to transform
into pages.

Gatsby comes bare-bones, and uses plugins to provide functionality.
In this instance, I've installed the `gatsby-source-filesystem` plugin to read
from a project directory, and name the collection `posts`.

This allows me to query for the files at build time via:

```javascript
graphql(`
  {
    allFile(filter: { sourceInstanceName: { eq: "posts" } }) {
      edges {
        node {
          children {
            id
          }
        }
      }
    }
  }
`)
```
<br />

###2. Build
The
This query becomes accessible during the build step, when we tell Gatsby to take
our file and create a page from it. This is by using `createPage()` in the
`gatsby-node.js` file.

`createPage()` is slightly deceptive, as it doesn't actually populate the page
with any content. It simply exposes the route to be accessible, and lets you
provide some data the React template that will actually populate the page.

```javascript
createPage({
  path: post.frontmatter.slug,
  component: path.resolve('./src/templates/post/index.jsx'),
  context: {
    slug: post.frontmatter.slug,
  },
});
```

In this case, we're taking the Markdown post's frontmatter slug, and making that
slug's route accessible as a route. Then using `context`, we hand off that slug
string to the `./src/templates/post/index.jsx` component to actually populate.

Now in the `post/index.jsx` template, Gatsby will run ANOTHER GraphQL query to
actually populate the page with content.

Since we provided the `slug` to this template, we can access the context variable
as `$slug` in the GraphQL query.

```javascript
export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        lead
        backgroundColor
        image
      }
    }
  }
`;
```
The `gatsby-source-filesystem` plugin does not actually parse the markdown. It
simply provides the files to be accessible by GraphQL and other plugins. So we
use another plugin `gatsby-transformer-remark` to parse files that match the
Markdown extension. The plugin allows you to access the parsed files in GraphQL
via `markdownRemark`, and we query all parsed files for the one that matches the
slug.

###3. Rendering
The GraphQL query results will then be injected as a prop into the React component
via `data`, and then the parsed markdown content is subsequently accessible!

```javascript
const Post = ({ data }) => {
  const post = data.markdownRemark;
  return (
    ...
    <div dangerouslySetInnerHTML={{ __html: post.html }} />
    ...
  );
};
```
<br />

###4. Static Pages and Styling
For pages that are not dynamically created, you can simply stick them in the
`src/pages` directory, and Gatsby will automatically turn them into pages
accessible as a route via the filename.

To my delight, Gatsby is pretty agnostic about whatever React library you want
to style your components with. I chose to use `styled-components`, and it's
been a great experience.

I wasn't keen on using another bloated framework, so initially I wanted to use
Tachyons with the project. But honestly, with `styled-components`, it was easier
to use vanilla CSS. Prefixing, nested CSS, variables, mixins, and conditional
properties are all straightforward to use.

I have to apologize to my long-time crush, SCSS. Sorry, it's been great knowing
ya.

My favorite feature so far with `styled-components` is suprisingly their media
breakpoints.


```javascript
const sizes = {
  extra: 1824,
  large: 1224,
  desktop: 992,
  tablet: 768,
  phoneLandscape: 576,
  phone: 376,
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
```

You can declare an object with your break-point pixel sizes, and reduce into an
object with the values as the `css` helper that interpolates your CSS into the
break point.

You can use in any `styled-component` by doing
```javascript
${media.tablet`
  padding: 3rem;
`};
```
Super neat!


###5. Configuring Webpack
Gatsby uses Webpack behind the scenes, but it gives you options to customize it
as needed.

Two pain-points that had to be addressed:
1. Lack of linting: Prettier is great, but doesn't catch code issues
2. Lack of absolute import aliases: Having to import from `../../../shared'` makes me sad. Also makes refactoring a nightmare.

Thankfully, Gatsby exposes `modifyWebpackConfig` during the build step, so
you can install your loaders, and edit `gatsby-node.js` a little, and PRESTO!

```javascript
exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'develop') {
    config.loader('js|jsx', {
      test: /\.js$|\.jsx$/,
      exclude: /(node_modules|cache)/,
      loader: 'eslint-loader',
    });
  }
  config.merge({
    resolve: {
      alias: {
        src: path.join(__dirname, 'src'),
      },
    },
  });
  return config;
};
```

I add the `eslint-loader` to lint my `.js` and `.jsx` files, and then resolve
`src` as the root `src` folder. Done!

## Closing Thoughts
All of this complexity to build a "static" website might feel initially like
overengineering a rather simple solution: What's wrong with HTML/CSS? However,
I feel like Gatsby solves a very unique set of problems.

Yes, it is a "static" website, as in no servers are necessary to render markup.
It's providing the best of both a static website, as well as a client-side app.
You're no longer limited by long client-side renders, because it's pre-rendered
during build. Subsequent page navigations give you the best experience like a
full client-side JS app.

Server-rendering requires a Node server to make requests, process the JS,
translate into markup, and then both client and server have to agree on the final
state of the DOM. While there are solutions like NextJS that minimize the pain
of server-side-rendering, I feel like Gatsby is an elegant solution that
maximizes performance, and minimizes costs.

The result is a site that can be distributed via a CDN, to have minimal load
times without having to worry about maintaining a server at all!

You're also still allowed to make AJAX requests from within React itself like
any other client-side app, so it feels to me like there are very little downsides.

Gatsby may not work for an app like AirBnB: where new listings, means new pages,
means a new build is required. However, I feel like the trade-off is worth it,
and covers the usecases for a good majority of sites that do not require that -
including this site itself!
