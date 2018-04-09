module.exports = {
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/posts/`,
      },
    },
  ],
};
