require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,

      options: {
        spaceId: `zvoljr72g0f1`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.ACCES_TOKEN  ,
      },

    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
  ],
};
