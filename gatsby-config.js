module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
          rule: {
            include: /assets/
          }
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
        omitGoogleFont: true
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Unikka',
        short_name: 'unikka',
        start_url: '/',
        background_color: '#89C53F',
        theme_color: '#89C53F',
        display: 'minimal-ui',
        icon: 'src/images/unikka-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
