require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: "Velkid SSG",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_CMS_TOKEN,
        previewMode: false,
        apiUrl: `https://site-api.datocms.com`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout/Layout.js`),
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins\:300,300i,700,700i`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
  ],
}
