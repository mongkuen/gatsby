const path = require('path')

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
        return [...acc, node.children[0].id]
      }, [])
      markdownNodes.forEach((id) => {
        const node = getNode(id)
        createPage({
          path: node.frontmatter.slug,
          component: path.resolve('./src/templates/posts/index.js'),
          context: {
            slug: node.frontmatter.slug
          }
        })
      })
    })
  })
};
