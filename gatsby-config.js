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
        accessToken:  `TekK8wUlNUNpYEVSJiqvsHb4IRtk3ll6-a-yK0ZTvSk`,
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
