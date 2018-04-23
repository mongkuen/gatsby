const siteMetadata = require('./src/siteMetadata');
// Favicons Generation: https://realfavicongenerator.net/

module.exports = {
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-eslint',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/posts/`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteMetadata.siteName,
        short_name: siteMetadata.siteName,
        start_url: '/',
        theme_color: siteMetadata.themeBrandColor,
        background_color: siteMetadata.themeBrandColor,
        display: 'standalone',
        icons: [
          {
            src: '/favicons/android-chrome-192x192.png?v=XBzW5YKM2e',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/favicons/android-chrome-512x512.png?v=XBzW5YKM2e',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: "UA-56174221-2",
        head: true,
      }
    },
  ],
};
