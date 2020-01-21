module.exports = {
  siteMetadata: {
    title: 'Unikka - IHR PARTNER FÜR DIGITALE LÖSUNGEN',
    menuLinks:[
      {
        name:'Home',
        link:'/'
      },
      {
        name:'Kontakt',
        link:'/contact'
      },
      {
        name:'Impressum',
        link:'/impressum'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Droid Sans', 'Droid Serif', 'Open Sans', 'Roboto', 'Ubuntu']
        }
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
          rule: {
            include: /assets/
          }
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
    `gatsby-plugin-preact`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
