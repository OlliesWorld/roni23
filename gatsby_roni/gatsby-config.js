/**
 * @type {import('gatsby').GatsbyConfig}
 */
 require('dotenv').config();
module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Roni: Developer;",
    author: `Roni`,
    subdescription: "I am a front-end developer backed by grit and tenacity that strives to find the most efficient and unique solutions."
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: "production",
        token: process.env.MY_SANITY_TOKEN,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Roni Developer`,
        short_name: `Roni`,
        start_url: `/`,
        background_color: `#005E75`,
        icon: 'src/images/Planet-R.png',
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    
  ],
};
