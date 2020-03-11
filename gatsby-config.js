module.exports = {
  siteMetadata: {
    title: `Search World Marketplace`,
    description: `Search the entire world - Facebook Marketplace`,
    author: `Nathan Johnson`,
    image: "./src/images/United-States.jpg",
    siteUrl: "https://searchworldmarketplace.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cool search website`,
        short_name: `search`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/icons/icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
