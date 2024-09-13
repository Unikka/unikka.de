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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
          rule: {
            include: /assets/
          }
      }
    },
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-preact`,
  ],
}
