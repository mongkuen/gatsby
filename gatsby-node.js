const path = require('path');
const siteMetadata = require('./src/siteMetadata');
const createPaginatedPages = require('gatsby-paginate');

exports.createPages = ({ graphql, getNode, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise(resolve => {
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
    `).then(({ data }) => {
      const markdownNodes = data.allFile.edges.reduce((acc, { node }) => {
        const nodeId = node.children[0].id;
        return [...acc, getNode(nodeId)];
      }, []);

      const markdownEdges = markdownNodes
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date),
        )
        .map(node => ({ node }));

      createPaginatedPages({
        edges: markdownEdges,
        createPage,
        pageTemplate: './src/templates/posts/index.jsx',
        pathPrefix: siteMetadata.postsPathPrefix,
        pageLength: 10,
      });

      markdownNodes.forEach(node => {
        createPage({
          path: node.frontmatter.slug,
          component: path.resolve('./src/templates/post/index.jsx'),
          context: {
            slug: node.frontmatter.slug,
          },
        });
      });

      createPage({
        path: '/',
        component: path.resolve('./src/templates/home/index.jsx'),
        context: {
          latestPost: markdownEdges[0],
        },
      });

      resolve();
    });
  });
};
