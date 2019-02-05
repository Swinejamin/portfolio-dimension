module.exports = {
  siteMetadata: {
    title: 'Benjamin Swineford | Front End Developer',
    author: 'Benjamin Swineford',
    description:
      'Benjamin Swineford is a front end developer in central Illinois. He loves to work with the latest specs in HTML5, CSS3, and ES2018+',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-transition-link',
      options: {
        layout: require.resolve(`./src/components/layout.js`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'swineford-portfolio',
        short_name: 'portfolio',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
