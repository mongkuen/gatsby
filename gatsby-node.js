const path = require('path')
const createPaginatedPages = require('gatsby-paginate')

exports.createPages = ({ graphql, getNode, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
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
    .then(({ data }) => {
      const markdownNodes = data.allFile.edges.reduce((acc, { node }) => {
        const nodeId = node.children[0].id
        return [...acc, getNode(nodeId)]
      }, [])

      const markdownEdges = markdownNodes.sort((a, b) => {
        return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
      }).map((node) => ({ node }))

      createPaginatedPages({
        edges: markdownEdges,
        createPage: createPage,
        pageTemplate: './src/templates/posts/index.js',
        pageLength: 1
      })

      markdownNodes.forEach((node) => {
        createPage({
          path: node.frontmatter.slug,
          component: path.resolve('./src/templates/post/index.js'),
          context: {
            slug: node.frontmatter.slug
          }
        })
      })
      resolve()
    })
  })
};

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'develop') {
    config.loader('js|jsx', {
      test: /\.js$|\.jsx$/,
      exclude: /(node_modules|cache)/,
      loader: 'eslint-loader',
    });
  }
  return config;
};