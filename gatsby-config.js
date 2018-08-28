module.exports = {
  siteMetadata: {
    title: `Gatsby Starter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`, // modifies head tags
    `gatsby-plugin-catch-links`, // avoids refresh and allow local links (i.e. non-react pages)
    // points to typography.js    
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    // sources data about files from cpu's file system
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },



  ], // end plugins
};
