/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require(`path`)

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-transition-link`,
      options: {
        layout: require.resolve(`./src/components/Layout.js`),
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`karla\:400,700`, `lato\:400,900`],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: path.resolve(__dirname, "src/images"),
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `udf7rlrykxo5`,
        accessToken: `dzQXPzkK4icFWuKLKgx8YBwYLkosB0xfJUHZJO4jQp8`,
      },
    },
    `gatsby-transformer-inline-svg`,
    `gatsby-plugin-sharp`,
  ],
}
