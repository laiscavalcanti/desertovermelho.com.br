
require("dotenv").config()
const queries = require("./src/utils/algolia_queries")

module.exports = {
  flags: {
    DEV_SSR: false
  },
  siteMetadata: {
    title: "Deserto Vermelho",
    description: "Um blog sobre literatura, historiografia, política e cinema.",
    author: "Deserto Vermelho",
    siteUrl: "https://desertovermelho.netlify.app/"
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-scroll-indicator",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
      __key: `posts`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
      },
      __key: `uploads`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
      __key: `images`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
      __key: `pages`,
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Oswald", "Montserrat", "Major Mono Display", "Share Tech Mono", "Lato"],
        },
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              linkImagesToOriginal: true,
            },
          },
          "gatsby-remark-lazy-load",
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-algolia-search",
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000,
        enablePartialUpdates: true,
      },
    },
    {
      resolve: "gatsby-plugin-scroll-indicator",
      options: {
        // Configure color of the scroll indicator
        color: "linear-gradient(to right, #be1622, #98121b)",
        // Height of the scroll indicator
        height: "3px",
        // Configure paths where the scroll indicator will appear
        paths: [ '/*'],
        // Configure the z-index of the indicator element
        zIndex: "9999",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Deserto Vermelho",
        short_name: "Deserto Vermelho",
        start_url: "/",
        background_color: "#be1622",
        theme_color: "#be1622",
        display: "minimal-ui",
        icon: "src/images/iconedeserto.png", // This path is relative to the root of the site.
      },
    },
  ],
};
